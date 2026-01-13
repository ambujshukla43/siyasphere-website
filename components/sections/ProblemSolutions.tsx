"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const solutions = [
  {
    id: "lead-routing",
    problem: "Leads routing to wrong reps or getting stuck?",
    description:
      "Leads are falling through the cracks, going to the wrong SDRs, or sitting in queues. You're wasting effort on unqualified leads while hot opportunities get ignored.",
    solution:
      "We build intelligent routing logic powered by Salesforce, ZoomInfo, Apollo, and Lusha. Territory rules, capacity checks, expertise matching, and account fit scoring ensure every lead reaches the right person at the right time.",
    tools: ["Salesforce", "ZoomInfo", "Apollo", "Lusha", "Outreach"],
    outcomes: [
      "95%+ routing accuracy",
      "50% faster lead assignment",
      "35% boost in SDR productivity",
    ],
  },
  {
    id: "salesforce-optimization",
    problem: "Salesforce is slow, messy, and nobody uses it?",
    description:
      "Your Salesforce org has duplicate records, unused fields, slow page loads, and data nobody trusts. Your team actively avoids it, killing adoption and data quality.",
    solution:
      "We audit and optimize your Salesforce org from the ground up. Clean data, rebuild slow objects, consolidate fields, and create Flows that actually automate your GTM. Your team will want to use it again.",
    tools: ["Salesforce", "Flow Builder", "Validation Rules", "Data Quality Tools"],
    outcomes: [
      "70% faster page loads",
      "95% data quality",
      "100%+ user adoption lift",
    ],
  },
  {
    id: "revops",
    problem: "Can't see revenue funnel clearly? Flying blind on ROI?",
    description:
      "You can't answer basic questions: Which campaigns drive revenue? What's the true CAC? Why did forecast miss? Leadership makes decisions without real visibility into pipeline health.",
    solution:
      "We build end-to-end funnel visibility with proper attribution, automated dashboards, and revenue intelligence. Track MQL → SQL → Opportunity → Revenue with confidence. Understand what actually drives revenue.",
    tools: ["Salesforce", "Demandbase", "Analytics Dashboards", "Attribution"],
    outcomes: [
      "Complete revenue funnel visibility",
      "Accurate campaign attribution",
      "Monthly automated reporting",
    ],
  },
  {
    id: "automation",
    problem: "Manual work killing productivity and scaling?",
    description:
      "Your team wastes hours on repetitive tasks: data entry, lead enrichment, follow-ups, status updates. There's no time for real selling or strategy, and you can't scale without hiring more bodies.",
    solution:
      "We automate everything automatable using Salesforce Flows, API integrations, and AI enrichment. Leads get enriched automatically via Apollo/Lusha, routed intelligently, and tracked with zero manual work.",
    tools: ["Salesforce Flows", "Apollo", "Lusha", "API Integrations", "AI Workflows"],
    outcomes: [
      "85% less manual work",
      "3x faster lead processing",
      "Automated enrichment at scale",
    ],
  },
  {
    id: "integration",
    problem: "Your GTM stack is a disconnected mess?",
    description:
      "Salesforce, Salesforce Account Engagement, Marketo, Outreach, Demandbase, and ZoomInfo don't talk to each other. Data is inconsistent, workflows break, and you're constantly doing manual exports.",
    solution:
      "We architect a unified GTM stack where Salesforce is the source of truth. Real-time sync between Salesforce, SAE, Marketo, Outreach, Demandbase, and your enrichment tools (Apollo, ZoomInfo, Lusha).",
    tools: ["Salesforce", "Salesforce Account Engagement", "Marketo", "Outreach", "Demandbase", "ZoomInfo"],
    outcomes: [
      "Real-time data synchronization",
      "Unified workflows across all tools",
      "Single source of truth",
    ],
  },
  {
    id: "ai-workflows",
    problem: "Competitors using AI while you're stuck in manual work?",
    description:
      "You know AI could transform your GTM, but you don't know where to start. Your competitors are using AI for lead scoring, routing, and enrichment while you're doing it by hand.",
    solution:
      "We implement AI-powered workflows that learn and improve. Intelligent lead scoring using historical conversion data, predictive routing based on rep performance, and automated enrichment via Apollo and Lusha at scale.",
    tools: ["AI Lead Scoring", "Predictive Routing", "Apollo", "Lusha", "Machine Learning"],
    outcomes: [
      "AI-powered lead scoring",
      "30% higher conversion rates",
      "Automated enrichment for 10k+ leads/month",
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

