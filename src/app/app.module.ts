import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NshmpTemplateModule } from 'projects/nshmp-ng-template/src/public_api';
import { ControlPanelComponent } from './example-app/control-panel/control-panel.component';
import { ExampleAppComponent } from './example-app/example-app.component';
import { Routes, RouterModule } from '@angular/router';

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
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
