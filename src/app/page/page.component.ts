import { Component, HostBinding } from '@angular/core';
import { PagePositionService } from './pagePosition.service';

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
  // Active Panos
  //-------------------------------------------------------------------------

  activePano: number = null;

  panos: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  displayPano(i: number) {

    this.activePano = (i !== this.activePano) ? i : null;

    let to: number = (this.activePano === null) ? 1 : 2;
    this.pagePosition.go(to);
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
