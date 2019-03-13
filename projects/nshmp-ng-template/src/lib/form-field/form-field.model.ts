
/**
 * Defines what are in a form control.
 */
export interface FormField {

  /** Any class to apply */
  formClass?: string;

  /** The form type */
  formType: FormType;

  /** Label for form field */
  label: string;

  /** Form control name */
  formControlName: string;

}

/** The form type */
export type FormType = 'button-toggle' | 'checkbox' | 'input' | 'select' | 'slider' | 'toggle';
