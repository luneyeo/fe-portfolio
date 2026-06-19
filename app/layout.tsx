import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import '@/styles/globals.css';
import { Archivo_Black } from 'next/font/google';
import React from 'react';

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
    <html lang="ko" className={`${archivoBlack.variable}`}>
      <body>
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
