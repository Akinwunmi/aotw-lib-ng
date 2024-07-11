import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { FlagIconComponent } from '../icon';
import { Tab } from '../tab';

import { FlagTabGroupComponent } from './tab-group.component';

type TabGroupArgs = {
  active?: number;
  tabs: Tab[];
};

const args: TabGroupArgs = {
  active: 0,
  tabs: [
    { id: 0, disabled: false, label: 'Tab 1', name: 'Tab 1' },
    { id: 1, disabled: false, label: 'Tab 2', name: 'Tab 2' },
    { id: 2, disabled: true, label: 'Tab 3', name: 'Tab 3' },
    { id: 3, disabled: false, label: 'Tab 4', name: 'Tab 4' },
  ],
};

const meta: Meta<TabGroupArgs> = {
  title: 'Components/Tab Group',
  component: FlagTabGroupComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagTabGroupComponent, FlagIconComponent],
    })
  ],
  render: args => ({
    props: args,
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<TabGroupArgs>;

export const Default: Story = { args };
