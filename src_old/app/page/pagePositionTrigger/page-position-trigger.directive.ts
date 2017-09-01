import { Directive, Input, HostListener } from '@angular/core';
import { PagePositionService } from '../services/pagePosition.service';

@Directive({ selector: '[page-position-trigger]' })
export class PagePositionTriggerDirective {

  constructor(private pagePositionService: PagePositionService) {}

  @Input('page-position-trigger') target: string;

  @HostListener('click')
  onClick() {

  }
}
