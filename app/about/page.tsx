import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutContent from "@/components/sections/AboutContent";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About SiyaSphere | GTM & RevOps Experts",
  description: "Built by operators, for operators. SiyaSphere specializes in fixing broken GTM systems through proven RevOps frameworks, tech integration, and AI-powered workflows.",
  keywords: "about SiyaSphere, GTM experts, RevOps consultants, go-to-market specialists, B2B SaaS consulting",
  openGraph: {
    title: "About SiyaSphere",
    description: "Learn about SiyaSphere's mission to fix broken GTM systems.",
    url: "https://siyasphere.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <CTASection />
    </>
  );
}

