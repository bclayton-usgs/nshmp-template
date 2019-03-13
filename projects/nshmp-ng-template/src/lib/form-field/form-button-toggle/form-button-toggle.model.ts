import { FormField } from '../form-field.model';

export interface FormButtonToggle extends FormField {
  buttons: FormButtonToggleButton[];
  multiple?: boolean;
}

export interface FormButtonToggleButton {
  buttonClass?: string;
  label: string;
  value: any;
}
