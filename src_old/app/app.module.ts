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
import { PageModule }             from './page/page.module';
import { AppComponent }           from './app.component';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: '',
        component: AppComponent,
        loadChildren: 'app/page/page.module#PageModule'
      },
      // {
      //   path: ':page_position',
      //   component: PageComponent,
      // }
    ]),
    ConfigModule,
    DevModule,
    SocketModule,
    PanoModule,
    PageModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
