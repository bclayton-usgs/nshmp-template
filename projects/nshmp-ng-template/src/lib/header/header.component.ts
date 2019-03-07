import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlPanelService } from '../control-panel/control-panel.service';
import { NshmpTemplateService } from '../nshmp-template.service';

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

  /** Whether to render header controls */
  @Input() renderHeaderControls = false;

  /**
   * Whether the template should be in production mode
   * Default: true
   */
  isProductionMode: boolean;

  controlPanelSubscription: Subscription;
  productionModeSubscription: Subscription;

  constructor(
      private controlPanelService: ControlPanelService,
      private nshmpService: NshmpTemplateService) { }

  ngOnInit() {
    this.controlPanelSubscription = this.controlPanelService.controlPanelObserve()
        .subscribe(renderHeaderControls => {
          this.renderHeaderControls = renderHeaderControls;
        });

    this.productionModeSubscription = this.nshmpService.productionModeObserve()
          .subscribe(isProductionMode => this.isProductionMode = isProductionMode);
  }

  ngOnDestroy() {
    this.controlPanelSubscription.unsubscribe();
    this.productionModeSubscription.unsubscribe();
  }

}
