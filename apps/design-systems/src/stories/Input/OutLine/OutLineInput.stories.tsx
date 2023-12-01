import { Meta, StoryObj } from '@storybook/react';
import { OutlineInput, OutlineInputProps } from './OutlineInput';

const meta: Meta = {
  title: 'components/modules/OutlineInput',
  component: OutlineInput,
};

export default meta;
type Story = StoryObj<OutlineInputProps>;

export const primary: Story = {
  render: (args) => <OutlineInput {...args} />,
  args: {
    des: 'Stay informed about Sopa with our latest releases and founder news.',
  },
};
