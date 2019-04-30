import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { ControlPanelComponent } from './control-panel.component';

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
export class NshmpControlPanelModule { }
