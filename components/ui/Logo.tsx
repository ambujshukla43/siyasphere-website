"use client";

import React from "react";

type Props = { className?: string };

export default function Logo({ className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
      {/* Code Symbol */}
      <span className="text-base sm:text-lg font-semibold text-[#7FC6C4] leading-none" style={{ letterSpacing: '0.08em' }}>
        &lt; / &gt;
      </span>
      
      {/* Text */}
      <span className="font-semibold text-sm sm:text-base text-white uppercase tracking-wide" style={{ letterSpacing: '0.08em' }}>
        Siyasphere
      </span>
    </div>
  );
}
