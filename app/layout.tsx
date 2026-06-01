import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import '@/styles/globals.css';
import { Archivo_Black, Noto_Sans_KR } from 'next/font/google';
import React from 'react';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo-black',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${archivoBlack.variable}`}
    >
      <body>
        <Header />
        <main className="mb-40 flex flex-col gap-34">{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
