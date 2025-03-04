'use client';

import { useState } from 'react';

import MoyamoyaList from '@/components/moyamoyaList';
import MoyamoyaInput from '@/components/moyamoyaInput';

import { DATE_LOCALE_OPTIONS } from '@/lib/settings';

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
      date: new Date().toLocaleString('ja-JP', DATE_LOCALE_OPTIONS),
    };
    setMoyamoyaList([newMoyamoya, ...moyamoyaList]); // 新しい投稿を最初に追加
  };

  return (
    <div className="p-1 flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto">
        <MoyamoyaList moyamoyaList={moyamoyaList} />
      </div>
      <div>
        <MoyamoyaInput onAddMoyamoya={handleAddMoyamoya} />
      </div>
    </div>
  );
}
