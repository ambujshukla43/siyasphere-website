import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Book Your Free GTM Audit | Contact SiyaSphere",
  description: "Schedule a free 30-minute GTM audit consultation. Let's identify what's broken in your go-to-market systems and create a transformation roadmap.",
  keywords: "schedule demo, book consultation, GTM audit, contact SiyaSphere, RevOps consultation, free audit",
  openGraph: {
    title: "Contact SiyaSphere",
    description: "Book your free GTM audit today.",
    url: "https://siyasphere.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      
      {/* Legal Information Section */}
      <section className="bg-gray-900 border-t border-gray-800 py-8 md:py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Company Info */}
            <div className="text-sm">
              <p className="text-gray-100 font-semibold mb-3">SiyaSphere Consulting</p>
              <div className="text-gray-400 leading-relaxed text-xs md:text-sm space-y-1">
                <p>BM99 Sukhliya, Indore</p>
                <p>MP 452010, India</p>
                <p className="pt-2 text-gray-500">UDYAM-MP-23-0206346</p>
              </div>
            </div>
            
            {/* Divider - Hidden on mobile */}
            <div className="hidden md:block w-px h-12 bg-gray-700"></div>
            
            {/* Compliance Badge */}
            <div className="md:text-right">
              <div className="inline-block md:block">
                <p className="text-xs font-semibold text-[#7FC6C4] mb-2">Registered Business</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Ministry of MSME<br className="hidden md:block" />Government of India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

