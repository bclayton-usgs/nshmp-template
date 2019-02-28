import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NshmpTemplateModule } from 'projects/nshmp-ng-template/src/public_api';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    NshmpTemplateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
