"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Logo Header */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-block">
            <Image
              src="/TPLogo.png"
              alt="Lease Decoder - Back to Home"
              width={45}
              height={45}
              className="object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-white">
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

      {/* Footer */}
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
