const config = require('../config.json');
const line = require('@line/bot-sdk');
const client = new line.Client(config);

exports.replyText = (token, texts, quickreply) => {
    texts = Array.isArray(texts) ? texts : [texts];
    return client.replyMessage(
        token,
        texts.map((text) => (setFromat(text, quickreply)))
    );
};

const setFromat = (text, quickreply) => {
    let reply = {
        type: 'text', text
    };
    if (quickreply !== undefined && quickreply != '' && quickreply != null) {
        reply.quickReply = quickreply;
    }
    return reply;
};
