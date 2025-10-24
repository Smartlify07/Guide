import type { Metadata } from 'next';
import { Geist, Geist_Mono, Plaster, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const plaster = Plaster({
  variable: '--font-plaster',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Guide',
  description: 'Guide',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${plaster.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
