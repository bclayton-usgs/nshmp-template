import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Navigation } from './navigation.model';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'nshmp-template-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  navigationList: Navigation[];
  navSubscription = new Subscription();

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navSubscription = this.navigationService.navigationList
        .subscribe((navigationList) => {
          this.navigationList = navigationList;
        });
  }

  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }

}
