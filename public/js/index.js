
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hey. This is Andrew',
  });

  socket.emit('createMessage', {
    from: 'user1',
    text: 'emitting createMessage upon connection to server'
  })

});

socket.on('newMessage', function (data) {
  console.log('received message from server: ', data);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New email', email);
});
