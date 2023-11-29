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
    des: 'Stay informed about Sopa with our latest releases and founder news.',
    QInputList: [
      {
        title: 'Products',
        items: ["Model 000", "Model 001", "Laces", "Masks", "No-show Socks", "Crew Socks", "Gift Cards"],
      },
      {
        title: 'Support',
        items: ["Help Center", "FAQs", "Order", "Order Status", "Returns & Exchanges", "Contact Us"],
      },
      {
        title: 'Everything Else',
        items: ["Community", "Why Sopa", "About", "Discount Program", "Sopa Blog", "Sopa Ambassadors"],
      }
    ],
  },
};
