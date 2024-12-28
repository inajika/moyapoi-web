'use client';

import { useState } from 'react';

import PostList from '@/components/moyamoyaList';
import InputArea from '@/components/moyamoyaInput';

type Moyamoya = {
  id: string;
  content: string;
  date: string;
};

export default function Home() {
  const [moyamoyaList, setMoyamoyaList] = useState<Moyamoya[]>([]); // 投稿の状態を管理

  const handleAddMoyamoya = (content: string) => {
    const newMoyamoya: Moyamoya = {
      id: `${moyamoyaList.length + 1}`, // IDはもやもやの個数にする
      content: content,
      date: new Date().toLocaleString(),
    };
    setMoyamoyaList([newMoyamoya, ...moyamoyaList]); // 新しい投稿を最初に追加
  };

  return (
    <div className="p-1 flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto">
        <PostList moyamoyaList={moyamoyaList} />
      </div>
      <div>
        <InputArea onAddMoyamoya={handleAddMoyamoya} />
      </div>
    </div>
  );
}
