import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Busra Organic Hair Oil | চুল পড়া বন্ধ করুন – প্রাকৃতিক হেয়ার অয়েল",
  description: "১০০% প্রাকৃতিক Busra Organic Hair Oil। চুল পড়া রোধ, খুশকি দূর, নতুন চুল গজান। আমলকী, শিকাকাই, কালোজিরা সহ আয়ুর্বেদিক উপাদান। ক্যাশ অন ডেলিভারি।",
  keywords: [
    "Busra Organic Hair Oil",
    "হেয়ার অয়েল",
    "চুল পড়া বন্ধ",
    "অর্গানিক হেয়ার অয়েল",
    "খুশকি দূর",
    "প্রাকৃতিক চুলের তেল",
    "হেয়ার অয়েল বাংলাদেশ",
    "আমলকী তেল",
    "চুল ঘন করার তেল",
    "Busra Beauty Care",
  ],
  authors: [{ name: "Busra Beauty Care" }],
  creator: "Busra Beauty Care",
  publisher: "Busra Beauty Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://busraorganic.com'),
  alternates: {
    canonical: '/',
    languages: { 'bn-BD': '/bn', 'en-US': '/en' },
  },
  openGraph: {
    title: "Busra Organic Hair Oil | চুল পড়া বন্ধ – প্রাকৃতিক হেয়ার অয়েল",
    description: "১০০% প্রাকৃতিক Busra Organic Hair Oil। চুল পড়া রোধ, খুশকি দূর, নতুন চুল। ক্যাশ অন ডেলিভারি।",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://busraorganic.com',
    siteName: "Busra Organic",
    images: [
      { url: '/images/product-1.png', width: 1200, height: 630, alt: 'Busra Organic Hair Oil' },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Busra Organic Hair Oil | চুল পড়া বন্ধ – প্রাকৃতিক হেয়ার অয়েল",
    description: "১০০% প্রাকৃতিক Busra Organic Hair Oil। চুল পড়া রোধ, খুশকি দূর। ক্যাশ অন ডেলিভারি।",
    images: ['/images/product-1.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
