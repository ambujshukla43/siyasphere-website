"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function BookingBar() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Hide on privacy and terms pages
  if (pathname === "/privacy" || pathname === "/terms") {
    return null;
  }

  if (isClosed) {
    return null;
  }

  // Client-side validation
  const validateEmail = (emailToValidate: string): string | null => {
    if (!emailToValidate.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailToValidate)) {
      return "Please provide a valid email address";
    }

    // Check for disposable email
    const disposableDomains = ["tempmail", "guerrillamail", "10minutemail", "mailinator"];
    const emailDomain = emailToValidate.split("@")[1].toLowerCase();
    if (disposableDomains.some((domain) => emailDomain.includes(domain))) {
      return "Please use a business email address";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Client-side validation
    const validationError = validateEmail(email);
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
        body: JSON.stringify({
          email,
          name: "",
          company: "",
          phone: "",
          website: "", // Honeypot
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Booking bar error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-950/70 via-gray-900/70 to-gray-950/70 backdrop-blur-md shadow-2xl z-40 border-t border-[#7FC6C4]/20">
      <div className="container-custom py-2 md:py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsClosed(true)}
            className="absolute top-2 right-2 md:relative md:top-auto md:right-auto ml-auto p-1.5 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
            aria-label="Close booking bar"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#7FC6C4]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <h3 className="text-white font-semibold text-sm">Ready to transform your GTM?</h3>
            </div>
            <p className="text-gray-300 text-xs mt-0.5">Schedule your free audit today.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 md:flex-initial flex gap-2 w-full md:w-auto items-center">
            {error && (
              <p className="text-red-400 text-xs whitespace-nowrap hidden md:block">{error}</p>
            )}
            <div className="flex-1 md:flex-initial relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={loading}
                className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-[#7FC6C4]/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7FC6C4] focus:border-[#7FC6C4] text-xs transition-all disabled:opacity-50"
              />
              {error && (
                <p className="md:hidden text-red-400 text-xs whitespace-nowrap absolute top-full mt-0.5 left-0">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              variant="primary"
              className="bg-[#7FC6C4] hover:bg-cyan-400 text-gray-950 px-5 whitespace-nowrap text-sm disabled:opacity-50 font-semibold"
              disabled={loading}
            >
              {submitted ? "✓ Sent!" : loading ? "Sending..." : "Book Now"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
