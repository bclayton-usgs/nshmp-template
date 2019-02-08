import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './header/navigation/navigation.model';
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

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

}
