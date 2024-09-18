import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import {
  FlagFormFieldComponent,
  FlagRadioButtonComponent,
  FlagRadioButtonGroupComponent,
} from '../../../components';

import { FORM_FIELD_ARGS, FormFieldArgs, setLabel } from './form-field.model';

type RadioButtonArgs = FormFieldArgs & {
  checked: number;
  radioButtons: number;
  radioButtonsDisabled: number[];
  radioButtonContent: string;
};

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
      imports: [FlagFormFieldComponent, FlagRadioButtonComponent, FlagRadioButtonGroupComponent],
    }),
  ],
  render: props => ({
    props,
    template: `
      <flag-form-field errorMessage="${props.errorMessage}" infoMessage="${props.infoMessage}">
        ${setLabel(props.label, props.required)}
        <flag-radio-button-group>
          ${setRadioButtons(props)}
        </flag-radio-button-group>
      </flag-form-field>
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

function setRadioButtons(props: RadioButtonArgs) {
  const { checked, radioButtons, radioButtonsDisabled, radioButtonContent } = props;
  return Array.from({ length: radioButtons })
    .map(
      (_, i) => `
    <flag-radio-button
      ${checked === i + 1 ? '[checked]="true"' : ''}
      ${radioButtonsDisabled.includes(i + 1) ? '[disabled]="true"' : ''}
    >
      ${radioButtonContent} ${i + 1}
    </flag-radio-button>
  `,
    )
    .join('')
    .replace(/\s+/g, ' ');
}

export default meta;
type Story = StoryObj<RadioButtonArgs>;

export const Default: Story = { args };
