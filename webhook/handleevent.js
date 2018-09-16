const { replyText } = require('./replytext');
const {
    handleAudio,
    handleImage,
    handleLocation,
    handleSticker,
    handleText,
    handleVideo
} = require('../handleevent');
exports.handleEvent = (event) => {
    let message,
        data, dm;
    switch (event.type) {
        case 'message':
            message = event.message;
            switch (message.type) {
                case 'text':
                    return handleText(message, event.replyToken);
                case 'image':
                    return handleImage(message, event.replyToken);
                case 'video':
                    return handleVideo(message, event.replyToken);
                case 'audio':
                    return handleAudio(message, event.replyToken);
                case 'location':
                    return handleLocation(message, event.replyToken);
                case 'sticker':
                    return handleSticker(message, event.replyToken);
                default:
                    throw new Error(`Unknown message: ${JSON.stringify(message)}`);
            }
        case 'follow':
            return replyText(event.replyToken, 'Got followed event');
        case 'unfollow':
            return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);
        case 'join':
            return replyText(event.replyToken, `Joined ${event.source.type}`);
        case 'leave':
            return console.log(`Left: ${JSON.stringify(event)}`);
        case 'postback':
            data = event.postback.data;
            return replyText(event.replyToken, `Got postback: ${data}`);
        case 'beacon':
            dm = `${Buffer.from(event.beacon.dm || '', 'hex').toString('utf8')}`;
            return replyText(event.replyToken, `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`);
        default:
            throw new Error(`Unknown event: ${JSON.stringify(event)}`);
    }
}