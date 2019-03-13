import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormCheckbox } from './form-checkbox.model';

@Component({
  selector: 'nshmp-template-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {

  @Input() form: FormCheckbox;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
