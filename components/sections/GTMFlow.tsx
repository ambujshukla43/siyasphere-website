"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Data ─── */
interface ToolInfo {
  name: string;
  desc: string;
}

interface FlowStage {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  glowColor: string;
  capabilities: string[];
  metrics: { label: string; value: string };
  tools: ToolInfo[];
}

const flowStages: FlowStage[] = [
  {
    title: "Marketing",
    subtitle: "Demand Generation",
    description:
      "Launch multi-channel campaigns that capture high-intent leads. AI scores and segments every visitor, turning anonymous traffic into qualified MQLs at scale.",
    icon: "📢",
    color: "#3B82F6",
    gradient: "from-blue-500 to-blue-600",
    glowColor: "rgba(59,130,246,0.15)",
    capabilities: [
      "Omnichannel campaign orchestration",
      "Behavioral lead scoring & grading",
      "Dynamic content personalization",
      "ABM target account activation",
    ],
    metrics: { label: "Avg MQL Lift", value: "+47%" },
    tools: [
      { name: "Marketo", desc: "Enterprise marketing automation — nurture programs, smart campaigns, and revenue attribution." },
      { name: "HubSpot", desc: "Inbound CRM & marketing platform — forms, email workflows, landing pages, and analytics." },
      { name: "Pardot", desc: "B2B marketing automation built on Salesforce — scoring, grading, and lifecycle management." },
      { name: "Drift", desc: "Conversational marketing — AI chatbots, live chat, and real-time buyer engagement." },
    ],
  },
  {
    title: "SDR",
    subtitle: "Pipeline Development",
    description:
      "Intelligent lead routing ensures every prospect reaches the right rep instantly. Automated enrichment fills in firmographic gaps so reps sell, not research.",
    icon: "🎯",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.15)",
    capabilities: [
      "AI-powered lead routing & assignment",
      "Real-time contact & company enrichment",
      "Multi-touch outbound sequences",
      "Intent signal prioritization",
    ],
    metrics: { label: "Speed to Lead", value: "<2 min" },
    tools: [
      { name: "Outreach", desc: "Sales engagement — AI-optimized email sequences, call tasks, and A/B testing at scale." },
      { name: "ZoomInfo", desc: "B2B intelligence — 100M+ contacts with firmographic, technographic, and intent data." },
      { name: "LeanData", desc: "Revenue orchestration — lead-to-account matching, routing, and territory management." },
      { name: "Apollo", desc: "Prospecting suite — verified emails, phone numbers, and automated outreach workflows." },
      { name: "Lusha", desc: "Contact enrichment — direct dials and email addresses with real-time verification." },
      { name: "Demandbase", desc: "ABM platform — account identification, intent data, and personalized advertising." },
      { name: "RingLead", desc: "Data quality — deduplication, normalization, and enrichment for clean CRM records." },
    ],
  },
  {
    title: "Sales",
    subtitle: "Revenue Execution",
    description:
      "Accelerate deals with conversation intelligence, content recommendations, and AI-guided selling. Every interaction is captured, analyzed, and optimized.",
    icon: "💼",
    color: "#10B981",
    gradient: "from-emerald-500 to-emerald-600",
    glowColor: "rgba(16,185,129,0.15)",
    capabilities: [
      "AI deal scoring & risk detection",
      "Conversation intelligence & coaching",
      "Content engagement tracking",
      "CPQ & revenue lifecycle management",
    ],
    metrics: { label: "Win Rate Boost", value: "+32%" },
    tools: [
      { name: "Salesforce", desc: "CRM platform — accounts, opportunities, forecasting, and custom automation workflows." },
      { name: "Revenue Cloud", desc: "CPQ & billing — configure quotes, manage contracts, and automate the revenue lifecycle." },
      { name: "Gong", desc: "Revenue intelligence — call recording, deal analytics, and AI-powered coaching insights." },
      { name: "Seismic", desc: "Sales enablement — content management, training, and buyer engagement analytics." },
      { name: "Gainsight", desc: "Customer success — health scoring, renewal management, and expansion opportunity tracking." },
    ],
  },
  {
    title: "RevOps",
    subtitle: "Intelligence & Analytics",
    description:
      "Unify every data point across your GTM engine into a single source of truth. AI-driven forecasting and attribution show you exactly what's working — and what's not.",
    icon: "📊",
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.15)",
    capabilities: [
      "Multi-touch revenue attribution",
      "AI pipeline forecasting",
      "Cross-functional KPI dashboards",
      "Data governance & hygiene automation",
    ],
    metrics: { label: "Forecast Accuracy", value: "94%" },
    tools: [
      { name: "Tableau", desc: "Visual analytics — interactive dashboards, cohort analysis, and executive reporting." },
      { name: "Looker", desc: "BI platform — semantic modeling, embedded analytics, and self-serve data exploration." },
      { name: "Power BI", desc: "Microsoft BI — real-time dashboards, natural language queries, and deep Excel integration." },
      { name: "Clari", desc: "Revenue operations — AI forecasting, pipeline inspection, and deal flow analytics." },
      { name: "Databox", desc: "KPI tracking — cross-platform dashboards, automated alerts, and performance benchmarking." },
      { name: "SF Dashboards", desc: "Native Salesforce reporting — custom reports, scheduled snapshots, and role-based views." },
    ],
  },
];

/* ─── Flow Arrow ─── */
function FlowArrow({ color, nextColor }: { color: string; nextColor: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center self-stretch py-20">
      <div className="relative flex flex-col items-center gap-1">
        {/* Vertical dotted line for spacing */}
        <div className="w-10 h-[2px] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color}, ${nextColor})`,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{
              backgroundColor: nextColor,
              boxShadow: `0 0 8px ${nextColor}`,
            }}
            animate={{ left: ["-20%", "120%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <svg width="12" height="10" viewBox="0 0 12 10" className="ml-0.5">
          <path
            d="M6 10L0 0h12z"
            fill={nextColor}
            fillOpacity={0.6}
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── Tool Pill ─── */
function ToolPill({ tool, color }: { tool: ToolInfo; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <motion.span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.05, y: -1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-200 border"
        style={{
          backgroundColor: hovered ? `${color}18` : "rgba(55,65,81,0.5)",
          borderColor: hovered ? `${color}50` : "rgba(75,85,99,0.5)",
          color: hovered ? color : "rgb(209,213,219)",
        }}
      >
        {tool.name}
      </motion.span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-56 pointer-events-none"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="rounded-lg p-3 border shadow-xl backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(17,24,39,0.97), rgba(17,24,39,0.93))",
                borderColor: `${color}35`,
                boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 20px ${color}10`,
              }}
            >
              <p className="text-[11px] font-bold mb-1" style={{ color }}>
                {tool.name}
              </p>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                {tool.desc}
              </p>
            </div>
            <div
              className="w-2 h-2 rotate-45 mx-auto -mt-1"
              style={{
                backgroundColor: "rgba(17,24,39,0.97)",
                borderRight: `1px solid ${color}35`,
                borderBottom: `1px solid ${color}35`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Stage Card ─── */
function StageCard({
  stage,
  index,
  isActive,
  onActivate,
}: {
  stage: FlowStage;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex-1 min-w-0"
      onMouseEnter={onActivate}
    >
      <motion.div
        className="relative h-full rounded-2xl border overflow-hidden transition-all duration-500"
        style={{
          borderColor: isActive ? `${stage.color}50` : "rgba(55,65,81,0.4)",
          backgroundColor: isActive
            ? `${stage.color}06`
            : "rgba(17,24,39,0.6)",
        }}
        animate={{
          boxShadow: isActive
            ? `0 0 40px ${stage.glowColor}, 0 20px 60px rgba(0,0,0,0.3)`
            : "0 4px 20px rgba(0,0,0,0.2)",
        }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${stage.color}80, ${stage.color}30)`,
          }}
        />

        {/* Ambient glow */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at top, ${stage.color}12, transparent 70%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        <div className="p-6 lg:p-7 relative">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center text-2xl shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {stage.icon}
            </motion.div>

            {/* Step number + metric */}
            <div className="text-right">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
                style={{
                  backgroundColor: `${stage.color}15`,
                  color: stage.color,
                  border: `1px solid ${stage.color}30`,
                }}
              >
                <span className="opacity-60">STEP</span> {index + 1}
              </div>
            </div>
          </div>

          {/* Title + Subtitle */}
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
              {stage.title}
            </h3>
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: stage.color }}
            >
              {stage.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {stage.description}
          </p>

          {/* Metric badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mb-5"
            style={{
              backgroundColor: `${stage.color}10`,
              border: `1px solid ${stage.color}20`,
            }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: stage.color }}
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-gray-400">
              {stage.metrics.label}
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: stage.color }}
            >
              {stage.metrics.value}
            </span>
          </div>

          {/* Capabilities */}
          <div className="mb-6">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Key Capabilities
            </p>
            <ul className="space-y-1.5">
              {stage.capabilities.map((cap, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                >
                  <span
                    className="mt-0.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: stage.color }}
                  />
                  {cap}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="pt-5 border-t border-gray-700/40">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {stage.tools.map((tool) => (
                <ToolPill key={tool.name} tool={tool} color={stage.color} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function GTMFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7FC6C4]/10 border border-[#7FC6C4]/20 mb-5">
            <motion.span
              className="w-2 h-2 rounded-full bg-[#7FC6C4]"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium text-[#7FC6C4] tracking-wider uppercase">
              End-to-End Revenue Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Complete{" "}
            <span className="bg-gradient-to-r from-[#7FC6C4] to-cyan-400 bg-clip-text text-transparent">
              GTM Architecture
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From first touch to closed-won, we connect every system in your
            revenue engine — with AI orchestrating every handoff.
          </p>
        </motion.div>

        {/* Flow Progress Bar (Desktop) */}
        <motion.div
          className="hidden lg:flex items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {flowStages.map((stage, idx) => (
            <div key={stage.title} className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex(idx)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor:
                    activeIndex === idx ? `${stage.color}20` : "transparent",
                  border: `1px solid ${activeIndex === idx ? `${stage.color}50` : "rgba(75,85,99,0.3)"}`,
                }}
              >
                <span className="text-sm">{stage.icon}</span>
                <span
                  className="text-xs font-semibold transition-colors duration-300"
                  style={{
                    color:
                      activeIndex === idx ? stage.color : "rgb(156,163,175)",
                  }}
                >
                  {stage.title}
                </span>
              </button>
              {idx < flowStages.length - 1 && (
                <motion.div
                  className="w-8 h-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${stage.color}40, ${flowStages[idx + 1].color}40)`,
                  }}
                  animate={{
                    opacity:
                      activeIndex >= idx && activeIndex <= idx + 1
                        ? [0.4, 1, 0.4]
                        : 0.2,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 relative">
          {flowStages.map((stage, index) => (
            <StageCard
              key={stage.title}
              stage={stage}
              index={index}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile flow direction indicator */}
        <div className="lg:hidden flex justify-center mt-6 mb-2">
          <div className="flex items-center gap-1">
            {flowStages.map((stage, idx) => (
              <div key={stage.title} className="flex items-center gap-1">
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeIndex === idx ? stage.color : `${stage.color}30`,
                    boxShadow:
                      activeIndex === idx
                        ? `0 0 8px ${stage.color}`
                        : "none",
                  }}
                />
                {idx < flowStages.length - 1 && (
                  <div className="w-4 h-[1px] bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 relative rounded-2xl border border-[#7FC6C4]/20 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7FC6C4]/5 via-transparent to-cyan-400/5" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #7FC6C4 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative px-8 py-10 lg:px-12 lg:py-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left: icons + text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start gap-3 mb-4">
                  {["⚡", "🤖", "🔗", "📈"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
                <p className="text-lg text-gray-300 max-w-xl">
                  <span className="font-semibold text-white">
                    AI-driven workflows
                  </span>{" "}
                  automate enrichment, routing, and prioritization across every
                  stage. Real-time data synchronization. Intelligent
                  decision-making.{" "}
                  <span className="font-semibold text-[#7FC6C4]">
                    Predictable revenue growth.
                  </span>
                </p>
              </div>

              {/* Right: stats */}
              <div className="flex gap-6 lg:gap-8">
                {[
                  { val: "30+", label: "Integrations" },
                  { val: "<1hr", label: "Setup Time" },
                  { val: "2x", label: "Pipeline Velocity" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#7FC6C4] to-cyan-400 bg-clip-text text-transparent">
                      {stat.val}
                    </p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
