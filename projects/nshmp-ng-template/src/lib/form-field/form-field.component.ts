import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from './form-field.model';

@Component({
  selector: 'nshmp-template-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() formGroup: FormGroup;

  @Input() formFields: FormField[];

  constructor() { }

  ngOnInit() {
  }

}
