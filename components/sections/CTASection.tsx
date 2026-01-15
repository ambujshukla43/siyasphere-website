"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7FC6C4] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
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
          <p className="text-xl text-gray-300 mb-10">
            Book a free GTM audit and discover how to turn your tech stack into a revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              className="bg-[#7FC6C4] hover:bg-[#7FC6C4]/90 text-gray-950 font-bold text-lg px-8 py-4"
            >
              Get Your Free Audit
            </Button>
            <Button
              href="/case-studies"
              className="border-2 border-[#7FC6C4] text-white hover:bg-[#7FC6C4]/10 text-lg px-8 py-4"
            >
              View Use Cases
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

