"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "GTM Audit",
    duration: "Week 1",
    description:
      "We start with a comprehensive audit of your current GTM systems. We map your tech stack, analyze data flows, identify bottlenecks, and document pain points.",
    deliverables: [
      "Tech stack inventory",
      "Data flow diagrams",
      "Gap analysis report",
      "Priority recommendations",
    ],
  },
  {
    number: "02",
    title: "Solution Design",
    duration: "Week 2",
    description:
      "Based on the audit, we design a solution architecture tailored to your needs. We create detailed technical specs, workflow diagrams, and implementation plans.",
    deliverables: [
      "Solution architecture",
      "Technical specifications",
      "Workflow diagrams",
      "Implementation roadmap",
    ],
  },
  {
    number: "03",
    title: "Implementation",
    duration: "Weeks 3-6",
    description:
      "We build, integrate, and configure your systems. This includes data migration, automation setup, integration development, and custom configuration.",
    deliverables: [
      "System integrations",
      "Automation workflows",
      "Data migration",
      "Custom configurations",
    ],
  },
  {
    number: "04",
    title: "Testing & Optimization",
    duration: "Week 7",
    description:
      "We thoroughly test all systems, validate data accuracy, optimize performance, and ensure everything works seamlessly before going live.",
    deliverables: [
      "Test results",
      "Performance optimization",
      "Data validation",
      "User acceptance testing",
    ],
  },
  {
    number: "05",
    title: "Launch & Training",
    duration: "Week 8",
    description:
      "We launch your new systems, train your team, provide documentation, and ensure everyone is confident using the new workflows.",
    deliverables: [
      "System launch",
      "Team training sessions",
      "Documentation",
      "Ongoing support plan",
    ],
  },
];

export default function ProcessSteps() {
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
            Our 8-Week Process
          </h2>
          <p className="text-xl text-gray-400">
            From audit to launch, we deliver measurable results in 8 weeks.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left side - Number and title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-5xl font-bold text-primary-400/50">
                        {step.number}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                          {step.duration}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-100">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Description and deliverables */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 text-gray-400"
                          >
                            <svg
                              className="w-5 h-5 text-primary-400 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-950/50 border border-primary-500/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              Ongoing Support
            </h3>
            <p className="text-gray-400">
              After launch, we provide ongoing support, optimization, and system
              enhancements to ensure your GTM stack continues to perform at peak
              efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

