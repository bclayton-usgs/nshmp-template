import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelComponent } from './control-panel.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    ControlPanelComponent
  ]
})
export class NshmpTemplateControlPanelModule { }
