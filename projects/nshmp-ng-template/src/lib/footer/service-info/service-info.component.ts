import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ServiceInfo } from './service-info.model';

@Component({
  selector: 'nshmp-template-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public serviceInfo: ServiceInfo) { }

  ngOnInit() {
  }

}
