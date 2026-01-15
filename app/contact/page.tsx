import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Book Your Free GTM Audit | Contact SiyaSphere",
  description: "Schedule a free 30-minute GTM audit consultation. Let's identify what's broken in your go-to-market systems and create a transformation roadmap.",
  keywords: "schedule demo, book consultation, GTM audit, contact SiyaSphere, RevOps consultation, free audit\",
  openGraph: {
    title: "Contact SiyaSphere\",
    description: \"Book your free GTM audit today.\",
    url: \"https://siyasphere.com/contact\",
    type: \"website\",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}

