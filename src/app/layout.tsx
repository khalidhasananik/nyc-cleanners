import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg',
  },
  title: {
    default: 'Sparkle Clean NYC | Professional Cleaning Services in New York',
    template: '%s | Sparkle Clean NYC',
  },
  description:
    'Professional commercial and residential cleaning services in NYC. Serving Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. Get a free quote today.',
  metadataBase: new URL('https://aniktests.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aniktests.online',
    siteName: 'Sparkle Clean NYC',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Replace with your actual token from Google Search Console → Settings → Ownership verification
  verification: {
    google: 'w2-fiI5u5I3_SnpSBqB44C4euDYqllOvNHfKBlfhVlQ',
  },
};

const GTM_ID = 'GTM-TFM6V6C2';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sparkle Clean NYC',
  url: 'https://aniktests.online',
  description:
    'Professional commercial and residential cleaning services in NYC. Serving all 5 boroughs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
