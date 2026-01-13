/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | SiyaSphere",
  description: "Terms of Service for SiyaSphere - Review our terms and conditions.",
};

export default function TermsOfService() {
  const sections = [
    {
      number: 1,
      title: "Acceptance of Terms",
      icon: "✅",
      content: "By accessing and using the SiyaSphere website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      number: 2,
      title: "Use License",
      icon: "📜",
      items: [
        "Modify or copy the materials",
        "Use the materials for any commercial purpose or for any public display",
        "Attempt to decompile or reverse engineer any software contained on the website",
        "Remove any copyright or other proprietary notations from the materials",
        "Transfer the materials to another person or 'mirror' the materials on any other server",
        "Violate any applicable laws or regulations",
        "Conduct any systematic or automated data collection",
        "Engage in any form of harassment or abuse",
      ],
      prefix: "Permission is granted to temporarily download one copy of the materials (information or software) on SiyaSphere's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
    },
    {
      number: 3,
      title: "Disclaimer",
      icon: "⚠️",
      content: "The materials on SiyaSphere's website are provided on an 'as is' basis. SiyaSphere makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      number: 4,
      title: "Limitations of Liability",
      icon: "⚖️",
      content: "In no event shall SiyaSphere or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SiyaSphere's website, even if SiyaSphere or an authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      number: 5,
      title: "Accuracy of Materials",
      icon: "📋",
      content: "The materials appearing on SiyaSphere's website could include technical, typographical, or photographic errors. SiyaSphere does not warrant that any of the materials on its website are accurate, complete, or current. SiyaSphere may make changes to the materials contained on its website at any time without notice.",
    },
    {
      number: 6,
      title: "Links",
      icon: "🔗",
      content: "SiyaSphere has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SiyaSphere of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      number: 7,
      title: "Modifications",
      icon: "🔄",
      content: "SiyaSphere may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      number: 8,
      title: "Governing Law",
      icon: "⚖️",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
    },
    {
      number: 9,
      title: "User Responsibilities",
      icon: "👤",
      items: [
        "Provide accurate and complete information when requested",
        "Maintain the confidentiality of any account credentials",
        "Not use our services for any unlawful purposes",
        "Not interfere with or disrupt the services or servers",
        "Respect the intellectual property rights of SiyaSphere and third parties",
        "Not engage in any form of harassment, abuse, or discrimination",
      ],
      prefix: "You agree to:"
    },
    {
      number: 10,
      title: "Service Availability",
      icon: "🔌",
      content: "SiyaSphere makes no guarantee regarding the availability, performance, or reliability of its website or services. We reserve the right to modify, suspend, or discontinue services with or without notice.",
    },
    {
      number: 11,
      title: "Intellectual Property Rights",
      icon: "🔐",
      content: "All content on our website, including text, graphics, logos, images, and software, is the property of SiyaSphere or its content suppliers and is protected by international copyright laws.",
    },
    {
      number: 12,
      title: "Third-Party Services",
      icon: "🌐",
      content: "Our website may integrate with third-party services and platforms. Your use of these services is subject to their respective terms and conditions. SiyaSphere is not responsible for third-party services or their operations.",
    },
    {
      number: 13,
      title: "Limitation of Warranties",
      icon: "🛡️",
      content: "To the fullest extent permitted by applicable law, SiyaSphere disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    },
    {
      number: 14,
      title: "Indemnification",
      icon: "📄",
      content: "You agree to indemnify, defend, and hold harmless SiyaSphere and its officers, directors, employees, and agents from any and all claims, damages, losses, costs, and expenses arising out of your use of the website or violation of these terms.",
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
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Last updated: January 13, 2026
          </p>
          <p className="text-gray-500 text-base">
            Please read our terms and conditions carefully before using our services.
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

                  {/* Prefix text */}
                  {section.prefix && (
                    <p className="text-gray-400 mb-4">
                      {section.prefix}
                    </p>
                  )}

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
                          <p className="text-gray-400">{item}</p>
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
                    Questions About Our Terms?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    If you have any questions about these Terms of Service, please reach out to us.
                  </p>
                  <a
                    href="mailto:siyasphere15@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FC6C4] hover:bg-[#7FC6C4]/90 text-gray-950 font-semibold rounded-lg transition-colors"
                  >
                    <span>Contact Us</span>
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
