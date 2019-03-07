import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription, interval } from 'rxjs';

import {
  Navigation,
  SpinnerService } from 'projects/nshmp-ng-template/src/public_api';
import { ControlPanelService } from './example-app/control-panel/control-panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'nshmp-template';

  navigationList: Navigation[] = [
    {
      display: 'Example 1',
      routerLink: '/'
    }, {
      display: 'Example 2',
      routerLink: '/'
    }
  ];

  spinnerSubscription: Subscription;

  isProductionMode = true;

  constructor(
      private spinnerService: SpinnerService,
      private controlPanelService: ControlPanelService) {
    this.spinner();
  }

  ngOnInit() {
    this.controlPanelService.modeToggleObserve().subscribe(isProductionMode => {
      this.isProductionMode = isProductionMode;
    });
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }

  spinner() {
    this.spinnerSubscription = interval(10000).subscribe(() => {
      this.spinnerService.remove();
    });

    this.spinnerService.show('Loading ...', this.spinnerSubscription);
  }

}
