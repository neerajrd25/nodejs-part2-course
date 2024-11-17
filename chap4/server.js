import  { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 3000 });
let messages = [];
wss.on('connection', (ws)=>{
  console.log(' new socket connected');
  ws.send('welcome to live chat');

  if (messages.length) {
    ws.send('chat currently in session');
    messages.forEach(m=> ws.send(m));
  }

  ws.on('message', (data)=> {
    let message = data.toString()
    console.log(message);
    messages.push(message);
    if(message === 'exit'){
      ws.close();
    }else {
      wss.clients.forEach((client)=> client.send(message));
    }

  })
  ws.on('close', ()=>{
    console.log(' ws socket closed');

  });
})

console.log('chat server is on ws://localhost:30000');
