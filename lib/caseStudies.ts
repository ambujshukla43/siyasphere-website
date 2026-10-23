export type CaseStudy = {
  slug: string;
  category: string;
  client: string;
  clientType: string;
  timeline?: string;
  title: string;
  cardTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  cardSummary: string;
  keyMetric: string;
  keyMetricLabel: string;
  highlights: { value: string; label: string }[];
  challenge: string[];
  approach: { title: string; detail: string }[];
  results: string[];
  tools: string[];
  takeaway: string;
};

export const CATEGORY_COLORS: Record<string, string> = {
  "AI Prospecting": "#00D4FF",
  "RevOps": "#7C3AED",
  "Marketing Automation": "#F59E0B",
  "Data Migration": "#10B981",
  "Lead Routing": "#EF4444",
  "Sales Automation": "#00FF88",
  "GTM Launch": "#F97316",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-prospecting-engine-seamless-ai-clay",
    category: "AI Prospecting",
    client: "Series B B2B SaaS",
    clientType: "50-Person Sales Team",
    timeline: "90 days",
    title: "3.2x Pipeline in 90 Days with an AI Prospecting Engine Built on Seamless AI + Clay",
    cardTitle: "3.2x Pipeline in 90 Days with Seamless AI + Clay",
    metaTitle: "AI Prospecting Case Study: 3.2x Pipeline with Seamless AI + Clay",
    metaDescription:
      "How SiyaSphere replaced manual list building with a Seamless AI + Clay enrichment engine, lifting contact accuracy to 94% and pipeline 3.2x in 90 days.",
    summary:
      "A Series B SaaS company's SDRs were losing 20 hours a week to manual list building, with contact data that was only 61% accurate. SiyaSphere built a waterfall enrichment engine on Seamless AI and Clay that scores ICP fit automatically and routes accounts into Outreach sequences by tier. Within 90 days, pipeline was 3.2x the previous quarter and cost per qualified lead fell 44%.",
    cardSummary: "SDRs spent 4+ hrs/day building stale prospect lists. Contact rates sat at 8%.",
    keyMetric: "3.2x",
    keyMetricLabel: "Pipeline in 90 days",
    highlights: [
      { value: "3.2x", label: "Pipeline vs. previous quarter" },
      { value: "94%", label: "Contact data accuracy (from 61%)" },
      { value: "-44%", label: "Cost per qualified lead" },
    ],
    challenge: [
      "SDRs spent 4+ hours a day building prospect lists by hand from LinkedIn.",
      "Contact data went stale quickly, holding contact rates at 8%.",
      "There was no systematic way to prioritise accounts by ICP fit, so pipeline was inconsistent and reactive.",
    ],
    approach: [
      {
        title: "Real-time contact discovery",
        detail: "Deployed Seamless AI to find verified B2B emails and mobile numbers in real time, replacing manual LinkedIn research.",
      },
      {
        title: "Waterfall enrichment in Clay",
        detail: "Built Clay workflows that auto-enrich every new account from LinkedIn, Clearbit, and BuiltWith, with Apollo.io as a fallback whenever Seamless AI confidence dropped below 80%.",
      },
      {
        title: "AI-driven ICP scoring",
        detail: "Added an AI scoring formula in Clay that grades each account's ICP fit and tags it into a tier.",
      },
      {
        title: "Automated CRM sync and sequencing",
        detail: "Pushed enriched, tagged records into Salesforce and routed them to the right Outreach sequence based on ICP tier, with no manual hand-off.",
      },
    ],
    results: [
      "Manual list building cut from 20 hours/week to zero",
      "Contact data accuracy rose to 94% (up from 61%)",
      "SDR outreach volume up 180%",
      "Pipeline generated in 90 days reached 3.2x the previous quarter",
      "Cost per qualified lead reduced by 44%",
    ],
    tools: ["Seamless AI", "Clay", "Apollo.io", "Outreach", "Salesforce Flow"],
    takeaway:
      "Single-source enrichment leaves gaps. A waterfall (primary provider, then fallbacks gated on confidence scores) is what makes AI prospecting data accurate enough to automate sequencing end to end.",
  },
  {
    slug: "actively-ai-account-prioritization",
    category: "AI Prospecting",
    client: "Mid-Market SaaS",
    clientType: "Enterprise Sales Motion",
    title: "Win Rate from 14% to 26% with AI Account Prioritisation on Actively AI",
    cardTitle: "Win Rate from 14% to 26% with Actively AI",
    metaTitle: "Account Prioritisation Case Study: 86% Higher Win Rate with Actively AI",
    metaDescription:
      "How SiyaSphere used Actively AI propensity scores in Salesforce, Slack, and Marketo to lift win rate from 14% to 26% and add $2.4M in pipeline revenue.",
    summary:
      "A mid-market SaaS team had 1,200+ accounts in Salesforce and no signal on which were ready to buy, so AEs picked accounts by gut feel and win rate sat at 14%. SiyaSphere made Actively AI the account intelligence layer, surfacing daily propensity-to-buy scores in Salesforce, Slack, and Marketo. Win rate rose to 26%, and AI-flagged accounts drove 58% of Q4 closed-won revenue.",
    cardSummary: "1,200+ accounts in Salesforce and no signal on which were ready to buy. Win rate stuck at 14%.",
    keyMetric: "86%",
    keyMetricLabel: "Win rate improvement",
    highlights: [
      { value: "14% → 26%", label: "Win rate" },
      { value: "$2.4M", label: "Incremental revenue from AI-prioritised pipeline" },
      { value: "58%", label: "Of Q4 closed-won from AI-flagged accounts" },
    ],
    challenge: [
      "1,200+ accounts in Salesforce with no systematic view of buying readiness.",
      "AEs self-selected accounts by gut feel and missed high-intent signals.",
      "Marketing ran broad campaigns with no account-level prioritisation, and win rate was 14%.",
    ],
    approach: [
      {
        title: "One intent model across the stack",
        detail: "Implemented Actively AI to ingest CRM data, website visits, email engagement, and third-party intent signals into daily propensity-to-buy scores per account.",
      },
      {
        title: "Scores where reps work",
        detail: "Surfaced scores in Salesforce as a custom field so prioritisation lived inside the AE's daily workflow.",
      },
      {
        title: "Real-time intent alerts",
        detail: "Triggered automated Slack alerts to the owning AE whenever a tier-1 account entered a high-intent window.",
      },
      {
        title: "Intent-driven ABM",
        detail: "Used Actively AI segments to trigger Marketo ABM campaigns for accounts in the 80th+ percentile of intent.",
      },
    ],
    results: [
      "Win rate improved from 14% to 26% (an 86% increase)",
      "AE time spent on the right accounts up 65%",
      "ABM campaign click-through rate up 112%",
      "58% of Q4 closed-won came from AI-flagged accounts",
      "$2.4M incremental revenue attributed to AI-prioritised pipeline",
    ],
    tools: ["Actively AI", "Salesforce", "Marketo", "Slack", "Tableau"],
    takeaway:
      "Intent scores only change outcomes when they reach the rep at the right moment. Putting scores in Salesforce, alerts in Slack, and segments in Marketo turned one model into aligned sales and marketing action.",
  },
  {
    slug: "conversica-ai-sdr-dormant-leads",
    category: "Sales Automation",
    client: "High-Growth B2B Tech",
    clientType: "3-Person SDR Team",
    timeline: "60 days",
    title: "$1.8M Pipeline Revived from 8,000 Dormant Leads with a Conversica AI SDR",
    cardTitle: "$1.8M Pipeline Revived with a Conversica AI SDR",
    metaTitle: "AI SDR Case Study: $1.8M Pipeline from Dormant Leads with Conversica",
    metaDescription:
      "How SiyaSphere deployed Conversica as an AI SDR to re-engage 8,000 dormant MQLs in 60 days, booking 187 meetings and reviving $1.8M in pipeline without new hires.",
    summary:
      "A three-person SDR team had 8,000+ dormant MQLs in Marketo that nobody had time to work, with an estimated $2M+ in pipeline going cold. SiyaSphere deployed Conversica as an AI SDR that held two-way email conversations and handed hot replies to human SDRs within 15 minutes. In 60 days it re-engaged the whole backlog, booked 187 meetings, and revived $1.8M in pipeline with zero SDR hours.",
    cardSummary: "8,000 dormant MQLs untouched. SDR team overwhelmed. $2M+ pipeline going cold.",
    keyMetric: "$1.8M",
    keyMetricLabel: "Pipeline re-activated",
    highlights: [
      { value: "$1.8M", label: "Pipeline re-activated" },
      { value: "187", label: "Meetings booked via AI hand-off" },
      { value: "30+ hrs", label: "SDR time freed per week" },
    ],
    challenge: [
      "8,000+ MQLs in Marketo had never been contacted or had gone cold.",
      "The SDR team was fully consumed by current pipeline, so manual re-engagement was impossible.",
      "The CMO estimated $2M+ in potential pipeline sitting untouched.",
    ],
    approach: [
      {
        title: "Brand-aligned AI persona",
        detail: "Configured a Conversica AI agent with a brand-aligned persona and personalised conversation threads.",
      },
      {
        title: "Targeted re-engagement trigger",
        detail: "Enrolled every lead inactive for 90+ days with a Marketo engagement score above 40, focusing AI effort on leads with real prior interest.",
      },
      {
        title: "Two-way conversations",
        detail: "Let the AI hold natural email conversations and answer common questions until a lead showed buying intent.",
      },
      {
        title: "15-minute human hand-off",
        detail: "Routed hot responses to human SDRs within 15 minutes through a Salesforce task plus Outreach sequence enrolment.",
      },
    ],
    results: [
      "8,000 dormant leads re-engaged in 60 days with zero SDR hours",
      "6.3% re-engagement rate (504 conversations started)",
      "187 meetings booked through AI hand-off",
      "$1.8M in pipeline re-activated",
      "30+ SDR hours per week redirected to new pipeline",
    ],
    tools: ["Conversica", "Marketo", "Salesforce", "Outreach", "Tableau"],
    takeaway:
      "AI SDRs perform best on volume humans can't reach, like dormant backlogs, while humans own the conversation once intent appears. A fast, automated hand-off is what turns AI replies into meetings.",
  },
  {
    slug: "outbound-gtm-launch-apollo-seamless-ai",
    category: "GTM Launch",
    client: "Pre-Revenue B2B SaaS",
    clientType: "Founding Sales Team",
    timeline: "5.5 months",
    title: "$0 to $480K ARR in 5.5 Months: An Outbound GTM Launch on Apollo.io + Seamless AI",
    cardTitle: "$0 to $480K ARR in 5.5 Months with a Lean Outbound Stack",
    metaTitle: "GTM Launch Case Study: $0 to $480K ARR with Apollo.io + Seamless AI",
    metaDescription:
      "How SiyaSphere built a lean outbound GTM stack from scratch with Apollo.io, Seamless AI, Clay, and HubSpot, reaching $480K ARR in 5.5 months with a 14% reply rate.",
    summary:
      "A newly funded startup had no data, no CRM, and no sequences, and needed $500K ARR within six months on a tight budget. SiyaSphere designed a lean outbound stack with Apollo.io for prospecting and sequencing, Seamless AI for verification, Clay for ICP scoring, and HubSpot as the CRM. The company went from $0 to $480K ARR in 5.5 months with a 14% reply rate.",
    cardSummary: "No data, no CRM, no sequences. Needed $500K ARR in 6 months from a standing start.",
    keyMetric: "$480K",
    keyMetricLabel: "ARR in 5.5 months",
    highlights: [
      { value: "$480K", label: "ARR in 5.5 months" },
      { value: "14%", label: "Reply rate (vs. 3% industry avg)" },
      { value: "43", label: "Demos booked in first 90 days" },
    ],
    challenge: [
      "A newly funded startup had to build an outbound motion from nothing: no data, CRM, or sequences.",
      "The goal was the first $500K ARR within six months.",
      "The budget was tight, so the stack had to deliver maximum output for minimal cost.",
    ],
    approach: [
      {
        title: "ICP workshop to filters",
        detail: "Ran an ICP definition workshop and translated the output directly into Apollo.io search filters.",
      },
      {
        title: "Verified data before sending",
        detail: "Layered Seamless AI verification and enrichment on every contact before sequence enrolment to protect deliverability.",
      },
      {
        title: "ICP fit scoring in Clay",
        detail: "Built a Clay enrichment workflow that scores each prospect's ICP fit so the best-fit accounts get worked first.",
      },
      {
        title: "Free-tier CRM foundation",
        detail: "Implemented HubSpot's free CRM as a foundation that can scale with the company.",
      },
      {
        title: "Weekly copy iteration",
        detail: "Reviewed reply-rate signals every week and iterated messaging based on what was working.",
      },
    ],
    results: [
      "$0 to $480K ARR in 5.5 months",
      "2,400 prospects contacted in month one",
      "52% email open rate (vs. 21% industry average)",
      "14% reply rate (vs. 3% industry average)",
      "Bounce rate under 2% thanks to Seamless AI verification",
      "43 demos booked in the first 90 days",
    ],
    tools: ["Apollo.io", "Seamless AI", "Clay", "HubSpot", "LinkedIn Sales Navigator"],
    takeaway:
      "Early-stage outbound doesn't need an enterprise stack. A sharp ICP, verified data, and weekly iteration on copy matter more than tool count, and they keep costs low while the motion proves itself.",
  },
  {
    slug: "revops-gtm-redesign-lead-leakage",
    category: "RevOps",
    client: "Mid-Market SaaS Company",
    clientType: "Enterprise Software",
    title: "35% Less Lead Leakage with a RevOps-Led GTM Funnel Redesign",
    cardTitle: "35% Less Lead Leakage with a RevOps Funnel Redesign",
    metaTitle: "RevOps Case Study: Fixing 35% Lead Leakage with a Funnel Redesign",
    metaDescription:
      "How SiyaSphere fixed marketing-to-sales handoffs with unified funnel definitions, SLAs, and lifecycle ownership, cutting lead leakage 35% and raising sales trust in marketing data 85%.",
    summary:
      "Marketing and sales at a mid-market SaaS company had no shared funnel definitions and unclear ownership, so 35% of qualified leads were being ignored. SiyaSphere led a RevOps redesign with unified funnel stages, SLAs between teams, and clear lifecycle ownership, using AI to find process gaps and human review to validate every workflow. Lead leakage fell 35% and sales trust in marketing data rose 85%.",
    cardSummary: "Marketing and sales misaligned on handoffs. 35% of qualified leads going ignored.",
    keyMetric: "35%",
    keyMetricLabel: "Less lead leakage",
    highlights: [
      { value: "-35%", label: "Lead leakage" },
      { value: "+85%", label: "Sales trust in marketing data" },
      { value: "1", label: "Unified lead-to-revenue funnel" },
    ],
    challenge: [
      "Poor handoffs between marketing and sales, with unclear ownership of leads.",
      "35% of qualified leads were being ignored.",
      "No shared funnel definitions, so each team measured success differently.",
    ],
    approach: [
      {
        title: "Unified funnel definitions",
        detail: "Defined one set of lifecycle stages and qualification criteria that marketing and sales both signed off on.",
      },
      {
        title: "SLA alignment",
        detail: "Set service-level agreements for lead follow-up and handoff between teams.",
      },
      {
        title: "Clear lifecycle ownership",
        detail: "Assigned an owner to every lifecycle stage so no lead could fall between teams.",
      },
      {
        title: "AI gap analysis, human validation",
        detail: "Used AI to analyse process gaps across the funnel, with every resulting workflow validated by people before rollout.",
      },
    ],
    results: [
      "One unified lead-to-revenue funnel",
      "35% reduction in lead leakage",
      "Sales trust in marketing data up 85%",
      "Predictable revenue reporting",
      "Clear ownership across teams",
    ],
    tools: ["Salesforce", "RevOps Framework", "AI Process Analysis"],
    takeaway:
      "Lead leakage is usually a definitions and ownership problem, not a tooling problem. Agreeing on funnel stages and SLAs first makes every downstream automation more reliable.",
  },
  {
    slug: "zero-downtime-crm-migration",
    category: "Data Migration",
    client: "Growth-Stage Startup",
    clientType: "B2B SaaS",
    title: "Zero-Downtime CRM Migration to Salesforce with 100% Data Integrity",
    cardTitle: "Zero-Downtime CRM Migration with 100% Data Integrity",
    metaTitle: "CRM Migration Case Study: Zero Downtime, 100% Data Integrity",
    metaDescription:
      "How SiyaSphere migrated a growth-stage B2B SaaS company from a legacy CRM to Salesforce with zero downtime, 100% historical data integrity, and 50% faster GTM execution.",
    summary:
      "A growth-stage B2B SaaS company was running on a legacy CRM and disconnected marketing systems, and couldn't afford downtime or data loss during a migration. SiyaSphere designed a migration-first RevOps strategy with data normalisation, AI-assisted validation, and human QA on every migration. The move completed with zero downtime and 100% historical data integrity, and GTM execution ran 50% faster afterwards.",
    cardSummary: "Legacy CRM migration with zero tolerance for downtime or data loss.",
    keyMetric: "100%",
    keyMetricLabel: "Data integrity preserved",
    highlights: [
      { value: "0", label: "Downtime during migration" },
      { value: "100%", label: "Historical data integrity" },
      { value: "50%", label: "Faster GTM execution afterwards" },
    ],
    challenge: [
      "A legacy CRM and disconnected marketing systems were slowing the GTM team down.",
      "A critical data migration was needed with zero tolerance for downtime or data loss.",
      "There were concerns about the integrity of historical data.",
    ],
    approach: [
      {
        title: "Migration-first RevOps strategy",
        detail: "Planned the target data model and GTM processes before moving any data, so the new system was built for how the team would work.",
      },
      {
        title: "Data normalisation",
        detail: "Cleaned and normalised records into a consistent model ahead of migration.",
      },
      {
        title: "AI-assisted validation",
        detail: "Used AI checks to validate records at scale and flag anomalies before and after each load.",
      },
      {
        title: "Human QA on every migration",
        detail: "Had people review every migration batch so nothing went live without sign-off.",
      },
    ],
    results: [
      "Zero-downtime data migration",
      "100% historical data integrity",
      "GTM execution 50% faster after migration",
      "A modern, scalable tech stack",
      "Improved data reliability",
    ],
    tools: ["Salesforce", "Legacy CRM", "Data Migration Tools", "AI Validation"],
    takeaway:
      "Migrations fail when they copy old problems into a new system. Designing the target model first, then validating with both AI and people, is what makes zero downtime and full integrity achievable.",
  },
  {
    slug: "salesforce-lead-routing-leandata",
    category: "Lead Routing",
    client: "B2B SaaS Company",
    clientType: "Enterprise Software",
    title: "40% Higher Lead Contact Rate with LeanData + Salesforce Lead Routing",
    cardTitle: "40% Higher Contact Rate with LeanData Lead Routing",
    metaTitle: "Lead Routing Case Study: 95% Accuracy with LeanData + Salesforce",
    metaDescription:
      "How SiyaSphere rebuilt lead routing with LeanData and Salesforce Flow, reaching 95% routing accuracy, eliminating manual routing, and raising lead contact rate 40%.",
    summary:
      "Leads at a B2B SaaS company were routing to the wrong SDRs, leaving 40% of qualified leads uncontacted and costing 2+ hours a day in manual routing. SiyaSphere rebuilt routing with LeanData and Salesforce Flow, adding territory rules, capacity management, and round-robin logic. Routing accuracy reached 95%, manual routing dropped to zero, and contact rate rose 40%.",
    cardSummary: "Leads routing to wrong SDRs. 40% of qualified leads uncontacted. Manual routing 2+ hrs/day.",
    keyMetric: "95%",
    keyMetricLabel: "Routing accuracy",
    highlights: [
      { value: "95%", label: "Routing accuracy" },
      { value: "+40%", label: "Lead contact rate" },
      { value: "+25%", label: "SDR productivity" },
    ],
    challenge: [
      "Leads routed to the wrong SDRs, and 40% of qualified leads went uncontacted.",
      "Manual routing consumed 2+ hours every day.",
      "Territory management was chaotic.",
    ],
    approach: [
      {
        title: "LeanData routing graphs",
        detail: "Implemented LeanData as the routing engine on top of Salesforce.",
      },
      {
        title: "Territory rules",
        detail: "Codified territory rules so assignment followed clear, auditable logic.",
      },
      {
        title: "Capacity and round-robin",
        detail: "Added capacity management and round-robin distribution, informed by AI analysis of historical routing patterns.",
      },
      {
        title: "Salesforce Flow automation",
        detail: "Used Salesforce Flow for follow-up automation and Outreach enrolment once a lead was assigned.",
      },
    ],
    results: [
      "95% routing accuracy",
      "Manual routing time cut to zero",
      "Lead contact rate up 40%",
      "SDR productivity up 25%",
      "Automated territory management",
    ],
    tools: ["Salesforce", "LeanData", "Salesforce Flow", "Outreach"],
    takeaway:
      "Speed-to-lead depends on routing accuracy. Clear territory rules plus capacity-aware round-robin remove the manual triage that makes good leads go cold.",
  },
  {
    slug: "multi-touch-attribution-marketing-efficiency",
    category: "Marketing Automation",
    client: "Demand-Gen Company",
    clientType: "B2B Technology",
    title: "30% Marketing Efficiency Gain from Multi-Touch Attribution",
    cardTitle: "30% Marketing Efficiency Gain from Multi-Touch Attribution",
    metaTitle: "Marketing Attribution Case Study: 30% Efficiency Gain",
    metaDescription:
      "How SiyaSphere built multi-touch attribution and revenue-linked dashboards across Salesforce, Marketo, and Power BI, giving leadership campaign-to-revenue visibility and a 30% efficiency gain.",
    summary:
      "A B2B demand-gen company had high marketing spend, no attribution between campaigns and revenue, and leadership that didn't trust marketing data. SiyaSphere built a multi-touch attribution framework across Salesforce and Marketo with revenue-linked Power BI dashboards. Leadership got full campaign-to-revenue visibility, and marketing efficiency improved 30%.",
    cardSummary: "High marketing spend with unclear ROI. Leadership didn't trust marketing data.",
    keyMetric: "30%",
    keyMetricLabel: "Marketing efficiency gain",
    highlights: [
      { value: "30%", label: "Marketing efficiency gain" },
      { value: "100%", label: "Campaign-to-revenue visibility" },
      { value: "Multi-touch", label: "Attribution model in production" },
    ],
    challenge: [
      "High marketing spend with unclear ROI.",
      "No attribution linking campaigns to revenue.",
      "Leadership didn't trust marketing data, so budget decisions were made blind.",
    ],
    approach: [
      {
        title: "Attribution framework",
        detail: "Designed a multi-touch attribution model connecting Marketo campaign touches to Salesforce opportunities.",
      },
      {
        title: "Revenue-linked dashboards",
        detail: "Built Power BI dashboards that show each campaign's contribution to pipeline and revenue.",
      },
      {
        title: "AI insights, human strategy",
        detail: "Used AI to surface patterns in campaign performance, with the marketing team validating strategy decisions.",
      },
    ],
    results: [
      "Complete campaign-to-revenue visibility",
      "Accurate attribution modelling",
      "Better budget allocation decisions",
      "Sales alignment on marketing lead quality",
      "30% improvement in marketing efficiency",
    ],
    tools: ["Salesforce", "Marketo", "Power BI", "Attribution Models"],
    takeaway:
      "Attribution earns trust when it is tied to opportunities and revenue in the CRM, not just to clicks. That link is what lets leadership move budget with confidence.",
  },
  {
    slug: "ai-sales-forecasting-accuracy",
    category: "RevOps",
    client: "Enterprise B2B",
    clientType: "Enterprise Software",
    title: "35% More Accurate Sales Forecasts with AI-Assisted Pipeline Analytics",
    cardTitle: "35% More Accurate Forecasts with AI Pipeline Analytics",
    metaTitle: "Sales Forecasting Case Study: 35% More Accurate Forecasts with AI",
    metaDescription:
      "How SiyaSphere built pipeline health metrics, rep analytics, and AI-assisted forecasting in Salesforce, improving forecast accuracy 35% for a growing enterprise sales team.",
    summary:
      "A growing enterprise sales team had inaccurate forecasts, limited pipeline visibility, and leadership with little confidence in its numbers. SiyaSphere built a sales analytics framework with pipeline health metrics, AI-detected deal patterns, rep performance analytics, and forecasting models reviewed by leadership. Forecast accuracy improved 35% and revenue surprises fell.",
    cardSummary: "Growing sales team with inaccurate forecasts. Leadership had no confidence in pipeline.",
    keyMetric: "35%",
    keyMetricLabel: "Forecast accuracy gain",
    highlights: [
      { value: "+35%", label: "Forecast accuracy" },
      { value: "Real-time", label: "Deal velocity visibility" },
      { value: "Fewer", label: "Revenue surprises" },
    ],
    challenge: [
      "Forecasts were inaccurate as the sales team grew.",
      "Pipeline visibility was limited, and rep activity was disconnected from outcomes.",
      "Leadership had no confidence in pipeline predictions.",
    ],
    approach: [
      {
        title: "Pipeline health metrics",
        detail: "Defined pipeline health metrics in Salesforce so leadership could see the real state of the pipeline.",
      },
      {
        title: "AI-detected deal patterns",
        detail: "Used AI to detect patterns in won and lost deals and flag at-risk opportunities.",
      },
      {
        title: "Rep performance analytics",
        detail: "Built rep-level analytics linking activity to outcomes to support coaching.",
      },
      {
        title: "Forecasting with human review",
        detail: "Delivered forecasting models that sales leadership reviews and adjusts before committing numbers.",
      },
    ],
    results: [
      "Forecast accuracy improved 35%",
      "Deal velocity visibility",
      "Better coaching conversations",
      "Fewer revenue surprises",
      "Ongoing pipeline health monitoring",
    ],
    tools: ["Salesforce", "Sales Analytics", "AI Models", "Forecasting Tools"],
    takeaway:
      "AI improves forecasts most when it flags risk for humans to judge rather than replacing the call. Leadership review keeps the model accountable and the numbers trusted.",
  },
  {
    slug: "human-in-the-loop-ai-gtm-automation",
    category: "Marketing Automation",
    client: "High-Growth GTM Team",
    clientType: "B2B SaaS",
    title: "80% Less Manual Work with Human-in-the-Loop AI Automation",
    cardTitle: "80% Less Manual Work with Human-in-the-Loop AI",
    metaTitle: "Human-in-the-Loop AI Case Study: 80% Less Manual GTM Work",
    metaDescription:
      "How SiyaSphere automated lead enrichment and data entry with human-in-the-loop AI workflows in Salesforce Flow and Clay, cutting manual work 80% and doubling SDR capacity.",
    summary:
      "A high-growth GTM team was losing 15+ hours a week to manual data entry and lead enrichment, and the team was wary of full automation. SiyaSphere designed human-in-the-loop AI workflows in Salesforce Flow and Clay, with checkpoints and validation gates that keep people in control of critical decisions. Manual work fell 80%, data accuracy passed 98%, and SDR capacity doubled without new hires.",
    cardSummary: "Manual data entry consuming 15+ hrs/week. Team resistant to full automation.",
    keyMetric: "2x",
    keyMetricLabel: "SDR capacity, no new hires",
    highlights: [
      { value: "-80%", label: "Manual work" },
      { value: "3x", label: "Faster lead processing" },
      { value: "98%+", label: "Data accuracy" },
    ],
    challenge: [
      "Manual data entry and lead enrichment consumed 15+ hours every week.",
      "Human error put data quality at risk.",
      "The team resisted full automation, and SDRs couldn't scale.",
    ],
    approach: [
      {
        title: "Map routine vs. judgement tasks",
        detail: "Separated repetitive tasks that are safe to automate from decisions that need human judgement.",
      },
      {
        title: "AI enrichment workflows",
        detail: "Automated enrichment and data entry with Clay and AI enrichment APIs feeding Salesforce.",
      },
      {
        title: "Checkpoints and validation gates",
        detail: "Built Salesforce Flow checkpoints where a person reviews and approves critical updates before they go live.",
      },
      {
        title: "Trust-first automation",
        detail: "Kept humans in control of critical decisions so the team could trust the automation and adopt it.",
      },
    ],
    results: [
      "80% reduction in manual work",
      "Leads processed 3x faster",
      "Data accuracy above 98%",
      "Strong team adoption",
      "SDR capacity doubled without adding headcount",
    ],
    tools: ["Salesforce Flow", "Clay", "AI Enrichment APIs"],
    takeaway:
      "Adoption is the real bottleneck for GTM automation. Keeping people in the loop on critical decisions builds the trust that lets a team hand over the rest.",
  },
  {
    slug: "unified-gtm-reporting-single-source-of-truth",
    category: "RevOps",
    client: "Enterprise B2B",
    clientType: "Enterprise Software",
    title: "One Source of Truth for GTM Reporting Across Salesforce, HubSpot, Marketo, and Outreach",
    cardTitle: "One Source of Truth Across Four GTM Systems",
    metaTitle: "GTM Reporting Case Study: Single Source of Truth with Snowflake",
    metaDescription:
      "How SiyaSphere unified Salesforce, HubSpot, Marketo, and Outreach data in Snowflake with role-based Tableau dashboards, giving leadership one trusted set of GTM numbers.",
    summary:
      "Leadership at an enterprise B2B company couldn't get consistent GTM reporting because numbers conflicted across Salesforce, HubSpot, Marketo, and Outreach. SiyaSphere built a unified data model in Snowflake with role-based Tableau dashboards offering real-time and snapshot views. Leadership now works from one source of truth and makes decisions without waiting for data reconciliation.",
    cardSummary: "Leadership couldn't get consistent GTM reporting. Numbers conflicted across every tool.",
    keyMetric: "4 → 1",
    keyMetricLabel: "Systems unified into one reporting layer",
    highlights: [
      { value: "4 → 1", label: "Systems unified into one data model" },
      { value: "Real-time", label: "Executive visibility" },
      { value: "1", label: "Agreed set of GTM numbers" },
    ],
    challenge: [
      "Leadership couldn't get consistent GTM reporting.",
      "Numbers conflicted across different tools and dashboards.",
      "Decisions were delayed while teams reconciled data.",
    ],
    approach: [
      {
        title: "Unified data model",
        detail: "Brought Salesforce, HubSpot, Marketo, and Outreach data into one model in Snowflake with shared definitions.",
      },
      {
        title: "Role-based dashboards",
        detail: "Built Tableau dashboards for each leadership role, with both real-time and point-in-time snapshot views.",
      },
      {
        title: "AI insights, human storytelling",
        detail: "Used AI to surface trends, with the RevOps team turning them into the narrative leadership reviews.",
      },
    ],
    results: [
      "One source of truth for GTM data",
      "Real-time executive visibility",
      "Faster decision-making",
      "Leadership aligned on the same numbers",
      "Clear revenue storytelling",
    ],
    tools: ["Salesforce", "HubSpot", "Marketo", "Outreach", "Snowflake", "Tableau"],
    takeaway:
      "Conflicting dashboards come from conflicting definitions. A shared data model in a warehouse fixes the definitions once, so every dashboard downstream agrees.",
  },
  {
    slug: "salesforce-org-cleanup-performance",
    category: "RevOps",
    client: "Enterprise SaaS Provider",
    clientType: "Enterprise Software",
    title: "60% Faster Salesforce: An Org Cleanup of 500+ Unused Fields",
    cardTitle: "60% Faster Salesforce After an Org Cleanup",
    metaTitle: "Salesforce Org Cleanup Case Study: 60% Faster Page Loads",
    metaDescription:
      "How SiyaSphere audited and cleaned a cluttered Salesforce org, removing technical debt and syncing Marketo and Outreach, for 60% faster page loads and 100% user adoption.",
    summary:
      "An enterprise SaaS company's Salesforce org had 500+ unused fields, 8-second page loads, and a team that avoided using it, while Marketo, Salesforce, and Outreach were out of sync. SiyaSphere audited the org, removed technical debt, redesigned critical objects, and built real-time integrations across the stack. Page loads got 60% faster, data quality improved 90%, and user adoption reached 100%.",
    cardSummary: "500+ unused fields, 8-second page loads, and a team avoiding the CRM.",
    keyMetric: "60%",
    keyMetricLabel: "Faster page loads",
    highlights: [
      { value: "-60%", label: "Page load time" },
      { value: "+90%", label: "Data quality" },
      { value: "100%", label: "User adoption" },
    ],
    challenge: [
      "500+ unused fields cluttered the Salesforce org.",
      "Pages took 8+ seconds to load, so the team avoided the system and data quality suffered.",
      "Marketo, Salesforce, and Outreach were not syncing.",
    ],
    approach: [
      {
        title: "Org audit",
        detail: "Audited fields, automations, and page layouts to identify unused and conflicting configuration.",
      },
      {
        title: "Technical debt removal",
        detail: "Removed unused fields and other technical debt, and redesigned critical objects.",
      },
      {
        title: "Real-time integrations",
        detail: "Rebuilt the Marketo and Outreach integrations so data syncs in real time across the stack.",
      },
      {
        title: "Unified workflows",
        detail: "Consolidated workflows so Salesforce became the single source of truth.",
      },
    ],
    results: [
      "Page loads 60% faster",
      "Data quality improved 90%",
      "Real-time sync across Salesforce, Marketo, and Outreach",
      "100% user adoption",
      "Support tickets down 50%",
    ],
    tools: ["Salesforce", "Marketo", "Outreach", "API Integrations"],
    takeaway:
      "A slow, cluttered CRM is an adoption problem before it is a data problem. Removing technical debt is often the fastest way to get reps back into Salesforce and data quality back up.",
  },
  {
    slug: "leandata-ringlead-data-quality-routing",
    category: "Lead Routing",
    client: "Mid-Market B2B",
    clientType: "Enterprise Software",
    title: "92% Better Lead Data Quality with a LeanData + RingLead Stack",
    cardTitle: "92% Better Lead Data Quality with LeanData + RingLead",
    metaTitle: "Lead Data Quality Case Study: LeanData + RingLead Implementation",
    metaDescription:
      "How SiyaSphere implemented LeanData and RingLead with Salesforce Flow for enrichment, routing, and SLA enforcement, improving lead data quality 92% and cutting manual routing 85%.",
    summary:
      "A mid-market B2B company had poor lead data from multiple sources, 4+ hours a day of manual routing, and no visibility into enrichment status. SiyaSphere implemented LeanData and RingLead from scratch, with Salesforce Flow automations for territory assignment, capacity, and SLA enforcement, plus data quality gates. Lead data quality improved 92%, manual routing fell 85%, and SLA compliance rose 75%.",
    cardSummary: "Poor lead data from multiple sources. Manual routing 4+ hrs/day. No enrichment visibility.",
    keyMetric: "92%",
    keyMetricLabel: "Lead data quality improvement",
    highlights: [
      { value: "+92%", label: "Lead data quality" },
      { value: "-85%", label: "Manual routing time" },
      { value: "+75%", label: "SLA compliance" },
    ],
    challenge: [
      "Lead data from multiple sources was poor quality.",
      "Manual routing consumed 4+ hours a day, and territory imbalance frustrated the team.",
      "There was no visibility into lead enrichment status.",
    ],
    approach: [
      {
        title: "RingLead data quality",
        detail: "Implemented RingLead for deduplication, normalisation, and enrichment at the point of entry.",
      },
      {
        title: "LeanData routing",
        detail: "Implemented LeanData to match and route leads using clean, enriched data.",
      },
      {
        title: "Salesforce Flow automation",
        detail: "Built Flow automations for territory assignment, capacity management, and SLA enforcement.",
      },
      {
        title: "Data quality gates",
        detail: "Added quality gates and continuous validation so bad data is caught before it is routed.",
      },
    ],
    results: [
      "Lead data quality improved 92%",
      "Manual routing time down 85%",
      "Territory balance improved 40%",
      "Real-time lead enrichment",
      "SLA compliance up 75%",
    ],
    tools: ["Salesforce", "LeanData", "RingLead", "Salesforce Flow"],
    takeaway:
      "Routing is only as good as the data it runs on. Cleaning and enriching leads before routing them is what makes automated assignment accurate and fair across territories.",
  },
  {
    slug: "account-research-decision-maker-mapping",
    category: "AI Prospecting",
    client: "Leading Data Analytics Firm",
    clientType: "GTM Strategy / Data & Analytics",
    title: "964 Decision-Makers Mapped Across 450 Accounts for Targeted Outbound",
    cardTitle: "964 Decision-Makers Mapped Across 450 Accounts",
    metaTitle: "Account Research Case Study: 964 Decision-Makers Across 450 Accounts",
    metaDescription:
      "How SiyaSphere mapped legacy data technology and 964 verified decision-makers across 450 target accounts, giving a data analytics firm 224 accounts ready for outreach.",
    summary:
      "A data analytics consulting firm needed to find mid-market and enterprise accounts running legacy data infrastructure, but lacked technology intelligence and decision-maker contacts. SiyaSphere researched legacy EDW, ETL, and BI platforms and incumbent vendors across 450+ target accounts, then mapped verified decision-makers across data, analytics, AI, and cloud. The firm received 964 verified contacts and 224 accounts ready for targeted outreach.",
    cardSummary: "Large account universe with no technology intelligence to prioritise outbound.",
    keyMetric: "964",
    keyMetricLabel: "Decision-makers mapped",
    highlights: [
      { value: "964", label: "Verified decision-maker contacts" },
      { value: "346", label: "Accounts with legacy tech signals" },
      { value: "224", label: "Accounts ready for outreach" },
    ],
    challenge: [
      "The firm needed to target mid-market and enterprise accounts running legacy data infrastructure.",
      "It had a large account universe but little technology intelligence.",
      "Without decision-maker contact data, the outbound team couldn't prioritise or activate campaigns.",
    ],
    approach: [
      {
        title: "Technology mapping",
        detail: "Researched each account's legacy data technology (EDW, ETL, and BI platforms) and incumbent vendors.",
      },
      {
        title: "Decision-maker identification",
        detail: "Identified key decision-makers across data, analytics, AI, and cloud functions, with verified LinkedIn profiles and contact details.",
      },
      {
        title: "Firmographic enrichment",
        detail: "Enriched every account with full firmographic data to support precise targeting and segmentation.",
      },
    ],
    results: [
      "450 companies researched and profiled",
      "346 companies with confirmed legacy technology signals",
      "964 qualified decision-maker contacts identified",
      "224 companies ready for targeted outreach",
      "100% verified contact data",
    ],
    tools: ["Market Research", "Technology Intelligence", "Contact Enrichment", "Firmographic Data"],
    takeaway:
      "Technographic signals turn a generic account list into a prioritised one. Knowing which accounts run the technology you replace tells sales exactly where to start.",
  },
  {
    slug: "salesforce-sdr-custom-object",
    category: "Sales Automation",
    client: "Growth-Stage B2B SaaS",
    clientType: "8-Person SDR Team",
    title: "A Custom Salesforce SDR Object That Delivered 96% SLA Compliance and 4-Hour Handoffs",
    cardTitle: "Custom Salesforce SDR Engine: 96% SLA Compliance",
    metaTitle: "Salesforce SDR Case Study: Custom Object, 96% SLA Compliance",
    metaDescription:
      "How SiyaSphere built a custom SDR Touchpoint object with Salesforce Flow and Outreach sync, giving 100% SDR visibility, 22% better lead-to-meeting conversion, and 4-hour AE handoffs.",
    summary:
      "An eight-person SDR team tracked outreach in spreadsheets and the standard Task object, so leadership had no view of what drove meetings and handoffs to AEs were often dropped. SiyaSphere built a custom SDR Touchpoint object in Salesforce, automated by Flow from Outreach activity, with SLA-based reassignment and mandatory disposition codes. SLA compliance reached 96%, AE handoffs dropped from 2 days to under 4 hours, and lead-to-meeting conversion rose 22%.",
    cardSummary: "SDR activity tracked in spreadsheets. No visibility into cadences, handoffs, or SLAs.",
    keyMetric: "96%",
    keyMetricLabel: "SLA compliance",
    highlights: [
      { value: "96%", label: "First-touch SLA compliance" },
      { value: "<4 hrs", label: "SDR-to-AE handoff (from 2 days)" },
      { value: "+22%", label: "Lead-to-meeting conversion" },
    ],
    challenge: [
      "SDR activity was logged across spreadsheets and the standard Task object, which couldn't capture multi-channel cadence data.",
      "Leadership couldn't see which touchpoints drove meetings, and AE handoffs were inconsistent or dropped.",
      "There was no enforced follow-up SLA, and weekly reporting took 5+ hours of manual work.",
    ],
    approach: [
      {
        title: "Custom SDR Touchpoint object",
        detail: "Designed a custom object related to Lead, Contact, and Opportunity, capturing sequence step, channel (call, email, LinkedIn), disposition code, and next-action date.",
      },
      {
        title: "Flow automation from Outreach",
        detail: "Auto-created touchpoint records from Outreach activity syncs and advanced lead status once engagement thresholds were met.",
      },
      {
        title: "SLA-based reassignment",
        detail: "Reassigned leads automatically when they went untouched past the defined follow-up window.",
      },
      {
        title: "Data discipline and reporting",
        detail: "Enforced mandatory disposition codes with validation rules, and built a custom report type and dashboard for real-time handoff visibility.",
      },
    ],
    results: [
      "SDR activity visibility went from 0% to 100% in real time in Salesforce",
      "Lead-to-meeting conversion improved 22%",
      "SDR-to-AE handoff time cut from 2 days to under 4 hours",
      "96% SLA compliance on first-touch follow-up",
      "5+ hours/week of manual reporting eliminated",
    ],
    tools: ["Salesforce Custom Objects", "Salesforce Flow", "Outreach", "Salesforce Dashboards"],
    takeaway:
      "Standard Salesforce objects weren't built for multi-channel SDR cadences. A purpose-built object with automated capture gives managers real visibility without adding admin work for reps.",
  },
];

export const CATEGORIES = ["All", ...Object.keys(CATEGORY_COLORS)];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(cs: CaseStudy, count = 3) {
  const sameCategory = caseStudies.filter((o) => o.slug !== cs.slug && o.category === cs.category);
  const others = caseStudies.filter((o) => o.slug !== cs.slug && o.category !== cs.category);
  return [...sameCategory, ...others].slice(0, count);
}
