import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FooterService {

  computeButton = new Subject<void>();
  rawDataButton = new Subject<void>();

}
