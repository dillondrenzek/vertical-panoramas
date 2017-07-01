import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PanoModule } from '../pano/pano.module';
import { PageComponent } from './page/page.component';
import { PagePositionComponent } from './pagePosition/page-position.component';
import { PagePositionTriggerDirective } from './pagePositionTrigger/page-position-trigger.directive';
import { PagePositionService } from './services/pagePosition.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':page_position',
        component: PageComponent
      }
    ]),
    PanoModule
  ],
  declarations: [
    PageComponent,
    PagePositionComponent,
    PagePositionTriggerDirective
  ],
  providers: [
    PagePositionService
  ]
})
export class PageModule { }
