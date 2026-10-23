import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.siyasphere.in"),
  title: "SiyaSphere | AI-Powered GTM Systems",
  description:
    "SiyaSphere fixes broken go-to-market systems for B2B SaaS companies with AI-powered RevOps, marketing automation, tech stack integration, and sales analytics.",
  authors: [{ name: "SiyaSphere" }],
  creator: "SiyaSphere",
  publisher: "SiyaSphere",
  alternates: {
    canonical: "/",
  },
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
    url: "https://www.siyasphere.in",
    siteName: "SiyaSphere",
    title: "SiyaSphere | AI-Powered GTM Systems",
    description:
      "Scale revenue by fixing broken GTM systems through AI-powered RevOps, marketing automation, and tech integration for B2B SaaS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiyaSphere | AI-Powered GTM Systems",
    description:
      "Scale revenue with AI-powered RevOps, marketing automation, and tech integration for B2B SaaS.",
  },
  manifest: "/manifest.json",
  // Set these env vars in Vercel once you have the codes from Search Console / Bing Webmaster Tools
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

// Organization Schema for JSON-LD
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SiyaSphere",
  alternateName: "Siya Sphere",
  legalName: "SiyaSphere Consulting",
  url: "https://www.siyasphere.in",
  logo: "https://www.siyasphere.in/logo.png",
  description:
    "SiyaSphere is a GTM and RevOps consultancy that fixes broken go-to-market systems for B2B SaaS companies through RevOps, marketing automation, tech stack integration, Salesforce consulting, and AI-powered workflows.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BM99 Sukhliya",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452010",
    addressCountry: "IN",
  },
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "contact@siyasphere.in",
    url: "https://www.siyasphere.in/contact",
  },
  areaServed: ["US", "IN", "GB", "Worldwide"],
  knowsAbout: [
    "Revenue Operations",
    "Go-To-Market Strategy",
    "Marketing Automation",
    "Salesforce",
    "HubSpot",
    "Lead Routing",
    "Sales Analytics",
    "AI Agents for GTM",
  ],
  sameAs: [
    "https://www.linkedin.com/company/siyasphere/",
  ],
};

// LocalBusiness Schema for JSON-LD
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SiyaSphere Consulting",
  alternateName: "Siya Sphere",
  url: "https://www.siyasphere.in",
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
  name: "GTM Audit & Transformation",
  description:
    "Comprehensive GTM audit and transformation service to fix broken systems and scale revenue for B2B SaaS companies.",
  provider: {
    "@type": "Organization",
    name: "SiyaSphere",
    url: "https://www.siyasphere.in",
  },
  areaServed: ["US", "IN", "GB", "Worldwide"],
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
      name: "What is SiyaSphere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SiyaSphere is a GTM and RevOps consultancy that fixes broken go-to-market systems for B2B SaaS companies through RevOps, marketing automation, tech stack integration, and AI-powered workflows.",
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
