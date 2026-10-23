"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";

const icons: Record<string, ReactNode> = {
  integration: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M12 7.5v4m0 0-5.2 4.6M12 11.5l5.2 4.6" />
    </>
  ),
  routing: (
    <>
      <circle cx="4" cy="12" r="1.75" />
      <path d="M5.75 12H10c3 0 4-5 7-5h3M10 12c3 0 4 5 7 5h3" />
      <path d="m18 5 2 2-2 2M18 15l2 2-2 2" />
    </>
  ),
  analytics: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M7 17v-3.5M12 17v-6M17 17V8" />
      <path d="m5 10 4.5-3.5 3 2L19 3.5" />
      <path d="M15.5 3.5H19V7" />
    </>
  ),
  automation: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.75" />
      <rect x="14" y="14" width="7" height="7" rx="1.75" />
      <path d="M6.5 10v3.5a2 2 0 0 0 2 2H14" />
      <path d="m15.5 3-2 3.5h3l-2 3.5" />
    </>
  ),
  ai: (
    <>
      <path d="m11 3 1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
      <path d="m18.5 14.5.75 2 2 .75-2 .75-.75 2-.75-2-2-.75 2-.75z" />
    </>
  ),
};

function OfferingIcon({ name }: { name: string }) {
  return (
    <div className="relative h-14 w-14 rounded-2xl border border-[#7FC6C4]/30 bg-gradient-to-br from-[#7FC6C4]/20 via-[#7FC6C4]/5 to-transparent flex items-center justify-center shadow-[0_0_24px_-6px_rgba(127,198,196,0.45)] transition-all duration-300 group-hover:border-[#7FC6C4]/60 group-hover:shadow-[0_0_32px_-4px_rgba(127,198,196,0.6)]">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[#7FC6C4]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icons[name]}
      </svg>
    </div>
  );
}

const offerings = [
  {
    title: "GTM Tech Stack Integration",
    description:
      "Connect your entire go-to-market ecosystem. We integrate Salesforce, marketing automation, ABM, and enrichment tools into one unified system.",
    tools: ["Salesforce", "Salesforce Account Engagement", "Marketo", "Outreach", "Demandbase", "ZoomInfo", "Lusha", "Apollo"],
    icon: "integration",
    href: "/solutions/ai-gtm-tech-stack",
  },
  {
    title: "Intelligent Lead Routing & Qualification",
    description:
      "Smart routing based on territory, account fit, SDR capacity, and deal probability. Real-time deduplication, enrichment, and lead scoring.",
    tools: ["Lead Routing", "Deduplication", "Enrichment", "Lead Scoring"],
    icon: "routing",
    href: "/solutions/lead-routing",
  },
  {
    title: "Revenue Operations & Analytics",
    description:
      "Complete funnel visibility from demand generation to closed-won deals. Accurate attribution, forecasting, and revenue insights.",
    tools: ["Funnel Analytics", "Attribution", "Revenue Dashboards", "Forecasting"],
    icon: "analytics",
    href: "/solutions/revops-consulting",
  },
  {
    title: "Sales & Marketing Automation",
    description:
      "Salesforce Flow and API-based automation that scales. Automate lead processing, campaign optimization, and SDR workflows.",
    tools: ["Salesforce Flows", "Campaign Automation", "Workflow Optimization"],
    icon: "automation",
    href: "/solutions/salesforce-consulting",
  },
  {
    title: "AI-Driven Intelligence & Enrichment",
    description:
      "Leverage AI for lead scoring, predictive routing, and automated enrichment. Machine learning models that improve with every interaction.",
    tools: ["AI Enrichment", "Predictive Analytics", "Smart Routing"],
    icon: "ai",
    href: "/solutions/ai-gtm-workflows",
  },
];


export default function CoreOfferings() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-400">
            Five core capabilities that transform your Go-To-Market operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="group h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <OfferingIcon name={offering.icon} />
                  <span className="font-mono text-sm text-gray-600 group-hover:text-[#7FC6C4]/70 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <Link href={offering.href} className="hover:text-[#7FC6C4] transition-colors">
                    {offering.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">{offering.description}</p>
                <div className="flex flex-wrap gap-2">
                  {offering.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-[#7FC6C4]/20 text-[#7FC6C4] text-xs font-medium rounded-full border border-[#7FC6C4]/30"
                    >
                      {tool}
                    </span>
                  ))}
                  {offering.tools.length > 3 && (
                    <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-medium rounded-full border border-gray-700">
                      +{offering.tools.length - 3} more
                    </span>
                  )}
                </div>
                <Link
                  href={offering.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7FC6C4] hover:opacity-80"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
            className="text-[#7FC6C4] hover:text-cyan-400 font-semibold text-lg"
          >
            Explore all solutions →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

