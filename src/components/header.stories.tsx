import type { Meta, StoryObj } from '@storybook/react';

import Header from './header';

const meta: Meta<typeof Header> = {
  title: '共通ヘッダー',
  component: Header,
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
    return <Header />;
  },
};
