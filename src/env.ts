import { OpaqueToken } from '@angular/core';

declare var process: any;

/**
 * EnvConfig
 */
export interface EnvConfig {
  appPath: string;
  appPort: number;
}

/**
 * Injection token
 */
export let ENV_CONFIG = new OpaqueToken('ENV_CONFIG');


/**
 * Config Builder
 */
function getEnvConfig(): EnvConfig {
  let config: EnvConfig = {
    appPath: 'http://localhost:8080',
    appPort: 8080
  };

  if (process !== undefined && process.env) {
    console.warn('process.env', process.env);

    if (process.env.APP_PATH) config['appPath'] = process.env.APP_PATH;
    if (process.env.PORT) config['appPort'] = process.env.PORT;
  }

  console.warn('config', config);
  return config;
}

/**
 * Config provider
 */
export let envConfigProvider = {
  provide: ENV_CONFIG,
  useFactory: getEnvConfig
}
