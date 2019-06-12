
/**
 * Defines what are in a form control.
 */
export interface FormField {

  /** Whether to disable form field */
  disabled?: boolean;

  /** Any class to apply */
  formClass?: string;

  /** Form control name */
  formControlName: string;

  /** The form type */
  formType: FormType;

  /** Label for form field */
  label: string;

  /** Whether to show the form field */
  showFormField?: boolean;
}

/** The form type */
export type FormType = 'button-toggle' | 'checkbox' | 'input' | 'select' | 'slider' | 'toggle';
