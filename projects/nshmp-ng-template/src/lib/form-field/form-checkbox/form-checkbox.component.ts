import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../form-field.model';

@Component({
  selector: 'nshmp-template-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {

  @Input() form: FormField;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
