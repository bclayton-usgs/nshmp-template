import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { Navigation } from './navigation.model';

/**
 * Get and set the navigation list.
 */
@Injectable({ providedIn: 'root' })
export class NavigationService {

  private navigationList: Navigation[];
  private setNavigationList = new ReplaySubject<Navigation[]>(1);

  /**
   * Returns the navigation list.
   */
  get(): Navigation[] {
    return this.navigationList.slice();
  }

  /**
   * Set the navigaiton list.
   *
   * @param navigationList The navigation list
   */
  set(navigationList: Navigation[]): void {
    this.navigationList = navigationList;
    this.setNavigationList.next(navigationList);
  }

  _onSet(): Observable<Navigation[]> {
    return this.setNavigationList.asObservable();
  }

}
