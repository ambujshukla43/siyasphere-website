"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`GTM Audit Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Title: ${formData.title}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:siyasphere15@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="text-center p-12">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-100 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-400 mb-6">
                We&apos;ve received your request. Our team will reach out within 24 hours to
                schedule your GTM audit.
              </p>
              <Button href="/" variant="primary">
                Return to Home
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">
                    30-Minute Discovery Call
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll discuss your current GTM challenges and goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">
                    Comprehensive Audit
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll analyze your tech stack, data flows, and processes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">
                    Actionable Recommendations
                  </h3>
                  <p className="text-gray-400 text-sm">
                    You&apos;ll receive a detailed report with prioritized next steps.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Job Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Tell us about your GTM challenges *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      placeholder="What's broken in your Go-To-Market systems? What would you like to achieve?"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Request GTM Audit
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

