import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutContent from "@/components/sections/AboutContent";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About SiyaSphere | Fixing Broken GTM Systems",
  description: "Built by operators, for operators. We understand both the tech and the business outcomes.",
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

