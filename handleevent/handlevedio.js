const { replyText } = require('../webhook/replytext');
exports.handleVideo = (message, replyToken) => {
    return replyText(replyToken, 'Got Video');
};