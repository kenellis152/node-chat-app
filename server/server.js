const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // heroku port config

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log(`New user connected`);

  // socket.emit to emit a message to new user. from admin, text: welcome to the chat app
  // socket.broadcast.emit from admin text new user joined


  socket.emit('newMessage', {from: "Admin", text: "Welcome to the chat app!"});
  socket.broadcast.emit('newMessage', {from: "Admin", text: "New user has joined"});


  socket.on('createMessage', (message) => {
    console.log('createMessage: ', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
