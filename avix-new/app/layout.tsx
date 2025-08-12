// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './globals.css'
import WhatsAppIcon from './components/WhatsAppIcon'
// Load Libre Baskerville from Google Fonts
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap', // Ensures text is always visible
  fallback: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
});

export const metadata: Metadata = {
  title: 'AVIX Financial Solutions – Where Financial Clarity Begins',
  description: 'Comprehensive financial solutions including personal loans, business loans, home loans, insurance, mutual funds, and investment advisory. Quick approvals, competitive rates.',
  authors: [{ name: 'AVIX Financial Solutions' }],
  metadataBase: new URL('https://avixfinancialsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'AVIX Financial Solutions – Where Financial Clarity Begins',
    description: 'Where Financial Clarity Begins - Quick approvals on personal, home, and business loans – plus insurance, mutual funds & advisory.',
    url: 'https://avixfinancialsolutions.com/',
    images: [
      {
        url: '/assets/avix.webp',
        width: 1200,
        height: 630,
        alt: 'AVIX Financial Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AvixFinServ',
    images: ['/assets/avix.webp'],
  },
  other: {
    'theme-color': '#1a365d',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* DNS prefetch for CDNs */}
        <link rel="dns-prefetch" href="//avixfinancialsolutions.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* Preload critical images with multiple formats */}
        <link rel="preload" as="image" href="/assets/bg.avif" type="image/avif" />
        <link rel="preload" as="image" href="/assets/bg.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/bg.jpg" type="image/jpeg" />
      </head>
      <body 
        className={`${libreBaskerville.variable} font-serif antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppIcon/>
      </body>
    </html>
  );
}