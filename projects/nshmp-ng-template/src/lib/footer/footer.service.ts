import { Injectable } from '@angular/core';
import { MatButton } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FooterService {

  /**
   * Subscribe to the compute button clicks.
   */
  computeButton = new Subject<MatButton>();

  /**
   * Subscribe to the raw data button clicks.
   */
  rawDataButton = new Subject<MatButton>();

}
