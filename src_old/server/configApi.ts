import express = require('express');

//---------------------------------------------------------------
//  Config
//---------------------------------------------------------------

let configApi = express();

configApi.get('/', (req, res, next) => {
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

export = configApi;
