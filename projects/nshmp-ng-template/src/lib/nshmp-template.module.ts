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
  MatProgressSpinnerModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSidenavModule,
  MatExpansionModule
} from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NshmpTemplateComponent } from './nshmp-template.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceInfoComponent } from './footer/service-info/service-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerDialogComponent } from './spinner/spinner-dialog/spinner-dialog.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    NshmpTemplateComponent,
    NavigationComponent,
    FooterComponent,
    ServiceInfoComponent,
    SpinnerComponent,
    SpinnerDialogComponent,
    ControlPanelComponent,
    MainPageComponent
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
    MatProgressSpinnerModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatExpansionModule,
    RouterModule.forRoot([])
  ],
  exports: [NshmpTemplateComponent],
  entryComponents: [ ServiceInfoComponent, SpinnerDialogComponent ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        disableClose: true,
        hasBackdrop: true
      }
    }
  ]
})
export class NshmpTemplateModule { }
