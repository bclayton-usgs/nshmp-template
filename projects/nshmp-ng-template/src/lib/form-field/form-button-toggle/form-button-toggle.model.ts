import { FormField } from '../form-field.model';

export interface FormButtonToggle extends FormField {
  buttonGroupClass?: string;
  buttons: FormButtonToggleButton[];
  change?: Function;
  multiple?: boolean;
}

export interface FormButtonToggleButton {
  buttonClass?: string;
  checked?: boolean;
  label: string;
  value?: any;
}
