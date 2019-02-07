import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import {
  Navigation,
  ServiceInfo,
  FooterService,
  SpinnerService} from 'projects/nshmp-ng-template/src/public_api';
import { Subscription, Observable, interval } from 'rxjs';
import { MatButton } from '@angular/material';

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

  serviceInfo: ServiceInfo = {
    threads: 1,
    service: [
      {
        name: 'nshmp-haz',
        url: 'github/nshmp-haz',
        version: '1'
      },
      {
        name: 'nshmp-haz-ws',
        url: 'github/nshmp-haz-ws',
        version: '1'
      }
    ]
  };

  computeSubscription: Subscription;
  rawDataSubscription: Subscription;

  spinnerOn = false;

  constructor(
      private footerService: FooterService,
      private spinnerService: SpinnerService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    this.spinner();

    this.computeSubscription = this.footerService.computeButton
      .subscribe((btnEl: MatButton) => {
        console.log('Compute button pressed!', btnEl);
      });

    this.rawDataSubscription = this.footerService.rawDataButton
      .subscribe((btnEl: MatButton) => {
        console.log('Raw data button pressed!', btnEl);
      });

  }

  ngOnDestroy() {
    this.computeSubscription.unsubscribe();
    this.rawDataSubscription.unsubscribe();
  }

  spinner() {
    const subscription = interval(10000).subscribe(() => {
      this.spinnerService.removeSpinner();
    });

    this.spinnerService.showSpinnerLoading(subscription);

  }

}
