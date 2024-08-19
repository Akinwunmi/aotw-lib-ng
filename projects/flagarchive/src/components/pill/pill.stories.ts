import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagPillComponent } from './pill.component';
import { PillTheme, PillType } from './pill.model';

interface PillArgs {
  label: string;
  theme: PillTheme;
  type: PillType;
};

const args: PillArgs = {
  label: 'Beta',
  theme: PillTheme.Light,
  type: PillType.Primary,
};

const meta: Meta<PillArgs> = {
  title: 'Components/Pill',
  component: FlagPillComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagPillComponent],
    }),
  ],
  render: ({ label, ...args }) => ({
    props: args,
    template: `
      <flag-pill [theme]="theme" [type]="type">
        ${label}
      </flag-pill>
    `,
  }),
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Chip',
    },
    theme: {
      control: 'select',
      options: Object.values(PillTheme),
      defaultValue: PillTheme.Light,
    },
    type: {
      control: 'select',
      options: Object.values(PillType),
      defaultValue: PillType.Primary,
    },
  },
};

export default meta;
type Story = StoryObj<PillArgs>;

export const Default: Story = { args };
