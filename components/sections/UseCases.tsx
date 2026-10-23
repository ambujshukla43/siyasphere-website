"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, CATEGORIES, CATEGORY_COLORS, type CaseStudy } from "@/lib/caseStudies";

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
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
        <h3 className="text-base font-bold text-white mb-2 leading-snug">
          <Link href={`/case-studies/${cs.slug}`} className="hover:underline">
            {cs.cardTitle}
          </Link>
        </h3>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">{cs.cardSummary}</p>

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

        <Link
          href={`/case-studies/${cs.slug}`}
          className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color }}
        >
          Read the case study <span aria-hidden="true">→</span>
        </Link>
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
          {CATEGORIES.map((cat) => {
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
              <CaseStudyCard key={cs.slug} cs={cs} index={i} />
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
