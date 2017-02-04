import { Injectable } from '@angular/core';

@Injectable()
export class PagePositionService {

  private _position: number = 0;

  constructor() {  }

  get position(): number { return this._position; }

  go(pos: number) {
    switch (pos) {
      case 2: this._position = pos; break;
      case 1: default: this._position = pos; break;
      case 0: this._position = pos; break;
    }
  }
}
