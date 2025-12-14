import type { Metadata } from "next";
import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import UseCases from "@/components/sections/UseCases";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | SiyaSphere",
  description: "Real results from real companies. See how we've helped B2B companies fix their GTM systems and scale revenue.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <UseCases />
      <CTASection />
    </>
  );
}

