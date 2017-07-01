import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  {

  // @HostBinding('style.width.px')
  // get width() {
  //   return window.screenX;
  // }
  //
  // @HostBinding('style.height.px')
  // get height() {
  //   return window.screenY;
  // }

  name: string = 'Vertical Panoramas';

}
