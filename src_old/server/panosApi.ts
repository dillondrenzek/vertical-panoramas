import express = require('express');
import mockPanos = require('./mockPanos');

//---------------------------------------------------------------
//  Panos
//---------------------------------------------------------------

let panosApi = express();

panosApi.get('/', (req, res, next) => {
  res.send(mockPanos);
});

export = panosApi;
