"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-sm border-b border-primary-500/20 shadow-lg shadow-primary-500/5">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group hover:opacity-80 transition-all duration-300">
            <Logo className="gap-0" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary">
              Book a GTM Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary-400 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button href="/contact" variant="primary" className="w-full">
                  Book a GTM Audit
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
