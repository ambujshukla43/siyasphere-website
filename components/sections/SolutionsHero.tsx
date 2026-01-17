"use client";

import { motion } from "framer-motion";

export default function SolutionsHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-b border-[#7FC6C4]/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-[#7FC6C4] to-cyan-400 bg-clip-text text-transparent">
              GTM Execution at Scale
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where artificial intelligence meets human judgment to build predictable, scalable revenue engines.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            SiyaSphere transforms how modern revenue teams operate—combining AI automation, data intelligence, and process optimization to align your entire GTM motion. We don&apos;t replace humans with machines. We empower them with speed, clarity, and control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

