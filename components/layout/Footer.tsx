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
      { href: "/contact", label: "Book a GTM Audit" },
    ],
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group hover:opacity-80 transition-all duration-300">
              <Logo className="gap-0" />
            </Link>
            <p className="text-gray-400 text-sm mb-8 text-center">
              Fixing broken Go-To-Market systems for B2B companies ready to scale.
            </p>

            {/* Contact & Social Sections */}
            <div className="grid grid-cols-2 gap-6">
              {/* Contact Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-[#7FC6C4]/20 p-5 hover:border-[#7FC6C4]/40 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-[#7FC6C4]/20 flex items-center justify-center mb-3">
                    <svg
                      className="w-5 h-5 text-[#7FC6C4]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:siyasphere15@gmail.com"
                    className="text-[#7FC6C4] hover:text-cyan-400 text-xs font-semibold transition-colors text-center break-all"
                  >
                    siyasphere15@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-[#7FC6C4]/20 p-5 hover:border-[#7FC6C4]/40 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-[#7FC6C4]/20 flex items-center justify-center mb-3">
                    <svg
                      className="w-5 h-5 text-[#7FC6C4]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/company/siyasphere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7FC6C4] hover:text-cyan-400 text-xs font-semibold transition-colors"
                  >
                    Follow us
                  </a>
                </div>
              </div>
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SiyaSphere. All rights reserved.
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

