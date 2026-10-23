import { ImageResponse } from "next/og";

export const alt = "SiyaSphere - AI-Powered GTM Systems for B2B SaaS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #030712 0%, #111827 60%, #0F172A 100%)",
          color: "#F3F4F6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 100 100">
            <path d="M 34 30 L 16 50 L 34 70" fill="none" stroke="#7FC6C4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="44" y1="72" x2="58" y2="28" stroke="#7FC6C4" strokeWidth="9" strokeLinecap="round" />
            <path d="M 66 30 L 84 50 L 66 70" fill="none" stroke="#7FC6C4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: 4 }}>SIYASPHERE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>Scale revenue by fixing</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, color: "#7FC6C4" }}>your broken GTM systems</div>
          <div style={{ fontSize: 30, marginTop: 28, color: "#9CA3AF" }}>
            RevOps · Marketing Automation · Salesforce · AI Workflows
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#7FC6C4" }}>siyasphere.in</div>
      </div>
    ),
    { ...size }
  );
}
