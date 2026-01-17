"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    phone: "",
    website: "", // Honeypot field (should remain empty)
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Client-side validation
  const validateForm = (): string | null => {
    // Email validation
    if (!formData.email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please provide a valid email address";
    }

    // Check for disposable email
    const disposableDomains = ["tempmail", "guerrillamail", "10minutemail", "mailinator"];
    const emailDomain = formData.email.split("@")[1].toLowerCase();
    if (disposableDomains.some((domain) => emailDomain.includes(domain))) {
      return "Please use a business email address";
    }

    // Name validation (optional but if provided, must be valid)
    if (formData.name && (formData.name.length < 2 || formData.name.length > 100)) {
      return "Name must be between 2 and 100 characters";
    }

    // Company validation (optional but if provided, must be valid)
    if (formData.company && (formData.company.length < 2 || formData.company.length > 100)) {
      return "Company name must be between 2 and 100 characters";
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone) {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
        return "Please provide a valid phone number";
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitted(true);
      setFormData({ email: "", name: "", company: "", phone: "", website: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    />
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
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    />
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-6"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Request Audit"}
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

