const http = require('http');

const serverHost = '127.0.0.1';
const serverPort = 1245;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(serverPort, serverHost, () => {});

module.exports = server;
