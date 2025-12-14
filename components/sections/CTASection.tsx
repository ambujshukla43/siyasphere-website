"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Fix Your GTM Systems?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Book a free GTM audit and discover how to turn your tech stack into a revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Book a GTM Audit
            </Button>
            <Button
              href="/case-studies"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              View Use Cases
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

