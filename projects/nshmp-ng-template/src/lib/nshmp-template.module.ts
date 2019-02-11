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
  MatSidenavModule,
  MatExpansionModule
} from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'uswds';

import { NshmpTemplateComponent } from './nshmp-template.component';
import { FooterComponent } from './footer/footer.component';
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
import { FooterTopNavbarComponent } from './footer/footer-top-navbar/footer-top-navbar.component';
import { FooterBottomNavbarComponent } from './footer/footer-bottom-navbar/footer-bottom-navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GtmHeaderComponent } from './header/gtm-header/gtm-header.component';
import { GtmFooterComponent } from './footer/gtm-footer/gtm-footer.component';

@NgModule({
  declarations: [
    NshmpTemplateComponent,
    FooterComponent,
    SpinnerComponent,
    SpinnerDialogComponent,
    ControlPanelComponent,
    MainPageComponent,
    GovBannerComponent,
    GovBannerHeaderComponent,
    GovBannerContentComponent,
    HeaderComponent,
    NavigationComponent,
    FooterTopNavbarComponent,
    FooterBottomNavbarComponent,
    SearchBarComponent,
    GtmHeaderComponent,
    GtmFooterComponent
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
  entryComponents: [ SpinnerDialogComponent ]
})
export class NshmpTemplateModule { }
