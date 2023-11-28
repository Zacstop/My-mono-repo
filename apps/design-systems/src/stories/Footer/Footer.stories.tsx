import { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterProps } from './Footer';

const meta: Meta = {
  title: 'components/modules/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<FooterProps>;

export const primary: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    title: 'Woori Bank',
    // user: {
    //   name: 'kang san',
    // },
    // onLogout: () => console.log('logout'),
    // onLogin: () => console.log('login'),
    // join: () => console.log('join'),
    // menuList: [
    //   {
    //     name: 'home',
    //     link: '/',
    //   },
    //   {
    //     name: 'about',
    //     link: '/about',
    //   },
    //   {
    //     name: 'contact',
    //     link: '/contact',
    //   },
    // ],
    // containerColor: 'var(--Blue-primary, #3e86f5)',
  },
};
