const express = require('express');
const users = require('./users.json');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Write your endpoints here.

app.listen(3000, () => {
  console.log('Connected on 3000');
})


module.exports = app;
