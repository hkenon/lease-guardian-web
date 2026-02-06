import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lease Decoder- AI-Powered Lease Analysis App",
  description:
    "Don't sign a lease until AI reads it. Lease Decoder protects you from hidden traps, unfair terms, and costly surprises in rental agreements. Free lease analysis app.",
  icons: {
    icon: "/appstore.png",
    apple: "/appstore.png",
  },
  keywords: [
    "lease analysis",
    "rental agreement",
    "AI lease review",
    "tenant rights",
    "lease protection",
    "apartment lease",
    "rental contract",
  ],
  authors: [{ name: "Lease Decoder" }],
  openGraph: {
    title: "Lease Decoder - AI-Powered Lease Analysis",
    description:
      "Protect yourself from hidden lease traps with AI-powered analysis",
    url: "https://leasedecoder.com",
    siteName: "Lease Decoder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lease Decoder - AI-Powered Lease Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lease Decoder - AI-Powered Lease Analysis",
    description:
      "Protect yourself from hidden lease traps with AI-powered analysis",
    images: ["/og-image.png"],
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lease Decoder",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "iOS, Android",
  description:
    "AI-powered lease analysis app that helps renters understand their lease agreements, identify red flags, and protect themselves from unfair terms.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1000",
  },
  author: {
    "@type": "Organization",
    name: "Lease Decoder",
    url: "https://leasedecoder.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
