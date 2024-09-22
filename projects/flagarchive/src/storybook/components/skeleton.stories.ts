import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagSkeletonComponent } from '../../components';

type SkeletonArgs = FlagSkeletonComponent;

const args: SkeletonArgs = {
  loading: true,
  soft: false,
};

const meta: Meta<SkeletonArgs> = {
  title: 'Components/Skeleton',
  component: FlagSkeletonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagSkeletonComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <flag-skeleton
        style="height: 8rem; width: 12rem"
        [loading]="loading"
        [soft]="soft"
      />
    `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<SkeletonArgs>;

export const Default: Story = { args };

export const Soft: Story = {
  args: { ...args, soft: true },
};

export const Static: Story = {
  args: { ...args, loading: false },
};
