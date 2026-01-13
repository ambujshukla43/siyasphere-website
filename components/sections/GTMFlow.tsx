"use client";

import { motion } from "framer-motion";

const flowSteps = [
  {
    title: "Marketing",
    description: "Campaigns, lead capture, and MQL generation",
    tools: ["Marketo", "HubSpot", "Pardot"],
    color: "from-blue-500 to-blue-600",
    icon: "📢",
  },
  {
    title: "SDR",
    description: "Lead routing, enrichment, and qualification",
    tools: ["Outreach", "RingLead", "LeanData", "ZoomInfo", "Lusha", "Apollo", "Demandbase"],
    color: "from-purple-500 to-purple-600",
    icon: "🎯",
  },
  {
    title: "Sales",
    description: "Opportunity management and pipeline velocity",
    tools: ["Salesforce", "Revenue Cloud", "Gong", "Seismic", "Gainsight"],
    color: "from-green-500 to-green-600",
    icon: "💼",
  },
  {
    title: "RevOps",
    description: "Attribution, forecasting, and revenue analytics",
    tools: ["Power BI", "Salesforce Dashboards", "Tableau", "Looker", "Databox", "Clari"],
    color: "from-orange-500 to-orange-600",
    icon: "📊",
  },
];

export default function GTMFlow() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Complete GTM Architecture
          </h2>
          <p className="text-xl text-gray-400">
            From first touch to closed-won, we connect every system in your revenue engine.
          </p>
        </motion.div>

        {/* Desktop Infographic Flow */}
        <div className="relative mb-16">
          {/* Animated flow connector line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#7FC6C4]/20 via-[#7FC6C4]/50 to-[#7FC6C4]/20"></div>

          {/* Arrow indicators */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative mb-12">
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={`arrow-${idx}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 1) * 0.15 }}
                className="col-start-2 col-span-1 flex justify-end"
                style={{ gridColumn: `${(idx + 1) * 1 + idx + 2} / span 1` }}
              >
                <div className="text-[#7FC6C4] text-2xl font-bold">→</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                {/* Mobile/Tablet connector */}
                {index < flowSteps.length - 1 && (
                  <div className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#7FC6C4]/50 to-[#7FC6C4]/20 mt-4"></div>
                )}

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 rounded-2xl border border-[#7FC6C4]/20 p-8 shadow-lg hover:shadow-2xl hover:shadow-[#7FC6C4]/10 hover:border-[#7FC6C4]/40 transition-all duration-300 group-hover:translate-y-[-4px]">
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#7FC6C4]/5 to-transparent rounded-tr-2xl pointer-events-none"></div>
                  
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step number badge */}
                  <div className="absolute top-6 right-6">
                    <div className="w-8 h-8 rounded-full bg-[#7FC6C4]/20 border border-[#7FC6C4]/40 flex items-center justify-center">
                      <span className="text-[#7FC6C4] text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#7FC6C4] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Tools section */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <motion.span
                          key={tool}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 text-xs font-medium rounded-lg border border-gray-600/50 hover:border-[#7FC6C4]/30 transition-colors"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom insights section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-[#7FC6C4]/10 via-transparent to-cyan-400/10 rounded-2xl border border-[#7FC6C4]/20 p-8 lg:p-12 text-center"
        >
          <div className="flex justify-center gap-3 mb-4">
            <span className="text-2xl">⚡</span>
            <span className="text-2xl">🤖</span>
            <span className="text-2xl">🔗</span>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            <span className="font-semibold text-white">Plus AI-driven workflows</span> that automate enrichment, routing, and prioritization across your entire stack. Real-time data synchronization. Intelligent decision-making. Predictable revenue growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

