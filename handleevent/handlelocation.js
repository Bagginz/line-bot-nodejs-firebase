const { replyText } = require('../webhook/replytext');
exports.handleLocation = (message, replyToken) => {
    return replyText(replyToken, 'Got Location');
};