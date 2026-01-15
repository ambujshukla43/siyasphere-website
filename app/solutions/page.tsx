import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import AIDataFlow from "@/components/sections/AIDataFlow";
import SolutionsDifferentiation from "@/components/sections/SolutionsDifferentiation";
import SolutionsCTA from "@/components/sections/SolutionsCTA";

export const metadata: Metadata = {
  title: "GTM Solutions | RevOps, Marketing Automation & Tech Integration | SiyaSphere",
  description: "Comprehensive GTM solutions including RevOps transformation, marketing automation, tech stack integration, sales analytics, lead routing, and AI-powered workflows. Proven for B2B SaaS companies.",
  keywords: "RevOps solutions, marketing automation platforms, GTM tech stack, sales analytics, lead routing, data integration, Salesforce, HubSpot, Marketo, Pardot, Outreach",
  openGraph: {
    title: "GTM Solutions | SiyaSphere",
    description: "AI-powered GTM solutions to transform your revenue engine.",
    url: "https://siyasphere.com/solutions",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsGrid />
      <AIDataFlow />
      <SolutionsDifferentiation />
      <SolutionsCTA />
    </>
  );
}

