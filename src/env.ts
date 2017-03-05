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

  console.warn('process.env', process.env);
  let appPath = (process && process.env) ? process.env.APP_PATH : 'http://localhost:8080';
  let config: EnvConfig = {
    appPath: appPath,
    appPort: 5000
  };
  console.warn('config', config);
  return
}

/**
 * Config provider
 */
export let envConfigProvider = {
  provide: ENV_CONFIG,
  useFactory: getEnvConfig
}
