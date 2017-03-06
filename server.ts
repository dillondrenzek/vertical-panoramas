import http = require('http');
import fs = require('fs');
import express = require('express');
let log = require('./lib/logger').log;
let socket_io = require('socket.io');
import { EnvConfig } from './lib/config/index';

//---------------------------------------------------------------
//  App Setup
//---------------------------------------------------------------

let app = express();

// Set Port
app.set('port', (process.env.PORT || 8080));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/src/public'));

app.get('/*', (req, res, next) => {
  console.warn(req.path);
  next();
});

app.get('/config', (req, res, next) => {
  let config = {
    appPath: 'http://localhost:8080',
    appPort: 8080
  };

  if (process !== undefined && process.env) {
    // console.warn('process.env', process.env);

    if (process.env.APP_PATH) config['appPath'] = process.env.APP_PATH;
    if (process.env.PORT) config['appPort'] = process.env.PORT;
  }

  console.warn('config', config);
  // return config;
  res.send(config);
});

/**
 * Check for specific files in source, if DNE, pass to next
 */
app.get('/*', (req, res, next) => {
  let filepath = __dirname + '/src/' + req.path.replace('/','');
  console.warn(filepath);
  try {
    // Try to access file
    fs.accessSync(filepath);
  } catch (e) {
    console.warn('>> Didn\'t find file:', filepath);
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
