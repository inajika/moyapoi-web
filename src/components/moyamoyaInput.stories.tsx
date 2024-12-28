import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import MoyamoyaInput from './moyamoyaInput';

const meta: Meta<typeof MoyamoyaInput> = {
  title: 'もやもや入力',
  component: MoyamoyaInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// デフォルトのストーリー
export const Default: Story = {
  args: {
    onAddMoyamoya: fn(),
  },
  render: (args) => <MoyamoyaInput {...args} />,
};

// インタラクションテスト用ストーリー
export const Interactions: Story = {
  ...Default,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(
      '「もやもや」をはきだしてみませんか?',
    );
    const button = canvas.getByRole('button', { name: 'はきだす' });

    // 初期状態確認
    expect(button).toBeDisabled();

    // テキスト入力
    await userEvent.type(textarea, 'これはもやもやのテストです');
    expect(button).toBeEnabled();

    // ボタンをクリックして投稿
    await userEvent.click(button);
    expect(args.onAddMoyamoya).toHaveBeenCalledWith(
      'これはもやもやのテストです',
    );
    expect(textarea).toHaveValue('');
    expect(button).toBeDisabled();

    // 再度入力してCtrl+Enterで投稿
    await userEvent.type(textarea, '新しいもやもや内容');
    await userEvent.keyboard('{Control>}{Enter}');
    expect(args.onAddMoyamoya).toHaveBeenCalledWith('新しいもやもや内容');
    expect(textarea).toHaveValue('');
    expect(button).toBeDisabled();
  },
};

// 初期状態でテキストがプリセットされているストーリー
export const WithInitialText: Story = {
  args: {
    onAddMoyamoya: fn(),
  },
  render: (args) => {
    const { onAddMoyamoya: onAddPost } = args;
    return <MoyamoyaInput onAddMoyamoya={onAddPost} />;
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText(
      '「もやもや」をはきだしてみませんか?',
    );
    const button = canvas.getByRole('button', { name: 'はきだす' });

    // 初期値がプリセットされている場合の確認
    await userEvent.type(textarea, '既存テキストが含まれる場合');
    await userEvent.click(button);
    expect(args.onAddMoyamoya).toHaveBeenCalledWith(
      '既存テキストが含まれる場合',
    );
  },
};
