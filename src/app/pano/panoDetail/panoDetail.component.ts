import { Component } from '@angular/core';
import { Pano } from '../../../lib/pano/Pano';
import { PanoService } from '../pano.service';



@Component({
  selector: 'pano-detail',
  templateUrl: './panoDetail.html',
  styleUrls: ['./panoDetail.css'],
  moduleId: module.id
})
export class PanoDetailComponent {

  private _activePano: Pano = null;

  constructor(private panoService: PanoService) {

    this.panoService.activePano
      .subscribe((pano: Pano) => this.activePanoChanged(pano));

  }

  get panoImageUrl(): string { return (this._activePano) ? this._activePano.image.src : null;}

  get panoImageSize(): {h: number, w: number} {
    let height = (this._activePano) ? this._activePano.image.height : 0;
    let width = (this._activePano) ? this._activePano.image.width : 0;
    return { h: height, w: width };
  }

  activePanoChanged(activePano: Pano) {
    this._activePano = activePano;
  }

}
