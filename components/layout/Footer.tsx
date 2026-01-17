import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { href: "/solutions", label: "All Solutions" },
      { href: "/solutions#lead-routing", label: "Lead Routing" },
      { href: "/solutions#salesforce-optimization", label: "Salesforce Optimization" },
      { href: "/solutions#revops", label: "RevOps & Analytics" },
    ],
    Company: [
      { href: "/about", label: "About Us" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/contact", label: "Contact" },
    ],
    Resources: [
      { href: "/case-studies", label: "Use Cases" },
      { href: "/contact", label: "Schedule Audit" },
    ],
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Contact Actions */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group hover:opacity-80 transition-all duration-300">
              <Logo className="gap-0" />
            </Link>

            {/* Contact & Follow Section */}
            <div className="space-y-3">
              {/* Contact Us - Primary Action */}
              <a
                href="mailto:siyasphere15@gmail.com"
                className="group flex items-center gap-2 bg-gradient-to-br from-[#7FC6C4]/10 to-[#7FC6C4]/5 border border-[#7FC6C4]/30 rounded-lg px-4 py-3 hover:border-[#7FC6C4]/60 hover:bg-gradient-to-br hover:from-[#7FC6C4]/15 hover:to-[#7FC6C4]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7FC6C4] focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact SiyaSphere via email"
              >
                <svg
                  className="w-4 h-4 text-[#7FC6C4] group-hover:text-cyan-300 transition-colors"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-[#7FC6C4] group-hover:text-cyan-300 transition-colors">
                  Contact Us
                </span>
              </a>

              {/* Follow on LinkedIn - Secondary Action */}
              <a
                href="https://www.linkedin.com/company/siyasphere/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-3 hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Follow SiyaSphere on LinkedIn, opens in new window"
              >
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-[#0A66C2] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm text-gray-400 group-hover:text-[#0A66C2] transition-colors font-medium">
                  Follow Us
                </span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-100 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          {/* Legal Information */}
          <div className="mb-6 pb-6 border-b border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-gray-300 mb-1">Legal Entity</p>
                <p>SiyaSphere Consulting</p>
                <p className="mt-2 font-semibold text-gray-300">Address</p>
                <p>BM99 Sukhliya<br />Indore, MP 452010<br />India</p>
              </div>
              <div>
                <p className="font-semibold text-gray-300 mb-1">Registration</p>
                <p>UDYAM-MP-23-0206346</p>
                <p className="mt-3 text-xs text-gray-500">Registered under UDYAM<br />Ministry of MSME, India</p>
              </div>
            </div>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SiyaSphere Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

