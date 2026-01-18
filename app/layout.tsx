import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingBar from "@/components/sections/BookingBar";
import { baseMetadata, organizationSchema, localBusinessSchema, serviceSchema } from "@/lib/seoConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...baseMetadata,
  title: "SiyaSphere | AI-Powered GTM Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="author" content="SiyaSphere" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Alternative links for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://siyasphere.in" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <BookingBar />
        <Footer />
      </body>
    </html>
  );
}

