"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Tool = { name: string; abbr: string; category: string; use: string };
type Lane = { id: string; label: string; color: string; tools: Tool[] };

const lanes: Lane[] = [
  {
    id: "data",
    label: "Data & Intelligence",
    color: "#00D4FF",
    tools: [
      { name: "Seamless AI", abbr: "SA", category: "Contact Discovery", use: "AI-powered B2B contact discovery & prospecting" },
      { name: "Apollo.io", abbr: "AP", category: "Sales Intelligence", use: "Sales intelligence + sequencing platform" },
      { name: "ZoomInfo", abbr: "ZI", category: "Data Enrichment", use: "Firmographic & intent data enrichment" },
      { name: "Demandbase", abbr: "DB", category: "ABM Platform", use: "ABM platform & account intent signals" },
      { name: "Clay", abbr: "CL", category: "Data Orchestration", use: "AI enrichment & waterfall data orchestration" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing Automation",
    color: "#F59E0B",
    tools: [
      { name: "Marketo", abbr: "MK", category: "Marketing Automation", use: "Enterprise marketing automation & nurture" },
      { name: "HubSpot", abbr: "HS", category: "Inbound CRM", use: "Inbound marketing & CRM hub" },
      { name: "Pardot", abbr: "PD", category: "B2B Marketing", use: "B2B marketing automation for Salesforce" },
      { name: "Drift", abbr: "DR", category: "Conversational AI", use: "Conversational marketing & AI chatbot" },
      { name: "Actively AI", abbr: "AA", category: "Account Intelligence", use: "AI-driven account prioritisation & engagement signals" },
    ],
  },
  {
    id: "sdr",
    label: "SDR & Outreach",
    color: "#00FF88",
    tools: [
      { name: "Outreach", abbr: "OR", category: "Sales Engagement", use: "Sales engagement & sequence automation" },
      { name: "Conversica", abbr: "CV", category: "AI SDR", use: "AI SDR / automated conversation agent" },
      { name: "LeanData", abbr: "LD", category: "Lead Routing", use: "Lead routing, matching & orchestration" },
      { name: "RingLead", abbr: "RL", category: "Data Quality", use: "Data quality, deduplication & normalisation" },
      { name: "Lusha", abbr: "LU", category: "Contact Enrichment", use: "Real-time contact enrichment & intent data" },
    ],
  },
  {
    id: "crm",
    label: "CRM & Sales",
    color: "#A78BFA",
    tools: [
      { name: "Salesforce CRM", abbr: "SF", category: "CRM", use: "Source of truth for pipeline & accounts" },
      { name: "Revenue Cloud", abbr: "RC", category: "CPQ", use: "Quote-to-cash automation" },
      { name: "Gong", abbr: "GN", category: "Conversation Intelligence", use: "Conversation intelligence & deal risk detection" },
      { name: "Seismic", abbr: "SM", category: "Sales Enablement", use: "Sales enablement & content intelligence" },
      { name: "Gainsight", abbr: "GS", category: "Customer Success", use: "Customer success & expansion revenue" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & RevOps",
    color: "#FF6B6B",
    tools: [
      { name: "Tableau", abbr: "TB", category: "Data Visualisation", use: "Advanced data visualisation & reporting" },
      { name: "Looker", abbr: "LK", category: "BI Analytics", use: "BI & embedded analytics" },
      { name: "Clari", abbr: "CR", category: "Revenue AI", use: "AI revenue forecasting & pipeline inspection" },
      { name: "Power BI", abbr: "PB", category: "Dashboards", use: "Executive dashboards & data storytelling" },
      { name: "Snowflake", abbr: "SN", category: "Data Warehouse", use: "Cloud data warehouse / single source of truth" },
    ],
  },
];

const metrics = [
  { label: "Integrations", end: 30, suffix: "+", prefix: "" },
  { label: "Avg MQL Lift", end: 47, suffix: "%", prefix: "" },
  { label: "Forecast Accuracy", end: 94, suffix: "%", prefix: "" },
  { label: "Speed-to-Lead", end: 2, suffix: " min", prefix: "<" },
];

function Counter({
  end,
  suffix,
  prefix,
  inView,
}: {
  end: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 80;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / totalFrames) * end));
      if (frame >= totalFrames) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

function ToolNode({
  tool,
  laneColor,
  dimmed,
  delay,
}: {
  tool: Tool;
  laneColor: string;
  dimmed: boolean;
  delay: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay }}
        whileHover={{ x: 3, scale: 1.04 }}
        className="flex items-center gap-2 px-2.5 py-2 rounded-r-lg border-l-2 cursor-pointer"
        style={{
          borderLeftColor: laneColor,
          background: "rgba(255,255,255,0.035)",
          opacity: dimmed ? 0.25 : 1,
          transition: "opacity 0.3s",
        }}
      >
        <span
          className="text-[10px] font-bold font-mono rounded px-1.5 py-0.5 flex-shrink-0 leading-none"
          style={{
            background: `${laneColor}20`,
            color: laneColor,
            border: `1px solid ${laneColor}40`,
          }}
        >
          {tool.abbr}
        </span>
        <span className="text-[11px] text-gray-300 font-medium leading-tight truncate">
          {tool.name}
        </span>
      </motion.div>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 6 }}
            transition={{ duration: 0.14 }}
            className="absolute z-50 bottom-full mb-2 left-0 w-52 rounded-xl p-3 pointer-events-none"
            style={{
              background: "#0D1427",
              border: `1px solid ${laneColor}45`,
              boxShadow: `0 0 20px ${laneColor}20, 0 8px 32px rgba(0,0,0,0.7)`,
            }}
          >
            <div
              className="text-[9px] font-bold uppercase tracking-widest mb-1"
              style={{ color: laneColor }}
            >
              {tool.category}
            </div>
            <div className="text-sm font-semibold text-white mb-1">{tool.name}</div>
            <div className="text-[11px] text-gray-400 leading-relaxed">{tool.use}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Connector({
  leftColor,
  rightColor,
  active,
  index,
}: {
  leftColor: string;
  rightColor: string;
  active: boolean;
  index: number;
}) {
  return (
    <div
      className="hidden lg:block flex-shrink-0 self-stretch relative"
      style={{ width: "24px" }}
    >
      <div
        className="absolute inset-y-6 left-1/2 -translate-x-px"
        style={{
          width: "1px",
          background: `linear-gradient(180deg, ${leftColor}00 0%, ${leftColor}55 25%, ${rightColor}55 75%, ${rightColor}00 100%)`,
          opacity: active ? 1 : 0.2,
          transition: "opacity 0.35s",
        }}
      />
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: "5px",
            height: "5px",
            background: i < 2 ? leftColor : rightColor,
            boxShadow: `0 0 7px ${leftColor}`,
            animation: `flow-down 3.5s ${index * 0.4 + i * 0.85}s infinite linear`,
            opacity: active ? 0.9 : 0.1,
            transition: "opacity 0.35s",
          }}
        />
      ))}
    </div>
  );
}

export default function GTMTechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeLane, setActiveLane] = useState<string | null>(null);
  const [expandedLane, setExpandedLane] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="py-20 overflow-hidden relative"
      style={{ background: "#0A0F1E" }}
    >
      <style>{`
        @keyframes flow-down {
          0%   { top: 6%;  opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 94%; opacity: 0; }
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-custom relative z-10">

        {/* Metric counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center px-4 py-4 rounded-xl border"
              style={{
                background: "rgba(0,212,255,0.04)",
                borderColor: "rgba(0,212,255,0.15)",
              }}
            >
              <div
                className="text-2xl xl:text-3xl font-bold font-mono mb-0.5"
                style={{ color: "#00D4FF" }}
              >
                <Counter
                  end={m.end}
                  suffix={m.suffix}
                  prefix={m.prefix}
                  inView={isInView}
                />
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 font-mono tracking-tight">
            The AI-Powered Revenue Stack
            <span
              className="inline-block w-[3px] h-[0.85em] align-middle ml-1"
              style={{
                background: "#00D4FF",
                animation: "cursor-blink 1s step-end infinite",
                verticalAlign: "middle",
                marginBottom: "3px",
              }}
            />
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Every tool connected. Every signal captured. Revenue flowing end-to-end.
          </p>
        </motion.div>

        {/* Desktop: 5 swim-lanes */}
        <div className="hidden lg:flex items-stretch">
          {lanes.map((lane, li) => {
            const dimmed = !!activeLane && activeLane !== lane.id;
            const connActive =
              !activeLane ||
              activeLane === lane.id ||
              activeLane === lanes[li + 1]?.id;

            return (
              <React.Fragment key={lane.id}>
                <div className="flex-1 min-w-0">
                  {/* Lane header / tab */}
                  <motion.button
                    initial={{ opacity: 0, y: -8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: li * 0.07 }}
                    onClick={() =>
                      setActiveLane(activeLane === lane.id ? null : lane.id)
                    }
                    className="w-full text-center py-2 px-1 rounded-t-lg mb-3 border-b-2 transition-all duration-300"
                    style={{
                      background: `${lane.color}0D`,
                      borderBottomColor: lane.color,
                      opacity: dimmed ? 0.3 : 1,
                    }}
                  >
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: lane.color }}
                    >
                      {lane.label}
                    </span>
                  </motion.button>

                  {/* Tool nodes */}
                  <div className="flex flex-col gap-1.5">
                    {lane.tools.map((tool, ti) => (
                      <ToolNode
                        key={tool.name}
                        tool={tool}
                        laneColor={lane.color}
                        dimmed={dimmed}
                        delay={li * 0.07 + ti * 0.04}
                      />
                    ))}
                  </div>
                </div>

                {li < lanes.length - 1 && (
                  <Connector
                    leftColor={lane.color}
                    rightColor={lanes[li + 1].color}
                    active={connActive}
                    index={li}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden space-y-2">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: `${lane.color}30` }}
            >
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                style={{ background: `${lane.color}0A` }}
                onClick={() =>
                  setExpandedLane(expandedLane === lane.id ? null : lane.id)
                }
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: lane.color }}
                >
                  {lane.label}
                </span>
                <motion.span
                  animate={{ rotate: expandedLane === lane.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-500 text-xs"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {expandedLane === lane.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="p-3 space-y-2"
                      style={{ background: "#0A0F1E" }}
                    >
                      {lane.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="p-3 rounded-lg border"
                          style={{
                            borderColor: `${lane.color}22`,
                            background: `${lane.color}07`,
                          }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded"
                              style={{
                                background: `${lane.color}20`,
                                color: lane.color,
                              }}
                            >
                              {tool.abbr}
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {tool.name}
                            </span>
                          </div>
                          <div className="text-[11px] text-gray-400 leading-relaxed">
                            {tool.use}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-gray-700 mt-8 hidden lg:block uppercase tracking-widest">
          Click a lane to focus · Hover a tool to inspect
        </p>
      </div>
    </section>
  );
}
