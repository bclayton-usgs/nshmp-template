import { AbstractControl } from '@angular/forms';

import { FormField } from '../form-field.model';

export interface FormInput extends FormField {
  formFieldError?: string;
  formFieldHint?: string;
  max?: number;
  min?: number;
  tooltip?: string;
  tooltipPosition?: string;
  type: FormInputType;
  step?: number;
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
