import '@/styles/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body>
        <main className="flex flex-col gap-50">{children}</main>
      </body>
    </html>
  );
}
