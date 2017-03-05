import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OpaqueToken } from '@angular/core';
import { AppModule } from './app/app.module';




platformBrowserDynamic([]).bootstrapModule(AppModule);
