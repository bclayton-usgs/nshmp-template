import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSidenavModule,
  MatButtonToggleModule } from '@angular/material';

import 'hammerjs';
import 'uswds';



@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
