import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/sections/CTASection";
import {
  caseStudies,
  CATEGORY_COLORS,
  getCaseStudy,
  getRelatedCaseStudies,
} from "@/lib/caseStudies";
import { solutions } from "@/lib/solutions";

const baseUrl = "https://www.siyasphere.in";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};

  const path = `/case-studies/${cs.slug}`;
  return {
    title: `${cs.metaTitle} | SiyaSphere`,
    description: cs.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      url: `${baseUrl}${path}`,
      type: "article",
      images: ["/opengraph-image"],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const color = CATEGORY_COLORS[cs.category] ?? "#00D4FF";
  const related = getRelatedCaseStudies(cs);
  const relatedSolutions = solutions.filter((s) => s.caseStudySlugs.includes(cs.slug));
  const url = `${baseUrl}/case-studies/${cs.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.metaDescription,
    url,
    mainEntityOfPage: url,
    image: `${baseUrl}/opengraph-image`,
    articleSection: "Case Studies",
    about: cs.category,
    keywords: cs.tools.join(", "),
    author: { "@type": "Organization", name: "SiyaSphere", url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: "SiyaSphere",
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${baseUrl}/case-studies` },
      { "@type": "ListItem", position: 3, name: cs.cardTitle, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article style={{ background: "#080D1A" }}>
        {/* Header */}
        <header className="pt-24 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="container-custom max-w-4xl">
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-gray-300">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/case-studies" className="hover:text-gray-300">Case Studies</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-400 truncate max-w-[16rem]">{cs.cardTitle}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{ color, borderColor: `${color}40`, background: `${color}12` }}
              >
                {cs.category}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {cs.client} · {cs.clientType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {cs.title}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">{cs.summary}</p>

            {/* Highlights */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {cs.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border p-5"
                  style={{ background: `${color}0C`, borderColor: `${color}25` }}
                >
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="text-3xl font-bold font-mono leading-none mb-2" style={{ color }}>
                    {h.value}
                  </dd>
                  <dd className="text-sm text-gray-400 leading-snug">{h.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* Body */}
        <div className="container-custom max-w-4xl py-14">
          <div className="grid lg:grid-cols-[1fr_15rem] gap-12">
            <div className="space-y-12 min-w-0">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The challenge</h2>
                <ul className="space-y-3">
                  {cs.challenge.map((c) => (
                    <li key={c} className="flex gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">What we built</h2>
                <ol className="space-y-6">
                  {cs.approach.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold font-mono"
                        style={{ color, borderColor: `${color}50` }}
                      >
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

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
                <ul className="space-y-3">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-gray-200">
                      <span className="mt-0.5 flex-shrink-0" style={{ color }} aria-hidden="true">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </section>

              <section
                className="rounded-2xl border-l-4 p-6"
                style={{ borderColor: color, background: "#0D1427" }}
              >
                <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color }}>
                  Key takeaway
                </h2>
                <p className="text-gray-200 leading-relaxed">{cs.takeaway}</p>
              </section>
            </div>

            {/* At a glance */}
            <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border p-6" style={{ background: "#0D1427", borderColor: "rgba(255,255,255,0.07)" }}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">At a glance</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gray-500">Client</dt>
                  <dd className="text-gray-200">{cs.client}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Team</dt>
                  <dd className="text-gray-200">{cs.clientType}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Focus</dt>
                  <dd className="text-gray-200">{cs.category}</dd>
                </div>
                {cs.timeline && (
                  <div>
                    <dt className="text-gray-500">Timeline</dt>
                    <dd className="text-gray-200">{cs.timeline}</dd>
                  </div>
                )}
                {relatedSolutions.length > 0 && (
                  <div>
                    <dt className="text-gray-500">Related solutions</dt>
                    {relatedSolutions.map((s) => (
                      <dd key={s.slug}>
                        <Link href={`/solutions/${s.slug}`} className="text-[#7FC6C4] hover:opacity-80">
                          {s.navLabel}
                        </Link>
                      </dd>
                    ))}
                  </div>
                )}
                <div>
                  <dt className="text-gray-500 mb-2">Stack</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {cs.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-md border font-medium"
                        style={{ color: `${color}CC`, borderColor: `${color}30`, background: `${color}0A` }}
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        {/* Related */}
        <section className="border-t py-14" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-6">Related case studies</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const rColor = CATEGORY_COLORS[r.category] ?? "#00D4FF";
                return (
                  <Link
                    key={r.slug}
                    href={`/case-studies/${r.slug}`}
                    className="group rounded-xl border p-5 transition-colors hover:border-white/20"
                    style={{ background: "#0D1427", borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <div className="text-2xl font-bold font-mono mb-1" style={{ color: rColor }}>
                      {r.keyMetric}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">{r.keyMetricLabel}</div>
                    <div className="text-sm font-semibold text-gray-200 group-hover:text-white leading-snug">
                      {r.cardTitle}
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link href="/case-studies" className="inline-block mt-8 text-sm font-semibold text-[#7FC6C4] hover:opacity-80">
              ← All case studies
            </Link>
          </div>
        </section>
      </article>

      <CTASection />
    </>
  );
}
