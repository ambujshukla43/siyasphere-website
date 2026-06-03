"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CaseStudy = {
  company: string;
  clientType: string;
  category: string;
  headline: string;
  challengeSummary: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  keyMetric: string;
  keyMetricLabel: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  "AI Prospecting": "#00D4FF",
  "RevOps": "#7C3AED",
  "Marketing Automation": "#F59E0B",
  "Data Migration": "#10B981",
  "Lead Routing": "#EF4444",
  "Sales Automation": "#00FF88",
  "GTM Launch": "#F97316",
};

const caseStudies: CaseStudy[] = [
  {
    company: "Series B B2B SaaS",
    clientType: "50-Person Sales Team",
    category: "AI Prospecting",
    headline: "Seamless AI + Clay: AI-Powered Prospecting Engine",
    challengeSummary: "SDRs spending 4+ hrs/day manually building stale prospect lists. Contact rates at 8%.",
    challenge:
      "SDRs spending 4+ hours/day manually building prospect lists from LinkedIn. Data was stale, contact rates were 8%, and the team had no systematic way to prioritise accounts by ICP fit. Pipeline was inconsistent and reactive.",
    solution:
      "SiyaSphere deployed a Seamless AI + Clay waterfall enrichment stack integrated with Salesforce and Outreach. Seamless AI used for real-time B2B contact discovery with verified email + mobile. Clay workflows built to auto-enrich new accounts from multiple sources (LinkedIn, Clearbit, BuiltWith) and score ICP fit via AI scoring formula. Enriched records pushed to Salesforce with auto-tag and routed to Outreach sequences based on ICP tier. Apollo.io used as secondary enrichment fallback when Seamless AI confidence score < 80%.",
    results: [
      "0 hours/week manual list building (was 20 hrs/week)",
      "Contact data accuracy: 94% (up from 61%)",
      "SDR outreach volume: +180%",
      "Pipeline generated in 90 days: 3.2x previous quarter",
      "Cost per qualified lead reduced by 44%",
    ],
    tools: ["Seamless AI", "Clay", "Apollo.io", "Outreach", "Salesforce Flow"],
    keyMetric: "3.2x",
    keyMetricLabel: "Pipeline in 90 Days",
  },
  {
    company: "Mid-Market SaaS",
    clientType: "Enterprise Sales Motion",
    category: "AI Prospecting",
    headline: "Actively AI: Account Prioritisation That Doubled Win Rate",
    challengeSummary: "1,200+ accounts in Salesforce, no signal on which were ready to buy. Win rate stuck at 14%.",
    challenge:
      "Sales team had 1,200+ accounts in Salesforce but no systematic way to know which were ready to buy. AEs were self-selecting accounts by gut feel, missing high-intent signals. Marketing was running broad campaigns with no account-level prioritisation. Win rate was 14%.",
    solution:
      "SiyaSphere implemented Actively AI as the account intelligence layer across the entire GTM stack. Actively AI ingested CRM data, website visits, email engagement, and third-party intent signals to generate daily propensity-to-buy scores per account. Scores surfaced in Salesforce as a custom field and triggered automated Slack alerts to AEs when a tier-1 account entered a high-intent window. Marketing used Actively AI segments to trigger Marketo ABM campaigns to accounts in the 80th+ percentile intent score.",
    results: [
      "Win rate improved from 14% → 26% (86% increase)",
      "AE time spent on right accounts: +65%",
      "Marketing ABM campaign CTR: +112%",
      "58% of total closed-won in Q4 from AI-flagged accounts",
      "Revenue attribution to AI-prioritised pipeline: $2.4M incremental",
    ],
    tools: ["Actively AI", "Salesforce", "Marketo", "Slack", "Tableau"],
    keyMetric: "86%",
    keyMetricLabel: "Win Rate Improvement",
  },
  {
    company: "High-Growth B2B Tech",
    clientType: "3-Person SDR Team",
    category: "Sales Automation",
    headline: "Conversica: AI SDR Scales Pipeline Without Headcount",
    challengeSummary: "8,000 dormant MQLs sitting untouched. SDR team overwhelmed. $2M+ pipeline going cold.",
    challenge:
      "Company had 8,000+ dormant MQL leads in Marketo that had never been contacted or had gone cold. SDR team was overwhelmed with current pipeline. Re-engaging the backlog manually was impossible. CMO estimated $2M+ in potential pipeline sitting untouched.",
    solution:
      "SiyaSphere deployed Conversica as an AI SDR layer for dormant lead re-engagement. Conversica AI agent configured with brand-aligned persona and personalised conversation threads. Triggered on all leads > 90 days inactive with engagement score > 40 in Marketo. AI held natural two-way email conversations, answered FAQs, and handed off hot responses to human SDRs within 15 minutes via Salesforce task + Outreach sequence enrolment.",
    results: [
      "8,000 dormant leads re-engaged in 60 days (0 SDR hours)",
      "6.3% re-engagement rate (504 conversations initiated)",
      "187 meetings booked via AI hand-off",
      "Pipeline re-activated: $1.8M",
      "SDR capacity freed: 30+ hours/week redirected to new pipeline",
    ],
    tools: ["Conversica", "Marketo", "Salesforce", "Outreach", "Tableau"],
    keyMetric: "$1.8M",
    keyMetricLabel: "Pipeline Re-Activated",
  },
  {
    company: "Pre-Revenue B2B SaaS",
    clientType: "Founding Sales Team",
    category: "GTM Launch",
    headline: "Apollo.io + Seamless AI: Full-Funnel Outbound for a GTM Launch",
    challengeSummary: "No data, no CRM, no sequences. Needed $500K ARR in 6 months from a standing start.",
    challenge:
      "Newly funded startup needed to build outbound GTM motion from scratch. No existing data, no CRM, no sequences. Needed to identify ICP, build prospect lists, and generate first $500K ARR within 6 months. Budget constrained — needed maximum output from lean stack.",
    solution:
      "SiyaSphere designed and implemented a full outbound GTM stack using Apollo.io as the primary prospecting + sequencing platform with Seamless AI for contact verification. ICP definition workshop translated into Apollo.io filters. Seamless AI layered in to verify and enrich contact data before sequence enrolment. HubSpot CRM implemented as free-tier foundation. Clay used to build ICP fit score enrichment workflow. Weekly iteration on copy based on reply rate signals.",
    results: [
      "0 → $480K ARR in 5.5 months",
      "2,400 prospects contacted in month 1",
      "Email open rate: 52% (vs 21% industry avg)",
      "Reply rate: 14% (vs 3% industry avg)",
      "Email bounce rate: < 2% (Seamless AI verification)",
      "43 demos booked in first 90 days",
    ],
    tools: ["Apollo.io", "Seamless AI", "Clay", "HubSpot", "LinkedIn Sales Nav"],
    keyMetric: "$480K ARR",
    keyMetricLabel: "in 5.5 Months",
  },
  {
    company: "Mid-Market SaaS Company",
    clientType: "Enterprise Software",
    category: "RevOps",
    headline: "GTM Redesign Eliminates 35% Lead Leakage",
    challengeSummary: "Marketing and sales misaligned with poor handoffs. 35% of qualified leads going ignored.",
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
    keyMetric: "35%",
    keyMetricLabel: "Lead Leakage Eliminated",
  },
  {
    company: "Growth-Stage Startup",
    clientType: "B2B SaaS",
    category: "Data Migration",
    headline: "Zero-Downtime CRM Migration to Modern Stack",
    challengeSummary: "Legacy CRM migration with zero tolerance for downtime or data loss.",
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
    keyMetric: "100%",
    keyMetricLabel: "Data Integrity Preserved",
  },
  {
    company: "B2B SaaS Company",
    clientType: "Enterprise Software",
    category: "Lead Routing",
    headline: "Intelligent Lead Routing Raises Contact Rate 40%",
    challengeSummary: "Leads routing to wrong SDRs. 40% of qualified leads uncontacted. Manual routing 2+ hrs/day.",
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
    keyMetric: "95%",
    keyMetricLabel: "Routing Accuracy",
  },
  {
    company: "Demand-Gen Company",
    clientType: "B2B Technology",
    category: "Marketing Automation",
    headline: "Multi-Touch Attribution Unlocks 30% Marketing Efficiency",
    challengeSummary: "High marketing spend with unclear ROI. Leadership didn't trust marketing data.",
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
    keyMetric: "30%",
    keyMetricLabel: "Marketing Efficiency Gain",
  },
  {
    company: "Enterprise B2B",
    clientType: "Enterprise Software",
    category: "RevOps",
    headline: "AI Forecasting Improves Pipeline Accuracy by 35%",
    challengeSummary: "Growing sales team with inaccurate forecasts. Leadership had no confidence in pipeline.",
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
    keyMetric: "35%",
    keyMetricLabel: "Forecast Accuracy Gain",
  },
  {
    company: "High-Growth GTM Team",
    clientType: "B2B SaaS",
    category: "Marketing Automation",
    headline: "Human-in-the-Loop AI Cuts Manual Work 80%",
    challengeSummary: "Manual data entry consuming 15+ hrs/week. Team resistant to full automation.",
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
    keyMetric: "2x",
    keyMetricLabel: "SDR Capacity (No Headcount)",
  },
  {
    company: "Enterprise B2B",
    clientType: "Enterprise Software",
    category: "RevOps",
    headline: "Single Source of Truth Across Full GTM Stack",
    challengeSummary: "Leadership couldn't get consistent GTM reporting. Numbers conflicted across all tools.",
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
    keyMetric: "1",
    keyMetricLabel: "Unified Source of Truth",
  },
  {
    company: "Enterprise SaaS Provider",
    clientType: "Enterprise Software",
    category: "RevOps",
    headline: "Salesforce Org Cleanup Cuts Page Load 60%",
    challengeSummary: "500+ unused fields, 8-second page loads, zero team adoption.",
    challenge:
      "Salesforce org cluttered with 500+ unused fields. Page loads slow (8+ seconds). Data quality poor. Team avoiding the system. Marketo, Salesforce, Outreach not syncing.",
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
    keyMetric: "60%",
    keyMetricLabel: "Faster Page Loads",
  },
  {
    company: "Mid-Market B2B",
    clientType: "Enterprise Software",
    category: "Lead Routing",
    headline: "LeanData + RingLead Stack Achieves 92% Data Quality",
    challengeSummary: "Poor lead data from multiple sources. Manual routing 4+ hrs/day. No visibility into enrichment.",
    challenge:
      "Poor lead data quality from multiple sources. LeanData and Ringlead not implemented. Manual lead routing consuming 4+ hours daily. Territory imbalance causing frustration. No visibility into lead enrichment status.",
    solution:
      "Implemented LeanData and Ringlead from scratch with integrated data enrichment and lead routing. Built Salesforce Flow automations for territory assignment, capacity management, and SLA enforcement. Created data quality gates and continuous validation.",
    results: [
      "92% lead data quality improvement",
      "85% reduction in manual routing time",
      "40% territory balance improvement",
      "Real-time lead enrichment",
      "SLA compliance increased 75%",
    ],
    tools: ["Salesforce", "LeanData", "Ringlead", "Data Enrichment"],
    keyMetric: "92%",
    keyMetricLabel: "Lead Data Quality",
  },
  {
    company: "Leading Data Analytics Firm",
    clientType: "GTM Strategy / Data & Analytics",
    category: "AI Prospecting",
    headline: "964 Decision-Maker Contacts Mapped Across 450 Accounts",
    challengeSummary: "Large account universe with no technology intelligence to prioritise outbound campaigns.",
    challenge:
      "The consulting firm needed to identify and prioritise target accounts in the mid-market and enterprise space running legacy data infrastructure. With a large account universe but limited technology intelligence and decision-maker contact data, their outbound sales team lacked visibility to prioritise and activate meaningful outreach campaigns.",
    solution:
      "SiyaSphere researched and mapped legacy data technologies (EDW, ETL & BI platforms) and incumbent vendors across 450+ target accounts. The team identified key decision makers across Data, Analytics, AI, and Cloud functions with verified LinkedIn profiles and contact details. Full firmographic enrichment per account delivered to enable precision targeting.",
    results: [
      "450 companies researched and profiled",
      "346 companies with confirmed legacy tech signals",
      "964 qualified decision maker contacts identified",
      "224 companies ready for targeted outreach",
      "100% verified contact data",
    ],
    tools: ["Market Research", "Technology Intelligence", "Contact Enrichment", "Firmographic Data"],
    keyMetric: "964",
    keyMetricLabel: "Decision-Makers Mapped",
  },
];

const ALL_CATEGORIES = [
  "All",
  "AI Prospecting",
  "Lead Routing",
  "RevOps",
  "Marketing Automation",
  "Data Migration",
  "Sales Automation",
  "GTM Launch",
];

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const color = CATEGORY_COLORS[cs.category] ?? "#00D4FF";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, delay: (index % 4) * 0.07 }}
      className="rounded-2xl border flex flex-col overflow-hidden"
      style={{ background: "#0D1427", borderColor: "rgba(255,255,255,0.07)" }}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ background: color }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Category + client type */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border flex-shrink-0"
            style={{
              color,
              borderColor: `${color}40`,
              background: `${color}12`,
            }}
          >
            {cs.category}
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider text-right leading-snug">
            {cs.clientType}
          </span>
        </div>

        {/* Headline + summary */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug">{cs.headline}</h3>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">{cs.challengeSummary}</p>

        {/* Key metric callout */}
        <div
          className="flex items-center gap-4 rounded-xl p-4 mb-5 border"
          style={{ background: `${color}0C`, borderColor: `${color}25` }}
        >
          <div className="text-3xl font-bold font-mono leading-none flex-shrink-0" style={{ color }}>
            {cs.keyMetric}
          </div>
          <div className="text-sm text-gray-300 leading-tight">{cs.keyMetricLabel}</div>
        </div>

        {/* Tool chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cs.tools.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-md border font-medium"
              style={{
                color: `${color}BB`,
                borderColor: `${color}25`,
                background: `${color}0A`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color }}
        >
          {expanded ? "Collapse" : "Read Story"}
          <motion.span
            animate={{ x: expanded ? 2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </button>

        {/* Expanded detail */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.26 }}
              className="overflow-hidden"
            >
              <div
                className="pt-5 mt-5 border-t space-y-5"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color }}
                  >
                    Challenge
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color }}
                  >
                    Solution
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-3"
                    style={{ color }}
                  >
                    Results
                  </div>
                  <ul className="space-y-2">
                    {cs.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-0.5 flex-shrink-0" style={{ color }}>
                          ✓
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <section className="py-16 lg:py-20" style={{ background: "#080D1A" }}>
      <div className="container-custom">

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {ALL_CATEGORIES.map((cat) => {
            const active = cat === activeFilter;
            const color = cat === "All" ? "#00D4FF" : (CATEGORY_COLORS[cat] ?? "#00D4FF");
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border transition-all duration-200"
                style={
                  active
                    ? { background: `${color}1A`, borderColor: color, color }
                    : { background: "transparent", borderColor: "rgba(255,255,255,0.1)", color: "#6B7280" }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Card grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs, i) => (
              <CaseStudyCard key={cs.headline} cs={cs} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600 text-sm">
            No case studies in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
