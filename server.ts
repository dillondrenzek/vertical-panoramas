import express = require('express');
import http = require('http');
import fs = require('fs');

//---------------------------------------------------------------
//  App Setup
//---------------------------------------------------------------

let app = express();


app.set('port', (process.env.PORT || 8080));


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
// app.use(express.static(__dirname + '/node_modules'));
// app.use(express.static(__dirname + '/public'));
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
  console.info('before try');
  try {
    // Try to access file
    fs.accessSync(filepath);
  } catch (e) {
    console.error('e:', e);
    // File access failed, pass next
    next();
  }
  console.info('after try');
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

app.listen(app.get('port'), () => {
  console.info(`Server listening on port ${app.get('port')}`);
});
