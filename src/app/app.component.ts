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

  constructor(private spinnerService: SpinnerService) {
    this.spinner();
  }

  ngOnInit() {
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
