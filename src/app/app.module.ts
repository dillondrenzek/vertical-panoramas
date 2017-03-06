import { NgModule,
  APP_INITIALIZER }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule }           from '@angular/router';

import { DevModule }              from './_dev/dev.module';
import { ConfigModule }           from './config/config.module';
import { SocketModule }           from './socket/socket.module';
import { PanoModule }             from './pano/pano.module';

import { AppComponent }           from './app.component';
import { PageComponent }          from './page/page.component';

import { PagePositionService }    from './page/pagePosition.service';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PageComponent
      }
    ]),
    ConfigModule,
    DevModule,
    SocketModule,
    PanoModule
  ],
  declarations: [
    AppComponent,
    PageComponent
  ],
  providers: [
    PagePositionService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
