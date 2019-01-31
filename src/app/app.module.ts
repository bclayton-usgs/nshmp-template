import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NshmpTemplateComponent } from 'projects/nshmp-ng-template/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    NshmpTemplateComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
