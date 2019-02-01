import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Navigation,
  ServiceInfo,
  FooterService } from 'projects/nshmp-ng-template/src/public_api';
import { Subscription } from 'rxjs';

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
      href: '/'
    }, {
      display: 'Example 2',
      href: '/'
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

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.computeSubscription = this.footerService.computeButton
      .subscribe(() => {
        console.log('Compute button pressed!');
      });

    this.rawDataSubscription = this.footerService.rawDataButton
      .subscribe(() => {
        console.log('Raw data button pressed!');
      });
  }

  ngOnDestroy() {
    this.computeSubscription.unsubscribe();
    this.rawDataSubscription.unsubscribe();
  }

}
