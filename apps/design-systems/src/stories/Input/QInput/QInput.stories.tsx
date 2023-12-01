import { Meta, StoryObj } from '@storybook/react';
import { QInput, QInputProps } from './QInput';

const meta: Meta = {
  title: 'components/modules/QInput',
  component: QInput,
};

export default meta;
type Story = StoryObj<QInputProps>;

export const Primary: Story = {
  render: (args) => <QInput {...args} />,
  args: {
    placeholder: 'Order Number',
  },
};
