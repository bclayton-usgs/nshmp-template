import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ControlPanelService } from '../main-page/control-panel/control-panel.service';

@Component({
  selector: 'nshmp-template-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  /**
   * Whether to render the control panel toggles.
   * Default: false
   */
  @Input() renderControlPanel: boolean;

  /**
   * Whether to render the search bar on the header.
   * Default: true
   */
  @Input() renderSearchBar: boolean;

  controlPanelSubscription: Subscription;

  constructor(private controlPanelService: ControlPanelService) { }

  ngOnInit() {
    this.controlPanelSubscription = this.controlPanelService._onToggle()
        .subscribe(renderControlPanel => {
          this.renderControlPanel = renderControlPanel;
        });
  }

  ngOnDestroy() {
    this.controlPanelSubscription.unsubscribe();
  }

}
