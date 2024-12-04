import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { FlagIconComponent, FlagYearPickerComponent } from '../../../components';

import { YearPickerArgs } from './year-picker.model';

const args: YearPickerArgs = {
  min: 1799,
  max: 2024,
  rangeSize: 9,
  selected: 2020,
};

const meta: Meta<YearPickerArgs> = {
  title: 'Components/Year Picker (beta)',
  component: FlagYearPickerComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator(story => `<div style="max-width: 20rem">${story}</div>`),
    moduleMetadata({
      imports: [FlagIconComponent, FlagYearPickerComponent],
    }),
  ],
  render: args => ({
    props: args,
  }),
  argTypes: {
    max: {
      control: 'number',
      defaultValue: 2024,
    },
    min: {
      control: 'number',
      defaultValue: 1799,
    },
    rangeSize: {
      control: 'number',
      defaultValue: 9,
    },
    selected: {
      control: 'number',
      defaultValue: 2020,
    },
  },
};

export default meta;
type Story = StoryObj<YearPickerArgs>;

export const Default: Story = { args };
