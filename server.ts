import http = require('http');
import fs = require('fs');
import express = require('express');
let log = require('./src/lib/logger').log;

import { EnvConfig } from './src/lib/config/index';
import {router as ConfigApi} from './src/server/configApi';
let socket = require('./src/server/socket');


//---------------------------------------------------------------
//  App Setup
//---------------------------------------------------------------

let app = express();

// Set Port
app.set('port', (process.env.PORT || 8080));

// Resources
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/src/public'));

// Config API
app.use('/config', ConfigApi);

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

let io = socket(server);
