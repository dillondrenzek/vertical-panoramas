import express = require('express');
import http = require('http');
import fs = require('fs');

let app = express();

// Resources

app.get('/*', (req, res, next) => {
  console.info(req.method.toUpperCase(), req.path );
  next();
});



// Node Modules
app.get('/node_modules/*', (req, res) => {
  console.info('sent: ', __dirname + req.path)
  res.sendFile(__dirname + req.path, null, (err) => {
    console.error(err);
  });
});

app.get('/public/:path', (req, res) => {
  res.sendFile(__dirname + '/src/public/' + req.params.path );
});

app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/src/styles.css');
});

app.get('/systemjs.config.js', (req, res) => {
  console.info('/systemjs.config.js');
  res.sendFile(__dirname + '/src/systemjs.config.js');
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
    console.warn('File did not exist.');
    next();
  }
  // Send file
  res.sendFile(filepath);
});


app.get('/*', (req, res) => {
  // TODO: Eventually, see if path is an Angular route, if not, 404
  res.sendFile(__dirname + '/src/index.html');
});

app.get('*', (req, res) => {
  res.send('hello');
});

app.listen(8080, () => {
  console.info('Server listening on port 8080');
});


// let server = http.createServer();
// server.listen(8080, () => {
//   console.warn('Server listening on port 8080');
// });
