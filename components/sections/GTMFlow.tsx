"use client";

import { motion } from "framer-motion";

const flowSteps = [
  {
    title: "Marketing",
    description: "Campaigns, lead capture, and MQL generation",
    tools: ["Marketo", "HubSpot", "Pardot"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "SDR",
    description: "Lead routing, enrichment, and qualification",
    tools: ["Outreach", "RingLead", "LeanData"],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Sales",
    description: "Opportunity management and pipeline velocity",
    tools: ["Salesforce", "Revenue Cloud"],
    color: "from-green-500 to-green-600",
  },
  {
    title: "RevOps",
    description: "Attribution, forecasting, and revenue analytics",
    tools: ["Power BI", "Salesforce Dashboards"],
    color: "from-orange-500 to-orange-600",
  },
];

export default function GTMFlow() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            Your Complete GTM Architecture
          </h2>
          <p className="text-xl text-gray-400">
            From first touch to closed-won, we connect every system in your revenue engine.
          </p>
        </motion.div>

        <div className="relative">
          {/* Flow connector line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/30 via-primary-400/50 to-primary-500/30 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Arrow connector for mobile/tablet */}
                {index < flowSteps.length - 1 && (
                  <div className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary-400/50 to-primary-500/30"></div>
                )}

                <div className="bg-gray-900 rounded-xl border-2 border-gray-800 p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary-500/50 transition-all">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg mb-4`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Plus AI-driven workflows that automate enrichment, routing, and prioritization
            across your entire stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

