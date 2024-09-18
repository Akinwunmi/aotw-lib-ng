import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import {
  FlagCheckboxComponent,
  FlagCheckboxGroupComponent,
  FlagFormFieldComponent,
} from '../../../components';

import { FORM_FIELD_ARGS, FormFieldArgs, setLabel } from './form-field.model';

type CheckboxArgs = FormFieldArgs & {
  checkboxes: number;
  checkboxesChecked: number[];
  checkboxesDisabled: number[];
  checkboxesIndeterminated: number[];
  checkboxLabel: string;
};

const args: CheckboxArgs = {
  ...FORM_FIELD_ARGS,
  checkboxes: 6,
  checkboxesChecked: [2, 4],
  checkboxesDisabled: [2, 3, 6],
  checkboxesIndeterminated: [5, 6],
  checkboxLabel: 'Entity',
};

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Form Field/Checkbox',
  component: FlagCheckboxComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagCheckboxComponent, FlagCheckboxGroupComponent, FlagFormFieldComponent],
    }),
  ],
  render: props => ({
    props,
    template: `
      <flag-form-field errorMessage="${props.errorMessage}" infoMessage="${props.infoMessage}">
        ${setLabel(props.label, props.required)}
        <flag-checkbox-group>
          ${setCheckboxes(props)}
        </flag-checkbox-group>
      </flag-form-field>
    `,
  }),
  argTypes: {
    checkboxesChecked: {
      control: {
        type: 'multi-select',
      },
      options: Array.from({ length: 10 }).map((_, i) => i + 1),
    },
    checkboxesDisabled: {
      control: {
        type: 'multi-select',
      },
      options: Array.from({ length: 10 }).map((_, i) => i + 1),
    },
    checkboxesIndeterminated: {
      control: {
        type: 'multi-select',
      },
      options: Array.from({ length: 10 }).map((_, i) => i + 1),
    },
    label: {
      control: 'text',
      defaultValue: 'Entity',
    },
  },
};

function setCheckboxes(props: CheckboxArgs) {
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
      ${checkboxesChecked.includes(i + 1) ? '[checked]="true"' : ''}
      ${checkboxesDisabled.includes(i + 1) ? '[disabled]="true"' : ''}
      ${checkboxesIndeterminated.includes(i + 1) ? '[indeterminate]="true"' : ''}
    >
      ${checkboxLabel} ${i + 1}
    </flag-checkbox>
  `,
    )
    .join('')
    .replace(/\s+/g, ' ');
}

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = { args };
