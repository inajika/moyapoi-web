import type { Meta, StoryObj } from '@storybook/react';
import MoyamoyaList from './moyamoyaList';

import { DATE_LOCALE_OPTIONS } from '@/lib/settings';

// サンプルもやもやデータ
const moyamoyaList = [
  {
    id: '12345',
    content: 'もやもや内容1',
    date: new Date('2024-12-24 01:02:03').toLocaleString(
      'ja-JP',
      DATE_LOCALE_OPTIONS,
    ),
  },
  {
    id: '23456',
    content: 'もやもや内容2',
    date: new Date('2024-12-25 01:02:03').toLocaleString(
      'ja-JP',
      DATE_LOCALE_OPTIONS,
    ),
  },
  {
    id: '34567',
    content: 'もやもや内容3',
    date: new Date('2024-12-26 01:02:03').toLocaleString(
      'ja-JP',
      DATE_LOCALE_OPTIONS,
    ),
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
