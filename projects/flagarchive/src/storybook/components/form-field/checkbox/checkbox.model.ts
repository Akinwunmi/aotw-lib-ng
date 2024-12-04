import { FormFieldArgs } from '../form-field.model';

export type CheckboxArgs = FormFieldArgs & {
  checkboxes: number;
  checkboxesChecked: number[];
  checkboxesDisabled: number[];
  checkboxesIndeterminated: number[];
  checkboxLabel: string;
};

export function setCheckboxes(props: CheckboxArgs) {
  const {
    checkboxes,
    checkboxesChecked,
    checkboxesDisabled,
    checkboxesIndeterminated,
    checkboxLabel,
  } = props;
  return Array.from({ length: checkboxes })
    .map(
      (_, i) => `
    <flag-checkbox
      label="${checkboxLabel} ${i + 1}"
      ${checkboxesChecked.includes(i + 1) ? '[checked]="true"' : ''}
      ${checkboxesDisabled.includes(i + 1) ? '[disabled]="true"' : ''}
      ${checkboxesIndeterminated.includes(i + 1) ? '[indeterminate]="true"' : ''}
    />
  `,
    )
    .join('')
    .replace(/\s+/g, ' ');
}
