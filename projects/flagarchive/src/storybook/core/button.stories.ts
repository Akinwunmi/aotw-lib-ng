import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { FlagIconComponent } from '../../components';
import { FlagButtonDirective } from '../../directives';

interface StoryArgs {
  disabled?: boolean;
  ghost?: boolean;
  icon?: string;
  raised?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  text?: string;
}

const args: StoryArgs = {
  disabled: false,
  ghost: false,
  icon: 'keyboard_arrow_left',
  raised: true,
  rounded: false,
  secondary: false,
  text: 'Button',
};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  title: 'Core/Button',
  decorators: [
    moduleMetadata({
      imports: [FlagButtonDirective, FlagIconComponent],
    }),
  ],
  render: props => ({
    props,
    template: `
      <button
        flagButton
        type="button"
        [attr.ghost]=${props.ghost || undefined}
        [attr.raised]=${props.raised || undefined}
        [attr.rounded]=${props.rounded || undefined}
        [attr.secondary]=${props.secondary || undefined}
        [disabled]=${props.disabled || undefined}
      >
        ${props.icon && `<flag-icon>${props.icon}</flag-icon>`}
        ${props.text}
      </button>
    `,
  }),
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Primary: Story = {
  args: {
    ...args,
    raised: false,
  },
};

export const Raised: Story = {
  args,
};

export const Rounded: Story = {
  args: {
    ...args,
    rounded: true,
  },
};

export const Ghost: Story = {
  args: {
    ...args,
    raised: false,
    ghost: true,
  },
};

export const Secondary: Story = {
  args: {
    ...args,
    raised: false,
    secondary: true,
  },
};

export const Disabled: Story = {
  args: {
    ...args,
    disabled: true,
  },
};
