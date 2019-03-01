import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

import { SpinnerDialogComponent } from './spinner-dialog/spinner-dialog.component';

/**
 * Show and remove a spinner.
 */
@Injectable({ providedIn: 'root' })
export class SpinnerService {

  private spinnerDialogRef: MatDialogRef<SpinnerDialogComponent>;

  constructor(
      private spinnerDialog: MatDialog,
      private overlay: Overlay) { }

  /**
   * Show an indeterminate progress spinner.
   *
   * @param text The text to show under the spinner
   * @param subscription The Subscription
   */
  show(text: string, subscription: Subscription): void {
    const data = {
      text,
      subscription,
    };

    this.spinnerDialogRef = this.spinnerDialog.open(
        SpinnerDialogComponent, {
          data,
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          hasBackdrop: true,
          disableClose: true,
        });
  }

  /**
   * Remove the spinner.
   */
  remove(): void {
    this.spinnerDialogRef.close();
  }

}

export interface ShowSpinnerNextArgument {
  subscription: Subscription;
  text: string;
}
