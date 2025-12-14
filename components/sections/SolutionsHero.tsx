"use client";

import { motion } from "framer-motion";

export default function SolutionsHero() {
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
            Solutions That Solve{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Real Problems
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
            We organize solutions by the problems you face, not the tools you use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

