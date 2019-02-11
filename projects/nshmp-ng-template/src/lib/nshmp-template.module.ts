import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NshmpLayoutModule } from './nshmp-layout.module';
import { NshmpTemplateComponent } from './nshmp-template.component';

@NgModule({
  declarations: [
    NshmpTemplateComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NshmpLayoutModule
  ],
  exports: [NshmpTemplateComponent],
})
export class NshmpTemplateModule { }
