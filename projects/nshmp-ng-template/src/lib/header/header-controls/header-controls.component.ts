import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';
import { Subscription } from 'rxjs';

import { HeaderControls } from './header-controls.model';
import { HeaderControlsService } from './header-controls.service';
import { NshmpTemplateService } from '../../nshmp-template.service';

@Component({
  selector: 'nshmp-template-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit, OnDestroy {

  multipleToggle = true;
  showControlPanel = true;
  showContent = true;

  isSmallScreen: boolean;

  screenChangeSubscription: Subscription;

  constructor(
    private headerControlsService: HeaderControlsService,
    private nshmpService: NshmpTemplateService) { }

  ngOnInit() {
    this.screenChangeSubscription = this.nshmpService.onSreenChange()
        .subscribe(isSmallScreen => this.onScreenChange(isSmallScreen));
  }

  ngOnDestroy() {
    this.screenChangeSubscription.unsubscribe();
  }

  /**
   * Update content.
   * @param change The mat button toggle change
   */
  onContentClick(change: MatButtonToggleChange): void {
    if (!this.showControlPanel && !change.source.checked) {
      change.source.checked = true;
      return;
    }

    this.showContent = change.source.checked;
    this.showControlPanel = this.isSmallScreen ? false : this.showControlPanel;

    const headerControls: HeaderControls = {
      showContent: this.showContent,
      showControlPanel: this.showControlPanel
    };

    this.headerControlsService.contentChangeNext(headerControls);
  }

  /**
   * Update control panel.
   * @param change The mat button toggle change
   */
  onControlPanelClick(change: MatButtonToggleChange): void {
    if (!this.showContent && !change.source.checked) {
      change.source.checked = true;
      return;
    }

    this.showContent = this.isSmallScreen ? false : this.showContent;
    this.showControlPanel = change.source.checked;

    const headerControls: HeaderControls = {
      showContent: this.showContent,
      showControlPanel: this.showControlPanel
    };

    this.headerControlsService.controlPanelNext(headerControls);
  }

  /**
   * Updated what is shown based on screen size.
   * @param isSmallScreen Wheather the screen is small
   */
  onScreenChange(isSmallScreen: boolean): void {
    this.isSmallScreen = isSmallScreen;
    this.multipleToggle = !isSmallScreen;
    this.showControlPanel = true;
    this.showContent = !isSmallScreen;

    const headerControls: HeaderControls = {
      showContent: this.showContent,
      showControlPanel: this.showControlPanel
    };

    this.headerControlsService.contentChangeNext(headerControls);
    this.headerControlsService.controlPanelNext(headerControls);
  }

}
