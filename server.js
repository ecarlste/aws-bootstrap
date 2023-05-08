const { hostname } = require('os');
const http = require('http');

const stackName = process.env.STACK_NAME || 'Unknown Stack';

const message = `Hello Cloud from ${hostname()} in ${stackName}\n`;
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname()}:${port}/`);
});
