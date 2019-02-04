import { Injectable } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {

  _showSpinner = new ReplaySubject<ShowSpinnerNextArgument>(1);
  _removeSpinner = new ReplaySubject<void>(1);

  constructor() { }

  /**
   * Show an indeterminate progress spinner.
   *
   * @param text The text to show under the spinner
   * @param subscription The Subscription
   */
  showSpinner(text: string, subscription: Subscription): void {
    setTimeout(() => {
      this._showSpinner.next({text, subscription});
    }, 0);
  }

  /**
   * Show an indeterminate progress spinner with default text:
   * 'Loading ...'
   *
   * @param subscription The Subscription
   */
  showSpinnerLoading(subscription: Subscription) {
    this.showSpinner('Loading ...', subscription);
  }

  /**
   * Show an indeterminate progress spinner with default text:
   * 'Calculating ...'
   *
   * @param subscription The Subscription
   */
  showSpinnerCalculating(subscription: Subscription) {
    this.showSpinner('Calculating ...', subscription);
  }

  /**
   * Remove the spinner.
   */
  removeSpinner(): void {
    this._removeSpinner.next();
  }

}

export interface ShowSpinnerNextArgument {
  subscription: Subscription;
  text: string;
}
