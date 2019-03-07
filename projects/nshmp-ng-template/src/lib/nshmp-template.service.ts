import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

/**
 * Get screen size changes for max-width: 63.99em, USWDS desktop breakpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class NshmpTemplateService {

  private productionModeEmitter = new BehaviorSubject<boolean>(null);

  constructor(private breakpointObserver: BreakpointObserver) {}

  /**
   * Returns the production mode observable.
   * Whether the template is is production mode.
   */
  productionModeObserve(): Observable<boolean> {
    return this.productionModeEmitter.asObservable();
  }

  /**
   * Whether the template is in production mode.
   *
   * @param isProductionMode Whether template is in production mode
   */
  productionModeNext(isProductionMode: boolean): void {
    this.productionModeEmitter.next(isProductionMode);
  }

  /**
   * Returns the screen change observable.
   * Observable returns true of max-width <= 63.99 else false.
   */
  sceenChangeObserve(): Observable<BreakpointState> {
    return this.breakpointObserver.observe('(max-width: 63.99em)');
  }

}
