import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { PanoService } from '../pano.service';
import { Pano } from '../Pano';


@Component({
  moduleId: module.id,
  selector: 'pano-slider',
  templateUrl: './panoSlider.html',
  styleUrls: ['./panoSlider.css'],
})
export class PanoSliderComponent {

  constructor(
    private _el: ElementRef,
    private panoService: PanoService
  ) {

    this.panoService.activeIndex.subscribe((p: number) => this.activeIndexChanged(p));

  }

  get panos(): Pano[] {
    return this.panoService.panos;
  }

  private _activeIndex: number = null;
  get activeIndex(): number {
    return this._activeIndex;
  }

  activeIndexChanged(idx: number) {
    this._activeIndex = idx;
  }

  clickedPanoAtIndex(idx: number) {
    let index = (this.activeIndex === null) ? idx : null;
    this.panoService.setActiveIndex(index);
  }
}
