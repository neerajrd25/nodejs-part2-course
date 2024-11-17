import { createServer } from 'http'
import {Server } from 'socket.io'

const server = createServer().listen(3000);
const io= new Server(server);


io.on('connection', (socket)=> {
  console.log(`${io.engine.clientsCount} connection`);
  socket.on('chat', (message)=>{
    console.log(`${socket.id} : ${message}`);
    io.emit("message", message, socket.id)
  });
  socket.on('disconnect', ()=> {
    console.log('Discoonected ', socket.id);
    
  })

})

console.log('Socket server app ');