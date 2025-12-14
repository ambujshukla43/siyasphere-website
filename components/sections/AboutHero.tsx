"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-primary-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            About SiyaSphere
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
            Built by operators, for operators. We understand both the tech and the business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

