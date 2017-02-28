import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SocketTestComponent } from './socketTest/socketTest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'dev',
        component: SocketTestComponent
      }
    ])
  ],
  declarations: [
    SocketTestComponent
  ],
  providers: []
})
export class DevModule { }
