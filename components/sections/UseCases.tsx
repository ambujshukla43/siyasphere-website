"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const useCases = [
  {
    company: "Mid-Market SaaS Company",
    industry: "Enterprise Software",
    challenge:
      "Marketing and Sales were misaligned with poor lead handoffs. Unclear ownership between teams caused 35% of qualified leads to be ignored. No clear funnel definitions.",
    solution:
      "Implemented RevOps-led GTM redesign with unified funnel definitions, SLA alignment, and clear lifecycle ownership. Used AI to analyze process gaps, with human validation of all workflows.",
    results: [
      "Unified lead-to-revenue funnel",
      "35% reduction in lead leakage",
      "Sales trust in marketing data increased 85%",
      "Predictable revenue reporting",
      "Clear ownership across teams",
    ],
    tools: ["Salesforce", "RevOps Framework", "AI Process Analysis"],
  },
  {
    company: "Growth-Stage Startup",
    industry: "B2B SaaS",
    challenge:
      "Running on legacy CRM and disconnected marketing systems. Critical data migration needed but zero tolerance for downtime or data loss. Historical data integrity concerns.",
    solution:
      "Designed migration-first RevOps strategy with data normalization and AI-assisted validation. Built clean data model, modernized stack without disruption. Human QA reviewed all migrations.",
    results: [
      "Zero-downtime data migration",
      "100% historical data integrity",
      "50% faster GTM execution post-migration",
      "Modern, scalable tech stack",
      "Improved data reliability",
    ],
    tools: ["Legacy CRM", "Salesforce", "Data Migration Tools", "AI Validation"],
  },
  {
    company: "B2B SaaS Company",
    industry: "Enterprise Software",
    challenge:
      "Leads routing to wrong SDRs caused 40% of qualified leads to go uncontacted. Manual routing consumed 2+ hours daily. Territory management was chaotic.",
    solution:
      "Implemented intelligent lead routing with LeanData and Salesforce Flow. Built territory rules, capacity management, and round-robin logic based on AI pattern analysis.",
    results: [
      "95% routing accuracy",
      "Zero manual routing time",
      "40% increase in lead contact rate",
      "25% improvement in SDR productivity",
      "Automated territory management",
    ],
    tools: ["Salesforce", "LeanData", "Outreach"],
  },
  {
    company: "Demand-Gen Focused Company",
    industry: "B2B Technology",
    challenge:
      "High marketing spend with unclear ROI impact. No attribution clarity between campaigns and revenue. Leadership didn't trust marketing data. Budget decisions made blind.",
    solution:
      "Built comprehensive marketing analytics framework with multi-touch attribution. Created revenue-linked dashboards showing campaign-to-opportunity visibility. AI generated insights, humans validated strategy.",
    results: [
      "Complete campaign-to-revenue visibility",
      "Accurate attribution modeling",
      "Better budget allocation decisions",
      "Sales alignment on marketing quality",
      "30% improvement in marketing efficiency",
    ],
    tools: ["Salesforce", "Marketo", "Power BI", "Attribution Models"],
  },
  {
    company: "Enterprise B2B Company",
    industry: "Enterprise Software",
    challenge:
      "Growing sales team but inaccurate forecasts. Limited pipeline visibility. Rep activity disconnected from outcomes. Leadership had no confidence in pipeline predictions.",
    solution:
      "Designed comprehensive sales analytics framework with pipeline health metrics and AI-detected patterns. Built rep performance analytics and reliable forecasting models with human leadership review.",
    results: [
      "Improved forecast accuracy by 35%",
      "Deal velocity visibility",
      "Better coaching conversations",
      "Reduced revenue surprises",
      "Pipeline health monitoring",
    ],
    tools: ["Salesforce", "Sales Analytics", "AI Models", "Forecast Tools"],
  },
  {
    company: "High-Growth GTM Team",
    industry: "B2B SaaS",
    challenge:
      "Manual data entry and lead enrichment consuming 15+ hours weekly. Data quality risks from human error. Team resistant to full automation. SDRs couldn't scale.",
    solution:
      "Designed human-in-the-loop AI workflows with checkpoints and validation gates. Automated routine tasks while keeping humans in control of critical decisions. Built trust-first automation.",
    results: [
      "80% reduction in manual work",
      "3x faster lead processing",
      "Higher data accuracy (98%+)",
      "Strong team adoption",
      "SDR capacity increased 2x without headcount",
    ],
    tools: ["Salesforce Flow", "AI Enrichment APIs", "Clay", "Automation"],
  },
  {
    company: "Enterprise B2B Company",
    industry: "Enterprise Software",
    challenge:
      "Leadership couldn't get consistent GTM reporting. Numbers conflicted across different tools and dashboards. Decisions were delayed waiting for data clarity.",
    solution:
      "Built unified data model across entire GTM stack (Salesforce, HubSpot, Marketo, Outreach). Created role-based executive dashboards with real-time and snapshot views. AI generated insights with human storytelling.",
    results: [
      "Single source of truth",
      "Real-time executive visibility",
      "Faster decision-making",
      "Leadership alignment on numbers",
      "Clear revenue storytelling",
    ],
    tools: ["Salesforce", "HubSpot", "Snowflake", "Tableau", "Data Integration"],
  },
  {
    company: "Enterprise SaaS Provider",
    industry: "Enterprise Software",
    challenge:
      "Salesforce org cluttered with 500+ unused fields. Page loads slow (8+ seconds). Data quality poor. Team avoiding the system. Marketing automation (Marketo), CRM (Salesforce), SDR platform (Outreach) not syncing.",
    solution:
      "Conducted org audit and removed technical debt. Implemented real-time integrations between platforms. Built unified workflows and single source of truth. Redesigned critical objects.",
    results: [
      "60% faster page load times",
      "90% data quality improvement",
      "Real-time synchronization across stack",
      "100% user adoption",
      "50% reduction in support tickets",
    ],
    tools: ["Salesforce", "Marketo", "Outreach", "API Integrations"],
  },  {
    company: "B2B Software Company",
    industry: "Enterprise Software",
    challenge:
      "No marketing automation infrastructure. Manual nurture campaigns. Lead scoring nonexistent. Zero visibility into engagement. Salesforce disconnected from marketing efforts.",
    solution:
      "Implemented Pardot from scratch with complete Salesforce integration. Built automated nurture campaigns, lead scoring models, and engagement tracking. Aligned marketing and sales with unified prospect view.",
    results: [
      "Automated nurture campaigns",
      "AI-powered lead scoring",
      "Real-time engagement tracking",
      "Marketing-Sales alignment",
      "45% improvement in nurture effectiveness",
      "Unified prospect intelligence",
    ],
    tools: ["Salesforce", "Pardot", "Marketing Automation", "Lead Scoring"],
  },
  {
    company: "Mid-Market B2B Company",
    industry: "Enterprise Software",
    challenge:
      "Poor lead data quality from multiple sources. LeanData and Ringlead not implemented. Manual lead routing consuming 4+ hours daily. Territory imbalance causing frustration. No visibility into lead enrichment status.",
    solution:
      "Implemented LeanData and Ringlead from scratch with integrated data enrichment and lead routing. Built Salesforce Flow automations for territory assignment, capacity management, and SLA enforcement. Created data quality gates and continuous validation.",
    results: [
      "92% lead data quality improvement",
      "85% reduction in manual routing time",
      "40% territory balance improvement",
      "Real-time lead enrichment",
      "100% lead coverage with LeanData rules",
      "Multiple automated routing workflows",
      "SLA compliance increased 75%",
    ],
    tools: ["Salesforce", "LeanData", "Ringlead", "Data Enrichment", "Lead Routing Automation"],
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
                    <h4 className="text-sm font-semibold text-[#7FC6C4] uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-400">{useCase.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#7FC6C4] uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-400">{useCase.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#7FC6C4] uppercase tracking-wider mb-3">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-400"
                        >
                          <svg
                            className="w-5 h-5 text-[#7FC6C4] mt-0.5 flex-shrink-0"
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
                          className="px-2 py-1 bg-[#7FC6C4]/20 text-[#7FC6C4] text-xs font-medium rounded-md border border-[#7FC6C4]/30"
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

