// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


export const metadata: Metadata = {
  title: 'AVIX Financial Solutions',
  description: 'Your trusted partner in financial growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body  suppressHydrationWarning={true} >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}