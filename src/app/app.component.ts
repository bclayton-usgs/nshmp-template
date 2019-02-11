import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription, interval } from 'rxjs';

import {
  Navigation,
  SpinnerService } from 'projects/nshmp-ng-template/src/public_api';

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

  fillerContent = Array.from({length: 10}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`
  );

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinner();
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }

  spinner() {
    this.spinnerSubscription = interval(10000).subscribe(() => {
      this.spinnerService.removeSpinner();
    });

    this.spinnerService.showSpinnerLoading(this.spinnerSubscription);
  }

}
