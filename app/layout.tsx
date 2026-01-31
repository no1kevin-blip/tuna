import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BigEye International | Premium Seafood Trading",
  description: "International seafood trading company with our own tuna fleet in the Indian Ocean. Providing high-quality seafood products to clients across North America and Asia including USA, Canada, Taiwan, China, Japan, Singapore, Philippines, and Sri Lanka.",
  keywords: ["seafood trading", "tuna", "international seafood", "premium seafood", "albacore tuna", "pacific salmon", "seafood export", "BigEye International"],
  authors: [{ name: "BigEye International" }],
  creator: "BigEye International",
  publisher: "BigEye International",
  metadataBase: new URL('https://bigeye-international.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BigEye International | Premium Seafood Trading",
    description: "International seafood trading company with our own tuna fleet. Excellence · Trust · Integrity",
    url: 'https://bigeye-international.com',
    siteName: 'BigEye International',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BigEye International Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BigEye International | Premium Seafood Trading",
    description: "International seafood trading company with our own tuna fleet. Excellence · Trust · Integrity",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
