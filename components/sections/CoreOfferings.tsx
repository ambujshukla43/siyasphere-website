"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Link from "next/link";

const offerings = [
  {
    title: "GTM Tech Integration",
    description:
      "Seamlessly connect Salesforce, HubSpot, Marketo, Outreach, and more. We design data flow architecture and optimize APIs for performance.",
    tools: ["Salesforce", "HubSpot", "Marketo/Pardot", "Outreach", "LeanData", "RingLead", "Clay", "Demandbase"],
    icon: "🔌",
  },
  {
    title: "Lead Lifecycle & Routing",
    description:
      "End-to-end tracking from MQL → SQL → Opportunity. Intelligent routing, deduplication, enrichment, and suppression logic that actually works.",
    tools: ["Lead Routing", "Deduplication", "Enrichment", "Suppression Logic"],
    icon: "🔄",
  },
  {
    title: "Marketing & Sales Automation",
    description:
      "Salesforce Flow-first automation that scales. Optimize campaigns, campaign members, and SDR productivity workflows.",
    tools: ["Salesforce Flow", "Campaign Optimization", "SDR Automation"],
    icon: "⚡",
  },
  {
    title: "RevOps & Analytics",
    description:
      "Complete funnel visibility and attribution. Build dashboards in Salesforce and Power BI that your leadership actually uses.",
    tools: ["Funnel Visibility", "Attribution", "Salesforce Dashboards", "Power BI"],
    icon: "📊",
  },
  {
    title: "AI & Agentic Workflows",
    description:
      "Intelligent automation that learns and adapts. AI-assisted enrichment, routing, and prioritization across your GTM stack.",
    tools: ["AI Enrichment", "Smart Routing", "Intelligent Prioritization"],
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

