import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { transition, trigger, animate, style, state } from '@angular/animations';

import { HeaderControlsService } from '../header/header-controls/header-controls.service';
import { NshmpTemplateService } from '../nshmp-template.service';
import { ControlPanelService } from './control-panel.service';

@Component({
  selector: 'nshmp-template-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: [
    trigger('openClose', [
      state('show-content', style({
        opacity: 1
      })),
      state('hide-content', style({
        visibility: 'hidden',
        position: 'absolute',
        opacity: 0
      })),
      transition('show-content <=> hide-content', [
        animate('0.35s'),
      ])
    ])
  ]
})
export class ControlPanelComponent implements OnInit, OnDestroy {

  showControlPanel = true;
  showContent: boolean;

  contentSubscription: Subscription;
  controlPanelSubscription: Subscription;
  screenChangeSubscription: Subscription;

  constructor(
      private headerControlService: HeaderControlsService,
      private nshmpService: NshmpTemplateService,
      private controlPanelService: ControlPanelService) { }

  ngOnInit() {
    this.controlPanelService.controlPanelInit();
    this.controlPanelSubscribe();

    this.screenChangeSubscription = this.nshmpService.sceenChangeObserve()
        .subscribe(breakpointState => {
          this.showContent = !breakpointState.matches;
        });
  }

  ngOnDestroy() {
    this.contentSubscription.unsubscribe();
    this.controlPanelSubscription.unsubscribe();
    this.screenChangeSubscription.unsubscribe();
  }

  controlPanelSubscribe() {
    this.contentSubscription = this.headerControlService.contentObserve()
        .subscribe(headerControls => {
          this.showContent = headerControls.showContent;
          this.showControlPanel = headerControls.showControlPanel;
        });

    this.controlPanelSubscription = this.headerControlService.controlPanelObserve()
        .subscribe(headerControls => {
          this.showContent = headerControls.showContent;
          this.showControlPanel = headerControls.showControlPanel;
        });
  }

}
