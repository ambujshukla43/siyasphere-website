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
    <footer className="bg-gray-900 border-t border-gray-800 pb-24">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Social Links */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group hover:opacity-80 transition-all duration-300">
              <Logo className="gap-0" />
            </Link>

            {/* Social Links */}
            <div className="space-y-3">
              {/* X (Twitter) */}
              <a
                href="https://x.com/siyasphere"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-3 hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Follow SiyaSphere on X (Twitter), opens in new window"
              >
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.677-5.848 6.677H2.42l7.728-8.835L1.167 2.25h6.614l4.6 6.084 5.143-6.084zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                  Follow on X
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

