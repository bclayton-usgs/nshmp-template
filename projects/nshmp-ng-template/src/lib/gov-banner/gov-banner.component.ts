import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nshmp-template-gov-banner',
  templateUrl: './gov-banner.component.html',
  styleUrls: ['./gov-banner.component.scss']
})
export class GovBannerComponent implements OnInit {

  /**
   * Whether to render the US Government banner from USWDS.
   * Default: true
   */
  @Input() renderGovBanner: boolean;

  constructor() { }

  ngOnInit() {
  }

}
