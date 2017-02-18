import { Component, HostBinding } from '@angular/core';
import { PagePositionService } from './pagePosition.service';
import { Pano } from '../Pano';

declare const module: any;

@Component({
  moduleId: module.id,
  selector: 'page',
  templateUrl: './page.html',
  styleUrls: ['./page.css']
})
export class PageComponent {

  constructor(private pagePosition: PagePositionService) {}

  //-------------------------------------------------------------------------
  //
  //-------------------------------------------------------------------------

  toggleAbout() {
    if (this.pagePosition.position) this.pagePosition.go(0);
    else this.pagePosition.go(1);
  }

  //-------------------------------------------------------------------------
  // Page Positioning
  //-------------------------------------------------------------------------


  // Height
  @HostBinding('style.height.px')
  get _height(): number {
    return this.primaryHeight + this.secondaryHeight*2;
  }

  // >> Primary Height
  get primaryHeight(): number { return window.innerHeight; }

  // >> Secondary Height
  get secondaryHeight(): number { return window.innerHeight * .8; }



  // Top
  @HostBinding('style.top.px')
  get _top(): number {
    switch (this.pagePosition.position) {
      case 2: return -this.secondaryHeight*2;
      case 1: return -this.secondaryHeight;
      case 0: default: return 0;
    }
  }
}
