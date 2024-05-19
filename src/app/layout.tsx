import '@/styles/global.css';

import classNames from 'classnames';
import type { Metadata } from 'next';

import { inter, poppins } from '@/next.fonts';

const fontClasses = classNames(inter.variable, poppins.variable);

export const metadata: Metadata = {
  title: 'hakanokay.dev',
  description: 'Portfolio',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
