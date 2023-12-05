import { Meta, StoryObj } from '@storybook/react';
import { FilledInput, FilledInputProps } from './FilledInput';

const meta: Meta = {
  title: 'components/modules/FilledInput',
  component: FilledInput,
};

export default meta;
type Story = StoryObj<FilledInputProps>;

export const primary: Story = {
  render: (args) => <FilledInput {...args} />,
  args: {
    placeholder: 'Title name',
  },
};
