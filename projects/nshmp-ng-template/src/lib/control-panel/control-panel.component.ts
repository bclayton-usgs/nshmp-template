import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HeaderControlsService } from '../header/header-controls/header-controls.service';
import { NshmpTemplateService } from '../nshmp-template.service';
import { ControlPanelService } from './control-panel.service';

@Component({
  selector: 'nshmp-template-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
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
        .subscribe(state => {
          this.showContent = !state.matches;
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
