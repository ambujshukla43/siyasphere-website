"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "B2B Clients Served", end: 40, suffix: "+", prefix: "" },
  { label: "Leads Processed", end: 2.4, suffix: "M+", prefix: "", decimals: 1 },
  { label: "Avg Pipeline Lift", end: 3.2, suffix: "x", prefix: "", decimals: 1 },
  { label: "Avg MQL Improvement", end: 47, suffix: "%", prefix: "" },
];

function StatCounter({
  end,
  suffix,
  prefix,
  decimals = 0,
  inView,
}: {
  end: number;
  suffix: string;
  prefix: string;
  decimals?: number;
  inView: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 90;
    const timer = setInterval(() => {
      frame++;
      const v = (frame / total) * end;
      setVal(v);
      if (frame >= total) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function CaseStudiesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-24 pb-16"
      style={{ background: "#0A0F1E" }}
    >
      {/* grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <div
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border"
            style={{
              color: "#00D4FF",
              borderColor: "rgba(0,212,255,0.3)",
              background: "rgba(0,212,255,0.07)",
            }}
          >
            Client Results
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Real Results,{" "}
            <span style={{ color: "#00D4FF" }}>Real Revenue</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            How B2B companies use SiyaSphere to fix broken GTM systems and scale pipeline with AI.
          </p>
        </motion.div>

        {/* Animated stat bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              className="rounded-xl border px-5 py-5 text-center"
              style={{
                background: "rgba(0,212,255,0.04)",
                borderColor: "rgba(0,212,255,0.15)",
              }}
            >
              <div
                className="text-3xl xl:text-4xl font-bold font-mono mb-1"
                style={{ color: "#00D4FF" }}
              >
                <StatCounter
                  end={s.end}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.decimals}
                  inView={isInView}
                />
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
