import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nshmp-template-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
