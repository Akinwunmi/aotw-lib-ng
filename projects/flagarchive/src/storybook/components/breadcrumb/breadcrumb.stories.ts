import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagBreadcrumbComponent } from '../../../components';

import { BreadcrumbArgs, setBreadcrumbItems } from './breadcrumb.model';

const args: BreadcrumbArgs = {
  items: 3,
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
  render: args => {
    const breadcrumbItems = setBreadcrumbItems(args);

    return {
      props: {
        ...args,
        breadcrumbItems,
      },
      template: `
        <flag-breadcrumb [items]="breadcrumbItems" />
      `,
    };
  },
  argTypes: {
    items: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    additionalItems: {
      control: { type: 'range', min: 0, max: 3, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const Default: Story = { args };

export const WithAdditionalItem: Story = {
  args: {
    ...args,
    additionalItems: 1,
  },
};
