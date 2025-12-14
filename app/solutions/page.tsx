import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/SolutionsHero";
import ProblemSolutions from "@/components/sections/ProblemSolutions";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions | SiyaSphere",
  description: "Solutions organized by problems: Lead routing, Salesforce optimization, RevOps visibility, automation, and AI workflows.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <ProblemSolutions />
      <CTASection />
    </>
  );
}

