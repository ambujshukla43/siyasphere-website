import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://siyasphere.com"),
  title: {
    default: "SiyaSphere | AI-Powered GTM Systems",
    template: "%s | SiyaSphere",
  },
  description:
    "Scale revenue by fixing broken GTM systems. AI-powered RevOps, Marketing Automation, Tech Integration, and Sales Analytics for B2B SaaS companies.",
  keywords: [
    "GTM",
    "Go-To-Market",
    "RevOps",
    "Marketing Automation",
    "Salesforce",
    "HubSpot",
    "Lead Routing",
    "Sales Analytics",
    "Tech Integration",
    "B2B SaaS",
    "GTM Systems",
    "Demand Generation",
    "Pipeline Management",
    "Data Integration",
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
    url: "https://siyasphere.com",
    siteName: "SiyaSphere",
    title: "SiyaSphere | AI-Powered GTM Systems",
    description:
      "Scale revenue by fixing broken GTM systems through AI-powered RevOps and Tech Integration.",
    images: [
      {
        url: "https://siyasphere.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SiyaSphere - Fix Your Broken GTM Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiyaSphere | AI-Powered GTM Systems",
    description:
      "Scale revenue by fixing broken GTM systems. AI-powered RevOps, Marketing Automation, and Tech Integration.",
    images: ["https://siyasphere.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code", // Replace with your code
  },
};

// Organization Schema for JSON-LD
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SiyaSphere",
  url: "https://siyasphere.com",
  logo: "https://siyasphere.com/logo.png",
  description:
    "AI-powered GTM systems platform specializing in RevOps, Marketing Automation, and Tech Integration.",
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
    email: "siyasphere15@gmail.com",
    url: "https://siyasphere.com/contact",
  },
  sameAs: [
    "https://linkedin.com/company/siyasphere",
    // Add actual social URLs
  ],
};

// LocalBusiness Schema for JSON-LD
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SiyaSphere",
  url: "https://siyasphere.com",
  email: "siyasphere15@gmail.com",
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
  name: "GTM Audit & Transformation",
  description:
    "Comprehensive GTM audit and transformation service to fix broken systems and scale revenue.",
  provider: {
    "@type": "Organization",
    name: "SiyaSphere",
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
      name: "What is GTM and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go-To-Market (GTM) is your strategy for reaching customers. A broken GTM system costs you revenue through inefficiency, misalignment, and lost opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a GTM transformation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our proven process typically takes 8 weeks from audit to launch, with some results visible within the first 2-3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a GTM audit?",
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
