import {
  moduleMetadata,
  Meta,
  StoryObj
} from '@storybook/angular';

import { FlagFormFieldComponent } from './form-field.component';

interface FormFieldArgs {
  disabled?: boolean;
  errorMessage?: string;
  infoMessage?: string;
  inputType: 'text';
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
};

const args: FormFieldArgs = {
  disabled: false,
  errorMessage: 'Please enter a location or organization',
  infoMessage: 'An entity that is either a location or an organization',
  inputType: 'text',
  label: 'Location / Organization',
  placeholder: 'Enter location or organization',
  readonly: false,
  required: true,
  value: '',
};

const meta: Meta<FormFieldArgs> = {
  title: 'Components/Form Field',
  component: FlagFormFieldComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagFormFieldComponent],
    }),
  ],
  render: ({
    disabled,
    errorMessage,
    inputType,
    label,
    placeholder,
    readonly,
    required,
    value,
    ...args
  }) => ({
    props: args,
    template: `
      <flag-form-field errorMessage="${errorMessage}" [infoMessage]="infoMessage">
        ${label ? `<label
          flagLabel
          ${required && 'required'}
        >${label}</label>` : ''}
        ${inputType === 'text' ? `<input
          flagInput
          ${disabled && 'disabled'}
          ${errorMessage && 'error'}
          ${placeholder && `placeholder="${placeholder}"`}
          ${readonly && 'readonly'}
          ${value && `value="${value}"`}
        />` : ''}
      </flag-form-field>
    `,
  }),
  argTypes: {
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
type Story = StoryObj<FormFieldArgs>;

export const Default: Story = { args };
