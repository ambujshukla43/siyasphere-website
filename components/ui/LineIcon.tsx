import type { ReactNode } from "react";

const paths = {
  network: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M12 7.5v4m0 0-5.2 4.6M12 11.5l5.2 4.6" />
    </>
  ),
  route: (
    <>
      <circle cx="4" cy="12" r="1.75" />
      <path d="M5.75 12H10c3 0 4-5 7-5h3M10 12c3 0 4 5 7 5h3" />
      <path d="m18 5 2 2-2 2M18 15l2 2-2 2" />
    </>
  ),
  trend: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M7 17v-3.5M12 17v-6M17 17V8" />
      <path d="m5 10 4.5-3.5 3 2L19 3.5" />
      <path d="M15.5 3.5H19V7" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.75" />
      <rect x="14" y="14" width="7" height="7" rx="1.75" />
      <path d="M6.5 10v3.5a2 2 0 0 0 2 2H14" />
      <path d="m15.5 3-2 3.5h3l-2 3.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="m11 3 1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
      <path d="m18.5 14.5.75 2 2 .75-2 .75-.75 2-.75-2-2-.75 2-.75z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4.5-4.5" />
    </>
  ),
  building: (
    <>
      <rect x="4.5" y="3" width="15" height="18" rx="1.5" />
      <path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10.5 21v-2.5h3V21" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.25" />
    </>
  ),
  merge: (
    <>
      <circle cx="6" cy="5.5" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 8v13M6 8c0 5.5 4 10 9.5 10" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3 19 6v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  cloud: <path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.9 9a4.75 4.75 0 0 1-.4 9.5z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c1.8.7 3 2.9 3 6" />
    </>
  ),
  send: (
    <>
      <path d="M21 3 3 10.5l7 2.5 2.5 7z" />
      <path d="M21 3 10 13" />
    </>
  ),
  activity: <path d="M3 12h4l3-7 4 14 3-7h4" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </>
  ),
  lineChart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="m5 15 4.5-4.5 3 3L19 7" />
      <path d="M15.5 7H19v3.5" />
    </>
  ),
  barChart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M7 17v-5M12 17V7M17 17v-8" />
    </>
  ),
  pieChart: (
    <>
      <path d="M12 3v9h9" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 8.5h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9M12 6.5v11" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3.5 10v4h3l7.5 5V5l-7.5 5z" />
      <path d="M17.5 9a4 4 0 0 1 0 6M7 14l1 5h2.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M3 13h18" />
    </>
  ),
  zap: <path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z" />,
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export default function LineIcon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
