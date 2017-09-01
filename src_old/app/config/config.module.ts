import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './config.service';

export function configServiceFactory(svc: ConfigService) {
  return () => svc.load();
}


@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ ConfigService ],
      multi: true
    }
  ]
})
export class ConfigModule { }
