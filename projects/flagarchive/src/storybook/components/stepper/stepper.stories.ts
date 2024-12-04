import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagStepperComponent } from '../../../components';

import { StepperArgs } from './stepper.model';

const args: StepperArgs = {
  activeStep: 0,
  steps: [
    { disabled: false, label: 'Step 1' },
    { disabled: false, label: 'Step 2' },
    { disabled: true, label: 'Step 3' },
  ],
};

const meta: Meta<StepperArgs> = {
  title: 'Components/Stepper (deprecated)',
  component: FlagStepperComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagStepperComponent],
    }),
  ],
  render: args => ({
    props: args,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<StepperArgs>;

export const Default: Story = { args };
