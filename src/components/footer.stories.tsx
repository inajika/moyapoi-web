import type { Meta, StoryObj } from '@storybook/react';

import Footer from './footer';

const meta: Meta<typeof Footer> = {
  title: '共通フッター',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: function Render() {
    return <Footer />;
  },
};
