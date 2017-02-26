import express = require('express');
import http = require('http');
import fs = require('fs');

let app = express();

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

// // Stylesheets
// app.get('/styles.css', (req, res) => {
//   res.sendFile(__dirname + '/src/styles.css');
// });
//
// // Systemjs
// app.get('/systemjs.config.js', (req, res) => {
//   console.info('/systemjs.config.js');
//   res.sendFile(__dirname + '/src/systemjs.config.js');
// });

/**
 * Check for specific files in source, if DNE, pass to next
 */
app.get('/*', (req, res, next) => {
  let filepath = __dirname + '/src/' + req.path.replace('/','');
  try {
    // Try to access file
    fs.accessSync(filepath);
  } catch (e) {
    console.error('e:', e);
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

app.listen(3000, () => {
  console.info('Server listening on port 3000');
});
