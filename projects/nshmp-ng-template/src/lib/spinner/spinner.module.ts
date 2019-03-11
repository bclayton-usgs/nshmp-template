import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SpinnerComponent } from './spinner.component';
import { SpinnerDialogComponent } from './spinner-dialog/spinner-dialog.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    SpinnerDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SpinnerComponent
  ],
  entryComponents: [
    SpinnerDialogComponent
  ]
})
export class SpinnerModule { }
