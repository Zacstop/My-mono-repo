import { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterProps } from './Footer';

const meta: Meta = {
  title: 'components/modules/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<FooterProps>;

export const Primary: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    des: 'Stay informed about Sopa with our latest releases and founder news.',
    footerList: [
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
