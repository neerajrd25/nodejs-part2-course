const { createServer } = require('http');
const { createreadStream, createReadStream } = require('fs')

const sendFile = (res, status, type, file) => {
  res.writeHead(status, {'Content-Type': type});
  createReadStream(file).pipe(res);
}
createServer((req, res)=> {
  
  switch(req.url) {
   case "/" :
      return sendFile(res, 200, "text/html", "./home-page.html");
   case "/PXL_20240706_054608474.jpg" :
    return sendFile(res, 200, "image/jpeg", "./PXL_20240706_054608474.jpg");
    case "/styles.css" :
      return sendFile(res, 200, "text/css", "./styles.css");
   default:
    return sendFile(res, 404, "text/html", "./404.html")
  }
  // res.writeHead(200, {'Content-Type': "text/html" });
  // console.log(req);
  // res.end()
}).listen(3000);
console.log('Web server at 3000');