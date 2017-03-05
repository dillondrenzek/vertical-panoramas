import { OpaqueToken } from '@angular/core';

declare var process: any;

console.warn('process.env', process.env);
let appPath = (process && process.env) ? process.env.APP_PATH : 'http://localhost:8080';

export interface EnvConfig {
  appPath: string;
  appPort: number;
}

export let ENV_CONFIG = new OpaqueToken('ENV_CONFIG');



let defaultEnvConfig: EnvConfig = {
  appPath: appPath,
  appPort: 5000
}


export let envConfigProvider = {
  provide: ENV_CONFIG,
  useValue: defaultEnvConfig
}
