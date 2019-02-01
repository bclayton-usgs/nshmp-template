import {
  Component,
  OnInit,
  Input } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MatIconRegistry} from '@angular/material';

import { ServiceInfoComponent } from './service-info/service-info.component';
import { ServiceInfo } from './service-info/service-info.model';
import { FooterService } from './footer.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'nshmp-template-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() serviceInfo: ServiceInfo;

  bottomSheetRef: MatBottomSheetRef<ServiceInfoComponent>;

  constructor(
      private bottomSheet: MatBottomSheet,
      private footerService: FooterService,
      private iconRegistry: MatIconRegistry,
      private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
        'github',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
  }

  onCompute() {
    this.footerService.computeButton.next();
  }

  onRawData() {
    this.footerService.rawDataButton.next();
  }

  onServiceInfo() {
    this.bottomSheetRef = this.bottomSheet.open(
        ServiceInfoComponent,
        { data: this.serviceInfo });
  }

}
