import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { Pano } from '../../lib/pano/Pano';

@Injectable()
export class PanoService {



  constructor(private http: Http) {
    this.getPanos().subscribe();
  }

  //---------------------------------------
  // Panos
  //---------------------------------------

  getPanos(): Observable<Pano[]> {
    return this.http.get('/panos')
      .map((res: Response) => <Pano[]>res.json())
      .map((panos: Pano[]) => this._panos = panos);
  }

  private _panos: Pano[] = [];

  get panos(): Pano[] {
    return this._panos;
  }



  //---------------------------------------
  // Active Pano
  //---------------------------------------

  // Private References
  private _activePano$ = new Subject();
  private _activePano: Pano = null;

  // Active Pano Observable
  activePano: Observable<Pano> = this._activePano$.asObservable();

  // Get Active Pano
  getActivePano(): Pano {
    return this._activePano;
  }

  // Set Active Pano
  setActivePano(p: Pano) {
    this._activePano = p;
    this._activePano$.next(p);
    let newIndex = this.panos.findIndex((pano: Pano) => {
      return pano.label === p.label;
    });
    this._activeIndex = newIndex;
    this._activeIndex$.next(newIndex);
  }




  //---------------------------------------
  // Active Index
  //---------------------------------------

  // Private References
  private _activeIndex$ = new Subject();
  private _activeIndex: number = null;

  // Active Index Observable
  activeIndex: Observable<number> = this._activeIndex$.asObservable();

  // Get Active Index
  getActiveIndex(): number {
    return this._activeIndex;
  }

  // Set Active Index
  setActiveIndex(p: number) {
    this._activeIndex = p;
    this._activeIndex$.next(p);
    this._activePano = this.panos[p];
    this._activePano$.next(this.panos[p]);
  }







}
