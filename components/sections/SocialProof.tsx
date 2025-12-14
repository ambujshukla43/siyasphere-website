"use client";

import { motion } from "framer-motion";

const logos = [
  "Salesforce",
  "HubSpot",
  "Marketo",
  "Outreach",
  "LeanData",
  "RingLead",
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-900 border-y border-gray-800">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
        >
          Integrated with leading GTM platforms
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-gray-500 font-semibold text-lg lg:text-xl hover:text-primary-400 transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

