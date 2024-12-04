import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagCardComponent, FlagIconComponent, FlagListItemComponent } from '../../../components';
import { FlagButtonDirective, FlagDropdownDirective } from '../../../directives';

type DropdownArgs = unknown;

const meta: Meta<DropdownArgs> = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FlagButtonDirective,
        FlagCardComponent,
        FlagDropdownDirective,
        FlagIconComponent,
        FlagListItemComponent,
      ],
    }),
  ],
  render: args => ({
    props: args,
    template: `
      <button flagButton [flagDropdownTrigger]="menu">
        <flag-icon>menu</flag-icon>
      </button>

      <ng-template #menu>
        <flag-card>
          <flag-list-item>Log in</flag-list-item>
          <flag-list-item>Sign up</flag-list-item>
        </flag-card>
      </ng-template>
    `,
  }),
};

export default meta;
type Story = StoryObj<DropdownArgs>;

export const Default: Story = { args: {} };
