'use client';

import { Card } from '@/components/ui/card';

// もやもやデータの型定義
type Moyamoya = {
  id: string;
  content: string;
  date: string;
};

type MoyamoyaListProps = {
  moyamoyaList: Moyamoya[];
};

export default function MoyamoyaList({ moyamoyaList }: MoyamoyaListProps) {
  return (
    <div className="space-y-2 mb-2">
      {moyamoyaList.map((moyamoya) => (
        <Card key={moyamoya.id} className="p-4">
          <p className="text-sm text-gray-500">あなた</p>
          <p className="mt-2">{moyamoya.content}</p>
          <p className="text-sm text-gray-500">{moyamoya.date}</p>
        </Card>
      ))}
    </div>
  );
}
