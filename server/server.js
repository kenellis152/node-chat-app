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

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. Whats up',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'user1',
    text: 'hello'
  });

  socket.on('createMessage', (data) => {
    console.log('received created message: ', data);
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
