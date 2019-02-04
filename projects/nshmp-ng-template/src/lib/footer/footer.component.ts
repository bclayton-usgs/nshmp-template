import {
  Component,
  OnInit,
  Input } from '@angular/core';
import {
  MatBottomSheet,
  MatIconRegistry,
  MatButton} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { FooterService } from './footer.service';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { ServiceInfo } from './service-info/service-info.model';

@Component({
  selector: 'nshmp-template-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /** ServiceInfo object to render onServiceInfo */
  @Input() serviceInfo: ServiceInfo;

  /**
   * Whether to disable the compute button.
   * Default: false
   */
  @Input() computeBtnDisabled: boolean;

  /**
   * Whether to disable the service info icon.
   * Default: false
   */
  @Input() serviceInfoBtnDisabled: boolean;

  /**
   * Whether to disable the raw data button.
   * Default: false
   */
  @Input() rawDataBtnDisabled: boolean;

  /**
   * Whether to render the compute button.
   * Default: true
   */
  @Input() renderComputeBtn: boolean;

  /**
   * Whether to render the raw data button.
   * Default: true
   */
  @Input() renderRawDataBtn: boolean;

  /**
   * Whether to render the service info button.
   * Default: true
   */
  @Input() renderServiceInfoBtn: boolean;

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

  onCompute(btnEl: MatButton) {
    this.footerService.computeButton.next(btnEl);
  }

  onRawData(btnEl: MatButton) {
    this.footerService.rawDataButton.next(btnEl);
  }

  onServiceInfo() {
    this.bottomSheet.open(
        ServiceInfoComponent,
        { data: this.serviceInfo });
  }

}
