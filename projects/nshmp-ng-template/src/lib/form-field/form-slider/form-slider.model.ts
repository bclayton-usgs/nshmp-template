import { AbstractControl } from '@angular/forms';

import { FormField } from '../form-field.model';

export interface FormSlider extends FormField {
  labelPosition?: FormSliderLabelPosition;
  min?: number;
  max?: number;
  sliderClass?: string;
  step?: number;
  thumbLabel?: boolean;
  valueSync?: AbstractControl;
}

type FormSliderLabelPosition = 'left' | 'top';
