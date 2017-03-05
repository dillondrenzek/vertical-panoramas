import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DevModule } from './_dev/dev.module';

import { AppComponent }  from './app.component';
import { PageComponent }  from './page/page.component';
import { PanoSliderComponent }  from './panoSlider/panoSlider.component';
import { PanoDetailComponent }  from './panoDetail/panoDetail.component';

import { PagePositionService } from './page/pagePosition.service';
import { PanoService } from './pano.service';
import { ImageDirectoryPipe } from './imageDirectoryPipe/imageDirectory.pipe';

import { envConfigProvider, ENV_CONFIG } from '../env';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PageComponent
      }
    ]),
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
    envConfigProvider
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
