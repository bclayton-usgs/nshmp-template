import { Component } from '@angular/core';
import { Navigation } from 'projects/nshmp-ng-template/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nshmp-template';

  navigationList: Navigation[] = [
    {
      display: 'Example 1',
      href: '/'
    }, {
      display: 'Example 2',
      href: '/'
    }
  ];

}
