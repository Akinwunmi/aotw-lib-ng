import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagFormFieldComponent } from '../../../components';

import { FORM_FIELD_ARGS, FormFieldArgs, setLabel } from './form-field.model';

type InputArgs = FormFieldArgs & {
  inputType: 'text';
  value?: string;
};

const args: InputArgs = {
  ...FORM_FIELD_ARGS,
  inputType: 'text',
  value: '',
};

const meta: Meta<InputArgs> = {
  title: 'Components/Form Field/Input',
  component: FlagFormFieldComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagFormFieldComponent],
    }),
  ],
  render: props => ({
    props,
    template: `
      <flag-form-field errorMessage="${props.errorMessage}" infoMessage="${props.infoMessage}">
        ${setLabel(props.label, props.required)}
        ${setInput(props)}
      </flag-form-field>
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

function setInput(props: InputArgs): string {
  const { disabled, errorMessage, placeholder, readonly, value } = props;
  return `<input
    flagInput
    ${disabled && 'disabled'}
    ${errorMessage && 'error'}
    ${placeholder && `placeholder="${placeholder}"`}
    ${readonly && 'readonly'}
    ${value && `value="${value}"`}
  />`;
}

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = { args };
