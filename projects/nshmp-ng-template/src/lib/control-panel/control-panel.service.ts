import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ControlPanelService {

  private controlPanelInitEmitter = new BehaviorSubject<boolean>(null);

  /**
   * Returns the control panel observable
   */
  controlPanelObserve(): Observable<boolean> {
    return this.controlPanelInitEmitter.asObservable();
  }

  /**
   * Fires the control panel subject
   */
  controlPanelInit(): void {
    this.controlPanelInitEmitter.next(true);
  }

}
