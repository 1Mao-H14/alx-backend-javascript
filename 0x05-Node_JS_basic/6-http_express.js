const express = require('express');

const server = express();
const serverPort = 1245;

server.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

server.listen(serverPort, () => {});

module.exports = server;
