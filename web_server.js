const { createServer } = require('http');

createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': "text/html" });
  console.log(req);
  res.end(`
    <!DODCTYPE html>
    <html>
    <head></head>
    <body> 
    
    <h2>Serving html</h2>
    <p> ${req.method} for url ${req.url} </p>
    
    </body>
    </html>
    
    `)
}).listen(3000);

console.log('Web server is listeing on port 3000');