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
import 'uswds';

import { NshmpTemplateComponent } from './nshmp-template.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceInfoComponent } from './footer/service-info/service-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerDialogComponent } from './spinner/spinner-dialog/spinner-dialog.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GovBannerComponent } from './gov-banner/gov-banner.component';
import { GovBannerHeaderComponent } from './gov-banner/gov-banner-header/gov-banner-header.component';
import { GovBannerContentComponent } from './gov-banner/gov-banner-content/gov-banner-content.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';

@NgModule({
  declarations: [
    NshmpTemplateComponent,
    FooterComponent,
    ServiceInfoComponent,
    SpinnerComponent,
    SpinnerDialogComponent,
    ControlPanelComponent,
    MainPageComponent,
    GovBannerComponent,
    GovBannerHeaderComponent,
    GovBannerContentComponent,
    HeaderComponent,
    NavigationComponent
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
