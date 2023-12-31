import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextAuthProvider from './contexts/NextAuthProvider';

export const metadata: Metadata = {
  title: 'SSO Next App',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
