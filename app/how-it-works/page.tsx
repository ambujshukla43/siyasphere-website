import type { Metadata } from "next";
import HowItWorksHero from "@/components/sections/HowItWorksHero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Process | 8-Week GTM Transformation | SiyaSphere",
  description: "Discover our proven 8-week GTM transformation process. From comprehensive audit to full implementation with immediate results and clear milestones.",
  keywords: "GTM audit, RevOps implementation, GTM process, Go-To-Market strategy, marketing ops transformation, sales ops optimization",
  openGraph: {
    title: "How It Works | SiyaSphere",
    description: "Our proven 8-week process from GTM audit to launch.",
    url: "https://siyasphere.com/how-it-works",
    type: "website",
  },
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

