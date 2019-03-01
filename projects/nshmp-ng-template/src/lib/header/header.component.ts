import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlPanelService } from '../control-panel/control-panel.service';

@Component({
  selector: 'nshmp-template-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  /**
   * Whether to render the search bar on the header.
   * Default: true
   */
  @Input() renderSearchBar: boolean;

  @Input() renderHeaderControls = false;

  controlPanelSubscription: Subscription;

  constructor(private controlPanelService: ControlPanelService) { }

  ngOnInit() {
    this.controlPanelSubscription = this.controlPanelService.controlPanelObserve()
        .subscribe(renderHeaderControls => {
          this.renderHeaderControls = renderHeaderControls;
        });
  }

  ngOnDestroy() {
    this.controlPanelSubscription.unsubscribe();
  }

}
