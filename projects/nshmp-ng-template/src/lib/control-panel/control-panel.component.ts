import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'nshmp-template-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  mediaQuery: MediaQueryList;

  constructor(private mediaMatcher: MediaMatcher) { }

  ngOnInit() {
    this.mediaQuery = this.mediaMatcher.matchMedia('(max-width: 960px)');
  }

}
