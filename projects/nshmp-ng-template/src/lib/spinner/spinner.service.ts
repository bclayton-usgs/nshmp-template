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
  private data: ShowSpinnerNextArgument;

  constructor(
      private spinnerDialog: MatDialog,
      private overlay: Overlay) { }

  /**
   * Update the spinner text.
   *
   * @param text The text to update
   */
  setText(text: string): void {
    this.data.text = text;
  }

  /**
   * Show an indeterminate progress spinner.
   *
   * @param text The text to show under the spinner
   * @param subscription The Subscription to cancel if cancel is pressed
   * @param callback A callback to call if cancel is pressed
   */
  show(text: string, subscription?: Subscription, callback?: Function): void {
    const data = {
      text,
      subscription,
      callback
    };

    this.spinnerDialogRef = this.spinnerDialog.open(
        SpinnerDialogComponent, {
          data,
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          hasBackdrop: true,
          disableClose: true,
        });

    this.data = data;
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
  callback: Function;
}
