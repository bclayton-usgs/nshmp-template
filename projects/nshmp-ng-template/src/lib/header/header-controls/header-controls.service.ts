import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HeaderControls } from './header-controls.model';

/**
 * Subscribe to click events on the header control toggles.
 */
@Injectable({ providedIn: 'root' })
export class HeaderControlsService {

  private controlPanelEmitter = new Subject<HeaderControls>();
  private contentEmitter = new Subject<HeaderControls>();

  /**
   * Send header controls to content change.
   *
   * @param headerControls The header controls
   */
  contentChangeNext(headerControls: HeaderControls): void {
    this.contentEmitter.next(headerControls);
  }

  /**
   * Send header controls to control panel change.
   *
   * @param headerControls The header controls
   */
  controlPanelNext(headerControls: HeaderControls): void {
    this.controlPanelEmitter.next(headerControls);
  }

  /**
   * Returns the on content change observable.
   */
  contentObserve(): Observable<HeaderControls> {
    return this.contentEmitter.asObservable();
  }

  /**
   * Returns the on control panel change observable.
   */
  controlPanelObserve(): Observable<HeaderControls> {
    return this.controlPanelEmitter.asObservable();
  }

}
