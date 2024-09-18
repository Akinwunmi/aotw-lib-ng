import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { BreadcrumbItem, FlagBreadcrumbComponent } from '../../components';

interface BreadcrumbArgs {
  items: BreadcrumbItem[];
}

const args: BreadcrumbArgs = {
  items: [
    { title: 'Home', link: '/' },
    { title: 'Category', link: '/category' },
    { title: 'Subcategory', link: '/subcategory' },
  ],
};

const meta: Meta<BreadcrumbArgs> = {
  title: 'Components/Breadcrumb',
  component: FlagBreadcrumbComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagBreadcrumbComponent],
    }),
  ],
  render: (args) => ({
    props: args,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const Default: Story = { args };
