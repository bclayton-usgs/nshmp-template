import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HeaderControls } from './header-controls.model';

@Injectable({ providedIn: 'root' })
export class HeaderControlsService {

  private controlPanelChange = new Subject<HeaderControls>();
  private contentChange = new Subject<HeaderControls>();

  contentChangeNext(headerControls: HeaderControls): void {
    this.contentChange.next(headerControls);
  }

  controlPanelNext(headerControls: HeaderControls): void {
    this.controlPanelChange.next(headerControls);
  }

  onContentChange(): Observable<HeaderControls> {
    return this.contentChange.asObservable();
  }

  onControlPanelChange(): Observable<HeaderControls> {
    return this.controlPanelChange.asObservable();
  }

}
