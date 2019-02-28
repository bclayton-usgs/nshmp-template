import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Render and remove the control panel.
 */
@Injectable({providedIn: 'root'})
export class ControlPanelService {

  private showControlPanel = new Subject<boolean>();

  /**
   * Render the control panel.
   */
  render(): void {
    this.showControlPanel.next(true);
  }

  /**
   * Remove the control panel.
   */
  remove(): void {
    this.showControlPanel.next(false);
  }

  _onToggle(): Observable<boolean> {
    return this.showControlPanel.asObservable();
  }

}
