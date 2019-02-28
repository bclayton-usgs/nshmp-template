import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HeaderControls } from './header-controls.model';

/**
 * Subscribe to click events on the header control toggles.
 */
@Injectable({ providedIn: 'root' })
export class HeaderControlsService {

  private controlPanelChange = new Subject<HeaderControls>();
  private contentChange = new Subject<HeaderControls>();

  /**
   * Send header controls to content change.
   *
   * @param headerControls The header controls
   */
  contentChangeNext(headerControls: HeaderControls): void {
    this.contentChange.next(headerControls);
  }

  /**
   * Send header controls to control panel change.
   *
   * @param headerControls The header controls
   */
  controlPanelNext(headerControls: HeaderControls): void {
    this.controlPanelChange.next(headerControls);
  }

  /**
   * Returns the on content change observable.
   */
  onContentChange(): Observable<HeaderControls> {
    return this.contentChange.asObservable();
  }

  /**
   * Returns the on control panel change observable.
   */
  onControlPanelChange(): Observable<HeaderControls> {
    return this.controlPanelChange.asObservable();
  }

}
