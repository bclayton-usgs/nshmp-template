import { Component, OnInit, Input } from '@angular/core';
import { ControlPanelService } from './control-panel.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Input() isProductionMode = true;

  constructor(private controlPanelService: ControlPanelService) { }

  ngOnInit() {
  }

  onToggle(isProductionMode: boolean): void {
    this.isProductionMode = isProductionMode;
    this.controlPanelService.modeToggleNext(isProductionMode);
  }

}
