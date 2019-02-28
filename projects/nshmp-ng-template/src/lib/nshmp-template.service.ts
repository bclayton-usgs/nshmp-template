import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NshmpTemplateService {

  private screenChange = new Subject<boolean>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 63.99em)', Breakpoints.HandsetPortrait])
        .subscribe(state => {
          this.screenChange.next(state.matches);
        });
  }

  /**
   * Returns the screen change observable.
   * Observable returns true of max-width <= 63.99 else false.
   */
  onSreenChange(): Observable<boolean> {
    return this.screenChange.asObservable();
  }

}
