import { Meta, StoryObj } from '@storybook/react';
import { SelectButton, SelectButtonProps } from './SelectButton';

const meta: Meta = {
  title: 'components/modules/SelectButton',
  component: SelectButton,
};

export default meta;
type Story = StoryObj<SelectButtonProps>;

export const primary: Story = {
  render: (args) => <SelectButton {...args} />,
  args: {
    option: ['Men', 'Women'],
  },
};
