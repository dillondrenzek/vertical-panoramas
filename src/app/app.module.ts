import { NgModule,
  APP_INITIALIZER }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule }           from '@angular/router';

import { DevModule }              from './_dev/dev.module';
import { ConfigModule }           from './config/config.module';

import { AppComponent }           from './app.component';
import { PageComponent }          from './page/page.component';
import { PanoSliderComponent }    from './panoSlider/panoSlider.component';
import { PanoDetailComponent }    from './panoDetail/panoDetail.component';

import { PagePositionService }    from './page/pagePosition.service';
import { PanoService }            from './pano.service';
import { ImageDirectoryPipe }     from './imageDirectoryPipe/imageDirectory.pipe';


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
    DevModule
  ],
  declarations: [
    AppComponent,
    PageComponent,
    PanoSliderComponent,
    PanoDetailComponent,
    ImageDirectoryPipe
  ],
  providers: [
    PagePositionService,
    PanoService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
