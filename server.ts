import http = require('http');
import fs = require('fs');
import express = require('express');
let log = require('./lib/logger').log;
let socket_io = require('socket.io');

//---------------------------------------------------------------
//  App Setup
//---------------------------------------------------------------

let app = express();

// Set Port
app.set('port', (process.env.PORT || 8080));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/src/public'));

/**
 * Check for specific files in source, if DNE, pass to next
 */
app.get('/*', (req, res, next) => {
  let filepath = __dirname + '/src/' + req.path.replace('/','');
  try {
    // Try to access file
    fs.accessSync(filepath);
  } catch (e) {
    // File access failed, pass next
    next();
    return;
  }
  // Send file
  res.sendFile(filepath);
});


app.get('/*', (req, res) => {
  // TODO: Eventually, see if path is an Angular route, if not, 404
  res.sendFile(__dirname + '/src/index.html');
});

//---------------------------------------------------------------------------
// Create Server
//---------------------------------------------------------------------------



let server = app.listen(app.get('port'), () => {
  log(`Server listening on port ${app.get('port')}`);
});

//---------------------------------------------------------------------------
// Socket.io
//---------------------------------------------------------------------------

let io = socket_io(server);


io.on('connection', (socket) => {
  log('Opened socket connection.');

  socket.on('disconnect', function(){
    log('Closed socket connection.');
  });

  socket.on('add-message', (message) => {
    log(message);
    io.emit('respond', 'Received message: ' + message);
  });

});

setInterval(() => io.emit('respond', 'Periodic server message'), 2000);
