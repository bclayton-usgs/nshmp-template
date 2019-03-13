import { FormField } from '../form-field.model';

export interface FormSelect extends FormField {
  isNativeSelect?: boolean;
  optGroup?: SelectOptGroup[];
  options?: SelectOptions[];
  size?: number;
  multiple?: boolean;
}

export interface SelectOptions {
  label: string;
  value: any;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOptions[];
}
