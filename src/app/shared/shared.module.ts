import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ImageDirectoryPipe }     from './imageDirectoryPipe/imageDirectory.pipe';




@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImageDirectoryPipe
  ],
  declarations: [
    ImageDirectoryPipe
  ],
  providers: []
})
export class SharedModule { }
