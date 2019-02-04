import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

import { SpinnerDialogComponent } from './spinner-dialog/spinner-dialog.component';
import { SpinnerService, ShowSpinnerNextArgument } from './spinner.service';

@Component({
  selector: 'nshmp-template-spinner',
  template: '',
  styles: [],
})
export class SpinnerComponent implements OnInit, OnDestroy {

  spinnerSubscription: Subscription;
  spinnerDialogRef: MatDialogRef<SpinnerDialogComponent>;

  constructor(
      private spinnerService: SpinnerService,
      private spinnerDialog: MatDialog) { }

  ngOnInit() {
    this.spinnerSubscription = this.spinnerService
        ._showSpinner.subscribe((nextArg) => {
          this.openDialog(nextArg);
        });

    this.spinnerService._removeSpinner.subscribe(() => {
      this.spinnerDialogRef.close();
    });
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }

  openDialog(nextArg: ShowSpinnerNextArgument) {
    const data = {
      text: nextArg.text,
      subscription: nextArg.subscription
    };

    this.spinnerDialogRef = this.spinnerDialog.open(
        SpinnerDialogComponent, { data });

  }

}
