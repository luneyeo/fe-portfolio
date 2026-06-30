import type { Metadata } from 'next';
import React from 'react';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '여수경 | 포트폴리오',
  description:
    '사용자의 작은 행동 하나까지 고민하며, 더 나은 경험을 만드는 프론트엔드 개발자 여수경의 포트폴리오입니다.',
  icons: {
    icon: '/icons/logo-lime.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
