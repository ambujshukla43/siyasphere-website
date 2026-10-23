import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import SolutionsCTA from "@/components/sections/SolutionsCTA";
import { getSolution, solutions } from "@/lib/solutions";
import { CATEGORY_COLORS, getCaseStudy, type CaseStudy } from "@/lib/caseStudies";

const baseUrl = "https://www.siyasphere.in";
const accent = "#7FC6C4";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};

  const path = `/solutions/${solution.slug}`;
  return {
    title: `${solution.metaTitle} | SiyaSphere`,
    description: solution.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url: `${baseUrl}${path}`,
      type: "website",
      images: ["/opengraph-image"],
    },
  };
}

export default function SolutionPage({ params }: Props) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();

  const url = `${baseUrl}/solutions/${solution.slug}`;
  const proof = solution.caseStudySlugs
    .map(getCaseStudy)
    .filter((cs): cs is CaseStudy => Boolean(cs));
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    serviceType: solution.navLabel,
    description: solution.summary,
    url,
    provider: { "@type": "Organization", name: "SiyaSphere", url: baseUrl },
    areaServed: ["US", "IN", "GB", "Worldwide"],
    audience: { "@type": "BusinessAudience", audienceType: "B2B SaaS companies" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${baseUrl}/solutions` },
      { "@type": "ListItem", position: 3, name: solution.title, item: url },
    ],
  };

  return (
    <>
      {[serviceSchema, faqSchema, breadcrumbSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Header */}
      <header className="pt-24 pb-14 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-[#7FC6C4]/10">
        <div className="container-custom max-w-4xl">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/solutions" className="hover:text-gray-300">Solutions</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-400">{solution.navLabel}</li>
            </ol>
          </nav>

          <p className="text-sm font-bold uppercase tracking-widest text-[#7FC6C4] mb-4">
            {solution.tagline}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {solution.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{solution.summary}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a Free GTM Audit
            </Button>
            {proof.length > 0 && (
              <Button href="#proof" variant="secondary" size="lg">
                See the Results
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="bg-gray-950">
        <div className="container-custom max-w-4xl py-14 space-y-16">
          {/* Signs + outcomes */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
              <h2 className="text-xl font-bold text-white mb-5">Signs you need this</h2>
              <ul className="space-y-3">
                {solution.signs.map((s) => (
                  <li key={s} className="flex gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-red-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-[#7FC6C4]/25 bg-gray-900 p-7">
              <h2 className="text-xl font-bold text-white mb-5">What you get</h2>
              <ul className="space-y-3">
                {solution.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#7FC6C4]" aria-hidden="true">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Approach */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-2">How we deliver</h2>
            <p className="text-gray-400 mb-8">
              Process first, tools second, with AI doing the heavy lifting and your team in control.{" "}
              <Link href="/how-it-works" className="text-[#7FC6C4] hover:opacity-80">
                See our 8-week process →
              </Link>
            </p>
            <ol className="grid sm:grid-cols-2 gap-6">
              {solution.approach.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#7FC6C4]/50 text-sm font-bold font-mono text-[#7FC6C4]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Tools */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-5">Tools we work with</h2>
            <ul className="flex flex-wrap gap-2">
              {solution.tools.map((t) => (
                <li
                  key={t}
                  className="px-3 py-1.5 rounded-lg border border-[#7FC6C4]/25 bg-[#7FC6C4]/5 text-sm text-gray-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* Proof */}
          {proof.length > 0 && (
            <section id="proof" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6">Results from real engagements</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {proof.map((cs) => {
                  const color = CATEGORY_COLORS[cs.category] ?? accent;
                  return (
                    <Link
                      key={cs.slug}
                      href={`/case-studies/${cs.slug}`}
                      className="group flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-white/20"
                    >
                      <div className="text-3xl font-bold font-mono mb-1" style={{ color }}>
                        {cs.keyMetric}
                      </div>
                      <div className="text-xs text-gray-500 mb-3">{cs.keyMetricLabel}</div>
                      <div className="text-sm font-semibold text-gray-200 group-hover:text-white leading-snug mb-4">
                        {cs.cardTitle}
                      </div>
                      <span className="mt-auto text-sm font-semibold" style={{ color }}>
                        Read the case study →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {solution.faqs.map((f) => (
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

          {/* Other solutions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-5">Explore other solutions</h2>
            <ul className="flex flex-wrap gap-2">
              {otherSolutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="inline-block px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300 hover:border-[#7FC6C4]/60 hover:text-white transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <SolutionsCTA />
    </>
  );
}
