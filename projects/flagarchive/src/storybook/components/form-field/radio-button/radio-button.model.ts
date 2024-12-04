import { FormFieldArgs } from '../form-field.model';

export type RadioButtonArgs = FormFieldArgs & {
  checked: number;
  radioButtons: number;
  radioButtonsDisabled: number[];
  radioButtonContent: string;
};

export function setRadioButtons(props: RadioButtonArgs) {
  const { checked, radioButtons, radioButtonsDisabled, radioButtonContent } = props;
  return Array.from({ length: radioButtons })
    .map(
      (_, i) => `
    <flag-radio-button
      label="${radioButtonContent} ${i + 1}"
      ${checked === i + 1 ? '[checked]="true"' : ''}
      ${radioButtonsDisabled.includes(i + 1) ? '[disabled]="true"' : ''}
    />
  `,
    )
    .join('')
    .replace(/\s+/g, ' ');
}
