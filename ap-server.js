const { createServer } = require('http');

const data = require('./cats.json')
createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': "text/json" });
  console.log(req);
  res.end(JSON.stringify(data));
}).listen(3000);