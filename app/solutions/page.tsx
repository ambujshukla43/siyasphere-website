import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsDifferentiation from "@/components/sections/SolutionsDifferentiation";
import SolutionsCTA from "@/components/sections/SolutionsCTA";

export const metadata: Metadata = {
  title: "Solutions | SiyaSphere",
  description: "AI-powered GTM solutions: RevOps transformation, data migration, marketing intelligence, sales analytics, dashboards, and AI workflows.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsDifferentiation />
      <SolutionsCTA />
    </>
  );
}

