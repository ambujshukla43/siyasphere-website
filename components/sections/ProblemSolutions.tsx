"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const solutions = [
  {
    id: "lead-routing",
    problem: "Leads not routing correctly?",
    description:
      "Leads are falling through the cracks, going to the wrong reps, or getting stuck in queues. Your SDRs waste time on unqualified leads while hot opportunities sit untouched.",
    solution:
      "We build intelligent routing logic that considers territory, capacity, expertise, and lead score. Every lead gets to the right person at the right time, with full audit trails.",
    tools: ["Salesforce", "LeanData", "RingLead", "Outreach", "HubSpot"],
    outcomes: [
      "95%+ routing accuracy",
      "50% reduction in routing time",
      "30% increase in SDR productivity",
    ],
  },
  {
    id: "salesforce-optimization",
    problem: "Salesforce cluttered and slow?",
    description:
      "Your Salesforce org is a mess. Custom fields everywhere, duplicate records, slow page loads, and no one trusts the data. Your team avoids using it, which makes everything worse.",
    solution:
      "We audit, clean, and optimize your Salesforce org. Remove unused fields, fix data quality, optimize automation, and rebuild critical objects for performance. Your team will actually want to use it.",
    tools: ["Salesforce", "Data Quality Tools", "Flow Builder", "Validation Rules"],
    outcomes: [
      "60% faster page load times",
      "90% data quality improvement",
      "100% user adoption increase",
    ],
  },
  {
    id: "revops",
    problem: "No visibility from MQL to Revenue?",
    description:
      "You can't answer basic questions: Which campaigns drive revenue? What's the true cost per opportunity? Why did we miss forecast? Your leadership is flying blind.",
    solution:
      "We build complete funnel visibility with proper attribution, custom dashboards, and automated reporting. Track MQL → SQL → Opportunity → Revenue with confidence.",
    tools: ["Salesforce", "Power BI", "Attribution Models", "Custom Dashboards"],
    outcomes: [
      "Complete funnel visibility",
      "Accurate revenue attribution",
      "Data-driven forecasting",
    ],
  },
  {
    id: "automation",
    problem: "Manual work killing productivity?",
    description:
      "Your team spends hours on repetitive tasks: data entry, lead enrichment, follow-up emails, status updates. There's no time for actual selling or strategy.",
    solution:
      "We automate everything that can be automated using Salesforce Flow, API integrations, and AI workflows. Your team focuses on high-value work while the system handles the rest.",
    tools: ["Salesforce Flow", "API Integrations", "AI Workflows", "Marketing Automation"],
    outcomes: [
      "80% reduction in manual work",
      "3x faster lead processing",
      "Automated enrichment and routing",
    ],
  },
  {
    id: "integration",
    problem: "Tools not talking to each other?",
    description:
      "Your marketing automation, CRM, SDR platform, and analytics tools are siloed. Data doesn't sync, workflows break, and you're constantly doing manual exports and imports.",
    solution:
      "We architect and implement seamless integrations between all your GTM tools. Real-time data sync, unified workflows, and a single source of truth across your stack.",
    tools: ["Salesforce", "HubSpot", "Marketo", "Outreach", "LeanData", "RingLead"],
    outcomes: [
      "Real-time data synchronization",
      "Unified workflows across tools",
      "Single source of truth",
    ],
  },
  {
    id: "ai-workflows",
    problem: "Missing AI opportunities?",
    description:
      "You know AI could help, but you don't know where to start. Your competitors are using AI for enrichment, routing, and prioritization, while you're still doing it manually.",
    solution:
      "We implement AI-driven workflows that learn and adapt. Intelligent lead enrichment, smart routing based on historical data, and automated prioritization that gets better over time.",
    tools: ["AI Enrichment APIs", "Machine Learning Models", "Automated Workflows"],
    outcomes: [
      "AI-powered lead scoring",
      "Intelligent routing and prioritization",
      "Automated enrichment at scale",
    ],
  },
];

export default function ProblemSolutions() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-20"
            >
              <Card className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Problem & Solution */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
                      {solution.problem}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          The Problem
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          How SiyaSphere Solves It
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {solution.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Outcomes */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Tools Involved
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {solution.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1.5 bg-primary-500/20 text-primary-300 text-sm font-medium rounded-lg border border-primary-500/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Typical Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {solution.outcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-gray-400"
                          >
                            <svg
                              className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

