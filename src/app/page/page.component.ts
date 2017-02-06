import { Component, HostBinding } from '@angular/core';
import { PagePositionService } from './pagePosition.service';

declare const module: any;

export interface Pano {
  label: string,
  image: any,
  location: string
}

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

  panos: Pano[] = [
    {
      location: 'Beartooth Pass, Montana',
      label: 'Beartooth Pass',
      image: {
        height: 1000,
        width: 179,
        src: 'beartooth-pass-179x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Gray\'s Peak',
      image: {
        height: 1000,
        width: 334,
        src: 'grays-peak-334x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Torrey\'s Peak',
      image: {
        height: 1000,
        width: 327,
        src: 'torreys-peak-327x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Badlands',
      image: {
        height: 1000,
        width: 342,
        src: 'badlands-342x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Columbia Gorge',
      image: {
        height: 1000,
        width: 410,
        src: 'columbia-gorge-410x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Fenway Park',
      image: {
        height: 1000,
        width: 360,
        src: 'fenway-park-360x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Mount Rushmore',
      image: {
        height: 1000,
        width: 329,
        src: 'mount-rushmore-329x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Kerry Park',
      image: {
        height: 1000,
        width: 423,
        src: 'kerry-park-423x1000.jpg'
      }
    },
    {
      location: '',
      label: 'Hollywood Sign',
      image: {
        height: 1000,
        width: 404,
        src: 'hollywood-sign-404x1000.jpg'
      }
    },
  ];

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
