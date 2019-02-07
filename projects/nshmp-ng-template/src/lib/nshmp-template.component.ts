import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './header/navigation/navigation.model';
import { ServiceInfo } from './footer/service-info/service-info.model';
import { NavigationService } from './header/navigation/navigation.service';

@Component({
  selector: 'nshmp-template',
  templateUrl: './nshmp-template.component.html',
  styleUrls: []
})
export class NshmpTemplateComponent implements OnInit {

  /** Whether to render the US Government banner from USWDS */
  @Input() renderGovBanner = true;

  /** Navigation list for the header dropdown menu */
  @Input()
  set navigationList(navigationList: Navigation[]) {
    this.navigationService.navigationList.next(navigationList);
  }

  /** ServiceInfo object to render when service button is clicked */
  @Input() serviceInfo: ServiceInfo;

  /** Whether to disable the compute button on the footer */
  @Input() computeBtnDisabled = false;

  /** Whether to disable the service info icon on the footer */
  @Input() rawDataBtnDisabled = false;

  /** Whether to disable the raw data button on the footer */
  @Input() serviceInfoBtnDisabled = false;

  /** Whether to render the compute button on the footer */
  @Input() renderComputeBtn = true;

  /** Whether to render the raw data button on the footer */
  @Input() renderRawDataBtn = true;

  /** Whether to render the service info button on the footer */
  @Input() renderServiceInfoBtn = true;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

}
