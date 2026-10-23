"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import LineIcon, { type IconName } from "@/components/ui/LineIcon";
import Link from "next/link";

function OfferingIcon({ name }: { name: IconName }) {
  return (
    <div className="relative h-14 w-14 rounded-2xl border border-[#7FC6C4]/30 bg-gradient-to-br from-[#7FC6C4]/20 via-[#7FC6C4]/5 to-transparent flex items-center justify-center shadow-[0_0_24px_-6px_rgba(127,198,196,0.45)] transition-all duration-300 group-hover:border-[#7FC6C4]/60 group-hover:shadow-[0_0_32px_-4px_rgba(127,198,196,0.6)]">
      <LineIcon name={name} className="h-7 w-7 text-[#7FC6C4]" />
    </div>
  );
}

const offerings: { title: string; description: string; tools: string[]; icon: IconName; href: string }[] = [
  {
    title: "GTM Tech Stack Integration",
    description:
      "Connect your entire go-to-market ecosystem. We integrate Salesforce, marketing automation, ABM, and enrichment tools into one unified system.",
    tools: ["Salesforce", "Salesforce Account Engagement", "Marketo", "Outreach", "Demandbase", "ZoomInfo", "Lusha", "Apollo"],
    icon: "network",
    href: "/solutions/ai-gtm-tech-stack",
  },
  {
    title: "Intelligent Lead Routing & Qualification",
    description:
      "Smart routing based on territory, account fit, SDR capacity, and deal probability. Real-time deduplication, enrichment, and lead scoring.",
    tools: ["Lead Routing", "Deduplication", "Enrichment", "Lead Scoring"],
    icon: "route",
    href: "/solutions/lead-routing",
  },
  {
    title: "Revenue Operations & Analytics",
    description:
      "Complete funnel visibility from demand generation to closed-won deals. Accurate attribution, forecasting, and revenue insights.",
    tools: ["Funnel Analytics", "Attribution", "Revenue Dashboards", "Forecasting"],
    icon: "trend",
    href: "/solutions/revops-consulting",
  },
  {
    title: "Sales & Marketing Automation",
    description:
      "Salesforce Flow and API-based automation that scales. Automate lead processing, campaign optimization, and SDR workflows.",
    tools: ["Salesforce Flows", "Campaign Automation", "Workflow Optimization"],
    icon: "workflow",
    href: "/solutions/salesforce-consulting",
  },
  {
    title: "AI-Driven Intelligence & Enrichment",
    description:
      "Leverage AI for lead scoring, predictive routing, and automated enrichment. Machine learning models that improve with every interaction.",
    tools: ["AI Enrichment", "Predictive Analytics", "Smart Routing"],
    icon: "sparkles",
    href: "/solutions/ai-gtm-workflows",
  },
  {
    title: "GTM Data Migration & Modernisation",
    description:
      "Move off legacy CRMs and MarTech without downtime or data loss. Normalised, deduplicated data with governance that keeps it clean.",
    tools: ["CRM Migration", "Deduplication", "Data Governance", "Salesforce", "HubSpot"],
    icon: "database",
    href: "/solutions/crm-data-migration",
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
            Six core capabilities that transform your Go-To-Market operations.
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

