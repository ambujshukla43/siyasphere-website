"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Button from "@/components/ui/Button";
import LineIcon, { type IconName } from "@/components/ui/LineIcon";

/* ─── Timeline ─── */

type Chapter = {
  key: string;
  title: string;
  sub: string;
  icon: IconName;
  color: string;
  duration: number;
  narration: string;
  tools: string[];
};

const chapters: Chapter[] = [
  {
    key: "signal",
    title: "Signal",
    sub: "6sense · Web",
    icon: "target",
    color: "#FF6B6B",
    duration: 8,
    narration:
      "A target account shows buying intent: repeat pricing-page visits, research on lead routing, and new SDR job posts. The anonymous visitor is matched to a known account.",
    tools: ["6sense", "Website tracking", "Clay"],
  },
  {
    key: "enrich",
    title: "Enrich",
    sub: "Clay · Apollo",
    icon: "search",
    color: "#F59E0B",
    duration: 8,
    narration:
      "A waterfall of data providers fills in firmographics, tech stack, and a verified contact. Duplicates merge into one golden record before anything reaches the CRM.",
    tools: ["Clay", "Apollo.io", "Seamless AI", "RingLead"],
  },
  {
    key: "route",
    title: "Score & Route",
    sub: "LeanData",
    icon: "route",
    color: "#3B82F6",
    duration: 9,
    narration:
      "AI scores ICP fit and intent, then routing rules check territory, segment, and rep capacity. The right rep owns the lead in seconds, inside the follow-up SLA.",
    tools: ["LeanData", "Salesforce Flow", "AI scoring"],
  },
  {
    key: "engage",
    title: "Engage",
    sub: "Outreach · AI SDR",
    icon: "send",
    color: "#8B5CF6",
    duration: 9,
    narration:
      "The sequence opens with an AI-drafted, personalised email that the rep reviews and approves. Multi-channel touches follow until the prospect books a meeting.",
    tools: ["Outreach", "Clay", "ChatGPT / Claude"],
  },
  {
    key: "pipeline",
    title: "Pipeline",
    sub: "Salesforce",
    icon: "briefcase",
    color: "#10B981",
    duration: 9,
    narration:
      "An opportunity is created in Salesforce and every touch is logged automatically. Forecast categories update as the deal moves, with a manager review before commit.",
    tools: ["Salesforce", "Salesforce Flow", "Forecasting"],
  },
  {
    key: "measure",
    title: "Measure",
    sub: "Attribution · BI",
    icon: "barChart",
    color: "#06B6D4",
    duration: 9,
    narration:
      "Revenue is attributed across every touch. Those insights feed back into scoring and routing, so the whole system gets smarter with each deal.",
    tools: ["Multi-touch attribution", "Tableau", "Snowflake"],
  },
];

const END_DURATION = 4;
const starts = chapters.reduce<number[]>((acc, c, i) => [...acc, i === 0 ? 0 : acc[i - 1] + chapters[i - 1].duration], []);
const END_START = starts[starts.length - 1] + chapters[chapters.length - 1].duration;
const TOTAL = END_START + END_DURATION;
const POSTER_TIME = starts[2] + 6.6;

function locate(t: number) {
  if (t >= END_START) return { index: chapters.length, u: t - END_START };
  for (let i = chapters.length - 1; i >= 0; i--) {
    if (t >= starts[i]) return { index: i, u: t - starts[i] };
  }
  return { index: 0, u: 0 };
}

/* ─── Animation helpers ─── */

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (x: number) => 1 - Math.pow(1 - x, 3);
const prog = (u: number, s: number, e: number) => ease(clamp((u - s) / (e - s)));
const linear = (u: number, s: number, e: number) => clamp((u - s) / (e - s));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

const C = {
  text: "#E5E7EB",
  sub: "#9CA3AF",
  muted: "#6B7280",
  card: "#111A2E",
  line: "#1F2A44",
  panel: "#0B1222",
  teal: "#7FC6C4",
};

function Fade({ k, dx = 0, dy = 0, children }: { k: number; dx?: number; dy?: number; children: ReactNode }) {
  return (
    <g opacity={k} transform={`translate(${(1 - k) * dx} ${(1 - k) * dy})`}>
      {children}
    </g>
  );
}

function Icon({ name, x, y, size, color }: { name: IconName; x: number; y: number; size: number; color: string }) {
  return <LineIcon name={name} x={x} y={y} width={size} height={size} className="" style={{ color }} strokeWidth={1.8} />;
}

function Check({ x, y, k, color = "#10B981", r = 13 }: { x: number; y: number; k: number; color?: string; r?: number }) {
  return (
    <g opacity={k} transform={`translate(${x} ${y}) scale(${0.6 + 0.4 * k})`}>
      <circle r={r} fill={`${color}26`} stroke={color} strokeWidth={2} />
      <path d={`M${-r * 0.4} 0 l${r * 0.28} ${r * 0.3} l${r * 0.5} ${-r * 0.55}`} fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function Label({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <text x={x} y={y} fontSize={15} fontWeight={600} fill={C.muted} letterSpacing={2.5}>
      {children}
    </text>
  );
}

/* ─── Scenes (each drawn in a 1280 × 570 panel) ─── */

function SceneSignal({ u }: { u: number }) {
  const c = chapters[0].color;
  const browser = prog(u, 0, 0.6);
  const cursorPts = [
    [180, 300],
    [150, 230],
    [300, 250],
    [440, 240],
    [440, 240],
  ];
  const seg = clamp(u / 1, 0, cursorPts.length - 1.001);
  const i = Math.floor(seg);
  const f = ease(seg - i);
  const cx = lerp(cursorPts[i][0], cursorPts[i + 1][0], f);
  const cy = lerp(cursorPts[i][1], cursorPts[i + 1][1], f);
  const signals: { t: number; label: string; sub: string; icon: IconName }[] = [
    { t: 1, label: "Visited pricing page ×3", sub: "Website", icon: "search" },
    { t: 2, label: "Researching “lead routing”", sub: "6sense intent", icon: "target" },
    { t: 3, label: "Hiring 2 SDRs", sub: "Job-post signal", icon: "users" },
  ];
  const card = prog(u, 3.8, 4.4);
  const matched = prog(u, 4.9, 5.5);

  return (
    <g>
      <Fade k={browser} dy={20}>
        <rect x={40} y={50} width={500} height={420} rx={18} fill={C.card} stroke={C.line} strokeWidth={2} />
        <path d="M40 104V68a18 18 0 0 1 18-18h464a18 18 0 0 1 18 18v36z" fill="#0F172A" />
        {[70, 92, 114].map((x) => (
          <circle key={x} cx={x} cy={77} r={6} fill="#374151" />
        ))}
        <rect x={140} y={63} width={370} height={28} rx={14} fill="#1F2937" />
        <text x={160} y={82} fontSize={16} fill={C.sub}>
          yourcompany.com/pricing
        </text>
        <text x={80} y={160} fontSize={32} fontWeight={700} fill={C.text}>
          Pricing
        </text>
        {[80, 230, 380].map((x, j) => (
          <g key={x}>
            <rect x={x} y={190} width={130} height={240} rx={12} fill="#0F172A" stroke={j === 1 ? `${c}80` : C.line} strokeWidth={2} />
            <rect x={x + 18} y={214} width={60} height={10} rx={5} fill="#374151" />
            <rect x={x + 18} y={236} width={90} height={18} rx={6} fill="#4B5563" />
            {[276, 298, 320, 342].map((y) => (
              <rect key={y} x={x + 18} y={y} width={94} height={7} rx={3.5} fill="#1F2937" />
            ))}
            <rect x={x + 18} y={384} width={94} height={28} rx={8} fill={j === 1 ? `${c}55` : "#1F2937"} />
          </g>
        ))}
        {signals.map((s) => {
          const ping = linear(u, s.t - 0.1, s.t + 0.6);
          return ping > 0 && ping < 1 ? (
            <circle key={s.t} cx={cx} cy={cy} r={8 + ping * 34} fill="none" stroke={c} strokeWidth={2} opacity={1 - ping} />
          ) : null;
        })}
        <path
          d={`M${cx} ${cy} l0 26 l7 -7 l6 13 l6 -3 l-6 -12 l10 0 z`}
          fill="#F9FAFB"
          stroke="#111827"
          strokeWidth={1.5}
        />
      </Fade>

      {signals.map((s, j) => {
        const k = prog(u, s.t, s.t + 0.7);
        const y = 80 + j * 125;
        const x = lerp(420, 600, k);
        const link = prog(u, 4, 5);
        return (
          <g key={s.label}>
            <path
              d={`M900 ${y + 46} C 940 ${y + 46}, 930 260, 980 260`}
              fill="none"
              stroke={c}
              strokeWidth={2}
              strokeOpacity={0.5}
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1 - link}
            />
            <g opacity={k}>
              <rect x={x} y={y} width={300} height={92} rx={14} fill={C.card} stroke={`${c}70`} strokeWidth={2} />
              <Icon name={s.icon} x={x + 20} y={y + 30} size={32} color={c} />
              <text x={x + 68} y={y + 42} fontSize={19} fontWeight={600} fill={C.text}>
                {s.label}
              </text>
              <text x={x + 68} y={y + 68} fontSize={15} fill={C.sub}>
                {s.sub}
              </text>
            </g>
          </g>
        );
      })}

      <g opacity={card} transform={`translate(${1110} ${260}) scale(${0.85 + 0.15 * card}) translate(${-1110} ${-260})`}>
        <rect x={980} y={130} width={260} height={260} rx={18} fill={C.card} stroke={matched > 0.5 ? c : C.line} strokeWidth={2} />
        <Icon name="building" x={1004} y={156} size={40} color={matched > 0.5 ? c : C.muted} />
        <text x={1004} y={240} fontSize={24} fontWeight={700} fill={C.muted} opacity={1 - matched}>
          Unknown visitor
        </text>
        <text x={1004} y={240} fontSize={24} fontWeight={700} fill={C.text} opacity={matched}>
          Northwind Cloud
        </text>
        <text x={1004} y={270} fontSize={16} fill={matched > 0.5 ? c : C.muted}>
          {matched > 0.5 ? "Matched account" : "Resolving identity…"}
        </text>
        <g opacity={matched}>
          <rect x={1004} y={300} width={150} height={36} rx={18} fill={`${c}26`} />
          <circle cx={1024} cy={318} r={6} fill={c} />
          <text x={1038} y={324} fontSize={16} fontWeight={600} fill={c}>
            Intent: High
          </text>
        </g>
      </g>
    </g>
  );
}

function SceneEnrich({ u }: { u: number }) {
  const c = chapters[1].color;
  const providers = [
    { name: "Clay", note: "Primary · 6 fields", t: 0.6 },
    { name: "Apollo.io", note: "Fallback · +2 fields", t: 1.6 },
    { name: "Seamless AI", note: "Email verified", t: 2.6 },
  ];
  const fields = [
    ["Industry", "B2B SaaS"],
    ["Employees", "420"],
    ["Revenue", "$60M ARR"],
    ["Tech stack", "Salesforce · Marketo"],
    ["Contact", "Maya Chen · VP RevOps"],
    ["Email", "m.chen@northwind.io"],
  ];
  const ghostIn = prog(u, 4.6, 5.1);
  const merge = prog(u, 5.4, 6.4);
  const golden = prog(u, 6.2, 6.8);

  return (
    <g>
      <Label x={40} y={40}>
        WATERFALL ENRICHMENT
      </Label>
      {providers.map((p, j) => {
        const k = prog(u, p.t - 0.4, p.t);
        const y = 70 + j * 140;
        return (
          <Fade key={p.name} k={k} dx={-30}>
            <rect x={40} y={y} width={360} height={100} rx={16} fill={C.card} stroke={`${c}60`} strokeWidth={2} />
            <Icon name="database" x={64} y={y + 30} size={36} color={c} />
            <text x={118} y={y + 46} fontSize={22} fontWeight={700} fill={C.text}>
              {p.name}
            </text>
            <text x={118} y={y + 74} fontSize={16} fill={C.sub}>
              {p.note}
            </text>
            <Check x={364} y={y + 50} k={prog(u, p.t + 0.3, p.t + 0.7)} />
            {j < providers.length - 1 && (
              <path d={`M220 ${y + 104} v30 m-8 -9 l8 9 l8 -9`} fill="none" stroke={`${c}90`} strokeWidth={2} strokeLinecap="round" />
            )}
          </Fade>
        );
      })}

      <Fade k={prog(u, 0.2, 0.8)} dy={20}>
        <rect x={470} y={40} width={520} height={480} rx={18} fill={C.card} stroke={golden > 0.5 ? c : C.line} strokeWidth={2} />
        <Icon name="building" x={500} y={68} size={36} color={c} />
        <text x={550} y={95} fontSize={26} fontWeight={700} fill={C.text}>
          Northwind Cloud
        </text>
        <g opacity={golden}>
          <rect x={782} y={70} width={184} height={34} rx={17} fill={`${c}26`} />
          <text x={874} y={93} fontSize={15} fontWeight={600} fill={c} textAnchor="middle">
            Golden record
          </text>
        </g>
        <line x1={500} x2={960} y1={128} y2={128} stroke={C.line} strokeWidth={2} />
        {fields.map(([label, value], j) => {
          const k = prog(u, 1 + j * 0.55, 1.4 + j * 0.55);
          const y = 172 + j * 58;
          return (
            <g key={label}>
              <text x={500} y={y} fontSize={16} fill={C.muted}>
                {label}
              </text>
              <rect x={660} y={y - 16} width={220} height={18} rx={9} fill={C.line} opacity={1 - k} />
              <text x={660} y={y} fontSize={20} fontWeight={600} fill={C.text} opacity={k}>
                {value}
              </text>
              {j === fields.length - 1 && <Check x={940} y={y - 6} k={prog(u, 4.2, 4.6)} r={12} />}
            </g>
          );
        })}
      </Fade>

      {["Maya Chen", "M. Chen"].map((name, j) => {
        const y = 140 + j * 190;
        const x = lerp(1030, 740, merge);
        return (
          <g key={name} opacity={ghostIn * (1 - merge)}>
            <rect x={x} y={y} width={220} height={110} rx={14} fill={C.card} stroke="#EF4444" strokeOpacity={0.6} strokeWidth={2} strokeDasharray="6 6" />
            <text x={x + 22} y={y + 46} fontSize={20} fontWeight={600} fill={C.text}>
              {name}
            </text>
            <text x={x + 22} y={y + 76} fontSize={15} fill="#F87171">
              Duplicate record
            </text>
          </g>
        );
      })}
      <Fade k={golden} dy={10}>
        <rect x={1020} y={250} width={220} height={60} rx={14} fill={`${c}1A`} stroke={`${c}60`} strokeWidth={2} />
        <Icon name="merge" x={1036} y={266} size={28} color={c} />
        <text x={1074} y={287} fontSize={16} fontWeight={600} fill={c}>
          2 duplicates merged
        </text>
      </Fade>
    </g>
  );
}

function SceneRoute({ u }: { u: number }) {
  const c = chapters[2].color;
  const score = prog(u, 0.3, 2.3);
  const R = 120;
  const circ = 2 * Math.PI * R;
  const factors = [
    ["Industry match", "+30"],
    ["Company size", "+25"],
    ["Buying intent", "+22"],
    ["Tech fit", "+15"],
  ];
  const rules = ["Territory: NA-West", "Segment: Mid-market", "Rep capacity: 6 / 10"];
  const reps = [
    { name: "Alex", seg: "SMB", x: 720 },
    { name: "Jordan", seg: "Mid-market", x: 900 },
    { name: "Sam", seg: "Enterprise", x: 1080 },
  ];
  const travel = prog(u, 4.8, 6.2);
  const bx = (1 - travel) ** 2 * 310 + 2 * (1 - travel) * travel * 700 + travel ** 2 * 980;
  const by = (1 - travel) ** 2 * 250 + 2 * (1 - travel) * travel * 120 + travel ** 2 * 300;
  const assigned = prog(u, 6.1, 6.6);

  return (
    <g>
      <Label x={40} y={40}>
        ICP + INTENT SCORE
      </Label>
      <g transform="translate(190 250)">
        <circle r={R} fill="none" stroke={C.line} strokeWidth={22} />
        <circle
          r={R}
          fill="none"
          stroke={c}
          strokeWidth={22}
          strokeLinecap="round"
          strokeDasharray={`${score * 0.92 * circ} ${circ}`}
          transform="rotate(-90)"
          style={{ filter: `drop-shadow(0 0 10px ${c}80)` }}
        />
        <text y={16} fontSize={64} fontWeight={800} fill={C.text} textAnchor="middle">
          {Math.round(92 * score)}
        </text>
        <text y={52} fontSize={16} fill={C.sub} textAnchor="middle">
          out of 100
        </text>
      </g>
      <Fade k={prog(u, 2.3, 2.8)} dy={10}>
        <rect x={110} y={400} width={160} height={46} rx={23} fill={`${c}26`} stroke={c} strokeWidth={2} />
        <text x={190} y={430} fontSize={19} fontWeight={700} fill={c} textAnchor="middle">
          Tier 1 · Hot
        </text>
      </Fade>
      {factors.map(([label, value], j) => (
        <Fade key={label} k={prog(u, 0.5 + j * 0.4, 0.9 + j * 0.4)} dx={-20}>
          <rect x={360} y={100 + j * 76} width={280} height={58} rx={12} fill={C.card} stroke={C.line} strokeWidth={2} />
          <text x={380} y={136 + j * 76} fontSize={18} fill={C.text}>
            {label}
          </text>
          <text x={620} y={136 + j * 76} fontSize={20} fontWeight={700} fill={c} textAnchor="end">
            {value}
          </text>
        </Fade>
      ))}

      <line x1={680} x2={680} y1={40} y2={530} stroke={C.line} strokeWidth={2} />

      <Label x={720} y={40}>
        ROUTING RULES
      </Label>
      {rules.map((rule, j) => {
        const k = prog(u, 3 + j * 0.5, 3.4 + j * 0.5);
        return (
          <Fade key={rule} k={k} dx={-20}>
            <rect x={720} y={64 + j * 66} width={520} height={52} rx={12} fill={C.card} stroke={C.line} strokeWidth={2} />
            <text x={744} y={97 + j * 66} fontSize={18} fill={C.text}>
              {rule}
            </text>
            <Check x={1210} y={90 + j * 66} k={k} r={12} />
          </Fade>
        );
      })}
      {reps.map((rep) => {
        const win = rep.name === "Jordan" ? assigned : 0;
        return (
          <g key={rep.name} opacity={prog(u, 3.6, 4.2) * (rep.name === "Jordan" ? 1 : 1 - assigned * 0.5)}>
            <rect
              x={rep.x}
              y={300}
              width={160}
              height={130}
              rx={16}
              fill={win ? `${c}1A` : C.card}
              stroke={win ? c : C.line}
              strokeWidth={2}
              style={win ? { filter: `drop-shadow(0 0 14px ${c}90)` } : undefined}
            />
            <circle cx={rep.x + 80} cy={346} r={22} fill={win ? c : "#1F2937"} />
            <text x={rep.x + 80} y={353} fontSize={18} fontWeight={700} fill={win ? "#0B1222" : C.sub} textAnchor="middle">
              {rep.name[0]}
            </text>
            <text x={rep.x + 80} y={392} fontSize={18} fontWeight={600} fill={C.text} textAnchor="middle">
              {rep.name}
            </text>
            <text x={rep.x + 80} y={414} fontSize={14} fill={C.sub} textAnchor="middle">
              {rep.seg}
            </text>
          </g>
        );
      })}
      {travel > 0 && travel < 1 && (
        <circle cx={bx} cy={by} r={10} fill={c} style={{ filter: `drop-shadow(0 0 10px ${c})` }} />
      )}
      <Fade k={prog(u, 6.4, 7)} dy={10}>
        <rect x={720} y={458} width={520} height={56} rx={14} fill="#10B98114" stroke="#10B98166" strokeWidth={2} />
        <Check x={750} y={486} k={1} r={12} />
        <text x={776} y={492} fontSize={18} fontWeight={600} fill={C.text}>
          Assigned to Jordan in 38s · SLA 5 min
        </text>
      </Fade>
    </g>
  );
}

const emailLines = [
  "Hi Maya — noticed Northwind is hiring two SDRs",
  "and researching lead routing. Teams your size",
  "often lose leads between form-fill and first call.",
  "Worth a 20-minute look at how others fix it?",
];
const emailChars = emailLines.join("").length;

function SceneEngage({ u }: { u: number }) {
  const c = chapters[3].color;
  const steps: { day: string; label: string; icon: IconName; t: number }[] = [
    { day: "Day 1", label: "AI-drafted email", icon: "mail", t: 0.4 },
    { day: "Day 2", label: "LinkedIn touch", icon: "users", t: 3.9 },
    { day: "Day 4", label: "Call", icon: "activity", t: 4.6 },
    { day: "Day 6", label: "Reply received", icon: "sparkles", t: 5.4 },
  ];
  const xs = [40, 350, 660, 970];
  let remaining = Math.floor(linear(u, 0.8, 3.2) * emailChars);

  return (
    <g>
      {steps.map((s, j) => {
        const on = prog(u, s.t, s.t + 0.4);
        const x = xs[j];
        return (
          <g key={s.label}>
            {j > 0 && (
              <line x1={x - 40} x2={x} y1={62} y2={62} stroke={on ? c : C.line} strokeWidth={3} strokeDasharray={on ? undefined : "4 6"} />
            )}
            <rect x={x} y={28} width={270} height={68} rx={34} fill={on ? `${c}1F` : C.card} stroke={on ? c : C.line} strokeWidth={2} />
            <circle cx={x + 34} cy={62} r={22} fill={on ? `${c}30` : "#0F172A"} />
            <Icon name={s.icon} x={x + 22} y={50} size={24} color={on ? c : C.muted} />
            <text x={x + 68} y={55} fontSize={13} fill={C.muted}>
              {s.day}
            </text>
            <text x={x + 68} y={79} fontSize={17} fontWeight={600} fill={on ? C.text : C.muted}>
              {s.label}
            </text>
          </g>
        );
      })}

      <Fade k={prog(u, 0.4, 0.9)} dy={20}>
        <rect x={40} y={140} width={660} height={390} rx={18} fill={C.card} stroke={`${c}60`} strokeWidth={2} />
        <text x={70} y={184} fontSize={15} fill={C.muted}>
          To
        </text>
        <text x={140} y={184} fontSize={17} fill={C.text}>
          Maya Chen · VP RevOps, Northwind Cloud
        </text>
        <text x={70} y={218} fontSize={15} fill={C.muted}>
          Subject
        </text>
        <text x={140} y={218} fontSize={17} fontWeight={600} fill={C.text}>
          Routing 400+ inbound leads at Northwind?
        </text>
        <line x1={70} x2={670} y1={240} y2={240} stroke={C.line} strokeWidth={2} />
        {emailLines.map((line, j) => {
          const shown = line.slice(0, Math.max(0, remaining));
          remaining -= line.length;
          return (
            <text key={j} x={70} y={284 + j * 36} fontSize={19} fill="#D1D5DB">
              {shown}
              {shown.length > 0 && shown.length < line.length ? "▍" : ""}
            </text>
          );
        })}
        <Fade k={prog(u, 3.3, 3.8)} dy={8}>
          <rect x={70} y={452} width={310} height={46} rx={23} fill={`${C.teal}1F`} stroke={`${C.teal}80`} strokeWidth={2} />
          <Check x={98} y={475} k={1} color={C.teal} r={11} />
          <text x={120} y={481} fontSize={16} fontWeight={600} fill={C.teal}>
            AI draft · approved by rep
          </text>
        </Fade>
      </Fade>

      <Fade k={prog(u, 5.4, 6)} dy={24}>
        <rect x={760} y={170} width={480} height={124} rx={20} fill="#1E1B3A" stroke={`${c}80`} strokeWidth={2} />
        <circle cx={806} cy={214} r={22} fill={c} />
        <text x={806} y={221} fontSize={17} fontWeight={700} fill="#0B1222" textAnchor="middle">
          M
        </text>
        <text x={842} y={210} fontSize={16} fontWeight={600} fill={C.sub}>
          Maya Chen replied
        </text>
        <text x={842} y={262} fontSize={24} fontWeight={600} fill={C.text}>
          “Yes — can we talk Thursday?”
        </text>
      </Fade>
      <Fade k={prog(u, 6.4, 7)} dy={24}>
        <rect x={760} y={330} width={480} height={150} rx={20} fill={C.card} stroke="#10B98180" strokeWidth={2} style={{ filter: "drop-shadow(0 0 16px #10B98140)" }} />
        <rect x={790} y={360} width={80} height={90} rx={12} fill="#10B9811F" stroke="#10B98166" strokeWidth={2} />
        <text x={830} y={392} fontSize={15} fontWeight={700} fill="#10B981" textAnchor="middle">
          THU
        </text>
        <text x={830} y={430} fontSize={30} fontWeight={800} fill={C.text} textAnchor="middle">
          10
        </text>
        <text x={894} y={398} fontSize={22} fontWeight={700} fill={C.text}>
          Discovery call booked
        </text>
        <text x={894} y={430} fontSize={17} fill={C.sub}>
          Thu · 10:00 AM · Jordan + Maya
        </text>
      </Fade>
    </g>
  );
}

function ScenePipeline({ u }: { u: number }) {
  const c = chapters[4].color;
  const stages = ["Discovery", "Demo", "Proposal", "Negotiation", "Closed won"];
  const forecast = ["Pipeline", "Pipeline", "Best case", "Commit", "Commit", "Closed won"];
  const sk = linear(u, 1, 6.2);
  const current = Math.min(stages.length, Math.floor(sk * stages.length + 0.0001));
  const won = prog(u, 6.2, 6.8);
  const touches = Math.round(linear(u, 1, 6.2) * 14);

  return (
    <g>
      <Fade k={prog(u, 0, 0.6)} dy={20}>
        <rect x={40} y={40} width={780} height={160} rx={18} fill={C.card} stroke={C.line} strokeWidth={2} />
        <Label x={70} y={80}>
          SALESFORCE OPPORTUNITY
        </Label>
        <text x={70} y={124} fontSize={26} fontWeight={700} fill={C.text}>
          Northwind Cloud — Lead Routing Rollout
        </text>
        <text x={70} y={166} fontSize={17} fill={C.sub}>
          Owner: Jordan · Source: Intent signal → AI-drafted email
        </text>
        <text x={790} y={124} fontSize={30} fontWeight={800} fill={c} textAnchor="end">
          $84,000
        </text>
      </Fade>

      {stages.map((s, j) => {
        const x = 40 + j * 158;
        const done = j < current;
        const active = j === current;
        return (
          <g key={s} opacity={prog(u, 0.3 + j * 0.1, 0.8 + j * 0.1)}>
            <rect
              x={x}
              y={240}
              width={150}
              height={64}
              rx={12}
              fill={done ? `${c}2A` : C.card}
              stroke={done || active ? c : C.line}
              strokeWidth={2}
            />
            <text x={x + 75} y={279} fontSize={17} fontWeight={600} fill={done || active ? C.text : C.muted} textAnchor="middle">
              {s}
            </text>
            {done && <Check x={x + 138} y={252} k={1} r={11} color={c} />}
          </g>
        );
      })}
      {won > 0 && (
        <g>
          {[0, 1, 2].map((r) => (
            <circle key={r} cx={747} cy={272} r={40 + r * 26 * won} fill="none" stroke={c} strokeWidth={2} opacity={(1 - won) * 0.8} />
          ))}
        </g>
      )}

      <Fade k={prog(u, 0.8, 1.4)} dy={20}>
        <rect x={40} y={344} width={780} height={74} rx={16} fill={C.card} stroke={C.line} strokeWidth={2} />
        <Icon name="link" x={64} y={366} size={30} color={c} />
        <text x={110} y={390} fontSize={19} fill={C.text}>
          <tspan fontWeight={700} fill={c}>
            {touches}
          </tspan>{" "}
          touches auto-logged to Salesforce — emails, calls, meetings
        </text>
      </Fade>

      <Fade k={prog(u, 0.4, 1)} dx={30}>
        <rect x={880} y={40} width={360} height={264} rx={18} fill={C.card} stroke={`${c}60`} strokeWidth={2} />
        <Label x={910} y={80}>
          FORECAST CATEGORY
        </Label>
        <text x={910} y={150} fontSize={44} fontWeight={800} fill={c}>
          {forecast[current]}
        </text>
        {[0, 1, 2, 3, 4].map((j) => (
          <rect key={j} x={910 + j * 62} y={196 - j * 6} width={44} height={70 + j * 6} rx={6} fill={j < current ? c : C.line} opacity={j < current ? 0.8 : 1} />
        ))}
      </Fade>
      <Fade k={prog(u, 3.4, 3.9)} dy={10}>
        <rect x={880} y={344} width={360} height={74} rx={16} fill={`${C.teal}14`} stroke={`${C.teal}70`} strokeWidth={2} />
        <Check x={914} y={381} k={1} color={C.teal} r={12} />
        <text x={940} y={388} fontSize={18} fontWeight={600} fill={C.teal}>
          Manager review before commit
        </text>
      </Fade>
      <Fade k={won} dy={10}>
        <text x={640} y={490} fontSize={30} fontWeight={800} fill={c} textAnchor="middle">
          Closed won · $84,000
        </text>
      </Fade>
    </g>
  );
}

function SceneMeasure({ u }: { u: number }) {
  const c = chapters[5].color;
  const touches = [
    ["Intent ad (6sense)", 18],
    ["Webinar", 22],
    ["AI-drafted email", 35],
    ["Demo call", 25],
  ] as const;
  const bars = prog(u, 0.5, 3);
  const revenue = prog(u, 1, 3.5);
  const chart = linear(u, 1.5, 4);
  const pts = [
    [730, 410],
    [800, 395],
    [870, 400],
    [940, 370],
    [1010, 352],
    [1080, 320],
    [1150, 296],
    [1210, 262],
  ];

  return (
    <g>
      <Fade k={prog(u, 0, 0.6)} dy={20}>
        <rect x={40} y={40} width={610} height={410} rx={18} fill={C.card} stroke={C.line} strokeWidth={2} />
        <Label x={70} y={80}>
          MULTI-TOUCH ATTRIBUTION
        </Label>
        {touches.map(([label, share], j) => {
          const y = 120 + j * 78;
          return (
            <g key={label}>
              <text x={70} y={y + 6} fontSize={18} fill={C.text}>
                {label}
              </text>
              <text x={620} y={y + 6} fontSize={18} fontWeight={700} fill={c} textAnchor="end">
                {Math.round(share * bars)}%
              </text>
              <rect x={70} y={y + 20} width={550} height={16} rx={8} fill={C.line} />
              <rect x={70} y={y + 20} width={550 * (share / 35) * bars} height={16} rx={8} fill={c} opacity={0.4 + (share / 35) * 0.6} />
            </g>
          );
        })}
      </Fade>

      <Fade k={prog(u, 0.4, 1)} dx={30}>
        <rect x={700} y={40} width={540} height={150} rx={18} fill={C.card} stroke={`${c}60`} strokeWidth={2} />
        <Label x={730} y={80}>
          REVENUE ATTRIBUTED
        </Label>
        <text x={730} y={150} fontSize={50} fontWeight={800} fill={C.text}>
          ${Math.round(84 * revenue)},000
        </text>
        <rect x={700} y={220} width={540} height={230} rx={18} fill={C.card} stroke={C.line} strokeWidth={2} />
        <Label x={730} y={258}>
          PIPELINE FROM INTENT
        </Label>
        <polyline
          points={pts.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke={c}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - chart}
        />
        {chart > 0.98 && <circle cx={1210} cy={262} r={7} fill={c} style={{ filter: `drop-shadow(0 0 8px ${c})` }} />}
      </Fade>

      <Fade k={prog(u, 5, 5.6)} dy={16}>
        <rect x={40} y={480} width={1200} height={70} rx={18} fill={`${C.teal}14`} stroke={`${C.teal}70`} strokeWidth={2} />
        <Icon name="sparkles" x={66} y={499} size={32} color={C.teal} />
        <text x={114} y={523} fontSize={20} fontWeight={600} fill={C.text}>
          Insights feed back into scoring and routing — every deal makes the system smarter.
        </text>
      </Fade>
    </g>
  );
}

function SceneEnd({ u }: { u: number }) {
  const k = prog(u, 0, 0.8);
  return (
    <Fade k={k} dy={20}>
      <text x={640} y={230} fontSize={60} fontWeight={800} fill={C.text} textAnchor="middle">
        One connected GTM system.
      </text>
      <text x={640} y={300} fontSize={24} fill={C.teal} textAnchor="middle">
        Signal → Enrich → Route → Engage → Pipeline → Measure
      </text>
    </Fade>
  );
}

const scenes = [SceneSignal, SceneEnrich, SceneRoute, SceneEngage, ScenePipeline, SceneMeasure];

/* ─── System map (top of the canvas) ─── */

const nodeX = chapters.map((_, i) => 220 + i * 232);
const MAP_Y = 170;

function SystemMap({ index, u }: { index: number; u: number }) {
  const ended = index >= chapters.length;
  const loop = index === 5 ? prog(u, 5, 7) : ended ? 1 : 0;
  const move = index === 0 || ended ? 1 : prog(u, 0, 1.2);
  const px = ended ? 0 : index === 0 ? nodeX[0] : lerp(nodeX[index - 1], nodeX[index], move);
  // On the end card the packet travels the feedback loop back to the start
  const e = ended ? prog(u, 0.2, 2.6) : 0;
  const arc = (k: number) => {
    const p0 = [nodeX[5], MAP_Y - 48];
    const p1 = [nodeX[5], 30];
    const p2 = [nodeX[0], 30];
    const p3 = [nodeX[0], MAP_Y - 48];
    const m = 1 - k;
    return [0, 1].map((d) => m ** 3 * p0[d] + 3 * m * m * k * p1[d] + 3 * m * k * k * p2[d] + k ** 3 * p3[d]);
  };
  const [ex, ey] = arc(e);

  return (
    <g>
      <path
        d={`M${nodeX[5]} ${MAP_Y - 48} C ${nodeX[5]} 30, ${nodeX[0]} 30, ${nodeX[0]} ${MAP_Y - 48}`}
        fill="none"
        stroke={C.teal}
        strokeWidth={2}
        strokeDasharray="8 8"
        opacity={loop * 0.7}
      />
      <g opacity={loop}>
        <rect x={680} y={22} width={240} height={32} rx={16} fill="#060B16" stroke={`${C.teal}60`} strokeWidth={1.5} />
        <text x={800} y={44} fontSize={15} fontWeight={600} fill={C.teal} textAnchor="middle">
          Feedback loop
        </text>
      </g>

      {chapters.slice(0, -1).map((ch, i) => {
        const on = ended || i < index;
        return (
          <line
            key={ch.key}
            x1={nodeX[i] + 100}
            x2={nodeX[i + 1] - 100}
            y1={MAP_Y}
            y2={MAP_Y}
            stroke={on ? chapters[i + 1].color : C.line}
            strokeOpacity={on ? 0.7 : 1}
            strokeWidth={3}
          />
        );
      })}

      {chapters.map((ch, i) => {
        const active = i === index;
        const done = ended || i < index;
        const color = active || done ? ch.color : C.muted;
        return (
          <g key={ch.key} opacity={active || done ? 1 : 0.55}>
            <rect
              x={nodeX[i] - 100}
              y={MAP_Y - 46}
              width={200}
              height={92}
              rx={16}
              fill={active ? `${ch.color}1F` : C.panel}
              stroke={active ? ch.color : done ? `${ch.color}80` : C.line}
              strokeWidth={2}
              style={active ? { filter: `drop-shadow(0 0 16px ${ch.color}70)` } : undefined}
            />
            <Icon name={ch.icon} x={nodeX[i] - 84} y={MAP_Y - 16} size={30} color={color} />
            <text x={nodeX[i] - 44} y={MAP_Y - 2} fontSize={20} fontWeight={700} fill={active || done ? C.text : C.sub}>
              {ch.title}
            </text>
            <text x={nodeX[i] - 44} y={MAP_Y + 22} fontSize={14} fill={C.sub}>
              {ch.sub}
            </text>
          </g>
        );
      })}

      {!ended && (
        <circle cx={px} cy={MAP_Y + 46} r={8} fill={chapters[index].color} style={{ filter: `drop-shadow(0 0 10px ${chapters[index].color})` }} />
      )}
      {ended && e > 0 && e < 1 && (
        <circle cx={ex} cy={ey} r={8} fill={C.teal} style={{ filter: `drop-shadow(0 0 10px ${C.teal})` }} />
      )}
    </g>
  );
}

/* ─── Canvas ─── */

function FilmCanvas({ t }: { t: number }) {
  const { index, u } = locate(t);
  const ended = index >= chapters.length;
  const dur = ended ? END_DURATION : chapters[index].duration;
  const sceneOpacity = clamp(u / 0.4) * clamp((dur - u) / 0.4 + (ended ? 1 : 0));
  const Scene = ended ? SceneEnd : scenes[index];

  return (
    <svg viewBox="0 0 1600 900" className="block w-full h-auto select-none" style={{ fontFamily: "inherit" }} aria-hidden="true">
      <defs>
        <pattern id="film-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.035" />
        </pattern>
        <radialGradient id="film-glow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor={ended ? C.teal : chapters[index].color} stopOpacity="0.12" />
          <stop offset="100%" stopColor="#060B16" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={1600} height={900} fill="#060B16" />
      <rect width={1600} height={900} fill="url(#film-grid)" />
      <rect width={1600} height={900} fill="url(#film-glow)" />

      <text x={40} y={52} fontSize={15} fontWeight={600} fill={C.muted} letterSpacing={2.5}>
        ILLUSTRATIVE EXAMPLE
      </text>
      <text x={1560} y={52} fontSize={15} fontWeight={600} fill={C.muted} letterSpacing={2.5} textAnchor="end">
        {ended ? "SIYASPHERE" : `${String(index + 1).padStart(2, "0")} / 06 · ${chapters[index].title.toUpperCase()}`}
      </text>

      <SystemMap index={index} u={u} />

      <rect x={160} y={270} width={1280} height={590} rx={24} fill={C.panel} stroke="#ffffff" strokeOpacity={0.06} strokeWidth={2} />
      <g transform="translate(160 280)" opacity={sceneOpacity}>
        <Scene u={u} />
      </g>
    </svg>
  );
}

/* ─── Player ─── */

export default function GTMSystemFilm() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setT((prev) => Math.min(TOTAL, prev + dt));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  useEffect(() => {
    if (t >= TOTAL) setPlaying(false);
  }, [t]);

  // Pause when scrolled out of view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setPlaying(false);
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const play = useCallback(() => {
    setStarted(true);
    setT((prev) => (prev >= TOTAL ? 0 : prev));
    setPlaying(true);
  }, []);

  const seek = (value: number) => {
    setStarted(true);
    setT(clamp(value, 0, TOTAL));
  };

  const shownT = started ? t : POSTER_TIME;
  const { index } = locate(t);
  const ended = started && t >= TOTAL;
  const captionIndex = Math.min(index, chapters.length - 1);
  const chapter = chapters[captionIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7FC6C4]/10 border border-[#7FC6C4]/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#7FC6C4] animate-pulse" />
            <span className="text-xs font-medium text-[#7FC6C4] tracking-wider uppercase">Live Data Orchestration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch the Entire{" "}
            <span className="bg-gradient-to-r from-[#7FC6C4] to-cyan-400 bg-clip-text text-transparent">GTM System</span> in Motion
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Follow one account from first signal to closed-won revenue, and see how every layer of a connected GTM stack hands off to the next.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            ref={wrapRef}
            className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-[#7FC6C4]/10 bg-[#060B16]"
            role="region"
            aria-label="Animated walkthrough of a connected GTM system"
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-[#FF6B6B] via-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]" />
            <button
              type="button"
              onClick={() => (playing ? setPlaying(false) : play())}
              className="block w-full cursor-pointer focus:outline-none"
              aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
            >
              <FilmCanvas t={shownT} />
            </button>

            {!started && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#060B16]/80 via-[#060B16]/40 to-[#060B16]/20">
                <button
                  type="button"
                  onClick={play}
                  className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#7FC6C4] text-gray-950 shadow-[0_0_60px_-10px_rgba(127,198,196,0.8)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7FC6C4]/50"
                  aria-label="Play the GTM system walkthrough"
                >
                  <span className="absolute inset-0 rounded-full border-2 border-[#7FC6C4] animate-ping opacity-40" />
                  <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 sm:h-10 sm:w-10" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
                  </svg>
                </button>
                <p className="mt-5 text-lg sm:text-xl font-semibold text-white">See the full GTM system in action</p>
                <p className="mt-1 text-sm text-gray-400">{fmt(TOTAL)} · 6 chapters</p>
              </div>
            )}

            {ended && (
              <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row items-center justify-center gap-3 pb-6 sm:pb-10">
                <Button href="/contact" variant="primary" size="lg">
                  Book a Free GTM Audit
                </Button>
                <button
                  type="button"
                  onClick={play}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#7FC6C4] px-6 py-3 font-semibold text-[#7FC6C4] hover:bg-[#7FC6C4]/10"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  Replay
                </button>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => (playing ? setPlaying(false) : play())}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#7FC6C4]/40 bg-[#7FC6C4]/10 text-[#7FC6C4] hover:bg-[#7FC6C4]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FC6C4]"
              aria-label={playing ? "Pause" : ended ? "Replay" : "Play"}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="4.5" width="4" height="15" rx="1" />
                  <rect x="14" y="4.5" width="4" height="15" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
                </svg>
              )}
            </button>

            <div className="relative flex-1 h-8 flex items-center">
              <div className="flex w-full gap-1">
                {chapters.map((ch, i) => {
                  const fill = clamp((t - starts[i]) / ch.duration);
                  return (
                    <div key={ch.key} className="h-1.5 rounded-full bg-white/10 overflow-hidden" style={{ flex: ch.duration }}>
                      <div className="h-full rounded-full" style={{ width: `${fill * 100}%`, background: ch.color }} />
                    </div>
                  );
                })}
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden" style={{ flex: END_DURATION }}>
                  <div className="h-full rounded-full bg-[#7FC6C4]" style={{ width: `${clamp((t - END_START) / END_DURATION) * 100}%` }} />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={TOTAL}
                step={0.1}
                value={t}
                onChange={(e) => seek(Number(e.target.value))}
                className="absolute inset-0 w-full cursor-pointer opacity-0"
                aria-label="Seek walkthrough"
                aria-valuetext={`${fmt(t)} of ${fmt(TOTAL)}, ${chapter.title}`}
              />
            </div>

            <span className="w-24 flex-shrink-0 text-right text-sm tabular-nums text-gray-400">
              {fmt(t)} / {fmt(TOTAL)}
            </span>
          </div>

          {/* Chapters */}
          <div className="mt-3 hidden sm:flex flex-wrap gap-2">
            {chapters.map((ch, i) => {
              const active = started && i === captionIndex && !ended;
              return (
                <button
                  key={ch.key}
                  type="button"
                  onClick={() => {
                    seek(starts[i]);
                    setPlaying(true);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    active ? "text-white" : "border-white/10 text-gray-400 hover:text-white hover:border-white/25"
                  }`}
                  style={active ? { borderColor: ch.color, background: `${ch.color}1F` } : undefined}
                >
                  <span className="font-mono text-[10px] opacity-70">{String(i + 1).padStart(2, "0")}</span>
                  {ch.title}
                </button>
              );
            })}
          </div>

          {/* Caption */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-gray-900/60 p-6" aria-live="polite">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{ color: chapter.color, borderColor: `${chapter.color}55`, background: `${chapter.color}14` }}
              >
                <LineIcon name={chapter.icon} className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: chapter.color }}>
                Chapter {String(captionIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-white">{chapter.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{chapter.narration}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chapter.tools.map((tool) => (
                <span key={tool} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Transcript for readers and search engines */}
          <details className="group mt-4 rounded-2xl border border-white/10 bg-gray-900/40 p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-200">
              Read the full walkthrough
              <span className="text-[#7FC6C4] transition-transform group-open:rotate-45">+</span>
            </summary>
            <ol className="mt-5 space-y-4">
              {chapters.map((ch, i) => (
                <li key={ch.key} className="flex gap-4">
                  <span className="font-mono text-sm pt-0.5" style={{ color: ch.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{ch.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{ch.narration}</p>
                  </div>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </div>
    </section>
  );
}
