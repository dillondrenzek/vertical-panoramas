import express = require('express');
import http = require('http');
import fs = require('fs');
let WebSocketServer = require('websocket').server;

//---------------------------------------------------------------
//  App Setup
//---------------------------------------------------------------

let app = express();

app.set('port', (process.env.PORT || 8080));

// let server = http.createServer((request, response) => {
//   console.log((new Date()) + ' Received request for ' + request.url);
//   // response.writeHead(404);
//   // response.end();
// });

//---------------------------------------------------------------
// Routes
//---------------------------------------------------------------


// Resources

// Log request, pass
app.get('/*', (req, res, next) => {
  console.info(req.method.toUpperCase(), req.path );
  next();
});



// Node Modules
app.get('/node_modules/*', (req, res) => {
  res.sendFile(__dirname + req.path);
});

// Public resources
app.get('/public/:path', (req, res) => {
  res.sendFile(__dirname + '/src/public/' + req.params.path);
});

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
  console.info(`Server listening on port ${app.get('port')}`);
});


let wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
