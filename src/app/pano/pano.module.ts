import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { SharedModule }           from '../shared/shared.module';
import { PanoService }            from './pano.service';
import { PanoSliderComponent }    from './panoSlider/panoSlider.component';
import { PanoDetailComponent }    from './panoDetail/panoDetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    PanoSliderComponent,
    PanoDetailComponent
  ],
  declarations: [
    PanoSliderComponent,
    PanoDetailComponent
  ],
  providers: [
    PanoService
  ]
})
export class PanoModule { }
