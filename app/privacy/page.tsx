import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SiyaSphere",
  description: "Privacy Policy for SiyaSphere - Learn how we protect your data.",
};

export default function PrivacyPolicy() {
  const sections = [
    {
      number: 1,
      title: "Introduction",
      icon: "📋",
      content: "SiyaSphere is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
    },
    {
      number: 2,
      title: "Information We Collect",
      icon: "📊",
      subsections: [
        {
          title: "Information You Provide Directly",
          items: [
            "Email address when you request a GTM audit",
            "Name, company, phone number, and message when you contact us through forms",
            "Payment information if you purchase our services",
            "Any other information you choose to provide",
          ],
        },
        {
          title: "Information Collected Automatically",
          items: [
            "Browser type and version",
            "IP address and location data",
            "Pages visited and time spent on pages",
            "Referring website information",
            "Device type and operating system",
            "Cookies and similar tracking technologies",
          ],
        },
        {
          title: "Information from Third Parties",
          content: "We may receive information about you from third-party sources to verify information or enhance our records.",
        },
      ],
    },
    {
      number: 3,
      title: "How We Use Your Information",
      icon: "🎯",
      items: [
        "To provide and maintain our services",
        "To respond to your inquiries and requests",
        "To send marketing and promotional communications (with your consent)",
        "To improve our website and user experience",
        "To detect and prevent fraudulent transactions and other illegal activities",
        "To personalize and improve your experience",
        "To comply with legal obligations",
        "To analyze usage patterns and trends",
      ],
    },
    {
      number: 4,
      title: "How We Share Your Information",
      icon: "🔗",
      items: [
        { label: "Service Providers", desc: "Third parties who assist in operating our website and conducting business" },
        { label: "Business Transfers", desc: "In connection with a merger, acquisition, or sale of assets" },
        { label: "Legal Requirements", desc: "When required by law or to protect our rights" },
        { label: "With Your Consent", desc: "When you explicitly agree to information sharing" },
        { label: "Aggregated Data", desc: "We may share aggregated, non-identifiable information" },
      ],
    },
    {
      number: 5,
      title: "Data Security",
      icon: "🔒",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
    },
    {
      number: 6,
      title: "Cookies and Tracking",
      icon: "🍪",
      items: [
        "Authentication and session management",
        "Preferences and settings storage",
        "Analytics and performance monitoring",
        "Marketing and advertising purposes",
      ],
    },
    {
      number: 7,
      title: "Your Privacy Rights",
      icon: "✋",
      items: [
        { label: "Right to Access", desc: "Request a copy of your personal data" },
        { label: "Right to Correction", desc: "Update or correct inaccurate information" },
        { label: "Right to Deletion", desc: "Request deletion of your data" },
        { label: "Right to Opt-Out", desc: "Unsubscribe from marketing communications" },
        { label: "Right to Data Portability", desc: "Receive your data in a portable format" },
      ],
    },
    {
      number: 8,
      title: "Third-Party Links",
      icon: "🔗",
      content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before providing personal information.",
    },
    {
      number: 9,
      title: "Children's Privacy",
      icon: "👨",
      content: "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.",
    },
    {
      number: 10,
      title: "International Data Transfers",
      icon: "🌍",
      content: "Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.",
    },
    {
      number: 11,
      title: "Policy Changes",
      icon: "📝",
      content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the &lsquo;Last updated&rsquo; date. Your continued use of the website constitutes acceptance of the updated policy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="container-custom section-padding bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-b border-[#7FC6C4]/20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7FC6C4]/10 border border-[#7FC6C4]/20">
            <span className="text-[#7FC6C4] text-sm font-semibold">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Last updated: January 13, 2026
          </p>
          <p className="text-gray-500 text-base">
            We're committed to protecting your data and being transparent about how we use it.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-900/50 border border-[#7FC6C4]/20 rounded-lg p-6 mb-12">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-[#7FC6C4]">📑</span> Quick Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sections.map((section) => (
                <Link
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="text-gray-400 hover:text-[#7FC6C4] transition-colors text-sm"
                >
                  {section.number}. {section.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.number} id={`section-${section.number}`} className="scroll-mt-20">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 text-3xl mt-1">
                  {section.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7FC6C4]/20 border border-[#7FC6C4]/40 text-[#7FC6C4] text-sm font-semibold">
                      {section.number}
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* Simple content */}
                  {section.content && (
                    <p className="text-gray-400 mb-4">
                      {section.content}
                    </p>
                  )}

                  {/* Items list */}
                  {section.items && (
                    <div className="space-y-3 mb-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="text-[#7FC6C4] mt-1.5">•</span>
                          {typeof item === "string" ? (
                            <p className="text-gray-400">{item}</p>
                          ) : (
                            <div>
                              <p className="text-white font-semibold">{item.label}</p>
                              <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">
                            {subsection.title}
                          </h3>
                          {subsection.items && (
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-3">
                                  <span className="text-[#7FC6C4] text-sm">✓</span>
                                  <span className="text-gray-400 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {subsection.content && (
                            <p className="text-gray-400 text-sm">{subsection.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="bg-gradient-to-r from-[#7FC6C4]/10 to-cyan-400/10 border border-[#7FC6C4]/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Questions About Your Privacy?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    We're here to help. Contact us with any questions or concerns about our privacy practices.
                  </p>
                  <a
                    href="mailto:siyasphere15@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FC6C4] hover:bg-[#7FC6C4]/90 text-gray-950 font-semibold rounded-lg transition-colors"
                  >
                    <span>Email Us</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link
              href="/"
              className="inline-flex items-center text-[#7FC6C4] hover:text-cyan-400 transition-colors font-semibold"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m7 7l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
