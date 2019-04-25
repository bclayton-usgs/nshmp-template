import { AbstractControl } from '@angular/forms';

import { FormField } from '../form-field.model';

export interface FormInput extends FormField {
  formFieldError?: string;
  formFieldHint?: string;
  max?: number;
  min?: number;
  prefix?: string;
  tooltip?: string;
  tooltipPosition?: string;
  type: FormInputType;
  step?: number;
  suffix?: string;
  valueSync?: AbstractControl;
}

type FormInputType =
  'color' |
  'date' |
  'datetime-local' |
  'email' |
  'month' |
  'number' |
  'password' |
  'search' |
  'tel' |
  'text' |
  'time' |
  'url' |
  'week';
