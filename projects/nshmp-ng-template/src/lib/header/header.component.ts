import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './navigation.model';

@Component({
  selector: 'nshmp-template-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navigationList: Navigation[];

  constructor() { }

  ngOnInit() {
  }

}
