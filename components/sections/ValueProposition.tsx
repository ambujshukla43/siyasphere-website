"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const valueProps = [
  {
    title: "Revenue Impact",
    description: "Turn your GTM tech stack into a measurable revenue driver, not a cost center.",
    metric: "2-3x ROI",
  },
  {
    title: "Time to Value",
    description: "Fast implementation with clear milestones. See results in weeks, not months.",
    metric: "4-8 weeks",
  },
  {
    title: "Technical Excellence",
    description: "Built by operators who understand both the tech and the business outcomes.",
    metric: "100% success",
  },
];

export default function ValueProposition() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            Why SiyaSphere?
          </h2>
          <p className="text-xl text-gray-400">
            We don&apos;t just integrate tools—we architect revenue systems that scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <div className="text-4xl font-bold text-primary-400 mb-4">
                  {prop.metric}
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-400">{prop.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

