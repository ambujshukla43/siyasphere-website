import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="200" height="200" fill="#0F172A" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#g1)" strokeWidth="7" />
        <ellipse cx="100" cy="100" rx="70" ry="35" fill="none" stroke="url(#g1)" strokeWidth="5" opacity="0.7" />
        <ellipse cx="100" cy="100" rx="70" ry="52.5" fill="none" stroke="url(#g1)" strokeWidth="5" opacity="0.6" />
        <path d="M 100 30 Q 135 65 135 100 Q 135 135 100 170" fill="none" stroke="url(#g1)" strokeWidth="5" opacity="0.7" />
        <path d="M 100 30 Q 65 65 65 100 Q 65 135 100 170" fill="none" stroke="url(#g1)" strokeWidth="5" opacity="0.7" />
        <circle cx="100" cy="100" r="9" fill="url(#g1)" />
      </svg>
    ),
    { ...size }
  );
}
