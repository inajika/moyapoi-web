import type { Meta, StoryObj } from '@storybook/react';
import MoyamoyaList from './moyamoyaList';

// サンプルもやもやデータ
const moyamoyaList = [
  {
    id: '12345',
    content: 'もやもや内容1',
    date: '2024-12-27',
  },
  {
    id: '23456',
    content: 'もやもや内容2',
    date: '2024-12-26',
  },
  {
    id: '34567',
    content: 'もやもや内容3',
    date: '2024-12-25',
  },
];

const meta: Meta<typeof MoyamoyaList> = {
  title: 'もやもや一覧',
  component: MoyamoyaList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MoyamoyaList>;

export const Default: Story = {
  args: {
    moyamoyaList,
  },
};
