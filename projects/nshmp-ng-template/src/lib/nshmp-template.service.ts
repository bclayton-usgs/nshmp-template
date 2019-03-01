import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

/**
 * Get screen size changes for max-width: 63.99em, USWDS desktop breakpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class NshmpTemplateService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  /**
   * Returns the screen change observable.
   * Observable returns true of max-width <= 63.99 else false.
   */
  sceenChangeObserve(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(['(max-width: 63.99em)', Breakpoints.HandsetPortrait]);
  }

}
