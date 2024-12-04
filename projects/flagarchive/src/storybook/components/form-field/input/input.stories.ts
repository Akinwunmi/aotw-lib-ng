import { Meta, StoryObj } from '@storybook/angular';

import { FlagInputComponent } from '../../../../components';
import { FORM_FIELD_ARGS } from '../form-field.model';

import { InputArgs } from './input.model';

const args: InputArgs = {
  ...FORM_FIELD_ARGS,
  inputType: 'text',
  value: '',
};

const meta: Meta<InputArgs> = {
  title: 'Components/Form Field/Input',
  component: FlagInputComponent,
  tags: ['autodocs'],
  render: props => ({
    props,
    template: `
      <flag-input
        disabled="${props.disabled}"
        errorMessage="${props.errorMessage}"
        infoMessage="${props.infoMessage}"
        label="${props.label}"
        placeholder="${props.placeholder}"
        readonly="${props.readonly}"
        required="${props.required}"
        value="${props.value}"
      />
    `,
  }),
  argTypes: {
    errorMessage: {
      control: 'text',
    },
    infoMessage: {
      control: 'text',
    },
    inputType: {
      control: 'select',
      options: ['text'],
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = { args };
