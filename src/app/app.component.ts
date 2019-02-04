import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Navigation,
  ServiceInfo,
  FooterService } from 'projects/nshmp-ng-template/src/public_api';
import { Subscription } from 'rxjs';
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

  constructor(private footerService: FooterService) {}

  ngOnInit() {
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

}
