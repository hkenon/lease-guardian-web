"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Logo - always visible */}
      <Link href="/" className="fixed top-5 left-6 md:left-10 z-[60]">
        <Image
          src="/TPLogo.png"
          alt="Lease Decoder Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* Header - matching main page */}
      <header
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-md ${
          isMobileMenuOpen
            ? "bg-transparent backdrop-blur-none"
            : "backdrop-blur-md bg-white/80"
        } ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <nav className="px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="w-[55px]">{/* Spacer for logo */}</div>
          <div className="hidden md:flex flex-1 justify-evenly items-center">
            <Link
              href="/#features"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300"
            >
              Overview
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300"
            >
              Testimonials
            </Link>
            <Image
              src="/HLogoB.png"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#download"
              className="hidden md:inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Download
            </Link>
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-900"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 md:hidden transform transition-transform duration-300 ease-out shadow-xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <nav className="flex flex-col space-y-6">
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Download
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/privacy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors mb-3 font-semibold"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-500">
            Last Updated: January 31, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Lease Decoder ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our mobile application.
          </p>

          {/* Section 1 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              1. Information We Collect
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Document Content
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When you upload a lease document for analysis, we temporarily
                  process the content through our AI service. The document is
                  analyzed and then immediately deleted from our servers.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Local Storage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analysis results are stored locally on your device using
                  AsyncStorage. We do not have access to this data.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Usage Data
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect anonymous usage statistics to improve our
                  service, including app crashes and performance metrics.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-4">
              {[
                "To analyze lease documents and provide you with insights",
                "To improve our AI analysis accuracy and app performance",
                "To provide customer support when requested",
                "To detect and prevent technical issues",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 font-semibold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-600 leading-relaxed pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              3. Data Storage & Security
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Local Storage
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All analysis results are stored locally on your device. You
                  have full control over this data and can delete it at any
                  time.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Temporary Processing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lease documents are temporarily sent to our secure servers for
                  AI analysis. They are processed and immediately deleted.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Encryption
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All data transmitted uses industry-standard encryption
                  (HTTPS/TLS) to protect your information.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              4. Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use the following third-party services:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Anthropic Claude AI",
                  desc: "For lease document analysis",
                },
                { name: "Expo", desc: "For app infrastructure and updates" },
                {
                  name: "Sentry",
                  desc: "For crash reporting and error tracking",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl"
                >
                  <span className="font-semibold text-gray-900">
                    {service.name}
                  </span>
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-600">{service.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              5. Your Rights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Access",
                  desc: "View all your saved analyses through the app",
                },
                {
                  title: "Delete",
                  desc: "Delete all analyses at any time through Settings",
                },
                {
                  title: "Export",
                  desc: "Export all your data through the Settings screen",
                },
                {
                  title: "Opt-Out",
                  desc: "Disable analytics and notifications in Settings",
                },
              ].map((right, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-xl hover:border-red-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{right.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              6. Data Retention
            </h2>
            <div className="space-y-3">
              {[
                {
                  item: "Uploaded documents",
                  retention: "Immediately deleted after analysis",
                },
                {
                  item: "Analysis results",
                  retention: "Stored locally until you delete them",
                },
                {
                  item: "Usage analytics",
                  retention: "Retained for up to 90 days",
                },
              ].map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
                >
                  <span className="text-gray-900 font-medium">{data.item}</span>
                  <span className="text-gray-500">{data.retention}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              7. Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lease Decoder is intended for users 18 years and older. We do not
              knowingly collect information from anyone under 18. If you believe
              we have collected information from a minor, please contact us
              immediately.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you
              of significant changes through the app or by updating the "Last
              Updated" date. Continued use of the app after changes constitutes
              acceptance of the updated policy.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              9. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-900 text-white p-5 rounded-lg">
              <p className="mb-2">
                <span className="text-gray-400">Email:</span>{" "}
                <a
                  href="mailto:support@leasedecoder.com"
                  className="text-red-400 hover:text-red-300 transition"
                >
                  support@leasedecoder.com
                </a>
              </p>
              <p>
                <span className="text-gray-400">Website:</span>{" "}
                <a
                  href="https://leasedecoder.com"
                  className="text-red-400 hover:text-red-300 transition"
                >
                  https://leasedecoder.com
                </a>
              </p>
            </div>
          </div>

          {/* Agreement Banner */}
          <div className="bg-red-500 text-white p-5 rounded-lg text-center">
            <p className="text-lg font-medium">
              By using Lease Decoder, you agree to this Privacy Policy and our
              Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - matching main page */}
      <footer className="bg-black text-gray-400 py-6 overflow-hidden border-t border-gray-700">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center text-center">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#features"
                    className="hover:text-white transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="hover:text-white transition"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/faq" className="hover:text-white transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@leasedecoder.com"
                    className="hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width Lease Decoder text */}
        <div className="w-screen mt-6">
          <h2 className="text-[16vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter">
            Lease Decoder
          </h2>
          <div className="flex justify-center mt-8">
            <Image
              src="/HLogo2.png"
              alt="Lease Decoder Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="border-t border-gray-800 mt-4 pt-4 text-center text-sm">
            <p>&copy; 2026 Lease Decoder. All rights reserved.</p>
            <p className="mt-2 text-xs max-w-2xl mx-auto">
              Lease Decoder is an educational tool designed to help you
              understand your lease agreement. It does not constitute legal
              advice, and no attorney-client relationship is created by using
              this service. AI analysis may not identify all issues or reflect
              current laws in your jurisdiction. Always consult a licensed
              attorney before making legal decisions. Use of this app is subject
              to our{" "}
              <Link href="/terms" className="underline hover:text-white">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
