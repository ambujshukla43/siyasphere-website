import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Book a GTM Audit | SiyaSphere",
  description: "Book a free GTM audit and discover how to turn your tech stack into a revenue engine.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}

