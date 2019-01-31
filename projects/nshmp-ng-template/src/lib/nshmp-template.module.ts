import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';

import { NshmpTemplateComponent } from './nshmp-template.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NshmpTemplateComponent, HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot([])
  ],
  exports: [NshmpTemplateComponent]
})
export class NshmpTemplateModule { }
