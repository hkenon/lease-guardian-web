"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TermsOfService() {
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
    <div className="min-h-screen bg-white">
      {/* Sticky Logo - always visible */}
      <Link
        href="/"
        className="fixed top-5 left-6 md:left-10 z-[60]"
      >
        <Image
          src="/TPLogo.png"
          alt="Lease Decoder Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* Header */}
      <header
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full ${
          isMobileMenuOpen
            ? "bg-transparent backdrop-blur-none"
            : "backdrop-blur-md bg-white/80"
        } ${
          isScrolled
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <nav className="px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="w-[55px]">
            {/* Spacer for logo */}
          </div>
          <div className="hidden md:flex space-x-8 flex-1 justify-center">
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
                className="block text-gray-600 hover:text-gray-900 transition-colors mb-3"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors font-semibold"
              >
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">Last Updated: January 31, 2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Please read these Terms of Service ("Terms") carefully before using
            Lease Decoder. By accessing or using the app, you agree to be bound
            by these Terms.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By downloading, installing, or using Lease Decoder, you agree to
              these Terms and our Privacy Policy. If you do not agree, do not
              use the app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lease Decoder is an AI-powered lease analysis tool that helps
              users understand rental agreements. The service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Analyzes lease documents for potential red flags</li>
              <li>Identifies penalties, fees, and concerning clauses</li>
              <li>Provides educational information about tenant rights</li>
              <li>Stores analysis results locally on your device</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3. Important Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
              <p className="text-gray-900 font-semibold mb-2">
                NOT LEGAL ADVICE
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lease Decoder is an educational tool only. It does NOT provide
                legal advice, create an attorney-client relationship, or
                substitute for consultation with a qualified attorney.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>AI analysis may contain errors or omissions</li>
              <li>State and local laws vary significantly</li>
              <li>Always consult a licensed attorney for legal advice</li>
              <li>
                Do not rely solely on this app for important legal decisions
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the app only for lawful purposes</li>
              <li>Be at least 18 years old</li>
              <li>Verify all information with appropriate professionals</li>
              <li>
                Not upload documents containing others' private information
                without consent
              </li>
              <li>Not attempt to reverse engineer or exploit the service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lease Decoder, including all content, features, and
              functionality, is owned by us and protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of documents you upload. By using the
              service, you grant us a temporary license to process your
              documents for analysis purposes only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We provide the app "AS IS" without warranties of any kind</li>
              <li>
                We are not liable for any damages arising from use of the app
              </li>
              <li>
                We do not guarantee accuracy, completeness, or reliability of
                analysis results
              </li>
              <li>
                We are not responsible for decisions made based on app results
              </li>
              <li>
                Our total liability shall not exceed the amount you paid for the
                app (if any)
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              7. Subscription & Payments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you purchase a subscription or premium features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Payments are processed through the App Store or Google Play
              </li>
              <li>
                Subscriptions auto-renew unless cancelled 24 hours before
                renewal
              </li>
              <li>Refunds are subject to App Store/Google Play policies</li>
              <li>We may change pricing with 30 days notice</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              8. Privacy & Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the app is also governed by our Privacy Policy. Key
              points:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Uploaded documents are processed and immediately deleted</li>
              <li>Analysis results are stored locally on your device</li>
              <li>We do not sell your personal information</li>
              <li>
                See our{" "}
                <Link
                  href="/privacy"
                  className="text-red-500 hover:text-red-600"
                >
                  Privacy Policy
                </Link>{" "}
                for complete details
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              9. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend access to the app at
              any time, without notice, for conduct that violates these Terms or
              is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify these Terms at any time. We will notify you of
              material changes through the app or by updating the "Last Updated"
              date. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the United States and the
              state where our company is registered, without regard to conflict
              of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about these Terms? Contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@leasedecoder.com"
                  className="text-red-500 hover:text-red-600"
                >
                  support@leasedecoder.com
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Website:</strong>{" "}
                <a
                  href="https://leasedecoder.com"
                  className="text-red-500 hover:text-red-600"
                >
                  https://leasedecoder.com
                </a>
              </p>
            </div>
          </section>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <p className="text-gray-700">
              <strong>
                By using Lease Decoder, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </strong>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 overflow-hidden border-t border-gray-700">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center text-center">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#features" className="hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-white transition">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="hover:text-white transition">
                    Download
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
              width={30}
              height={30}
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
    </div>
  );
}
