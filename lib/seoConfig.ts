import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://siyasphere.in"),
  title: {
    default: "SiyaSphere - Siya Sphere GTM Platform | AI-Powered Go-To-Market Solutions",
    template: "%s | Siya Sphere",
  },
  description:
    "SiyaSphere (Siya Sphere) - Scale revenue by fixing broken GTM systems. AI-powered RevOps, Marketing Automation, Tech Integration, and Sales Analytics for B2B SaaS companies. Transform your Go-To-Market strategy with Siya.",
  keywords: [
    "Siya",
    "Siya Sphere",
    "SiyaSphere",
    "GTM",
    "Go-To-Market",
    "Go to Market",
    "RevOps",
    "Revenue Operations",
    "Marketing Automation",
    "Salesforce",
    "HubSpot",
    "Lead Routing",
    "Sales Analytics",
    "Tech Integration",
    "B2B SaaS",
    "GTM Systems",
    "GTM Platform",
    "Demand Generation",
    "Pipeline Management",
    "Data Integration",
    "AI Go-To-Market",
    "AI GTM",
  ],
  authors: [{ name: "SiyaSphere" }],
  creator: "SiyaSphere",
  publisher: "SiyaSphere",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siyasphere.in",
    siteName: "Siya Sphere (SiyaSphere)",
    title: "SiyaSphere - Siya Sphere | AI-Powered GTM Platform",
    description:
      "SiyaSphere (Siya Sphere) - Scale revenue by fixing broken GTM systems through AI-powered RevOps, Marketing Automation, and Tech Integration. Siya helps B2B SaaS companies transform their Go-To-Market strategy.",
    images: [
      {
        url: "https://siyasphere.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "SiyaSphere (Siya Sphere) - Fix Your Broken GTM Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiyaSphere - Siya Sphere GTM Platform",
    description:
      "SiyaSphere (Siya Sphere) - Scale revenue with AI-powered RevOps, Marketing Automation, and Tech Integration for B2B SaaS. Transform your Go-To-Market system with Siya.",
    images: ["https://siyasphere.in/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
};

// Organization Schema for JSON-LD
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SiyaSphere (Siya Sphere)",
  alternateName: "Siya Sphere",
  legalName: "SiyaSphere Consulting",
  url: "https://siyasphere.in",
  logo: "https://siyasphere.in/logo.png",
  description:
    "SiyaSphere - AI-powered GTM systems platform specializing in RevOps, Marketing Automation, Tech Integration, and Sales Analytics for B2B SaaS companies. Siya Sphere helps fix broken Go-To-Market systems.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BM99 Sukhliya",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452010",
    addressCountry: "IN",
  },
  foundingDate: "2023",
  founders: [
    {
      "@type": "Person",
      name: "SiyaSphere Team",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "contact@siyasphere.in",
    url: "https://siyasphere.in/contact",
  },
  sameAs: [
    "https://linkedin.com/company/siyasphere",
  ],
};

// LocalBusiness Schema for JSON-LD
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SiyaSphere (Siya Sphere) Consulting",
  alternateName: "Siya Sphere",
  url: "https://siyasphere.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BM99 Sukhliya",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452010",
    addressCountry: "IN",
  },
  email: "contact@siyasphere.in",
  priceRange: "$$",
  serviceType: [
    "GTM Consulting",
    "RevOps Transformation",
    "Marketing Automation",
    "Tech Integration",
    "Sales Analytics",
  ],
};

// Service Schema for JSON-LD
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GTM Audit & Transformation by SiyaSphere (Siya Sphere)",
  description:
    "Comprehensive GTM audit and transformation service by SiyaSphere (Siya Sphere) to fix broken systems and scale revenue for B2B SaaS companies.",
  provider: {
    "@type": "Organization",
    name: "SiyaSphere (Siya Sphere)",
    alternateName: "Siya Sphere",
  },
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GTM Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RevOps Transformation",
          description: "Design and implement RevOps frameworks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Automation",
          description: "Implement and optimize marketing automation platforms",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tech Integration",
          description: "Integrate and optimize your GTM tech stack",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sales Analytics",
          description: "Build sales intelligence and forecasting systems",
        },
      },
    ],
  },
};

// FAQPage Schema for JSON-LD
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Siya Sphere (SiyaSphere)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siya Sphere (SiyaSphere) is an AI-powered GTM platform that specializes in fixing broken Go-To-Market systems for B2B SaaS companies through RevOps, Marketing Automation, and Tech Integration.",
      },
    },
    {
      "@type": "Question",
      name: "What is GTM and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go-To-Market (GTM) is your strategy for reaching customers. A broken GTM system costs you revenue through inefficiency, misalignment, and lost opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a GTM transformation take with Siya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our proven process typically takes 8 weeks from audit to launch, with some results visible within the first 2-3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a GTM audit by Siya Sphere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our comprehensive GTM audit includes tech stack analysis, process evaluation, data flow assessment, team capability review, and actionable recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies of all sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with growth-stage to enterprise B2B SaaS companies. Our solutions scale from $2M to $100M+ ARR.",
      },
    },
  ],
};
