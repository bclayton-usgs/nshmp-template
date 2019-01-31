import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './header/navigation.model';

@Component({
  selector: 'nshmp-template',
  templateUrl: './nshmp-template.component.html',
  styleUrls: []
})
export class NshmpTemplateComponent implements OnInit {

  @Input() navigationList: Navigation[];

  constructor() { }

  ngOnInit() {
  }

}
