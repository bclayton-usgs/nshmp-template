import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ControlPanelService {

  private controlPanel = new BehaviorSubject<boolean>(null);

  /**
   * Fires the control panel subject.
   */
  controlPanelInit() {
    this.controlPanel.next(true);
  }

  /**
   * Returns the on control panel observable
   */
  onControlPanel() {
    return this.controlPanel.asObservable();
  }

}
