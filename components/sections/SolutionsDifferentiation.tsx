"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function SolutionsDifferentiation() {
  const points = [
    {
      title: "AI-First, Human-Governed",
      description: "We automate the repetitive; we empower the strategic. Your team stays in control while AI handles scale, speed, and consistency.",
    },
    {
      title: "RevOps-Led, Not Tool-Led",
      description: "We design around your business process first, then select and integrate tools. You own the process; tools serve it.",
    },
    {
      title: "Built for Scale and Compliance",
      description: "From day-one migrations to ongoing optimization, we ensure your GTM infrastructure is audit-ready, compliant, and built to grow with you.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900 border-t border-[#7FC6C4]/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Why SiyaSphere
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 border border-[#7FC6C4]/20 hover:border-[#7FC6C4]/40 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-[#7FC6C4]">✓</span>
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
