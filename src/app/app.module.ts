import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PageComponent }  from './page/page.component';
import { PanoSliderComponent }  from './panoSlider/panoSlider.component';
import { PanoDetailComponent }  from './panoDetail/panoDetail.component';

import { PagePositionService } from './page/pagePosition.service';
import { PanoService } from './pano.service';
import { ImageDirectoryPipe } from './imageDirectoryPipe/imageDirectory.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    PageComponent,
    PanoSliderComponent,
    PanoDetailComponent,
    ImageDirectoryPipe
  ],
  providers: [
    PagePositionService,
    PanoService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
