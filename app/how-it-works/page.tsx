import type { Metadata } from "next";
import HowItWorksHero from "@/components/sections/HowItWorksHero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How It Works | SiyaSphere",
  description: "Our proven 8-week process: From GTM audit to launch. Fast implementation with clear milestones and immediate value.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <CTASection />
    </>
  );
}

