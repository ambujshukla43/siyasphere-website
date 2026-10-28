"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "HubSpot", src: "/logos/hubspot.png" },
  { name: "Clay", src: "/logos/clay.png" },
  { name: "Apollo.io", src: "/logos/apollo.png" },
  { name: "Gong", src: "/logos/gong.png" },
  { name: "Actively AI", src: "/logos/actively.png" },
  { name: "Instantly.ai", src: "/logos/instantly.png" },
  { name: "Outreach", src: "/logos/outreach.png" },
  { name: "Salesloft", src: "/logos/salesloft.png" },
  { name: "Marketo", src: "/logos/marketo.png" },
  { name: "LeanData", src: "/logos/leandata.png" },
  { name: "6sense", src: "/logos/6sense.png" },
  { name: "ZoomInfo", src: "/logos/zoominfo.png" },
  { name: "n8n", src: "/logos/n8n.svg" },
  { name: "OpenAI", src: "/logos/openai.png" },
  { name: "Claude", src: "/logos/claude.png" },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex flex-shrink-0 items-center gap-4 lg:gap-5 pr-4 lg:pr-5" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li
          key={logo.name}
          className="group flex items-center gap-3 whitespace-nowrap rounded-full border border-gray-800 bg-gray-800/40 py-2 pl-2 pr-5 transition-colors hover:border-[#7FC6C4]/60 hover:bg-gray-800"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" loading="lazy" />
          </span>
          <span className="text-gray-300 font-semibold text-base lg:text-lg group-hover:text-white transition-colors">
            {logo.name}
          </span>
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
