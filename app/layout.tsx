import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { companyName, tagline } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://bluemop.example'),
  title: {
    default: `${companyName} | ${tagline}`,
    template: `%s | ${companyName}`
  },
  description:
    'Commercial facilities services with standardized cleaning operations, controlled access protocols, and continuity-focused support.',
  openGraph: {
    title: `${companyName} | ${tagline}`,
    description:
      'Commercial facilities services with standardized cleaning operations, controlled access protocols, and continuity-focused support.',
    url: 'https://bluemop.example',
    siteName: companyName,
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
