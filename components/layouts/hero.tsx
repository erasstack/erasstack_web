"use client";

import { theme } from "@/theme";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const t = theme;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: t.colors.bg.primary,
        paddingTop: 120,
        paddingBottom: t.layout.sectionPaddingY,
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(12,30,62,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(12,30,62,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft radial accent */}
      <div
        className="absolute z-0"
        style={{
          top: "10%",
          right: "5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(200,148,58,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute z-0"
        style={{
          bottom: "5%",
          left: "0%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(12,30,62,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
            style={{
              background: t.colors.accent.light,
              color: t.colors.accent.primary,
              border: `1px solid rgba(200,148,58,0.25)`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: t.colors.accent.primary }}
            />
            CAC-Registered · Abuja, Nigeria
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5"
          style={{
            color: t.colors.text.primary,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {t.brand.heroHeadline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl mb-4 font-medium"
          style={{ color: t.colors.accent.primary }}
        >
          {t.brand.heroSubtext}
        </motion.p>

        {/* Body */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: t.colors.text.secondary }}
        >
          {t.brand.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#contact"
            className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              background: t.components.button.primary.bg,
              color: t.components.button.primary.color,
            }}
          >
            Contact Us
          </Link>

          <Link
            href="/#services"
            className="px-7 py-3.5 rounded-lg text-sm font-medium transition-colors hover:border-[#0C1E3E]"
            style={{
              border: `1.5px solid ${t.colors.border.strong}`,
              color: t.colors.text.primary,
            }}
          >
            Our Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8))",
        }}
      />
    </section>
  );
}
