import { Component, OnInit, Input } from '@angular/core';

import { Navigation } from './navigation/navigation.model';
import { ServiceInfo } from './footer/service-info/service-info.model';

@Component({
  selector: 'nshmp-template',
  templateUrl: './nshmp-template.component.html',
  styleUrls: []
})
export class NshmpTemplateComponent implements OnInit {

  @Input() navigationList: Navigation[];
  @Input() serviceInfo: ServiceInfo;

  constructor() { }

  ngOnInit() {
  }

}
