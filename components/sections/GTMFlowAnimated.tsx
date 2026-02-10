'use client';

import React, { useState } from 'react';

export default function GTMFlowAnimated() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const stages = [
    {
      id: 1,
      title: 'Data Sources',
      color: '#FF6B6B',
      tools: ['ZoomInfo', 'Clearbit'],
      delay: '0s',
      x: 100
    },
    {
      id: 2,
      title: 'Data Enrichment',
      color: '#FFA500',
      tools: ['Dedup', 'Normalize', 'Validate'],
      delay: '2s',
      x: 280
    },
    {
      id: 3,
      title: 'CRM Core',
      color: '#4A90E2',
      tools: ['Salesforce', 'HubSpot'],
      delay: '4s',
      x: 460
    },
    {
      id: 4,
      title: 'Sales Execution',
      color: '#7C3AED',
      tools: ['Outreach', 'Salesloft'],
      delay: '5s',
      x: 640
    },
    {
      id: 5,
      title: 'Marketing',
      color: '#EC4899',
      tools: ['Marketo', 'Pardot'],
      delay: '6s',
      x: 820
    },
    {
      id: 6,
      title: 'Analytics',
      color: '#06B6D4',
      tools: ['Snowflake', 'BigQuery', 'Looker'],
      delay: '7s',
      x: 1000
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900/90 to-gray-900/70 rounded-2xl border border-[#7FC6C4]/20 p-12 overflow-hidden min-h-[700px]">
      {/* SVG Animations Layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ pointerEvents: 'none' }}
      >
        <defs>
          {/* AI Core Gradient */}
          <radialGradient id="aiCore" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#7FC6C4" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7FC6C4" stopOpacity="0" />
          </radialGradient>

          {/* Data Flow Gradient */}
          <linearGradient id="dataFlowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#7FC6C4" stopOpacity="0" />
            <stop offset="15%" stopColor="#7FC6C4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="85%" stopColor="#7FC6C4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7FC6C4" stopOpacity="0" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="brightGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Grid */}
        <rect width="1200" height="600" fill="url(#gridPattern)" opacity="0.05" />

        {/* Main Horizontal Flow Line */}
        <line
          x1="80"
          y1="300"
          x2="1120"
          y2="300"
          stroke="url(#dataFlowGrad)"
          strokeWidth="2"
          opacity="0.6"
          style={{
            animation: 'flowPulseWidth 8s ease-in-out infinite'
          }}
        />

        {/* AI Core - Enhanced Design */}
        <g>
          {/* Outer glow rings */}
          <circle
            cx="600"
            cy="300"
            r="140"
            fill="none"
            stroke="#7FC6C4"
            strokeWidth="0.5"
            opacity="0.1"
            style={{
              animation: 'expandRing1 6s ease-out infinite'
            }}
          />
          <circle
            cx="600"
            cy="300"
            r="100"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="0.5"
            opacity="0.15"
            style={{
              animation: 'expandRing2 6s ease-out 1s infinite'
            }}
          />

          {/* Main AI Core */}
          <circle
            cx="600"
            cy="300"
            r="70"
            fill="url(#aiCore)"
            filter="url(#strongGlow)"
            style={{
              animation: 'aiPulseSoft 4s ease-in-out infinite'
            }}
          />

          {/* Core border */}
          <circle
            cx="600"
            cy="300"
            r="70"
            fill="none"
            stroke="#7FC6C4"
            strokeWidth="2"
            opacity="0.6"
            style={{
              animation: 'rotateBorder 12s linear infinite'
            }}
          />

          {/* AI Text with glow */}
          <text
            x="600"
            y="310"
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill="#7FC6C4"
            filter="url(#brightGlow)"
            style={{
              pointerEvents: 'none'
            }}
          >
            ⚡ AI
          </text>

          {/* Pulsing inner core */}
          <circle
            cx="600"
            cy="300"
            r="45"
            fill="#06B6D4"
            opacity="0.2"
            style={{
              animation: 'innerPulse 3s ease-in-out infinite'
            }}
          />
        </g>

        {/* Data Particles Flowing */}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={`particle-${i}`}
            r="5"
            fill="#7FC6C4"
            filter="url(#brightGlow)"
            style={{
              animation: `particleTraverse 10s linear ${i * 2.5}s infinite`
            }}
          />
        ))}

        {/* Connection Nodes to Each Stage */}
        {stages.map((stage) => (
          <g key={`stage-node-${stage.id}`}>
            {/* Connection line down */}
            <line
              x1={stage.x * 5.5}
              y1="300"
              x2={stage.x * 5.5}
              y2="380"
              stroke={stage.color}
              strokeWidth="1"
              opacity="0.3"
              style={{
                animation: `dataDown 3s ease-in-out ${stage.delay} infinite`
              }}
            />

            {/* Node indicator */}
            <circle
              cx={stage.x * 5.5}
              cy="380"
              r="6"
              fill={stage.color}
              opacity="0.5"
              style={{
                animation: `nodeActivate 3s ease-in-out ${stage.delay} infinite`
              }}
            />

            {/* Feedback line up */}
            <line
              x1={stage.x * 5.5}
              y1="380"
              x2={stage.x * 5.5}
              y2="300"
              stroke="#06B6D4"
              strokeWidth="1"
              opacity="0.15"
              style={{
                animation: `dataUp 3s ease-in-out ${stage.delay} infinite`,
                animationDelay: `calc(${stage.delay} + 1.5s)`
              }}
            />
          </g>
        ))}
      </svg>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#7FC6C4] to-cyan-400 bg-clip-text text-transparent">
              GTM Data Architecture
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Intelligent data orchestration across your entire go-to-market stack
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredStage(index)}
              onMouseLeave={() => setHoveredStage(null)}
            >
              {/* Stage Card */}
              <div
                className="rounded-lg border-2 border-dashed backdrop-blur-sm p-4 transition-all duration-300 h-full flex flex-col"
                style={{
                  borderColor:
                    hoveredStage === index ? stage.color : `${stage.color}40`,
                  backgroundColor:
                    hoveredStage === index ? `${stage.color}20` : `${stage.color}08`,
                  boxShadow:
                    hoveredStage === index
                      ? `0 0 16px ${stage.color}40, inset 0 0 16px ${stage.color}20`
                      : 'none'
                }}
              >
                {/* Number Badge */}
                <div
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mb-2 self-start"
                  style={{
                    backgroundColor: `${stage.color}30`,
                    color: stage.color,
                    border: `1px solid ${stage.color}`
                  }}
                >
                  {stage.id}
                </div>

                {/* Title */}
                <h3
                  className="text-xs md:text-sm font-bold mb-2 line-clamp-2 flex-1"
                  style={{ color: stage.color }}
                >
                  {stage.title}
                </h3>

                {/* Tools Preview */}
                <div className="text-[10px] text-gray-400 space-y-1">
                  {stage.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="truncate"
                      style={{
                        color: hoveredStage === index ? stage.color : 'inherit',
                        transition: 'color 0.3s'
                      }}
                    >
                      • {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              {hoveredStage === index && (
                <div
                  className="absolute -inset-2 rounded-lg blur-md -z-10"
                  style={{
                    backgroundColor: `${stage.color}20`,
                    animation: 'glowPulse 2s ease-in-out infinite'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info Strip */}
        <div className="border-t border-[#7FC6C4]/20 pt-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs md:text-sm">
            <div>
              <p className="text-[#7FC6C4] font-semibold mb-1">Data Flow</p>
              <p className="text-gray-400">Left to right pipeline</p>
            </div>
            <div>
              <p className="text-[#7FC6C4] font-semibold mb-1">AI Orchestration</p>
              <p className="text-gray-400">Intelligent stage handoff</p>
            </div>
            <div>
              <p className="text-[#7FC6C4] font-semibold mb-1">Continuous Loop</p>
              <p className="text-gray-400">Real-time data sync</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes flowPulse {
          0% {
            stroke-width: 2;
            opacity: 0.4;
          }
          50% {
            stroke-width: 4;
            opacity: 0.9;
          }
          100% {
            stroke-width: 2;
            opacity: 0.4;
          }
        }

        @keyframes particleFlow {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes expandRing1 {
          0% {
            r: 60px;
            opacity: 0.3;
          }
          50% {
            r: 140px;
            opacity: 0.1;
          }
          100% {
            r: 60px;
            opacity: 0.3;
          }
        }

        @keyframes expandRing2 {
          0% {
            r: 50px;
            opacity: 0.4;
          }
          50% {
            r: 100px;
            opacity: 0.15;
          }
          100% {
            r: 50px;
            opacity: 0.4;
          }
        }

        @keyframes rotateBorder {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 439.8;
          }
        }

        @keyframes aiPulseSoft {
          0%, 100% {
            r: 70px;
            opacity: 0.6;
          }
          50% {
            r: 75px;
            opacity: 0.8;
          }
        }

        @keyframes innerPulse {
          0%, 100% {
            r: 45px;
            opacity: 0.1;
          }
          50% {
            r: 55px;
            opacity: 0.3;
          }
        }

        @keyframes particleTraverse {
          0% {
            cx: 80px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            cx: 1120px;
            opacity: 0;
          }
        }

        @keyframes dataDown {
          0%, 100% {
            stroke-width: 1px;
            opacity: 0.2;
          }
          50% {
            stroke-width: 2px;
            opacity: 0.5;
          }
        }

        @keyframes nodeActivate {
          0%, 100% {
            r: 6px;
            opacity: 0.3;
          }
          50% {
            r: 9px;
            opacity: 0.8;
          }
        }

        @keyframes dataUp {
          0%, 100% {
            stroke-width: 1px;
            opacity: 0.05;
          }
          50% {
            stroke-width: 1.5px;
            opacity: 0.3;
          }
        }

        @keyframes flowPulseWidth {
          0%, 100% {
            stroke-width: 2px;
            opacity: 0.4;
          }
          50% {
            stroke-width: 3px;
            opacity: 0.8;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.3;
            filter: blur(8px);
          }
          50% {
            opacity: 0.6;
            filter: blur(16px);
          }
        }
      `}</style>
    </div>
  );
}

