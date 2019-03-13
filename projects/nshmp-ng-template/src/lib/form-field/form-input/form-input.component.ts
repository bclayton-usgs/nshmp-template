import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInput } from './form-input.model';

@Component({
  selector: 'nshmp-template-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input() form: FormInput;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
