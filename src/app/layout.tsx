import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'もやもやぽいぽい',
  description:
    'こころの「もやもや」をなんとなく「ぽいぽい」できるような気がするサービス。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased flex flex-col h-screen w-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
