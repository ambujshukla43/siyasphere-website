"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Link from "next/link";

const offerings = [
  {
    title: "GTM Tech Stack Integration",
    description:
      "Connect your entire go-to-market ecosystem. We integrate Salesforce, marketing automation, ABM, and enrichment tools into one unified system.",
    tools: ["Salesforce", "Salesforce Account Engagement", "Marketo", "Outreach", "Demandbase", "ZoomInfo", "Lusha", "Apollo"],
    icon: "🔌",
  },
  {
    title: "Intelligent Lead Routing & Qualification",
    description:
      "Smart routing based on territory, account fit, SDR capacity, and deal probability. Real-time deduplication, enrichment, and lead scoring.",
    tools: ["Lead Routing", "Deduplication", "Enrichment", "Lead Scoring"],
    icon: "🎯",
  },
  {
    title: "Revenue Operations & Analytics",
    description:
      "Complete funnel visibility from demand generation to closed-won deals. Accurate attribution, forecasting, and revenue insights.",
    tools: ["Funnel Analytics", "Attribution", "Revenue Dashboards", "Forecasting"],
    icon: "📊",
  },
  {
    title: "Sales & Marketing Automation",
    description:
      "Salesforce Flow and API-based automation that scales. Automate lead processing, campaign optimization, and SDR workflows.",
    tools: ["Salesforce Flows", "Campaign Automation", "Workflow Optimization"],
    icon: "⚡",
  },
  {
    title: "AI-Driven Intelligence & Enrichment",
    description:
      "Leverage AI for lead scoring, predictive routing, and automated enrichment. Machine learning models that improve with every interaction.",
    tools: ["AI Enrichment", "Predictive Analytics", "Smart Routing"],
    icon: "🤖",
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
              <Card hover className="h-full flex flex-col">
                <div className="text-4xl mb-4">{offering.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">{offering.description}</p>
                <div className="flex flex-wrap gap-2">
                  {offering.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full border border-primary-500/30"
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
            className="text-primary-400 hover:text-primary-300 font-semibold text-lg"
          >
            Explore all solutions →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

