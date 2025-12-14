"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const values = [
  {
    title: "Technical Excellence",
    description:
      "We're not just consultants—we're hands-on operators who build, integrate, and optimize systems. Every solution is production-ready and battle-tested.",
  },
  {
    title: "Business Outcomes",
    description:
      "Technology is a means to an end. We focus on measurable business results: revenue growth, productivity gains, and operational efficiency.",
  },
  {
    title: "Speed to Value",
    description:
      "We deliver results in weeks, not months. Fast implementation with clear milestones and immediate value at each step.",
  },
  {
    title: "No Fluff",
    description:
      "Clear, confident, and outcome-focused. We tell you what you need to hear, not what you want to hear. No agency-speak, just results.",
  },
];

export default function AboutContent() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              SiyaSphere exists to fix broken Go-To-Market systems. We help B2B companies
              scale revenue by turning their tech stack into a revenue engine, not a cost
              center.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Too many companies have invested in GTM technology but aren&apos;t seeing the
              returns. The tools are there, but they&apos;re not integrated, not optimized, and
              not delivering value. We change that.
            </p>
          </motion.div>

          {/* Who We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
              Who We Serve
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Marketing Ops Leaders
                </h3>
                <p className="text-gray-400">
                  Struggling with attribution, campaign tracking, and marketing automation
                  that doesn&apos;t work? We fix it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  RevOps Teams
                </h3>
                <p className="text-gray-400">
                  Need visibility, accurate forecasting, and systems that actually support
                  revenue operations? We build it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  SDR & Sales Leaders
                </h3>
                <p className="text-gray-400">
                  Tired of manual work, broken routing, and tools your team won&apos;t use? We
                  automate it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Founders at Growth-Stage Companies
                </h3>
                <p className="text-gray-400">
                  Ready to scale but your GTM systems are holding you back? We unlock it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} hover>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Why We're Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-950/50 border border-primary-500/20 rounded-xl p-8 lg:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
              Why We&apos;re Different
            </h2>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                Most agencies talk strategy but can&apos;t execute. Most consultants design
                solutions but don&apos;t build them. Most vendors sell tools but don&apos;t integrate
                them.
              </p>
              <p>
                We do all three. We audit, design, build, integrate, optimize, and support.
                We&apos;re operators who&apos;ve been in your shoes, and we know what actually works.
              </p>
              <p className="font-semibold text-gray-100">
                If you&apos;re ready to fix your GTM systems and scale revenue, let&apos;s talk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

