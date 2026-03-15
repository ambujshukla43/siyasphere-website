"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Data Model ─── */
interface Tool {
  name: string;
  icon: string;
  color: string;
  stage: string;
  role: string;
  summary: string;
}

interface Stage {
  id: string;
  title: string;
  label: string;
  color: string;
  description: string;
}

const stages: Stage[] = [
  {
    id: "data",
    title: "Data Sources",
    label: "① Capture",
    color: "#FF6B6B",
    description:
      "Raw prospect & company intelligence is ingested from multiple enrichment providers in real-time.",
  },
  {
    id: "enrich",
    title: "Enrichment",
    label: "② Enrich",
    color: "#F59E0B",
    description:
      "AI deduplicates, normalizes, and validates every record to ensure CRM-ready data quality.",
  },
  {
    id: "crm",
    title: "CRM Hub",
    label: "③ Unify",
    color: "#3B82F6",
    description:
      "Clean records flow into your single source of truth — accounts, contacts, and opportunities unified.",
  },
  {
    id: "sales",
    title: "Sales Execution",
    label: "④ Execute",
    color: "#8B5CF6",
    description:
      "Reps receive AI-prioritized sequences with dynamic talk-tracks and optimal send-times.",
  },
  {
    id: "marketing",
    title: "Marketing",
    label: "⑤ Activate",
    color: "#EC4899",
    description:
      "Multi-touch campaigns auto-trigger based on intent signals, scoring thresholds, and lifecycle stage.",
  },
  {
    id: "analytics",
    title: "Analytics",
    label: "⑥ Measure",
    color: "#06B6D4",
    description:
      "Revenue attribution, pipeline forecasting, and AI-driven insights feed back into every stage.",
  },
];

const tools: Tool[] = [
  {
    name: "ZoomInfo",
    icon: "🔍",
    color: "#FF6B6B",
    stage: "data",
    role: "Lead Intelligence",
    summary:
      "Pulls firmographic & technographic data for 100M+ contacts. AI matches ideal customer profiles in real-time.",
  },
  {
    name: "Clearbit",
    icon: "🏢",
    color: "#FF6B6B",
    stage: "data",
    role: "Company Enrichment",
    summary:
      "Enriches inbound leads with 100+ company attributes — industry, revenue, employee count, tech stack.",
  },
  {
    name: "6sense",
    icon: "🎯",
    color: "#FF6B6B",
    stage: "data",
    role: "Intent Signals",
    summary:
      "Captures anonymous buying signals across the web. AI identifies accounts actively researching your category.",
  },
  {
    name: "Dedup Engine",
    icon: "🔄",
    color: "#F59E0B",
    stage: "enrich",
    role: "Deduplication",
    summary:
      "Fuzzy-matching algorithm merges duplicate records across sources. Maintains a single golden record per entity.",
  },
  {
    name: "Normalize",
    icon: "⚙️",
    color: "#F59E0B",
    stage: "enrich",
    role: "Standardization",
    summary:
      "Maps disparate field formats into a unified schema — job titles, industries, addresses normalized globally.",
  },
  {
    name: "Validation",
    icon: "✅",
    color: "#F59E0B",
    stage: "enrich",
    role: "Quality Gate",
    summary:
      "Email verification, phone validation, and data completeness scoring. Only clean records pass through.",
  },
  {
    name: "Salesforce",
    icon: "☁️",
    color: "#3B82F6",
    stage: "crm",
    role: "Account Hub",
    summary:
      "Central system of record. AI auto-creates accounts, assigns territories, and triggers stage-based workflows.",
  },
  {
    name: "HubSpot",
    icon: "📊",
    color: "#3B82F6",
    stage: "crm",
    role: "Contact Management",
    summary:
      "Manages lifecycle stages, tracks every touchpoint, and syncs bi-directionally with sales tools.",
  },
  {
    name: "Outreach",
    icon: "📞",
    color: "#8B5CF6",
    stage: "sales",
    role: "Sales Engagement",
    summary:
      "AI-optimized multi-step sequences — emails, calls, social touches — with A/B testing and send-time optimization.",
  },
  {
    name: "Salesloft",
    icon: "🎯",
    color: "#8B5CF6",
    stage: "sales",
    role: "Revenue Intelligence",
    summary:
      "Conversation intelligence, deal inspection, and forecast modeling. AI coaches reps on winning behaviors.",
  },
  {
    name: "Marketo",
    icon: "📧",
    color: "#EC4899",
    stage: "marketing",
    role: "Campaign Automation",
    summary:
      "Orchestrates nurture streams, triggers smart campaigns based on behavior scores and lifecycle transitions.",
  },
  {
    name: "Pardot",
    icon: "🤝",
    color: "#EC4899",
    stage: "marketing",
    role: "Lead Nurture",
    summary:
      "B2B marketing automation with engagement scoring, drip programs, and Salesforce-native lead handoff.",
  },
  {
    name: "Snowflake",
    icon: "❄️",
    color: "#06B6D4",
    stage: "analytics",
    role: "Data Warehouse",
    summary:
      "Unified data lake storing all GTM telemetry. Powers cross-functional reporting and ML model training.",
  },
  {
    name: "Looker",
    icon: "📈",
    color: "#06B6D4",
    stage: "analytics",
    role: "BI Dashboards",
    summary:
      "Self-serve analytics with embedded dashboards. Revenue teams track pipeline velocity, conversion, and ROI.",
  },
  {
    name: "Tableau",
    icon: "📊",
    color: "#06B6D4",
    stage: "analytics",
    role: "Visual Analytics",
    summary:
      "Advanced visualization for executive reporting — cohort analysis, funnel diagnostics, and territory planning.",
  },
];

const aiCapabilities = [
  { label: "Lead Scoring", icon: "🎯", desc: "Predict conversion probability" },
  { label: "Smart Routing", icon: "🔀", desc: "Auto-assign to best rep" },
  { label: "Personalization", icon: "✨", desc: "Dynamic content at scale" },
  { label: "Forecasting", icon: "📈", desc: "AI pipeline predictions" },
  { label: "Revenue Intel", icon: "💰", desc: "Deal health & risk signals" },
];

/* ─── Flowing Particle ─── */
function FlowParticle({ index }: { index: number }) {
  const colors = [
    "#FF6B6B",
    "#F59E0B",
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
    "#06B6D4",
  ];
  const color = colors[index % colors.length];
  const duration = 6 + index * 1.5;
  const delay = index * 2;

  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}, 0 0 20px ${color}50`,
        top: `${30 + (index % 3) * 20}%`,
      }}
      animate={{
        left: ["0%", "100%"],
        opacity: [0, 1, 1, 1, 0],
        scale: [0.5, 1.2, 1, 1.2, 0.5],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/* ─── Connection Arrow Between Stages ─── */
function StageConnector({
  color,
  nextColor,
  isActive,
}: {
  color: string;
  nextColor: string;
  isActive: boolean;
}) {
  return (
    <div className="flex items-center justify-center self-center mx-[-8px] z-10">
      <div className="relative flex items-center">
        {/* Animated flowing line */}
        <div className="w-8 h-[2px] relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${color}, ${nextColor})`,
            }}
            animate={{
              opacity: isActive ? [0.4, 1, 0.4] : 0.2,
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {/* Flowing dot */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: nextColor,
              boxShadow: `0 0 6px ${nextColor}`,
            }}
            animate={{ left: ["-10%", "110%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        {/* Arrow head */}
        <div
          className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent"
          style={{
            borderLeftColor: isActive ? nextColor : `${nextColor}40`,
            filter: isActive
              ? `drop-shadow(0 0 4px ${nextColor})`
              : "none",
            transition: "all 0.3s",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Tool Card ─── */
function ToolCard({
  tool,
  isStageHovered,
}: {
  tool: Tool;
  isStageHovered: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="relative p-2.5 rounded-lg border backdrop-blur-sm cursor-pointer overflow-hidden"
        style={{
          borderColor: isHovered ? `${tool.color}CC` : `${tool.color}40`,
          backgroundColor: isHovered ? `${tool.color}15` : `${tool.color}08`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              boxShadow: `inset 0 0 30px ${tool.color}15, 0 0 20px ${tool.color}20`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        {/* Active processing indicator */}
        {isStageHovered && (
          <motion.div
            className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: tool.color }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        <div className="flex items-center gap-2 relative z-10">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-sm flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${tool.color}30, ${tool.color}10)`,
              border: `1px solid ${tool.color}60`,
            }}
          >
            {tool.icon}
          </div>
          <div className="min-w-0">
            <p
              className="text-[11px] font-semibold truncate"
              style={{ color: tool.color }}
            >
              {tool.name}
            </p>
            <p className="text-[9px] text-gray-500 truncate">{tool.role}</p>
          </div>
        </div>
      </motion.div>

      {/* Hover Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 pointer-events-none"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="rounded-xl p-3.5 border shadow-2xl backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(17,24,39,0.97), rgba(17,24,39,0.92))",
                borderColor: `${tool.color}40`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${tool.color}15`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{tool.icon}</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: tool.color }}
                >
                  {tool.name}
                </span>
                <span
                  className="ml-auto text-[9px] px-1.5 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: `${tool.color}20`,
                    color: tool.color,
                    border: `1px solid ${tool.color}30`,
                  }}
                >
                  {tool.role}
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                {tool.summary}
              </p>
              {/* Mini data flow indicator */}
              <div className="mt-2 flex items-center gap-1">
                <div className="h-[2px] flex-1 rounded-full overflow-hidden bg-gray-800">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${tool.color})`,
                    }}
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
                <span className="text-[8px] text-gray-500">PROCESSING</span>
              </div>
            </div>
            {/* Arrow */}
            <div
              className="w-2.5 h-2.5 rotate-45 mx-auto -mt-1.5"
              style={{
                backgroundColor: "rgba(17,24,39,0.97)",
                borderRight: `1px solid ${tool.color}40`,
                borderBottom: `1px solid ${tool.color}40`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Stage Column ─── */
function StageColumn({
  stage,
  stageTools,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}: {
  stage: Stage;
  stageTools: Tool[];
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="flex-1 min-w-0"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{
        opacity: isAnyHovered && !isHovered ? 0.35 : 1,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Stage Header */}
      <div className="text-center mb-3">
        <motion.div
          className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-1.5"
          style={{
            color: stage.color,
            backgroundColor: `${stage.color}12`,
            border: `1px solid ${stage.color}30`,
          }}
          animate={{
            borderColor: isHovered ? `${stage.color}80` : `${stage.color}30`,
            boxShadow: isHovered
              ? `0 0 15px ${stage.color}25`
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          {stage.title}
        </motion.div>
      </div>

      {/* Tools */}
      <div className="flex flex-col gap-1.5">
        {stageTools.map((tool) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            isStageHovered={isHovered}
          />
        ))}
      </div>

      {/* Stage Step Label */}
      <motion.div
        className="mt-3 text-center"
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <p
          className="text-[10px] font-semibold"
          style={{ color: stage.color }}
        >
          {stage.label}
        </p>
        <AnimatePresence>
          {isHovered && (
            <motion.p
              className="text-[9px] text-gray-400 mt-1 leading-snug"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {stage.description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function AIDataFlow() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [activeDataPoint, setActiveDataPoint] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycle through active data points for ambient animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDataPoint((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7FC6C4]/10 border border-[#7FC6C4]/20 mb-5">
            <motion.span
              className="w-2 h-2 rounded-full bg-[#7FC6C4]"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium text-[#7FC6C4] tracking-wider uppercase">
              Live Data Orchestration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-[#7FC6C4] to-cyan-400 bg-clip-text text-transparent">
              GTM Data Flow
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how data flows through your entire GTM stack — from raw
            signals to revenue insights, orchestrated by AI.
          </p>
        </motion.div>

        {/* Main Flow Diagram */}
        <motion.div
          ref={containerRef}
          className="relative rounded-2xl border border-gray-800/80 bg-gray-900/40 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Top gradient accent bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#FF6B6B] via-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]" />

          {/* Background ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.03]"
              style={{
                background: `radial-gradient(ellipse, ${stages[activeDataPoint]?.color || "#7FC6C4"}, transparent 70%)`,
                transition: "background 2s ease",
              }}
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Central AI Hub */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-[-12px] rounded-full border border-dashed border-[#7FC6C4]/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-[-6px] rounded-full bg-[#7FC6C4]/5"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Core badge */}
                <div className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-[#7FC6C4]/40 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="text-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🤖
                    </motion.span>
                    <span className="text-sm font-bold bg-gradient-to-r from-[#7FC6C4] to-purple-400 bg-clip-text text-transparent">
                      AI Orchestration Layer
                    </span>
                    <motion.span
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </div>
                {/* Connection line down */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-6 bg-gradient-to-b from-[#7FC6C4]/40 to-transparent" />
              </div>
            </motion.div>

            {/* Flow Pipeline with Stages */}
            <div className="flex items-start gap-0 relative">
              {/* Flowing particles layer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <FlowParticle key={i} index={i} />
                ))}
              </div>

              {stages.map((stage, idx) => {
                const stageTools = tools.filter(
                  (t) => t.stage === stage.id
                );
                const isHovered = hoveredStage === stage.id;

                return (
                  <div key={stage.id} className="contents">
                    <StageColumn
                      stage={stage}
                      stageTools={stageTools}
                      isHovered={isHovered}
                      isAnyHovered={!!hoveredStage}
                      onHover={() => setHoveredStage(stage.id)}
                      onLeave={() => setHoveredStage(null)}
                    />
                    {idx < stages.length - 1 && (
                      <StageConnector
                        color={stage.color}
                        nextColor={stages[idx + 1].color}
                        isActive={
                          isHovered ||
                          hoveredStage === stages[idx + 1].id
                        }
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Feedback Loop Indicator */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-[#06B6D4]/30" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/50">
                <motion.span
                  className="text-[10px]"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ��
                </motion.span>
                <span className="text-[10px] text-gray-400 font-medium">
                  Continuous feedback loop — Analytics insights refine
                  every upstream stage
                </span>
              </div>
              <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-[#FF6B6B]/30" />
            </motion.div>
          </div>
        </motion.div>

        {/* AI Capabilities Bar */}
        <motion.div
          className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {aiCapabilities.map((cap, idx) => (
            <motion.div
              key={cap.label}
              className="group relative flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800/60 hover:border-[#7FC6C4]/40 transition-all duration-300 cursor-default"
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <span className="text-lg">{cap.icon}</span>
              <div>
                <p className="text-xs font-semibold text-gray-200 group-hover:text-[#7FC6C4] transition-colors">
                  {cap.label}
                </p>
                <p className="text-[9px] text-gray-500">{cap.desc}</p>
              </div>
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 20px rgba(127,198,196,0.05)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
