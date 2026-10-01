import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#030712" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)" />
        <path d="M 34 30 L 16 50 L 34 70" fill="none" stroke="#7FC6C4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="44" y1="72" x2="58" y2="28" stroke="#7FC6C4" strokeWidth="9" strokeLinecap="round" />
        <path d="M 66 30 L 84 50 L 66 70" fill="none" stroke="#7FC6C4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    { ...size }
  );
}
