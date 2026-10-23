"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { solutions } from "@/lib/solutions";

export default function SolutionsGrid() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              id={solution.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="scroll-mt-20"
            >
              <Card className="h-full flex flex-col p-8 border border-[#7FC6C4]/20 hover:border-[#7FC6C4]/40 transition-all duration-300">
                {/* Title and Value Statement */}
                <div className="mb-5">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    <Link href={`/solutions/${solution.slug}`} className="hover:text-[#7FC6C4] transition-colors">
                      {solution.title}
                    </Link>
                  </h2>
                  <p className="text-[#7FC6C4] font-semibold">{solution.tagline}</p>
                </div>

                {/* Outcomes */}
                <div className="space-y-3 mb-6">
                  {solution.outcomes.slice(0, 3).map((outcome) => (
                    <div key={outcome} className="flex gap-3">
                      <span className="text-[#7FC6C4] font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-gray-400 leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#7FC6C4] hover:opacity-80"
                >
                  Explore {solution.navLabel} <span aria-hidden="true">→</span>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
