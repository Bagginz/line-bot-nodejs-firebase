const express = require('express');
const router = express.Router();
const { handleEvent } = require('./handleevent');
const line = require('@line/bot-sdk');
const config = require('../config.json');

router.post('/', line.middleware(config), (req, res) => {
    if (!Array.isArray(req.body.events)) {
        return res.status(500).end();
    }
    Promise.all(req.body.events.map(event => {
        if (event.replyToken === '00000000000000000000000000000000' ||
            event.replyToken === 'ffffffffffffffffffffffffffffffff') {
            return;
        }
        return handleEvent(event);
    }))
        .then(() => res.end())
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});

module.exports = router;