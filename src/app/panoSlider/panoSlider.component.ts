import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'pano-slider',
  templateUrl: './panoSlider.html',
  styleUrls: ['./panoSlider.css'],
})
export class PanoSliderComponent {

  constructor(private _el: ElementRef) {}

  @Input() activePano: number;

  @Input() panos: {label: string}[] = [];

  @Output() select = new EventEmitter<number>();

  ngAfterViewInit() {

  }


}
