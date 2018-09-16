const { replyText } = require('../webhook/replytext');
exports.handleAudio = (message, replyToken) => {
    return replyText(replyToken, 'Got Audio');
};