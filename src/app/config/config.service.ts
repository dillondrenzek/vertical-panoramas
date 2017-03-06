import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { EnvConfig } from '../../lib/config/index';

@Injectable()
export class ConfigService {

  config: EnvConfig;

  constructor(private http: Http) {  }

  /**
   * Load server config from `/config`
   */
  load(): Promise<EnvConfig> {
    return new Promise<EnvConfig>((resolve) => {
      this.http.get('/config')
        .catch((err, caught) => {
          console.error('Fetching server config failed.');
          return Observable.throw(err);
        })
        .map((res: Response) => {
          return <EnvConfig>res.json();
        })
        .subscribe((config: EnvConfig) => {
          this.config = config;
          resolve();
        });
    });
  }
}
