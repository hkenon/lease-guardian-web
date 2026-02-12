"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const appScreenshots = [
    {
      src: "/IMG_3270.PNG",
      alt: "App Screenshot - Upload",
      label: "Home.",
    },
    {
      src: "/IMG_3272.PNG",
      alt: "App Screenshot - Analysis",
      label: "Upload.",
    },
    {
      src: "/IMG_3273.PNG",
      alt: "App Screenshot - Report",
      label: "Analyze.",
    },
    {
      src: "/IMG_3274.PNG",
      alt: "App Screenshot - Findings",
      label: "Review/Save.",
    },
    {
      src: "/IMG_3279.PNG",
      alt: "App Screenshot - Summary",
      label: "Share/Delete",
    },
  ];

  const bannerImages = [
    {
      src: "/pexels-kindelmedia-7578992.jpg",
      alt: "Person reviewing rental documents",
      color: "#ef4444",
    },
    {
      src: "/pexels-loquellano-9844321.jpg",
      alt: "Apartment building exterior",
      color: "#3b82f6",
    },
    {
      src: "/pexels-energepic-com-27411-175045.jpg",
      alt: "Person signing paperwork",
      color: "#22c55e",
    },
    {
      src: "/chris-liverani-9cd8qOgeNIY-unsplash.jpg",
      alt: "Financial charts and data analysis",
      color: "#f59e0b",
    },
    {
      src: "/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
      alt: "Modern apartment interior",
      color: "#8b5cf6",
    },
  ];

  const features = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8" />,
      title: "Red Flag Detection",
      description:
        "AI scans for concerning clauses, hidden fees, and unfair terms that could cost you thousands.",
      video: "/videos/18554491-uhd_2160_3840_24fps.mp4",
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Risk Assessment",
      description:
        "Get a clear risk rating (Low/Medium/High) and understand exactly what you're getting into.",
      video: "/videos/14717159_2160_3840_25fps.mp4",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Know Your Rights",
      description:
        "Learn your tenant rights specific to your state and situation.",
      video: "/videos/6101152-uhd_2160_4096_30fps.mp4",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "Expert Resources",
      description:
        "Access glossaries, checklists, and educational content from tenant rights experts.",
      video: "/videos/13758044_1080_1920_25fps.mp4",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
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
          isMobileMenuOpen ? "bg-transparent" : "backdrop-blur-md bg-white/70"
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
              priority
            />
          </Link>
          <div className="hidden md:flex flex-1 justify-evenly items-center">
            <a
              href="#features"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
            >
              Overview
            </a>
            <a
              href="#testimonials"
              className="text-gray-900 hover:text-gray-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
            >
              Testimonials
            </a>
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
            <a
              href="#download"
              className="hidden md:inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Download
            </a>
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
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Overview
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              Download
            </a>
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
      <section
        id="main-content"
        className="relative h-[100svh] flex flex-col bg-white overflow-hidden"
      >
        <div className="flex-1 flex flex-col justify-center min-h-0 py-4 md:py-0">
          {/* Quote */}
          <div className="text-center mb-3 md:mb-8 px-6 flex-shrink-0">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 md:mb-3">
              {'"'}Understand your lease before it costs you.{'"'}
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Upload your lease and get instant, plain-English explanations of
              the fine print.
            </p>
          </div>

          {/* Moving Banner - Full viewport width */}
          <div className="relative w-screen overflow-hidden mb-3 md:mb-6 flex-shrink-0">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex animate-scroll will-change-transform">
              {/* Double the images for seamless loop */}
              {[...bannerImages, ...bannerImages].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[40vw] h-[25vh] md:w-[25vw] md:h-[40vh] mx-2 rounded-2xl overflow-hidden relative"
                  style={{ backgroundColor: item.color }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority={index < 5}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Subtext */}
          <div className="text-center px-6 flex-shrink-0">
            <p className="text-base md:text-2xl text-gray-700 max-w-3xl mx-auto">
              AI-powered lease analysis that protects you from hidden traps,
              unfair terms, and costly surprises. Know what you{"'"}re signing
              before it{"'"}s too late.
            </p>
          </div>
        </div>

      </section>

      {/* Features Section - Full Width Grid */}
      <section id="features" className="bg-white">
        <div className="container mx-auto px-6 max-w-full text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your AI-Powered Lease Protector
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to understand your lease
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-md border border-gray-200 transition-all duration-300 flex flex-col"
            >
              {/* White frame padding around video */}
              <div className="p-3">
                <div className="h-130 relative overflow-hidden rounded-sm border-black border-gray-300">
                  <video
                    src={feature.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "75% 10%" }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-6 pb-6 pt-2 bg-white flex-1 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-black/90 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3 Simple Steps to Protection
            </h2>
            <p className="text-xl text-gray-700">
              Upload, analyze, and understand in under 60 seconds
            </p>
          </div>
        </div>

        {/* Full-width steps on desktop */}
        <div className="w-full">
          {/* Top border */}
          <div className="border-t border-gray-300" />

          {/* Step 1 */}
          <div className="group relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 border-b border-gray-300 hover:bg-gray-900 transition-all duration-300 cursor-default gap-4">
            <span className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors flex-shrink-0">
              1.
            </span>
            <span className="flex-1 text-center hidden md:block">
              <span className="text-sm text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Take a photo or upload a PDF of your lease agreement
              </span>
            </span>
            <span className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors flex-shrink-0">
              UPLOAD.
            </span>
          </div>

          {/* Step 2 */}
          <div className="group relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 border-b border-gray-300 hover:bg-gray-900 transition-all duration-300 cursor-default gap-4">
            <span className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors flex-shrink-0">
              2.
            </span>
            <span className="flex-1 text-center hidden md:block">
              <span className="text-sm text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Our AI reads every word and identifies red flags
              </span>
            </span>
            <span className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors flex-shrink-0">
              ANALYZE.
            </span>
          </div>

          {/* Step 3 */}
          <div className="group relative flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 border-b border-gray-300 hover:bg-gray-900 transition-all duration-300 cursor-default gap-4">
            <span className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors flex-shrink-0">
              3.
            </span>
            <span className="flex-1 text-center hidden md:block">
              <span className="text-sm text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Get a detailed breakdown with actionable recommendations
              </span>
            </span>
            <span className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors flex-shrink-0">
              PROTECT.
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 bg-white"
        style={{ overflow: "visible" }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built to Protect Renters
            </h2>
            <p className="text-xl text-gray-700">
              From confusion to clarity — shared by real users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="Lease Decoder found a clause that would've cost me $2,500 if I broke my lease early. Worth every penny!"
              author="Sarah M."
              location="San Francisco, CA"
            />
            <Testimonial
              quote="I had no idea my landlord could raise rent 8% annually. Now I'm negotiating before signing."
              author="Marcus J."
              location="Austin, TX"
            />
            <Testimonial
              quote="The plain English explanations made everything so clear. No more confusing legal jargon!"
              author="Emily R."
              location="Brooklyn, NY"
            />
          </div>
        </div>

        {/* Full-width 5 Stars */}
        <div className="w-screen mt-16" role="img" aria-label="5 star rating">
          <div className="flex justify-center -space-x-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="relative w-[20vw] h-[15vw] animate-twinkle"
                style={{ animationDelay: `${i * 0.3}s` }}
                aria-hidden="true"
              >
                <Image
                  src="/star.png"
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview - Carousel */}
      <section id="preview" className="py-20 bg-white">
        {/* Header */}
        <div className="container mx-auto px-6 max-w-7xl text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A sneak peek at how Lease Decoder protects you from unfair lease
            terms and hidden fees.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto px-16">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCurrentPreviewIndex((prev) =>
                prev === 0 ? appScreenshots.length - 1 : prev - 1,
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            aria-label="Previous screenshot"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setCurrentPreviewIndex((prev) =>
                prev === appScreenshots.length - 1 ? 0 : prev + 1,
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            aria-label="Next screenshot"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Screenshot Display - Circular Card Stack */}
          <div className="flex flex-col items-center">
            {/* Label */}
            <p className="text-gray-900 font-medium text-lg mb-4">
              {appScreenshots[currentPreviewIndex].label}
            </p>
            {/* Circular Card Stack */}
            <div className="relative h-[70vh] w-full flex justify-center">
              {appScreenshots.map((screenshot, index) => {
                // Calculate circular offset (wraps around)
                const totalItems = appScreenshots.length;
                let offset = index - currentPreviewIndex;

                // Wrap around for circular effect
                if (offset > totalItems / 2) offset -= totalItems;
                if (offset < -totalItems / 2) offset += totalItems;

                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                // Straight stack - no rotation
                const xOffset = offset * 60;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      transform: `translateX(${xOffset}px) scale(${1 - Math.abs(offset) * 0.08})`,
                      zIndex: 10 - Math.abs(offset),
                      opacity: 1 - Math.abs(offset) * 0.3,
                      filter: offset !== 0 ? "brightness(0.9)" : "none",
                    }}
                    onClick={() => setCurrentPreviewIndex(index)}
                  >
                    <div className="relative h-[70vh] aspect-[9/19] rounded-3xl overflow-hidden border border-black shadow-xl">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-contain bg-white"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-900 transition-all duration-300 ease-out"
                style={{
                  width: `${((currentPreviewIndex + 1) / appScreenshots.length) * 100}%`,
                }}
              />
            </div>
            <p className="text-center text-sm text-gray-700 mt-2">
              {currentPreviewIndex + 1} / {appScreenshots.length}
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section
        id="download"
        className="bg-white py-16 border-t border-gray-200"
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Protect Yourself?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Don{"'"}t sign a lease without AI checking it first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
            <a
              href="https://play.google.com"
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </a>
          </div>
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
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#preview" className="hover:text-white transition">
                    How It Works
                  </a>
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

function Testimonial({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <article className="bg-white p-8 rounded-2xl">
      <div className="text-red-500 text-4xl mb-4" aria-hidden="true">
        {'"'}
      </div>
      <blockquote className="text-gray-700 mb-6">{quote}</blockquote>
      <footer>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-700">{location}</p>
      </footer>
    </article>
  );
}
