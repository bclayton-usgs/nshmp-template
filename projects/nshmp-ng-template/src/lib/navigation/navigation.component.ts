import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './navigation.model';

@Component({
  selector: 'nshmp-template-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() navigationList: Navigation[];

  constructor() { }

  ngOnInit() {
  }

}
