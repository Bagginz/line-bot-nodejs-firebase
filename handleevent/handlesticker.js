const { replyText } = require('../webhook/replytext');
exports.handleSticker = (message, replyToken) => {
    return replyText(replyToken, 'Got Sticker');
};