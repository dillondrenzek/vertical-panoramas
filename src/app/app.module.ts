import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PageComponent }  from './page/page.component';
import { PanoSliderComponent }  from './panoSlider/panoSlider.component';
import { PanoDetailComponent }  from './panoDetail/panoDetail.component';

import { PagePositionService } from './page/pagePosition.service';
import { PanoService } from './pano.service';
import { ImageDirectoryPipe } from './imageDirectoryPipe/imageDirectory.pipe';

import { SocketTestComponent } from './socketTest/socketTest.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    PageComponent,
    PanoSliderComponent,
    PanoDetailComponent,
    ImageDirectoryPipe,
    SocketTestComponent
  ],
  providers: [
    PagePositionService,
    PanoService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
