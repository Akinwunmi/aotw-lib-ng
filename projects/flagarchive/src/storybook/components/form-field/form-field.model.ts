export interface FormFieldArgs {
  disabled?: boolean;
  errorMessage?: string;
  infoMessage?: string;
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
}

export const FORM_FIELD_ARGS: FormFieldArgs = {
  disabled: false,
  errorMessage: 'Please enter a location or organization',
  infoMessage: 'An entity that is either a location or an organization',
  label: 'Location / Organization',
  placeholder: 'Enter location or organization',
  readonly: false,
  required: true,
};
