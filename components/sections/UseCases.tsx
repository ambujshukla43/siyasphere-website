"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const useCases = [
  {
    company: "B2B SaaS Company",
    industry: "Enterprise Software",
    challenge:
      "Leads were routing to the wrong SDRs, causing 40% of qualified leads to go uncontacted. Manual routing was taking 2+ hours per day.",
    solution:
      "Implemented intelligent lead routing using LeanData and Salesforce Flow. Built territory rules, capacity management, and round-robin logic.",
    results: [
      "95% routing accuracy",
      "Zero manual routing time",
      "40% increase in lead contact rate",
      "25% improvement in SDR productivity",
    ],
    tools: ["Salesforce", "LeanData", "Outreach"],
  },
  {
    company: "Marketing Tech Company",
    industry: "MarTech",
    challenge:
      "Salesforce org was cluttered with 500+ unused custom fields, causing slow page loads (8+ seconds) and poor data quality. Team avoided using it.",
    solution:
      "Conducted comprehensive org audit, removed unused fields, optimized automation, rebuilt critical objects, and implemented data quality rules.",
    results: [
      "60% faster page load times",
      "90% improvement in data quality",
      "100% user adoption",
      "50% reduction in support tickets",
    ],
    tools: ["Salesforce", "Data Quality Tools"],
  },
  {
    company: "B2B Services Company",
    industry: "Professional Services",
    challenge:
      "No visibility into which marketing campaigns drove revenue. Leadership couldn't answer basic questions about ROI or attribution.",
    solution:
      "Built complete funnel visibility with custom Salesforce dashboards, implemented multi-touch attribution, and automated revenue reporting.",
    results: [
      "Complete MQL → Revenue visibility",
      "Accurate campaign ROI tracking",
      "Data-driven budget allocation",
      "30% improvement in marketing efficiency",
    ],
    tools: ["Salesforce", "Power BI", "Attribution Models"],
  },
  {
    company: "Growth-Stage Startup",
    industry: "B2B SaaS",
    challenge:
      "Manual lead enrichment and data entry was consuming 15+ hours per week. SDRs couldn't scale with company growth.",
    solution:
      "Automated lead enrichment using AI APIs, built Salesforce Flow workflows for data updates, and integrated with enrichment services.",
    results: [
      "80% reduction in manual work",
      "3x faster lead processing",
      "Automated enrichment for 100% of leads",
      "SDR capacity increased by 2x",
    ],
    tools: ["Salesforce Flow", "AI Enrichment APIs", "Clay"],
  },
  {
    company: "Enterprise B2B Company",
    industry: "Enterprise Software",
    challenge:
      "Marketing automation (Marketo), CRM (Salesforce), and SDR platform (Outreach) weren't syncing. Data was always out of date.",
    solution:
      "Architected and implemented real-time integrations between all three platforms. Built unified workflows and single source of truth.",
    results: [
      "Real-time data synchronization",
      "Unified workflows across platforms",
      "Zero manual data entry",
      "100% data accuracy",
    ],
    tools: ["Salesforce", "Marketo", "Outreach", "API Integrations"],
  },
  {
    company: "B2B Services Company",
    industry: "Professional Services",
    challenge:
      "Lead scoring was manual and inconsistent. Hot leads were being deprioritized while cold leads consumed SDR time.",
    solution:
      "Implemented AI-powered lead scoring using historical conversion data. Built intelligent routing and prioritization workflows.",
    results: [
      "AI-powered lead scoring",
      "40% improvement in conversion rate",
      "Intelligent prioritization",
      "30% increase in pipeline velocity",
    ],
    tools: ["Salesforce", "AI Models", "Machine Learning"],
  },
];

export default function UseCases() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-100">
                      {useCase.company}
                    </h3>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {useCase.industry}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-400">{useCase.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-400">{useCase.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
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
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-md border border-primary-500/30"
                        >
                          {tool}
                        </span>
                      ))}
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

