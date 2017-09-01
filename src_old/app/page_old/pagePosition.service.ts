import { Injectable } from '@angular/core';
import { PanoService } from '../pano/pano.service';

export enum PagePosition {
  TOP = 0,
  CENTER = 1,
  BOTTOM = 2
}

const DEFAULT_POS = PagePosition.CENTER;

@Injectable()
export class PagePositionService {

  constructor(private panoService: PanoService) {

    this.panoService.activePano.subscribe((pano) => {
      if (pano) this.go(PagePosition.BOTTOM);
      else this.go(PagePosition.CENTER);
    });

  }

  private _position: PagePosition = DEFAULT_POS;

  get position(): PagePosition { return this._position; }

  // Go to a position
  go(pos: PagePosition) {
    this._position = pos;
  }

  // Back to original position
  return() {
    this.go(DEFAULT_POS);
  }
}
