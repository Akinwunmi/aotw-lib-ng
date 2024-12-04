import { FormFieldArgs } from '../form-field.model';

export type InputArgs = FormFieldArgs & {
  inputType: 'text';
  value?: string;
};
