'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type MoyamoyaInputProps = {
  onAddMoyamoya: (content: string) => void; // 親コンポーネントに投稿を渡すための関数
};

export default function MoyamoyaInput({
  onAddMoyamoya: onAddPost,
}: MoyamoyaInputProps) {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    onAddPost(text);
    setText(''); // 入力欄をクリア
    setDisabled(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault(); // デフォルトの動作を防ぐ
      if (!disabled) {
        handleClick();
      }
    }
  };

  return (
    <div className="p-4 w-full grid grid-cols-10 gap-4 border border-solid border-black rounded-md">
      <Textarea
        placeholder="「もやもや」をはきだしてみませんか?"
        className="col-span-6 md:col-span-9"
        value={text} // 状態をバインド
        onChange={(e) => {
          setText(e.target.value);
          setDisabled(e.target.value.trim() === ''); // 空白のみの場合は無効化
        }}
        onKeyDown={handleKeyDown} // Ctrl+Enter 検知
      />
      <Button
        className="col-span-4 md:col-span-1 h-full"
        onClick={handleClick}
        disabled={disabled}
      >
        はきだす
      </Button>
    </div>
  );
}
