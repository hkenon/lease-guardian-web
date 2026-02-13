"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgdaalw";
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: { category: string; items: FAQItem[] }[] = [
  {
    category: "About Lease Decoder",
    items: [
      {
        question: "What is Lease Decoder?",
        answer:
          "Lease Decoder is an AI-powered mobile app that analyzes rental agreements and lease documents. It identifies hidden fees, unfair clauses, and potential red flags that could cost you money or limit your rights as a tenant.",
      },
      {
        question: "How does the AI analysis work?",
        answer:
          "When you upload a lease document, our AI reads through the entire agreement, identifying key terms, fees, penalties, and clauses. It then compares these against common tenant protection standards and flags anything that could be concerning or unusual.",
      },
      {
        question: "Is Lease Decoder a replacement for legal advice?",
        answer:
          "No. Lease Decoder is an educational tool designed to help you understand your lease better. It does not provide legal advice and should not replace consultation with a qualified attorney for important legal decisions.",
      },
    ],
  },
  {
    category: "Using the App",
    items: [
      {
        question: "What file formats can I upload?",
        answer:
          "Lease Decoder accepts PDF documents and images (JPG, PNG) of lease agreements. For best results, ensure the document is clear and readable.",
      },
      {
        question: "How long does an analysis take?",
        answer:
          "Most lease analyses are completed within 30-60 seconds, depending on the length and complexity of the document.",
      },
      {
        question: "Can I save and review past analyses?",
        answer:
          "Yes! All your analyses are saved locally on your device. You can access them anytime from the home screen and share or delete them as needed.",
      },
      {
        question: "Is there a limit to how many leases I can analyze?",
        answer:
          "The free version allows a limited number of analyses. Premium subscribers get unlimited lease analyses along with additional features.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    items: [
      {
        question: "What happens to my lease documents after analysis?",
        answer:
          "Your documents are processed securely and immediately deleted from our servers after analysis. We do not store, share, or sell your lease documents.",
      },
      {
        question: "Where is my analysis data stored?",
        answer:
          "Analysis results are stored locally on your device only. This means your data stays with you and is never uploaded to external servers for storage.",
      },
      {
        question: "Is my personal information safe?",
        answer:
          "Yes. We take privacy seriously. We collect minimal data necessary to provide the service, and we never sell your personal information. See our Privacy Policy for complete details.",
      },
    ],
  },
  {
    category: "Pricing & Subscription",
    items: [
      {
        question: "Is Lease Decoder free to use?",
        answer:
          "Lease Decoder offers a free tier with limited analyses. For unlimited access and premium features, we offer affordable subscription plans.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "You can cancel your subscription anytime through the App Store (iOS) or Google Play Store (Android). Your access continues until the end of the current billing period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Refunds are handled according to App Store and Google Play Store policies. If you have issues with your subscription, please contact our support team.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      {
        question:
          "My document isn't being analyzed correctly. What should I do?",
        answer:
          "Ensure your document is clear, well-lit (for photos), and in a supported format. If issues persist, try re-uploading or contact support with details about the problem.",
      },
      {
        question: "The app is running slowly. How can I fix this?",
        answer:
          "Try closing and reopening the app, or restart your device. If the issue continues, ensure you have the latest version installed from the app store.",
      },
      {
        question: "How do I contact support?",
        answer:
          "You can reach our support team at support@leasedecoder.com. We typically respond within 24-48 hours.",
      },
    ],
  },
];

function FAQAccordion({ item, id }: { item: FAQItem; id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          className="w-full py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-question-${id}`}
        >
          <span className="text-lg font-medium text-gray-900 pr-4">
            {item.question}
          </span>
          <ChevronDownIcon
            className={`w-5 h-5 text-gray-700 flex-shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header
        className={`mx-4 mt-4 rounded-md ${
          isMobileMenuOpen
            ? "bg-transparent"
            : "backdrop-blur-md bg-white/70"
        }`}
      >
        <nav className="px-6 md:px-12 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/TPLogo.png"
              alt="Lease Decoder Logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex flex-1 justify-evenly items-center">
            <Link
              href="/#features"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
            >
              Overview
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
            >
              Testimonials
            </Link>
            <Image
              src="/HLogoB.png"
              alt=""
              width={24}
              height={24}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#download"
              className="hidden md:inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Download
            </Link>
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-900"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
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
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!isMobileMenuOpen}
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
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section id="main-content" className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700">
            Everything you need to know about Lease Decoder
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="bg-white rounded-2xl">
                {category.items.map((item, itemIndex) => (
                  <FAQAccordion key={itemIndex} item={item} id={`${categoryIndex}-${itemIndex}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-700">
              Send us a message and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-gray-900"
                placeholder="What's this about?"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none text-gray-900"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-white hover:text-black border border-transparent hover:border-black transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {formStatus === "sending"
                ? "Sending..."
                : formStatus === "sent"
                  ? "Message Sent!"
                  : "Send Message"}
            </button>

            {formStatus === "sent" && (
              <p className="mt-4 text-center text-green-600">
                Thank you for your message! We&apos;ll get back to you soon.
              </p>
            )}

            {formStatus === "error" && (
              <p className="mt-4 text-center text-red-600">
                Something went wrong. Please try again or email us directly at{" "}
                <a href="mailto:support@leasedecoder.com" className="underline">
                  support@leasedecoder.com
                </a>
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-6 overflow-hidden border-t border-gray-700">
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
                  <Link
                    href="/faq"
                    className="hover:text-white transition font-semibold text-white"
                  >
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
