import type { Metadata } from 'next';
import React from 'react';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '여수경 | 포트폴리오',
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
