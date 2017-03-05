import { OpaqueToken } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


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
