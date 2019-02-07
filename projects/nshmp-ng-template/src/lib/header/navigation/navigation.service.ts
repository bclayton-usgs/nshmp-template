import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Navigation } from './navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  /**
   * Subject to update the navigation list.
   */
  navigationList = new BehaviorSubject<Navigation[]>(null);

}
