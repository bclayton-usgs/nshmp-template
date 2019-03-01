import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ControlPanelService } from '../control-panel/control-panel.service';

@Component({
  selector: 'nshmp-template-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  renderControlPanel = false;
  controlPanelSubscription: Subscription;

  constructor(private controlPanelService: ControlPanelService) { }

  ngOnInit() {
    this.controlPanelSubscription = this.controlPanelService.controlPanelObserve()
        .subscribe(renderControlPanel => {
          this.renderControlPanel = renderControlPanel;
        });
  }

  ngOnDestroy() {
    this.controlPanelSubscription.unsubscribe();
  }

}
