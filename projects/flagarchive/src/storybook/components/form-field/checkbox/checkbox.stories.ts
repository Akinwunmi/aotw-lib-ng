import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagCheckboxComponent, FlagCheckboxGroupComponent } from '../../../../components';
import { FORM_FIELD_ARGS } from '../form-field.model';

import { CheckboxArgs, setCheckboxes } from './checkbox.model';

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
      imports: [FlagCheckboxComponent, FlagCheckboxGroupComponent],
    }),
  ],
  render: props => ({
    props,
    template: `
      <flag-checkbox-group
        errorMessage="${props.errorMessage}"
        infoMessage="${props.infoMessage}"
        label="${props.label}"
        required="${props.required}"
      >
        ${setCheckboxes(props)}
      </flag-checkbox-group>
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

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = { args };
