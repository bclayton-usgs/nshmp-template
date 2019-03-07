import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './header/navigation/navigation.model';
import { NavigationService } from './header/navigation/navigation.service';
import { NshmpTemplateService } from './nshmp-template.service';

@Component({
  selector: 'nshmp-template',
  templateUrl: './nshmp-template.component.html',
  styleUrls: ['./nshmp-template.component.scss']
})
export class NshmpTemplateComponent implements OnInit {

  /** Whether to render the US Government banner from USWDS */
  @Input() renderGovBanner = true;

  /** Whether to render the search bar on the header */
  @Input() renderSearchBar = true;

  /**
   * Whether the app is in production mode.
   *
   * In development mode the following occurs:
   *    - header decreases size
   *    - renderGovBanner is set to false
   *    - renderSearchBar is set to false
   *    - the footer is removed
   */
  isProductionMode = true;

  @Input('isProductionMode')
  set productionMode(isProductionMode: boolean) {
    this.isProductionMode = isProductionMode;
    this.nshmpService.productionModeNext(isProductionMode);
  }


  /** Navigation list for the header dropdown menu */
  @Input()
  set navigationList(navigationList: Navigation[]) {
    this.navigationService.set(navigationList);
  }

  constructor(
      private navigationService: NavigationService,
      private nshmpService: NshmpTemplateService) {
  }

  ngOnInit() {
  }

}
