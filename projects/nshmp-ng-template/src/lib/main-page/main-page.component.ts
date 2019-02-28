import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nshmp-template-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  /**
   * Whether to render the control panel.
   * Default: false
   */
  @Input() renderControlPanel: boolean;

  constructor() { }

  ngOnInit() {
  }

}
