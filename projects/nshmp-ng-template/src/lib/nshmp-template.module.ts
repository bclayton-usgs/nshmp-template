import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NshmpLayoutModule } from './nshmp-layout.module';
import { NshmpTemplateComponent } from './nshmp-template.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [
    NshmpTemplateComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NshmpLayoutModule
  ],
  exports: [NshmpTemplateComponent, ControlPanelComponent],
})
export class NshmpTemplateModule { }
