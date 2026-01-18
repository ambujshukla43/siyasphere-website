import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import GTMFlow from "@/components/sections/GTMFlow";
import CoreOfferings from "@/components/sections/CoreOfferings";
import SocialProof from "@/components/sections/SocialProof";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "SiyaSphere | AI-Powered Go-To-Market Systems",
  description: "Transform your broken GTM systems with AI-powered RevOps, marketing automation, tech integration, and sales analytics. Scale revenue for B2B SaaS companies.",
  keywords: "GTM systems, RevOps consulting, marketing automation, tech stack integration, sales analytics, lead routing, B2B SaaS, demand generation",
  openGraph: {
    title: "SiyaSphere | AI-Powered GTM Systems",
    description: "Scale revenue by fixing broken go-to-market systems through AI and RevOps.",
    url: "https://siyasphere.in",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ValueProposition />
      <GTMFlow />
      <CoreOfferings />
      <CTASection />
    </>
  );
}

