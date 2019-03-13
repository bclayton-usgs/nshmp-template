import { AbstractControl } from '@angular/forms';

import { FormField } from '../form-field.model';

export interface FormSlider extends FormField {
  min?: number;
  max?: number;
  step?: number;
  thumbLabel?: boolean;
  valueSync?: AbstractControl;
}
