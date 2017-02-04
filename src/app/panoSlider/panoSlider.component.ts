import { Component, Input, Output, EventEmitter } from '@angular/core';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'pano-slider',
  templateUrl: './panoSlider.html',
  styleUrls: ['./panoSlider.css'],
})
export class PanoSliderComponent {

  @Input() activePano: number;

  @Input() panos: number[] = [];

  @Output() select = new EventEmitter<number>();

}
