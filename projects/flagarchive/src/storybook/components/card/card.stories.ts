import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import {
  FlagCardComponent,
  FlagCardContentComponent,
  FlagCardFooterComponent,
  FlagCardHeaderComponent,
} from '../../../components';

import { CardArgs, setTemplate, style } from './card.model';

const args: CardArgs = {
  title: 'Comoros',
};

const meta: Meta<CardArgs> = {
  title: 'Components/Card',
  component: FlagCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FlagCardComponent,
        FlagCardContentComponent,
        FlagCardFooterComponent,
        FlagCardHeaderComponent,
      ],
    }),
  ],
  render: args => ({
    props: args,
    styles: [style],
    template: setTemplate(args),
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Default: Story = { args };
