import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NshmpTemplateModule } from 'projects/nshmp-ng-template/src/public_api';
import { ControlPanelComponent } from './example-app/control-panel/control-panel.component';
import { ExampleAppComponent } from './example-app/example-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ExampleAppComponent
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
