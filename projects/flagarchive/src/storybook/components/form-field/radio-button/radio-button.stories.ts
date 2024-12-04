import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagRadioButtonComponent, FlagRadioGroupComponent } from '../../../../components';
import { FORM_FIELD_ARGS } from '../form-field.model';

import { RadioButtonArgs, setRadioButtons } from './radio-button.model';

const args: RadioButtonArgs = {
  ...FORM_FIELD_ARGS,
  checked: 4,
  radioButtons: 5,
  radioButtonsDisabled: [2, 3],
  radioButtonContent: 'Entity',
};

const meta: Meta<RadioButtonArgs> = {
  title: 'Components/Form Field/Radio Button',
  component: FlagRadioButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagRadioButtonComponent, FlagRadioGroupComponent],
    }),
  ],
  render: props => ({
    props,
    template: `
      <flag-radio-group
        errorMessage="${props.errorMessage}"
        infoMessage="${props.infoMessage}"
        label="${props.label}"
        required="${props.required}"
      >
        ${setRadioButtons(props)}
      </flag-radio-group>
    `,
  }),
  argTypes: {
    checked: {
      control: 'number',
    },
    label: {
      control: 'text',
      defaultValue: 'Radio Button',
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonArgs>;

export const Default: Story = { args };
