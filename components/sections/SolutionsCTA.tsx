"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function SolutionsCTA() {
  return (
    <section className="section-padding bg-gray-950 border-t border-[#7FC6C4]/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Design Your GTM Engine?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Explore how AI-powered RevOps can transform your go-to-market motion. Book a 30-minute strategy call to see what's possible for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Design Your GTM Engine
            </Button>
            <Button variant="secondary" size="lg" href="/how-it-works">
              Learn How We Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
