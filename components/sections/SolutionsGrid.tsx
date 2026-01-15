"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const solutions = [
  {
    id: "revops-transformation",
    title: "Revenue Operations (RevOps) Transformation",
    value: "Align your entire GTM engine for predictable growth.",
    outcomes: [
      "Establish clear GTM alignment across Marketing, Sales, and Customer Success with documented SLAs and handoff processes",
      "Standardize lifecycle stages, metrics definitions, and reporting to eliminate silos and guesswork",
      "Build predictable revenue forecasting and repeatable scaling playbooks that work across teams",
      "Reduce deal cycles and improve win rates through optimized processes and accountability",
      "Enable real-time visibility into pipeline health, bottlenecks, and opportunities",
    ],
  },
  {
    id: "data-migration",
    title: "GTM Data Migration & System Modernization",
    value: "Move fast without breaking anything.",
    outcomes: [
      "Migrate from legacy CRMs and MarTech stacks without losing data or disrupting revenue operations",
      "Normalize, enrich, and consolidate customer data for 360-degree visibility across systems",
      "Implement audit-ready migrations with full compliance, documentation, and zero downtime",
      "Clean up duplicate records, fix data quality issues, and establish governance frameworks",
      "Enable seamless integrations between sales, marketing, and operations tools",
    ],
  },
  {
    id: "marketing-intelligence",
    title: "Marketing Intelligence & Analytics",
    value: "Know what works. Prove what matters.",
    outcomes: [
      "Track campaign performance, attribution, and ROI across all marketing channels with accuracy",
      "Gain funnel visibility from awareness through conversion and understand where you're winning or losing deals",
      "Measure pipeline contribution by campaign, channel, and message for smarter budget allocation",
      "Identify high-intent accounts and leads with predictive scoring and account insights",
      "Report on marketing's true business impact to leadership with confidence",
    ],
  },
  {
    id: "sales-intelligence",
    title: "Sales Intelligence & Analytics",
    value: "Empower reps to close more deals, faster.",
    outcomes: [
      "Monitor pipeline health in real time—see which deals are advancing, stalling, or at risk of slipping",
      "Forecast accurately by analyzing rep productivity, deal velocity, and historical close patterns",
      "Identify your best performers and systematically replicate their winning behaviors across teams",
      "Understand win/loss patterns to sharpen positioning and objection handling",
      "Surface coaching opportunities and early warning signs before deals fall apart",
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization & Executive Dashboards",
    value: "One source of truth for your entire GTM operation.",
    outcomes: [
      "Build role-based dashboards tailored for CMOs, CROs, VPs of Sales, and CFOs—each sees what matters to them",
      "Create executive dashboards that tell the revenue story in real time: pipeline, forecast, win rate, efficiency",
      "Eliminate spreadsheet sprawl and conflicting metrics with centralized, live data visualization",
      "Enable data-driven decision-making across leadership with self-service insights and drill-down capabilities",
      "Report on GTM health and strategic initiatives in a way that resonates with stakeholders",
    ],
  },
  {
    id: "ai-human-workflow",
    title: "AI + Human Workflow for GTM",
    value: "Scale without sacrificing judgment.",
    outcomes: [
      "Deploy AI to handle routine work: data entry, qualification, enrichment, outreach sequencing, and analysis",
      "Keep humans in control of strategy, relationship-building, negotiation, and final decisions",
      "Speed up routine processes while maintaining quality and compliance across teams",
      "Measure the impact: see how much time your team gets back and how quality improves",
      "Build workflows that respect your company's values and brand while scaling execution",
    ],
  },
  {
    id: "ai-tech-stack",
    title: "AI-Powered GTM Tech Stack",
    value: "The modern GTM infrastructure, built for speed and reliability.",
    outcomes: [
      "Integrate Large Language Models (ChatGPT, Claude) into your workflows for intelligent assistance and automation",
      "Connect your entire tech stack with API-first automation (n8n, webhooks, custom integrations) to eliminate manual work",
      "Leverage AI-assisted development and workflow design to build faster and iterate smarter",
      "Standardize on best-in-class GTM platforms (CRM, Marketing Automation, Sales Engagement, Analytics) and make them work together",
      "Future-proof your infrastructure with modular, scalable AI integrations that adapt to your evolving needs",
    ],
  },
];

export default function SolutionsGrid() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="scroll-mt-20"
            >
              <Card className="p-8 lg:p-10 border border-[#7FC6C4]/20 hover:border-[#7FC6C4]/40 transition-all duration-300">
                <div className="max-w-4xl">
                  {/* Title and Value Statement */}
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {solution.title}
                    </h2>
                    <p className="text-[#7FC6C4] font-semibold text-lg">
                      {solution.value}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3">
                    {solution.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="text-[#7FC6C4] font-bold text-lg flex-shrink-0">•</span>
                        <p className="text-gray-400 leading-relaxed">
                          {outcome}
                        </p>
                      </div>
                    ))}
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
