import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import GTMFlow from "@/components/sections/GTMFlow";
import CoreOfferings from "@/components/sections/CoreOfferings";
import SocialProof from "@/components/sections/SocialProof";
import CTASection from "@/components/sections/CTASection";

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

