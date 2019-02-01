import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatBottomSheetModule,
  MatListModule,
} from '@angular/material';
import 'hammerjs';

import { NshmpTemplateComponent } from './nshmp-template.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceInfoComponent } from './footer/service-info/service-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NshmpTemplateComponent,
    NavigationComponent,
    FooterComponent,
    ServiceInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [NshmpTemplateComponent],
  entryComponents: [ ServiceInfoComponent ]
})
export class NshmpTemplateModule { }
