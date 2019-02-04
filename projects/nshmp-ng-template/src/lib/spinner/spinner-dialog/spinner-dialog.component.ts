import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ShowSpinnerNextArgument } from '../spinner.service';

@Component({
  selector: 'nshmp-template-spinner-dialog',
  templateUrl: './spinner-dialog.component.html',
  styleUrls: ['./spinner-dialog.component.scss']
})
export class SpinnerDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ShowSpinnerNextArgument,
    private spinnerDialogRef: MatDialogRef<SpinnerDialogComponent>) { }

  ngOnInit() {
  }

  onCancel() {
    this.data.subscription.unsubscribe();
    this.spinnerDialogRef.close();
  }

}
