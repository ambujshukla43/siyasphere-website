export type Solution = {
  slug: string;
  anchor: string;
  title: string;
  navLabel: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  signs: string[];
  outcomes: string[];
  approach: { title: string; detail: string }[];
  tools: string[];
  caseStudySlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "revops-consulting",
    anchor: "revops-transformation",
    title: "RevOps Consulting & Transformation",
    navLabel: "RevOps Transformation",
    tagline: "Align your entire GTM engine for predictable growth.",
    metaTitle: "RevOps Consulting for B2B SaaS",
    metaDescription:
      "RevOps consulting that aligns marketing, sales, and customer success with shared funnel definitions, SLAs, and forecasting. Built for B2B SaaS teams on Salesforce and HubSpot.",
    summary:
      "SiyaSphere's RevOps consulting aligns marketing, sales, and customer success around one funnel, one set of definitions, and one source of truth. We design the process first, then configure Salesforce or HubSpot and your GTM tools around it. B2B SaaS teams get documented SLAs and handoffs, reliable reporting, and a forecast leadership can trust.",
    signs: [
      "Marketing and sales disagree on what counts as a qualified lead.",
      "Qualified leads fall through the cracks between teams.",
      "Every team reports a different number for pipeline and revenue.",
      "Forecasts depend on gut feel rather than pipeline data.",
    ],
    outcomes: [
      "Clear GTM alignment across marketing, sales, and customer success, with documented SLAs and handoff processes",
      "Standardised lifecycle stages, metric definitions, and reporting that remove silos and guesswork",
      "Predictable revenue forecasting and repeatable scaling playbooks that work across teams",
      "Shorter deal cycles and better win rates through optimised processes and accountability",
      "Real-time visibility into pipeline health, bottlenecks, and opportunities",
    ],
    approach: [
      { title: "GTM audit", detail: "Map your current funnel, handoffs, systems, and reporting to find where revenue leaks." },
      { title: "Shared definitions and SLAs", detail: "Agree lifecycle stages, qualification criteria, and follow-up SLAs with every team." },
      { title: "System configuration", detail: "Build the agreed process into your CRM, marketing automation, and sales engagement tools." },
      { title: "Reporting and enablement", detail: "Launch dashboards on the new definitions and train teams so the process sticks." },
    ],
    tools: ["Salesforce", "HubSpot", "Marketo", "Outreach", "LeanData", "Tableau"],
    caseStudySlugs: [
      "revops-gtm-redesign-lead-leakage",
      "unified-gtm-reporting-single-source-of-truth",
      "ai-sales-forecasting-accuracy",
    ],
    faqs: [
      {
        question: "What does a RevOps consultant do?",
        answer:
          "A RevOps consultant aligns the processes, data, and systems behind marketing, sales, and customer success so they work as one revenue engine. That covers funnel definitions, SLAs and handoffs, CRM and tool configuration, and the reporting and forecasting leadership relies on.",
      },
      {
        question: "How long does a RevOps transformation take?",
        answer:
          "SiyaSphere's process typically runs 8 weeks from GTM audit to launch, with some results visible in the first 2–3 weeks. Larger multi-system programmes are scoped after the audit.",
      },
      {
        question: "Do you work with Salesforce and HubSpot?",
        answer:
          "Yes. We design the RevOps process first, then implement it in the CRM you use, whether that is Salesforce, HubSpot, or both, along with tools like Marketo, Outreach, and LeanData.",
      },
    ],
  },
  {
    slug: "lead-routing",
    anchor: "lead-routing",
    title: "Lead Routing & Lead Data Quality",
    navLabel: "Lead Routing",
    tagline: "Every lead to the right rep, fast, with clean data.",
    metaTitle: "Lead Routing Consulting: LeanData & Salesforce",
    metaDescription:
      "Lead routing consulting with LeanData, RingLead, and Salesforce Flow. Territory rules, round-robin, capacity management, and SLA enforcement so no qualified lead goes uncontacted.",
    summary:
      "SiyaSphere designs and implements lead routing that gets every lead to the right rep quickly and with clean data. We combine LeanData, RingLead, and Salesforce Flow to enrich and deduplicate leads, then apply territory rules, capacity-aware round-robin, and SLA enforcement. Teams stop routing by hand and contact more of the leads they already pay for.",
    signs: [
      "Leads land with the wrong rep or sit unassigned.",
      "Someone spends hours each day routing leads by hand.",
      "Duplicate and incomplete records make assignment unreliable.",
      "Nobody can tell whether follow-up SLAs are being met.",
    ],
    outcomes: [
      "Automated routing based on territory, segment, and rep capacity",
      "Round-robin and capacity rules that keep workloads balanced across reps",
      "Clean, enriched, deduplicated lead data before assignment",
      "SLA enforcement with automatic reassignment when leads go untouched",
      "Visibility into routing accuracy, speed-to-lead, and follow-up",
    ],
    approach: [
      { title: "Routing audit", detail: "Trace how leads enter, how they are assigned today, and where they stall or get lost." },
      { title: "Data quality first", detail: "Set up deduplication, normalisation, and enrichment so routing runs on clean data." },
      { title: "Rules and automation", detail: "Build territory rules, round-robin, capacity management, and SLA reassignment in LeanData and Salesforce Flow." },
      { title: "Monitor and tune", detail: "Track routing accuracy and contact rates, and refine rules as territories change." },
    ],
    tools: ["LeanData", "RingLead", "Salesforce Flow", "Salesforce", "Outreach"],
    caseStudySlugs: [
      "salesforce-lead-routing-leandata",
      "leandata-ringlead-data-quality-routing",
      "salesforce-sdr-custom-object",
    ],
    faqs: [
      {
        question: "What is lead routing?",
        answer:
          "Lead routing is the automated process of assigning each new lead to the right owner based on rules such as territory, segment, account ownership, and rep capacity. Good routing improves speed-to-lead and stops qualified leads from going uncontacted.",
      },
      {
        question: "Do I need LeanData, or can Salesforce route leads on its own?",
        answer:
          "Salesforce assignment rules and Flow handle simple routing. LeanData adds lead-to-account matching, visual routing logic, and round-robin with capacity controls, which matter once you have territories, account-based motions, or several teams. We recommend based on your volume and complexity.",
      },
      {
        question: "Why does data quality matter for routing?",
        answer:
          "Routing rules depend on fields like company, country, and size. Duplicates and missing data send leads to the wrong place, so we clean and enrich data with tools like RingLead before routing it.",
      },
    ],
  },
  {
    slug: "salesforce-consulting",
    anchor: "salesforce-consulting",
    title: "Salesforce Consulting & Org Optimisation",
    navLabel: "Salesforce Consulting",
    tagline: "A Salesforce org your team actually wants to use.",
    metaTitle: "Salesforce Consulting for GTM Teams",
    metaDescription:
      "Salesforce consulting for B2B GTM teams: org audits and cleanup, custom objects, Salesforce Flow automation, and Marketo and Outreach integrations that sync in real time.",
    summary:
      "SiyaSphere's Salesforce consulting turns a slow, cluttered org into a system GTM teams rely on. We audit and remove technical debt, design custom objects and Flow automation around how your teams sell, and integrate Salesforce with Marketo, HubSpot, and Outreach so data syncs in real time. The result is faster pages, cleaner data, and higher adoption.",
    signs: [
      "Pages load slowly and reps avoid updating Salesforce.",
      "Hundreds of unused fields and legacy automations clutter the org.",
      "Salesforce, marketing automation, and sales engagement tools are out of sync.",
      "Key activity, like SDR touchpoints, lives in spreadsheets instead of the CRM.",
    ],
    outcomes: [
      "A leaner, faster org with technical debt removed",
      "Custom objects and fields designed around your GTM process",
      "Salesforce Flow automation that replaces manual updates",
      "Real-time integrations with Marketo, HubSpot, and Outreach",
      "Dashboards and report types that give managers real visibility",
    ],
    approach: [
      { title: "Org audit", detail: "Review fields, objects, automation, integrations, and page performance." },
      { title: "Cleanup and redesign", detail: "Remove technical debt and redesign critical objects and layouts." },
      { title: "Automation and integration", detail: "Build Flow automation and connect your marketing and sales engagement tools." },
      { title: "Reporting and adoption", detail: "Deliver dashboards and enablement so teams use the org every day." },
    ],
    tools: ["Salesforce", "Salesforce Flow", "Marketo", "HubSpot", "Outreach", "API Integrations"],
    caseStudySlugs: [
      "salesforce-org-cleanup-performance",
      "salesforce-sdr-custom-object",
      "zero-downtime-crm-migration",
    ],
    faqs: [
      {
        question: "What is a Salesforce org cleanup?",
        answer:
          "An org cleanup audits your Salesforce configuration and removes what slows teams down: unused fields, conflicting automation, bloated page layouts, and broken integrations. It usually improves performance, data quality, and user adoption at the same time.",
      },
      {
        question: "Can you build custom Salesforce objects for SDR teams?",
        answer:
          "Yes. For example, we built a custom SDR Touchpoint object with Flow automation from Outreach that gave one team 100% real-time visibility into SDR activity and 96% SLA compliance.",
      },
      {
        question: "Do you integrate Salesforce with Marketo and Outreach?",
        answer:
          "Yes. We build and repair integrations between Salesforce and tools like Marketo, HubSpot, and Outreach so records, activity, and campaign data sync in real time.",
      },
    ],
  },
  {
    slug: "crm-data-migration",
    anchor: "data-migration",
    title: "GTM Data Migration & System Modernisation",
    navLabel: "Data Migration",
    tagline: "Move fast without breaking anything.",
    metaTitle: "CRM Data Migration & GTM System Modernisation",
    metaDescription:
      "Zero-downtime CRM and MarTech migrations for B2B SaaS. Data normalisation, deduplication, AI-assisted validation, and human QA so no data or revenue is lost.",
    summary:
      "SiyaSphere migrates GTM teams off legacy CRMs and MarTech stacks without losing data or disrupting revenue. We design the target data model first, normalise and deduplicate records, and validate every load with AI-assisted checks and human QA. Teams land on a modern, integrated stack with clean data and documented governance.",
    signs: [
      "You are running on a legacy CRM or disconnected marketing systems.",
      "A migration is overdue but downtime or data loss is not an option.",
      "Duplicate and inconsistent records undermine trust in your data.",
      "There is no documentation or governance for how data should be kept.",
    ],
    outcomes: [
      "Migrations from legacy CRMs and MarTech stacks without losing data or disrupting revenue operations",
      "Normalised, enriched, and consolidated customer data for a 360-degree view across systems",
      "Audit-ready migrations with full documentation and zero downtime",
      "Duplicate cleanup, fixed data quality issues, and a governance framework",
      "Seamless integrations between sales, marketing, and operations tools",
    ],
    approach: [
      { title: "Target model design", detail: "Design the data model and processes for the new system before moving anything." },
      { title: "Clean and normalise", detail: "Deduplicate, normalise, and enrich records ahead of migration." },
      { title: "Validated migration", detail: "Migrate in batches with AI-assisted validation and human QA on every load." },
      { title: "Integrate and govern", detail: "Reconnect your stack and document governance so data stays clean." },
    ],
    tools: ["Salesforce", "HubSpot", "Marketo", "Data Migration Tools", "AI Validation"],
    caseStudySlugs: [
      "zero-downtime-crm-migration",
      "salesforce-org-cleanup-performance",
      "leandata-ringlead-data-quality-routing",
    ],
    faqs: [
      {
        question: "Can a CRM migration be done without downtime?",
        answer:
          "Yes, with the right plan. We design the target model first, migrate in validated batches, and keep the existing system running until the new one is verified. One recent migration completed with zero downtime and 100% historical data integrity.",
      },
      {
        question: "How do you protect data quality during a migration?",
        answer:
          "We normalise and deduplicate data before it moves, run AI-assisted validation to flag anomalies at scale, and have people QA every batch before sign-off.",
      },
    ],
  },
  {
    slug: "marketing-analytics-attribution",
    anchor: "marketing-intelligence",
    title: "Marketing Intelligence & Attribution",
    navLabel: "Marketing Intelligence",
    tagline: "Know what works. Prove what matters.",
    metaTitle: "Marketing Analytics & Multi-Touch Attribution",
    metaDescription:
      "Marketing analytics and multi-touch attribution for B2B SaaS. Connect campaigns to pipeline and revenue in Salesforce, and report marketing's real impact with confidence.",
    summary:
      "SiyaSphere connects marketing activity to pipeline and revenue so you can see which campaigns actually work. We build multi-touch attribution across your marketing automation platform and CRM, add predictive account and lead scoring, and deliver revenue-linked dashboards. Marketing leaders can defend budgets with numbers sales and finance trust.",
    signs: [
      "Marketing spend is high but ROI is unclear.",
      "Leadership doesn't trust marketing's numbers.",
      "You can't tell which campaigns and channels create pipeline.",
      "Budget decisions are made on clicks and MQLs rather than revenue.",
    ],
    outcomes: [
      "Accurate campaign performance, attribution, and ROI tracking across channels",
      "Funnel visibility from awareness to conversion, showing where you win or lose deals",
      "Pipeline contribution measured by campaign, channel, and message for smarter budget allocation",
      "High-intent accounts and leads identified with predictive scoring",
      "Confident reporting on marketing's business impact to leadership",
    ],
    approach: [
      { title: "Tracking audit", detail: "Review campaign tracking, UTM discipline, and how campaigns link to CRM opportunities." },
      { title: "Attribution model", detail: "Design a multi-touch model that connects touches to opportunities and revenue." },
      { title: "Scoring and intent", detail: "Add predictive scoring to surface high-intent accounts and leads." },
      { title: "Revenue dashboards", detail: "Deliver dashboards that show marketing's contribution to pipeline and revenue." },
    ],
    tools: ["Marketo", "HubSpot", "Salesforce", "Power BI", "Tableau", "Actively AI"],
    caseStudySlugs: [
      "multi-touch-attribution-marketing-efficiency",
      "actively-ai-account-prioritization",
    ],
    faqs: [
      {
        question: "What is multi-touch attribution?",
        answer:
          "Multi-touch attribution gives credit for a deal to every marketing touch that influenced it, rather than only the first or last one. Linked to CRM opportunities, it shows which campaigns and channels actually create pipeline and revenue.",
      },
      {
        question: "Which tools do you use for marketing attribution?",
        answer:
          "We work with your existing stack, typically Marketo or HubSpot connected to Salesforce, with reporting in Power BI or Tableau. The model matters more than the tool, so we design it first.",
      },
    ],
  },
  {
    slug: "sales-analytics-forecasting",
    anchor: "sales-intelligence",
    title: "Sales Intelligence & Forecasting",
    navLabel: "Sales Intelligence",
    tagline: "Empower reps to close more deals, faster.",
    metaTitle: "Sales Analytics & AI-Assisted Forecasting",
    metaDescription:
      "Sales analytics and AI-assisted forecasting for B2B SaaS: pipeline health, deal risk, rep performance, and win/loss insights in Salesforce, reviewed by leadership.",
    summary:
      "SiyaSphere builds the sales analytics that make forecasts reliable and coaching specific. We define pipeline health metrics, use AI to flag at-risk deals and win/loss patterns, and give managers rep-level analytics in Salesforce. Leadership reviews AI-assisted forecasts instead of guessing, and reps spend time on the deals most likely to close.",
    signs: [
      "Forecasts miss and leadership doesn't trust the pipeline.",
      "Deals stall without anyone noticing until it's too late.",
      "Managers can't see which rep behaviours lead to wins.",
      "Win/loss reasons aren't captured or analysed.",
    ],
    outcomes: [
      "Real-time pipeline health: which deals are advancing, stalling, or at risk",
      "Accurate forecasts based on rep productivity, deal velocity, and historical close patterns",
      "Top-performer behaviours identified and replicated across the team",
      "Win/loss patterns that sharpen positioning and objection handling",
      "Coaching opportunities and early warnings surfaced before deals slip",
    ],
    approach: [
      { title: "Pipeline definitions", detail: "Define stages, exit criteria, and health metrics the whole team agrees on." },
      { title: "AI risk signals", detail: "Use AI to detect deal patterns and flag at-risk opportunities." },
      { title: "Rep analytics", detail: "Link rep activity to outcomes to support targeted coaching." },
      { title: "Forecast process", detail: "Deliver forecasting models that leadership reviews before committing numbers." },
    ],
    tools: ["Salesforce", "Tableau", "Actively AI", "Outreach", "Forecasting Tools"],
    caseStudySlugs: [
      "ai-sales-forecasting-accuracy",
      "actively-ai-account-prioritization",
      "salesforce-sdr-custom-object",
    ],
    faqs: [
      {
        question: "How can AI improve sales forecasting?",
        answer:
          "AI spots patterns across historical deals, such as stalled stages or missing activity, and flags opportunities at risk. Forecasts improve most when AI informs leadership's judgement rather than replacing it; one client improved forecast accuracy by 35% this way.",
      },
      {
        question: "Do you build sales dashboards in Salesforce?",
        answer:
          "Yes. We build pipeline, forecast, and rep performance dashboards in Salesforce, or in Tableau when data comes from several systems.",
      },
    ],
  },
  {
    slug: "gtm-dashboards",
    anchor: "data-visualization",
    title: "Executive GTM Dashboards & Data Visualisation",
    navLabel: "Executive Dashboards",
    tagline: "One source of truth for your entire GTM operation.",
    metaTitle: "Executive GTM Dashboards & Revenue Reporting",
    metaDescription:
      "Role-based executive dashboards for CROs, CMOs, and CFOs built on a unified GTM data model. One source of truth for pipeline, forecast, win rate, and efficiency.",
    summary:
      "SiyaSphere builds executive dashboards on a single, unified GTM data model so every leader sees the same numbers. We bring data from your CRM, marketing automation, and sales engagement tools together, then design role-based views for CROs, CMOs, VPs of Sales, and CFOs. Leadership stops reconciling spreadsheets and starts making decisions.",
    signs: [
      "Numbers conflict between tools, teams, and dashboards.",
      "Board and leadership reporting is built by hand in spreadsheets.",
      "Executives wait days for answers to simple pipeline questions.",
      "Each leader tracks different metrics with different definitions.",
    ],
    outcomes: [
      "Role-based dashboards for CMOs, CROs, VPs of Sales, and CFOs",
      "Executive views of pipeline, forecast, win rate, and efficiency in real time",
      "No more spreadsheet sprawl or conflicting metrics",
      "Self-service insights with drill-down for leadership",
      "GTM health reporting that resonates with stakeholders and the board",
    ],
    approach: [
      { title: "Metric definitions", detail: "Agree the metrics and definitions each leader needs." },
      { title: "Unified data model", detail: "Bring CRM, marketing, and sales engagement data into one model, in a warehouse where needed." },
      { title: "Role-based dashboards", detail: "Design real-time and snapshot views for each leadership role." },
      { title: "Insight and storytelling", detail: "Pair AI-surfaced trends with a clear narrative for leadership reviews." },
    ],
    tools: ["Tableau", "Power BI", "Snowflake", "Salesforce", "HubSpot"],
    caseStudySlugs: [
      "unified-gtm-reporting-single-source-of-truth",
      "multi-touch-attribution-marketing-efficiency",
    ],
    faqs: [
      {
        question: "Why do GTM dashboards show conflicting numbers?",
        answer:
          "Usually because each tool and team defines metrics differently. Fixing the definitions in one shared data model, rather than in each dashboard, is what makes every report agree.",
      },
      {
        question: "Do we need a data warehouse for executive dashboards?",
        answer:
          "Not always. Single-CRM teams can often report directly from Salesforce or HubSpot. When data comes from several systems, a warehouse like Snowflake gives you one model to report from.",
      },
    ],
  },
  {
    slug: "ai-gtm-workflows",
    anchor: "ai-human-workflow",
    title: "AI + Human Workflows for GTM",
    navLabel: "AI + Human Workflows",
    tagline: "Scale without sacrificing judgement.",
    metaTitle: "Human-in-the-Loop AI Workflows for GTM Teams",
    metaDescription:
      "Human-in-the-loop AI workflows for sales and marketing: AI handles enrichment, data entry, and outreach at scale while people keep control of strategy and key decisions.",
    summary:
      "SiyaSphere designs GTM workflows where AI handles routine work at scale and people stay in control of judgement calls. AI takes on data entry, enrichment, qualification, outreach sequencing, and analysis, with checkpoints where your team reviews critical decisions. Teams get hours back each week without losing quality, brand voice, or trust in the data.",
    signs: [
      "Reps and ops spend hours a week on data entry and enrichment.",
      "Your team is wary of handing work to AI without oversight.",
      "Lead backlogs are too large for your SDRs to work.",
      "You can't scale output without adding headcount.",
    ],
    outcomes: [
      "AI handling routine work: data entry, qualification, enrichment, outreach sequencing, and analysis",
      "People in control of strategy, relationships, negotiation, and final decisions",
      "Faster processes with quality and compliance maintained",
      "Measured impact: time returned to the team and quality improvements",
      "Workflows that respect your brand and values while scaling execution",
    ],
    approach: [
      { title: "Task mapping", detail: "Separate routine tasks that are safe to automate from decisions that need people." },
      { title: "AI workflow build", detail: "Automate enrichment, data entry, and outreach with tools like Clay, Conversica, and Salesforce Flow." },
      { title: "Checkpoints and gates", detail: "Add review steps where people approve critical updates and hand-offs." },
      { title: "Measure and expand", detail: "Track time saved and accuracy, then extend automation as trust grows." },
    ],
    tools: ["Clay", "Conversica", "Salesforce Flow", "n8n", "ChatGPT", "Claude"],
    caseStudySlugs: [
      "human-in-the-loop-ai-gtm-automation",
      "conversica-ai-sdr-dormant-leads",
      "ai-prospecting-engine-seamless-ai-clay",
    ],
    faqs: [
      {
        question: "What is a human-in-the-loop AI workflow?",
        answer:
          "It is an automated workflow where AI does the repetitive work and a person reviews or approves the steps that matter, such as a CRM update, a hand-off, or an outbound message. It keeps automation fast while keeping quality and accountability with your team.",
      },
      {
        question: "Can AI SDRs replace human SDRs?",
        answer:
          "Not entirely. AI SDRs are best at volume people can't reach, like re-engaging thousands of dormant leads, and should hand off to humans as soon as a prospect shows intent. One client re-activated $1.8M in pipeline this way without adding SDR hours.",
      },
    ],
  },
  {
    slug: "ai-workflow-deployment",
    anchor: "ai-workflow-deployment",
    title: "AI Workflow & Agent Deployment",
    navLabel: "AI Workflow Deployment",
    tagline: "From AI pilot to production workflows your team relies on.",
    metaTitle: "AI Workflow & AI Agent Deployment for GTM Teams",
    metaDescription:
      "Design, build, and deploy production AI workflows and AI agents for sales and marketing: n8n, Clay, OpenAI, and Claude connected to your CRM, with guardrails, monitoring, and handover.",
    summary:
      "SiyaSphere takes AI from experiments to production workflows your GTM team runs every day. We design the use case, build AI agents and automations with tools like n8n, Clay, OpenAI, and Claude, and connect them to Salesforce, HubSpot, and your sales engagement stack. Every deployment ships with guardrails, human review steps, monitoring, and documentation, so it keeps working after launch.",
    signs: [
      "AI pilots and prompts live in personal accounts and never reach production.",
      "Teams want AI agents for research, enrichment, or follow-up but don't know where to start.",
      "Existing automations break silently and nobody owns them.",
      "Leadership is cautious about data security and AI output quality.",
    ],
    outcomes: [
      "A prioritised list of AI use cases ranked by time saved and revenue impact",
      "Production AI agents for research, enrichment, qualification, routing, and follow-up",
      "Workflows connected to your CRM, marketing automation, and sales engagement tools",
      "Guardrails, human approval steps, and logging for every AI action",
      "Monitoring, alerting, and documentation so workflows stay reliable after handover",
      "Team training so reps and ops know how to use, review, and improve the workflows",
    ],
    approach: [
      { title: "Use-case discovery", detail: "Find the repetitive GTM work where AI saves the most time, and define what good output looks like." },
      { title: "Build and connect", detail: "Build agents and workflows in n8n, Clay, and LLM APIs, connected to your CRM and GTM tools." },
      { title: "Guardrails and testing", detail: "Add human review steps, validation, and test runs on real data before anything goes live." },
      { title: "Deploy, monitor, hand over", detail: "Launch with monitoring and alerts, document every workflow, and train your team to own it." },
    ],
    tools: ["n8n", "Clay", "OpenAI", "Claude", "Make", "Zapier", "Salesforce", "HubSpot"],
    caseStudySlugs: [
      "human-in-the-loop-ai-gtm-automation",
      "conversica-ai-sdr-dormant-leads",
      "ai-prospecting-engine-seamless-ai-clay",
    ],
    faqs: [
      {
        question: "What is AI workflow deployment?",
        answer:
          "AI workflow deployment is taking an AI use case, such as account research, lead enrichment, or follow-up drafting, and turning it into a reliable, production workflow connected to your systems. It covers building the workflow, adding guardrails and human review, testing, monitoring, and handing it over to your team.",
      },
      {
        question: "Which tools do you use to build AI workflows and agents?",
        answer:
          "We typically use n8n for orchestration, Clay for enrichment and research, and LLMs such as OpenAI and Claude, connected to Salesforce or HubSpot and tools like Outreach. We choose tools based on your stack, data requirements, and who will maintain the workflow.",
      },
      {
        question: "How do you keep AI workflows safe and accurate?",
        answer:
          "Every workflow has human review steps for critical actions, validation on inputs and outputs, logging of what the AI did, and monitoring with alerts. We test on real data before launch and only automate decisions once the team trusts the output.",
      },
      {
        question: "How is this different from AI + Human Workflows?",
        answer:
          "AI + Human Workflows focuses on redesigning GTM processes around AI and human checkpoints. AI Workflow Deployment is the engineering side: building, deploying, monitoring, and maintaining the agents and automations in production.",
      },
    ],
  },
  {
    slug: "ai-gtm-tech-stack",
    anchor: "ai-tech-stack",
    title: "AI-Powered GTM Tech Stack",
    navLabel: "GTM Tech Stack",
    tagline: "Modern GTM infrastructure, built for speed and reliability.",
    metaTitle: "AI-Powered GTM Tech Stack Design & Integration",
    metaDescription:
      "Design and integrate an AI-powered GTM tech stack: CRM, marketing automation, sales engagement, enrichment, and LLMs connected with API-first automation like n8n.",
    summary:
      "SiyaSphere designs and integrates GTM tech stacks where CRM, marketing automation, sales engagement, enrichment, and AI tools work as one system. We connect platforms with API-first automation such as n8n and webhooks, and build large language models like ChatGPT and Claude into everyday workflows. You get a modular stack that scales without manual glue work.",
    signs: [
      "Your GTM tools don't talk to each other.",
      "People copy data between systems by hand.",
      "You're unsure which AI tools are worth adding to the stack.",
      "Every new tool adds complexity instead of output.",
    ],
    outcomes: [
      "Large language models such as ChatGPT and Claude integrated into workflows for assistance and automation",
      "API-first automation (n8n, webhooks, custom integrations) connecting the whole stack",
      "Faster build and iteration through AI-assisted workflow design",
      "Best-in-class CRM, marketing automation, sales engagement, and analytics platforms working together",
      "A modular, future-proof stack that adapts as your needs change",
    ],
    approach: [
      { title: "Stack audit", detail: "Inventory tools, integrations, costs, and gaps across your GTM stack." },
      { title: "Target architecture", detail: "Design the stack around your process, deciding what to keep, cut, or add." },
      { title: "Integrate and automate", detail: "Connect systems with native integrations, n8n, webhooks, and custom APIs." },
      { title: "Add AI where it pays", detail: "Introduce enrichment, AI agents, and LLM steps where they remove real work." },
    ],
    tools: ["Salesforce", "HubSpot", "Apollo.io", "Seamless AI", "Clay", "n8n", "ChatGPT", "Claude"],
    caseStudySlugs: [
      "ai-prospecting-engine-seamless-ai-clay",
      "outbound-gtm-launch-apollo-seamless-ai",
      "conversica-ai-sdr-dormant-leads",
    ],
    faqs: [
      {
        question: "What is a GTM tech stack?",
        answer:
          "A GTM tech stack is the set of tools that run go-to-market: CRM, marketing automation, sales engagement, data enrichment, analytics, and increasingly AI tools. It works well only when those tools share clean data and support one process.",
      },
      {
        question: "What does a lean early-stage GTM stack look like?",
        answer:
          "For one pre-revenue startup we used Apollo.io for prospecting and sequencing, Seamless AI for verification, Clay for ICP scoring, and HubSpot's free CRM. That stack took the company from $0 to $480K ARR in 5.5 months.",
      },
    ],
  },
  {
    slug: "account-research-prospect-intelligence",
    anchor: "account-intelligence",
    title: "Account Intelligence & Prospect Research",
    navLabel: "Account Intelligence",
    tagline: "Know your buyers before you reach out.",
    metaTitle: "Account Research & Prospect Intelligence for B2B Sales",
    metaDescription:
      "Account research and prospect intelligence: firmographics, technographics, buying signals, and verified decision-maker contacts that power targeted outbound and ABM.",
    summary:
      "SiyaSphere researches target accounts and maps the people who buy, so outbound and ABM teams know exactly where to start. We profile firmographics, map technology landscapes and incumbent vendors, and identify verified decision-makers across functions. Sales gets prioritised account lists with real buying signals instead of generic databases.",
    signs: [
      "Your account list is large but you don't know who to prioritise.",
      "You can't see which accounts run the technology you replace.",
      "Contact data bounces or reaches the wrong people.",
      "ABM campaigns lack account-level insight and persona mapping.",
    ],
    outcomes: [
      "Detailed firmographic profiles: industry, size, revenue, headcount, locations, and structure",
      "Technology landscapes and buying signals mapped, including incumbent vendors and initiatives",
      "Verified decision-makers and influencers across functions, with LinkedIn profiles and contact details",
      "Enriched records with verified emails, phone numbers, and reporting relationships",
      "Qualified opportunity lists built on intent signals, technology gaps, and fit",
      "Targeted ABM with persona mapping and multi-stakeholder strategies",
    ],
    approach: [
      { title: "ICP and targeting", detail: "Define the accounts, technologies, and personas that matter to your offer." },
      { title: "Account research", detail: "Profile firmographics and map technology and buying signals for each account." },
      { title: "Decision-maker mapping", detail: "Identify and verify buyers and influencers across relevant functions." },
      { title: "Activation-ready delivery", detail: "Deliver enriched, prioritised lists into your CRM for outbound and ABM." },
    ],
    tools: ["LinkedIn Sales Navigator", "Clay", "Apollo.io", "Seamless AI", "Technology Intelligence"],
    caseStudySlugs: [
      "account-research-decision-maker-mapping",
      "ai-prospecting-engine-seamless-ai-clay",
      "actively-ai-account-prioritization",
    ],
    faqs: [
      {
        question: "What is technographic research?",
        answer:
          "Technographic research identifies which technologies and vendors a company uses. It tells sales which accounts run tools you integrate with or replace, which is one of the strongest signals for prioritising outbound.",
      },
      {
        question: "Is the contact data verified?",
        answer:
          "Yes. We verify decision-makers' roles and contact details before delivery. In one engagement we delivered 964 verified decision-maker contacts across 450 researched accounts.",
      },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
