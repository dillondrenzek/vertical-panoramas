let socket_io = require('socket.io');
let log = require('../lib/logger').log;

module.exports = function(server) {

  let io = socket_io(server);

  io.on('connection', (socket) => {
    log('Received new socket connection.');

    // TODO: Remove
      setTimeout(() => { io.emit('respond', 'Test message'); }, 5000);

    socket.on('disconnect', function(){
      log('Socket disconnected.');
    });

    socket.on('add-message', (message) => {
      log(message);
      io.emit('respond', 'Received message: ' + message);
    });

  });

  return io;
}
