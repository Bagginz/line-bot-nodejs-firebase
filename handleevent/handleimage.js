const { replyText } = require('../webhook/replytext');
exports.handleImage = (message, replyToken) => {
    return replyText(replyToken, 'Got Image');
};