import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../form-field.model';

@Component({
  selector: 'nshmp-template-form-toggle',
  templateUrl: './form-toggle.component.html',
  styleUrls: ['./form-toggle.component.scss']
})
export class FormToggleComponent implements OnInit {

  @Input() form: FormField;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
