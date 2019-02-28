import { Injectable } from '@angular/core';
import { ReplaySubject, Subscription, Observable } from 'rxjs';

/**
 * Show and remove a spinner.
 */
@Injectable({ providedIn: 'root' })
export class SpinnerService {

  private showSpinner = new ReplaySubject<ShowSpinnerNextArgument>(1);
  private removeSpinner = new ReplaySubject<void>(1);

  constructor() { }

  /**
   * Show an indeterminate progress spinner.
   *
   * @param text The text to show under the spinner
   * @param subscription The Subscription
   */
  show(text: string, subscription: Subscription): void {
    setTimeout(() => {
      this.showSpinner.next({text, subscription});
    }, 0);
  }

  /**
   * Remove the spinner.
   */
  remove(): void {
    this.removeSpinner.next();
  }

  /**
   * Returns the on show observable.
   */
  _onShow(): Observable<ShowSpinnerNextArgument> {
    return this.showSpinner.asObservable();
  }

  /**
   * Returns the on remove observable
   */
  _onRemove(): Observable<void> {
    return this.removeSpinner.asObservable();
  }

}

export interface ShowSpinnerNextArgument {
  subscription: Subscription;
  text: string;
}
