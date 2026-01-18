"use client";

import { useEffect, useState } from "react";

interface Tool {
  name: string;
  icon: string;
  stage: string;
  role: string;
}

const ACCENT = "#7FC6C4";
const ACCENT_2 = "#06B6D4";

const tools: Tool[] = [
  {
    name: "ZoomInfo",
    icon: "🔍",
    stage: "data",
    role: "Lead Research",
  },
  {
    name: "Clearbit",
    icon: "🏢",
    stage: "data",
    role: "Company Data",
  },
  {
    name: "Dedup",
    icon: "🔄",
    stage: "enrich",
    role: "Remove Duplicates",
  },
  {
    name: "Normalize",
    icon: "⚙️",
    stage: "enrich",
    role: "Standardize Data",
  },
  {
    name: "Validate",
    icon: "✅",
    stage: "enrich",
    role: "Quality Check",
  },
  {
    name: "Salesforce",
    icon: "☁️",
    stage: "crm",
    role: "Account Hub",
  },
  {
    name: "HubSpot",
    icon: "📊",
    stage: "crm",
    role: "Contact Mgmt",
  },
  {
    name: "Outreach",
    icon: "📞",
    stage: "sales",
    role: "Sales Engagement",
  },
  {
    name: "Salesloft",
    icon: "🎯",
    stage: "sales",
    role: "Rep Intelligence",
  },
  {
    name: "Marketo",
    icon: "📧",
    stage: "marketing",
    role: "Campaign Automation",
  },
  {
    name: "Pardot",
    icon: "🤝",
    stage: "marketing",
    role: "Lead Nurture",
  },
  {
    name: "Snowflake",
    icon: "❄️",
    stage: "analytics",
    role: "Data Warehouse",
  },
  {
    name: "BigQuery",
    icon: "🗄️",
    stage: "analytics",
    role: "Analytics Engine",
  },
  {
    name: "Looker",
    icon: "📈",
    stage: "analytics",
    role: "Dashboards",
  },
  {
    name: "Power BI",
    icon: "💪",
    stage: "analytics",
    role: "Business Analytics",
  },
  {
    name: "Tableau",
    icon: "📊",
    stage: "analytics",
    role: "Visual Analytics",
  },
];

const stageFlow = [
  { id: "data", title: "Data Sources", color: ACCENT },
  { id: "enrich", title: "Data Enrichment", color: ACCENT },
  { id: "crm", title: "CRM Core", color: ACCENT },
  { id: "sales", title: "Sales Execution", color: ACCENT },
  { id: "marketing", title: "Marketing", color: ACCENT },
  { id: "analytics", title: "Analytics", color: ACCENT },
];

const AnimatedParticle = ({
  delay,
  prefersReducedMotion,
}: {
  delay: number;
  prefersReducedMotion: boolean;
}) => {
  const size = delay % 2 === 0 ? 2 : 1.5;

  return (
    <div
      className="absolute w-2 h-2 rounded-full"
      style={
        !prefersReducedMotion
          ? {
              animation: `flowParticle 12s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              left: "5%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: `${size}rem`,
              height: `${size}rem`,
              backgroundColor: ACCENT,
              boxShadow: `0 0 14px ${ACCENT}`,
            }
          : { display: "none" }
      }
    />
  );
};

export default function AIDataFlow() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [activeStage, setActiveStage] = useState<string>(stageFlow[0].id);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (hoveredStage) return;

    const interval = window.setInterval(() => {
      setActiveStage((current) => {
        const idx = stageFlow.findIndex((s) => s.id === current);
        const nextIdx = idx === -1 ? 0 : (idx + 1) % stageFlow.length;
        return stageFlow[nextIdx].id;
      });
    }, 2200);

    return () => window.clearInterval(interval);
  }, [hoveredStage, prefersReducedMotion]);

  return (
    <section className="pt-8 pb-16 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered GTM Data Flow
          </h2>
          <p className="text-lg text-gray-300">
            Intelligent data orchestration across your complete GTM tech stack.
          </p>
        </div>

        {/* Main Compact Flow Diagram */}
        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-900/60 rounded-2xl border border-[#7FC6C4]/30 p-8 overflow-hidden">
          {/* SVG Connection Lines & AI Core */}
          <svg
            viewBox="0 0 1600 500"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          >
            <defs>
              <filter id="connectionGlow">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
              <filter id="aiGlow">
                <feGaussianBlur stdDeviation="3" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.8" />
                </feComponentTransfer>
              </filter>
              <linearGradient
                id="flowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={ACCENT} stopOpacity="0" />
                <stop offset="35%" stopColor={ACCENT} stopOpacity="0.55" />
                <stop offset="60%" stopColor={ACCENT_2} stopOpacity="0.85" />
                <stop offset="100%" stopColor={ACCENT_2} stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="aiGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={ACCENT} />
                <stop offset="100%" stopColor={ACCENT_2} />
              </linearGradient>
              <style>{`
                .connection-line {
                  stroke-dasharray: 8, 4;
                  stroke-width: 2;
                  opacity: 0.25;
                }
                .animated-flow-line {
                  stroke: url(#flowGradient);
                  stroke-width: 3;
                  opacity: 0.7;
                  animation: ${!prefersReducedMotion ? "flowAcross 4s ease-in-out infinite" : "none"};
                }
                .ai-connection {
                  stroke: url(#aiGradient);
                  stroke-width: 2;
                  opacity: 0;
                  animation: ${!prefersReducedMotion ? "pulseConnect 6s ease-in-out infinite" : "none"};
                }
                @keyframes flowAcross {
                  0% {
                    opacity: 0.3;
                    stroke-width: 2;
                  }
                  50% {
                    opacity: 0.8;
                    stroke-width: 4;
                  }
                  100% {
                    opacity: 0.3;
                    stroke-width: 2;
                  }
                }
                @keyframes pulseConnect {
                  0%, 100% {
                    opacity: 0;
                    stroke-width: 1;
                  }
                  40%, 60% {
                    opacity: 0.6;
                    stroke-width: 2;
                  }
                }
                @keyframes aiPulseCore {
                  0%, 100% {
                    r: 45;
                    opacity: 0.4;
                  }
                  50% {
                    r: 55;
                    opacity: 0.8;
                  }
                }
                @keyframes aiRotateBorder {
                  0% {
                    stroke-dashoffset: 0;
                  }
                  100% {
                    stroke-dashoffset: -314;
                  }
                }
              `}</style>
            </defs>

            {/* Main Data Flow Curved Line */}
            <path
              className="animated-flow-line"
              d="M 150 250 Q 400 220, 650 250 T 1550 250"
              fill="none"
              filter="url(#connectionGlow)"
            />

            {/* Feedback Loop from Analytics to AI */}
            <path
              className="connection-line"
              d="M 1450 280 Q 1100 380, 800 300"
              stroke={ACCENT}
              fill="none"
              filter="url(#connectionGlow)"
              opacity="0.2"
            />

            {/* AI to Stage Connection Lines - Animated */}
            <path
              className="ai-connection"
              d="M 800 160 L 280 250"
              style={{ opacity: (hoveredStage ?? activeStage) === "data" ? 0.75 : 0.2 }}
            />
            <path
              className="ai-connection"
              d="M 800 160 L 550 250"
              style={{ opacity: (hoveredStage ?? activeStage) === "enrich" ? 0.75 : 0.2 }}
            />
            <path
              className="ai-connection"
              d="M 800 160 L 850 250"
              style={{ opacity: (hoveredStage ?? activeStage) === "crm" ? 0.75 : 0.2 }}
            />
            <path
              className="ai-connection"
              d="M 800 160 L 1100 250"
              style={{ opacity: (hoveredStage ?? activeStage) === "sales" ? 0.75 : 0.2 }}
            />
            <path
              className="ai-connection"
              d="M 800 160 L 1350 250"
              style={{ opacity: (hoveredStage ?? activeStage) === "marketing" ? 0.75 : 0.2 }}
            />
            <path
              className="ai-connection"
              d="M 800 160 L 1450 250"
              style={{ opacity: (hoveredStage ?? activeStage) === "analytics" ? 0.75 : 0.2 }}
            />

            {/* Central AI Orchestration Core */}
            {/* Outer glow effect */}
            <circle
              cx="800"
              cy="140"
              r="60"
              fill="#06B6D4"
              opacity="0.08"
              style={
                !prefersReducedMotion
                  ? {
                      animation: "aiGlowExpand 6s ease-in-out infinite",
                    }
                  : {}
              }
            />

            {/* Main AI Core with gradient border */}
            <circle
              cx="800"
              cy="140"
              r="45"
              fill="none"
              stroke="url(#aiGradient)"
              strokeWidth="3"
              filter="url(#aiGlow)"
              style={
                !prefersReducedMotion
                  ? {
                      animation: "aiPulseCore 3s ease-in-out infinite",
                    }
                  : {}
              }
            />

            {/* Rotating dashed border */}
            <circle
              cx="800"
              cy="140"
              r="45"
              fill="none"
              stroke="#7FC6C4"
              strokeWidth="2"
              strokeDasharray="6, 4"
              opacity="0.5"
              style={
                !prefersReducedMotion
                  ? {
                      animation: "aiRotateBorder 8s linear infinite",
                    }
                  : {}
              }
            />

            {/* AI Label */}
            <text
              x="800"
              y="150"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#7FC6C4"
            >
              AI
            </text>

            {/* Human-in-the-Loop indicator */}
            <g opacity={hoveredStage ? "1" : "0"} style={{ transition: "opacity 0.3s" }}>
              <rect x="740" y="180" width="120" height="24" rx="4" fill={ACCENT} opacity="0.08" />
              <text x="800" y="196" textAnchor="middle" fontSize="11" fill={ACCENT}>
                🤖 + 👤 Human-AI Loop
              </text>
            </g>

            {/* AI Layer Box - Full Width Background */}
            <rect
              x="100"
              y="20"
              width="1400"
              height="460"
              fill="#7FC6C4"
              opacity="0.02"
              rx="12"
            />
            <rect
              x="100"
              y="20"
              width="1400"
              height="460"
              fill="none"
              stroke="#7FC6C4"
              strokeWidth="2"
              strokeDasharray="8, 5"
              opacity="0.4"
              rx="12"
              style={
                !prefersReducedMotion
                  ? {
                      animation: "dashFlow 15s linear infinite",
                    }
                  : {}
              }
            />
          </svg>

          {/* Content Layer */}
          <div className="relative z-10">
            {/* Stage Groups - Horizontal Layout */}
            <div className="flex justify-between gap-6 mb-12">
              {stageFlow.map((stage) => {
                const stageTools = tools.filter((t) => t.stage === stage.id);
                const focusedStage = hoveredStage ?? activeStage;
                const isHovered = focusedStage === stage.id;
                return (
                  <div
                    key={stage.id}
                    className="flex-1 transition-all duration-300"
                    onMouseEnter={() => setHoveredStage(stage.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    style={{
                      opacity: focusedStage && !isHovered ? 0.45 : 1,
                    }}
                  >
                    {/* Stage Header */}
                    <div className="mb-4">
                      <h3
                        className="text-xs font-bold uppercase tracking-wider text-center transition-all duration-300"
                        style={{
                          color: stage.color,
                          textShadow: isHovered ? `0 0 14px ${ACCENT}80` : "none",
                        }}
                      >
                        {stage.title}
                      </h3>
                    </div>

                    {/* Tools in Stage */}
                    <div className="flex flex-col gap-2">
                      {stageTools.map((tool) => (
                        <div
                          key={tool.name}
                          className="p-3 rounded-lg border-2 border-dashed backdrop-blur-sm hover:border-solid transition-all duration-300 group cursor-pointer"
                          style={{
                            borderColor: `${ACCENT}${isHovered ? "B3" : "4D"}`,
                            backgroundColor: isHovered ? `${ACCENT}14` : "rgba(255,255,255,0.02)",
                            boxShadow: isHovered ? `0 0 18px ${ACCENT}40` : "none",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div
                              className="w-7 h-7 rounded flex items-center justify-center text-sm group-hover:scale-110 transition-transform"
                              style={{
                                backgroundColor: `${ACCENT}1A`,
                                border: `1px solid ${ACCENT}`,
                              }}
                            >
                              {tool.icon}
                            </div>
                            <p
                              className="text-xs font-bold"
                              style={{ color: isHovered ? ACCENT : "#E5E7EB" }}
                            >
                              {tool.name}
                            </p>
                          </div>
                          <p className="text-[10px] text-gray-400 ml-9 leading-snug">
                            {tool.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Data Flow Description */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
              <div className="text-[10px] text-gray-400">
                <span className="block font-semibold text-gray-300 mb-1">
                  ① Research
                </span>
                Extract contact & company data
              </div>
              <div className="text-[10px] text-gray-400">
                <span className="block font-semibold text-gray-300 mb-1">
                  ② Enrich
                </span>
                Clean & standardize records
              </div>
              <div className="text-[10px] text-gray-400">
                <span className="block font-semibold text-gray-300 mb-1">
                  ③ Store
                </span>
                Centralize in CRM system
              </div>
              <div className="text-[10px] text-gray-400">
                <span className="block font-semibold text-gray-300 mb-1">
                  ④ Execute
                </span>
                Engage & score leads
              </div>
              <div className="text-[10px] text-gray-400">
                <span className="block font-semibold text-gray-300 mb-1">
                  ⑤ Activate
                </span>
                Run targeted campaigns
              </div>
              <div className="text-[10px] text-gray-400">
                <span className="block font-semibold text-gray-300 mb-1">
                  ⑥ Analyze
                </span>
                Measure & forecast results
              </div>
            </div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[0, 3, 6, 9].map((delay) => (
              <AnimatedParticle
                key={`particle-${delay}`}
                delay={delay}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

          {/* CSS Animations */}
          <style>{`
            @keyframes flowParticle {
              0% {
                left: 5%;
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              50% {
                transform: translate(-50%, -50%) scale(1.15);
              }
              95% {
                opacity: 1;
              }
              100% {
                left: 95%;
                opacity: 0;
              }
            }

            @keyframes dashFlow {
              0% {
                stroke-dashoffset: 10;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            @keyframes flowAcross {
              0% {
                opacity: 0.3;
                stroke-width: 2;
              }
              50% {
                opacity: 0.8;
                stroke-width: 4;
              }
              100% {
                opacity: 0.3;
                stroke-width: 2;
              }
            }

            @keyframes aiGlowExpand {
              0%, 100% {
                r: 60;
                opacity: 0.05;
              }
              50% {
                r: 85;
                opacity: 0.15;
              }
            }

            @keyframes aiPulseCore {
              0%, 100% {
                r: 45;
                opacity: 0.4;
              }
              50% {
                r: 55;
                opacity: 0.8;
              }
            }

            @keyframes aiRotateBorder {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -314;
              }
            }

            @keyframes pulseConnect {
              0%, 100% {
                opacity: 0;
                stroke-width: 1;
              }
              40%, 60% {
                opacity: 0.6;
                stroke-width: 2;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              @keyframes flowParticle, @keyframes aiGlowExpand, @keyframes aiPulseCore, @keyframes aiRotateBorder, @keyframes pulseConnect {
                0%, 100% { opacity: 0.5; }
              }
            }
          `}</style>
        </div>

        {/* AI Intelligence Capabilities */}
        <div className="mt-8 p-6 rounded-lg border border-[#7FC6C4]/30 bg-gradient-to-r from-[#7FC6C4]/5 to-cyan-400/5">
          <h3 className="text-sm font-bold text-[#7FC6C4] text-center mb-4">
            AI Intelligence Powers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              "Lead Scoring",
              "Smart Routing",
              "Personalization",
              "Automation",
              "Revenue Insights",
            ].map((capability, idx) => (
              <div
                key={idx}
                className="text-center text-xs font-semibold text-gray-300 py-2 px-3 rounded border border-[#7FC6C4]/20 hover:border-[#7FC6C4]/50 hover:text-[#7FC6C4] transition-all duration-300"
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
