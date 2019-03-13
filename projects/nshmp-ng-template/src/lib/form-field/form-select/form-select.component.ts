import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormSelect } from './form-select.model';

@Component({
  selector: 'nshmp-template-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {

  @Input() form: FormSelect;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
