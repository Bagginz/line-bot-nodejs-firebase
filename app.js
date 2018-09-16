const express = require('express');
const app = express();
const config = require('./config.json');
//eslint-disable-next-line
const firebase = require('./firebase/jobs');

app.use('/webhook',require('./webhook'));


const port = config.port;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

