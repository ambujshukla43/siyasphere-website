import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import LineIcon, { type IconName } from "@/components/ui/LineIcon";

const baseUrl = "https://www.siyasphere.in";
const title = "The Modern GTM Stack: What B2B SaaS Teams Need at Each Stage";
const description =
  "A practical guide to the modern go-to-market tech stack: the seven layers every B2B SaaS team needs, which tools fit each growth stage, and the mistakes that make stacks fail.";

export const metadata: Metadata = {
  title: "The Modern GTM Stack: A Practical Guide for B2B SaaS | SiyaSphere",
  description,
  keywords:
    "GTM stack, go-to-market tech stack, B2B SaaS tech stack, RevOps tech stack, sales tech stack, marketing tech stack, AI GTM tools",
  openGraph: {
    title,
    description,
    url: `${baseUrl}/gtm-stack`,
    type: "article",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/gtm-stack" },
};

const layers: {
  name: string;
  icon: IconName;
  role: string;
  tools: string[];
  getRight: string;
  solution: { href: string; label: string };
}[] = [
  {
    name: "CRM: the system of record",
    icon: "database",
    role: "Holds accounts, contacts, opportunities, and activity. Every other layer reads from or writes to it, so its data model decides how well the rest of the stack works.",
    tools: ["Salesforce", "HubSpot"],
    getRight: "Design lifecycle stages and the data model around your process before adding fields. Unused fields and conflicting automation are the most common reason reps stop using the CRM.",
    solution: { href: "/solutions/salesforce-consulting", label: "Salesforce Consulting" },
  },
  {
    name: "Data & enrichment",
    icon: "search",
    role: "Finds prospects and fills in firmographic, technographic, and contact data so targeting, scoring, and routing have something to work with.",
    tools: ["Clay", "Apollo.io", "Seamless AI", "ZoomInfo", "LinkedIn Sales Navigator"],
    getRight: "Use a waterfall: a primary provider plus fallbacks gated on confidence scores. Single-source enrichment leaves gaps that break automation downstream.",
    solution: { href: "/solutions/account-research-prospect-intelligence", label: "Account Intelligence" },
  },
  {
    name: "Routing & data quality",
    icon: "route",
    role: "Deduplicates and normalises records, then assigns each lead to the right owner by territory, segment, and capacity.",
    tools: ["LeanData", "RingLead", "Salesforce Flow"],
    getRight: "Clean data before you route it. Routing rules depend on fields like company, country, and size, and duplicates send leads to the wrong place.",
    solution: { href: "/solutions/lead-routing", label: "Lead Routing" },
  },
  {
    name: "Marketing automation",
    icon: "mail",
    role: "Runs nurture programmes, scoring, campaigns, and lifecycle transitions, and hands qualified leads to sales.",
    tools: ["Marketo", "HubSpot Marketing Hub", "Salesforce Account Engagement (Pardot)"],
    getRight: "Agree MQL and SQL definitions with sales first. Scoring that sales doesn't trust just moves the leakage downstream.",
    solution: { href: "/solutions/revops-consulting", label: "RevOps Consulting" },
  },
  {
    name: "Sales engagement",
    icon: "send",
    role: "Sequences emails, calls, and LinkedIn touches, and logs activity back to the CRM.",
    tools: ["Outreach", "Salesloft", "Apollo.io"],
    getRight: "Make sure activity lands in the CRM in a structure managers can report on. Standard task objects often can't capture multi-channel cadence data.",
    solution: { href: "/solutions/salesforce-consulting", label: "Salesforce Consulting" },
  },
  {
    name: "AI agents & workflow automation",
    icon: "sparkles",
    role: "Handles repetitive work at scale: enrichment, research, data entry, dormant-lead re-engagement, and drafting, connected through APIs.",
    tools: ["Clay", "Conversica", "n8n", "ChatGPT", "Claude"],
    getRight: "Keep a human in the loop for decisions that matter, like CRM updates and hand-offs. Adoption depends on the team trusting the output.",
    solution: { href: "/solutions/ai-gtm-workflows", label: "AI + Human Workflows" },
  },
  {
    name: "Analytics & BI",
    icon: "barChart",
    role: "Turns CRM, marketing, and engagement data into attribution, pipeline, and forecast reporting leadership can act on.",
    tools: ["Salesforce Reports", "Tableau", "Power BI", "Looker", "Snowflake"],
    getRight: "Fix metric definitions once, in a shared data model, rather than in every dashboard. That is what stops numbers conflicting between teams.",
    solution: { href: "/solutions/gtm-dashboards", label: "Executive Dashboards" },
  },
];

const stages = [
  {
    stage: "Pre-revenue to first $1M ARR",
    focus: "Prove an outbound or inbound motion cheaply.",
    stack: "HubSpot (free or starter CRM), Apollo.io for prospecting and sequencing, Clay or Seamless AI for verification and ICP scoring.",
  },
  {
    stage: "Series A to B",
    focus: "Make the motion repeatable and measurable.",
    stack: "Salesforce or HubSpot Professional, a dedicated marketing automation platform, Outreach or Salesloft, routing with Flow or LeanData, and a first set of shared dashboards.",
  },
  {
    stage: "Growth and enterprise",
    focus: "Scale across teams, regions, and products.",
    stack: "Salesforce with a governed data model, LeanData and data-quality tooling, intent data, a warehouse such as Snowflake with Tableau or Power BI, and AI agents for high-volume work.",
  },
];

const mistakes = [
  "Buying tools before defining the funnel and ownership they are meant to support.",
  "Letting each team define pipeline, MQL, and revenue differently, then trying to fix it in dashboards.",
  "Relying on one enrichment source and automating on top of incomplete data.",
  "Routing leads before deduplicating and normalising them.",
  "Adding AI without review steps, so the team stops trusting the output.",
  "Leaving integrations unmonitored until a sync silently breaks.",
];

const faqs = [
  {
    question: "What is a GTM tech stack?",
    answer:
      "A GTM (go-to-market) tech stack is the set of tools a company uses to find, win, and grow customers: CRM, data and enrichment, routing, marketing automation, sales engagement, AI and workflow automation, and analytics. It works well only when the tools share clean data and support one agreed process.",
  },
  {
    question: "What should an early-stage B2B SaaS GTM stack include?",
    answer:
      "Keep it lean: a CRM such as HubSpot, a prospecting and sequencing tool such as Apollo.io, and a way to verify and score contacts such as Clay or Seamless AI. In one SiyaSphere engagement, a stack like this took a pre-revenue company to $480K ARR in 5.5 months.",
  },
  {
    question: "Salesforce or HubSpot for a GTM stack?",
    answer:
      "HubSpot is usually faster to launch and suits smaller teams with simpler processes. Salesforce suits teams that need custom objects, complex territories, or enterprise reporting. The right choice depends on your process and growth plans more than on features.",
  },
  {
    question: "Where does AI fit in the GTM stack?",
    answer:
      "AI is best at high-volume, repetitive work such as enrichment, research, data entry, and re-engaging dormant leads, with people reviewing important decisions. It sits on top of the CRM and data layers, so it is only as good as the data underneath it.",
  },
];

export default function GTMStackPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${baseUrl}/gtm-stack`,
    mainEntityOfPage: `${baseUrl}/gtm-stack`,
    image: `${baseUrl}/opengraph-image`,
    author: { "@type": "Organization", name: "SiyaSphere", url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: "SiyaSphere",
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {[articleSchema, faqSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="bg-gray-950">
        {/* Header */}
        <header className="pt-24 pb-14 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-[#7FC6C4]/10">
          <div className="container-custom max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7FC6C4] mb-4">GTM Guide</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A modern GTM stack is the set of connected tools that runs go-to-market: a CRM as the system of
              record, data and enrichment, routing, marketing automation, sales engagement, AI and workflow
              automation, and analytics. Tools matter less than how they connect. The strongest stacks are built
              around one agreed funnel, with clean data flowing between every layer.
            </p>
          </div>
        </header>

        <div className="container-custom max-w-4xl py-14 space-y-16">
          {/* Layers */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">The seven layers of a modern GTM stack</h2>
            <p className="text-gray-400 mb-8">What each layer does, common tools, and the one thing to get right.</p>
            <ol className="space-y-5">
              {layers.map((layer, i) => (
                <li key={layer.name} className="rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#7FC6C4]/30 bg-[#7FC6C4]/10 text-[#7FC6C4]">
                      <LineIcon name={layer.icon} className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <span className="font-mono text-sm text-gray-500 mr-2">{String(i + 1).padStart(2, "0")}</span>
                        {layer.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{layer.role}</p>
                      <ul className="flex flex-wrap gap-2 mb-4">
                        {layer.tools.map((t) => (
                          <li key={t} className="px-2.5 py-1 rounded-md border border-[#7FC6C4]/25 bg-[#7FC6C4]/5 text-xs text-gray-200">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        <span className="font-semibold text-gray-200">Get this right: </span>
                        {layer.getRight}
                      </p>
                      <Link href={layer.solution.href} className="inline-block mt-3 text-sm font-semibold text-[#7FC6C4] hover:opacity-80">
                        {layer.solution.label} →
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* By stage */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What to use at each growth stage</h2>
            <p className="text-gray-400 mb-8">
              Typical starting points. The right stack depends on your motion, team, and existing tools.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {stages.map((s) => (
                <div key={s.stage} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{s.stage}</h3>
                  <p className="text-sm text-[#7FC6C4] mb-4">{s.focus}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{s.stack}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-6">
              See a lean early-stage stack in action:{" "}
              <Link href="/case-studies/outbound-gtm-launch-apollo-seamless-ai" className="text-[#7FC6C4] hover:opacity-80">
                $0 to $480K ARR in 5.5 months →
              </Link>
            </p>
          </section>

          {/* Mistakes */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Common GTM stack mistakes</h2>
            <ul className="space-y-3">
              {mistakes.map((m) => (
                <li key={m} className="flex gap-3 text-gray-300 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-red-400" />
                  {m}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.question}
                  className="group rounded-xl border border-gray-800 bg-gray-900 p-6 open:border-[#7FC6C4]/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-100">
                    {f.question}
                    <span className="ml-4 text-[#7FC6C4] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-400 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-[#7FC6C4]/30 bg-gradient-to-br from-[#7FC6C4]/10 to-transparent p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Not sure where your stack is breaking?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              A free GTM audit maps your current tools, data flows, and handoffs, and shows which layer to fix first.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Free GTM Audit
            </Button>
          </section>
        </div>
      </article>
    </>
  );
}
