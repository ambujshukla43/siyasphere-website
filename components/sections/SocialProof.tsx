"use client";

import { motion } from "framer-motion";

const logos = [
  "Salesforce",
  "HubSpot",
  "Clay",
  "Apollo.io",
  "Gong",
  "Actively AI",
  "Instantly.ai",
  "Outreach",
  "Salesloft",
  "Marketo",
  "LeanData",
  "6sense",
  "ZoomInfo",
  "n8n",
  "OpenAI",
  "Claude",
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex flex-shrink-0 items-center gap-10 lg:gap-14 pr-10 lg:pr-14" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li
          key={logo}
          className="whitespace-nowrap text-gray-400 font-semibold text-lg lg:text-xl hover:text-[#7FC6C4] transition-colors"
        >
          {logo}
        </li>
      ))}
    </ul>
  );
}

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-900 border-y border-gray-800">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8"
        >
          Integrated with leading GTM platforms
        </motion.p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
