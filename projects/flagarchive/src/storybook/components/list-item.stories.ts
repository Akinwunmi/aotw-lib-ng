import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagIconComponent, FlagListItemComponent } from '../../components';

interface ListItemArgs {
  active?: boolean;
  disabled?: boolean;
  interactive?: boolean;
  label: string;
  prefix: string;
  suffix: string;
}

const args: ListItemArgs = {
  active: false,
  disabled: false,
  interactive: true,
  label: 'List Item',
  prefix: '',
  suffix: '',
};

const meta: Meta<ListItemArgs> = {
  title: 'Components/List Item',
  component: FlagListItemComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagIconComponent, FlagListItemComponent],
    }),
  ],
  render: ({ label, prefix, suffix, ...args }) => ({
    props: args,
    template: `
      <flag-list-item [active]="active" [disabled]="disabled" [interactive]="interactive">
        ${prefix && `<flag-icon style="font-size: var(--flag-size-sm);">${prefix}</flag-icon>`}
        ${label}
        ${suffix && `<flag-icon style="font-size: var(--flag-size-sm);">${suffix}</flag-icon>`}
      </flag-list-item>
    `,
  }),
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Chip',
    },
  },
};

export default meta;
type Story = StoryObj<ListItemArgs>;

export const Default: Story = { args };

export const Active: Story = {
  args: {
    ...args,
    active: true,
  },
};

export const WithAffixes: Story = {
  args: {
    ...args,
    prefix: 'star',
    suffix: 'keyboard_arrow_right',
  },
};

export const NotInteractive: Story = {
  args: {
    ...args,
    interactive: false,
  },
};

export const Disabled: Story = {
  args: {
    ...args,
    disabled: true,
  },
};
