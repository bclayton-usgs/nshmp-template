import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import {
  NshmpTemplateModule,
  NshmpControlPanelModule,
  FormFieldModule } from 'projects/nshmp-ng-template/src/public_api';
import { ControlPanelComponent } from './example-app/control-panel/control-panel.component';
import { ExampleAppComponent } from './example-app/example-app.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleAppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ExampleAppComponent
  ],
  imports: [
    BrowserModule,
    NshmpTemplateModule,
    NshmpControlPanelModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    FormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
