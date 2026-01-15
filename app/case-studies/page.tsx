import type { Metadata } from "next";
import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import UseCases from "@/components/sections/UseCases";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | GTM Transformation Results | SiyaSphere",
  description: "Real results from B2B companies. See how SiyaSphere helped scale revenue through RevOps, marketing automation, and tech integration. 10+ detailed case studies.",
  keywords: "GTM case studies, RevOps results, marketing automation success, sales analytics implementation, B2B SaaS growth, lead routing optimization",
  openGraph: {
    title: "Case Studies | SiyaSphere",
    description: "Real results from real companies scaling their GTM systems.",
    url: "https://siyasphere.com/case-studies",
    type: "website",
  },
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

