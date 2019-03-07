import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ControlPanelService {

  private modeToggleEmitter = new Subject<boolean>();

  modeToggleObserve(): Observable<boolean> {
    return this.modeToggleEmitter.asObservable();
  }

  modeToggleNext(isProductionMode: boolean): void {
    this.modeToggleEmitter.next(isProductionMode);
  }

}
