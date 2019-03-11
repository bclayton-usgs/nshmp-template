import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { FooterBottomNavbarComponent } from '../footer/footer-bottom-navbar/footer-bottom-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FooterTopNavbarComponent } from '../footer/footer-top-navbar/footer-top-navbar.component';
import { GovBannerComponent } from '../gov-banner/gov-banner.component';
import { GovBannerContentComponent } from '../gov-banner/gov-banner-content/gov-banner-content.component';
import { GovBannerHeaderComponent } from '../gov-banner/gov-banner-header/gov-banner-header.component';
import { GtmFooterComponent } from '../footer/gtm-footer/gtm-footer.component';
import { GtmHeaderComponent } from '../header/gtm-header/gtm-header.component';
import { HeaderComponent } from '../header/header.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { NavigationComponent } from '../header/navigation/navigation.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeaderControlsComponent } from '../header/header-controls/header-controls.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SpinnerModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    FooterBottomNavbarComponent,
    FooterComponent,
    FooterTopNavbarComponent,
    GovBannerComponent,
    GovBannerContentComponent,
    GovBannerHeaderComponent,
    GtmFooterComponent,
    GtmHeaderComponent,
    HeaderComponent,
    NavigationComponent,
    MainPageComponent,
    SearchBarComponent,
    HeaderControlsComponent
  ],
  exports: [
    FooterBottomNavbarComponent,
    FooterComponent,
    FooterTopNavbarComponent,
    GovBannerComponent,
    GovBannerContentComponent,
    GovBannerHeaderComponent,
    GtmFooterComponent,
    GtmHeaderComponent,
    HeaderComponent,
    NavigationComponent,
    MainPageComponent,
    SearchBarComponent,
    SpinnerModule,
    HeaderControlsComponent,
    MaterialModule,
    RouterModule,
  ]
})
export class NshmpLayoutModule { }
