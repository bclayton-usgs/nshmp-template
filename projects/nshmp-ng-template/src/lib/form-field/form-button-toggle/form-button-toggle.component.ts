import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonToggle } from './form-button-toggle.model';

@Component({
  selector: 'nshmp-template-form-button-toggle',
  templateUrl: './form-button-toggle.component.html',
  styleUrls: ['./form-button-toggle.component.scss']
})
export class FormButtonToggleComponent implements OnInit {

  @Input() form: FormButtonToggle;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
