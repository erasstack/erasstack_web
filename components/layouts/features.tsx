"use client";

import { theme } from "@/theme";
import { motion } from "framer-motion";

const t = theme;

const services = [
  {
    title: "Software & Platform Development",
    description:
      "Design, development, and deployment of software applications, digital platforms, and technology infrastructure.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "IT Consultancy & Digital Transformation",
    description:
      "IT consultancy, systems automation, and enterprise technology support for businesses, organisations, and government institutions.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Next-Generation Products",
    description:
      "Research, design, and development of innovative technology products that improve lives and redefine what is possible.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Proprietary Technology & IP",
    description:
      "Development, commercialisation, licensing, and management of proprietary technologies, software products, and intellectual property.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section
      id="services"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
        background: t.colors.bg.primary,
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: t.layout.maxWidth }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: t.colors.accent.primary }}
          >
            What We Do
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ color: t.colors.text.primary, letterSpacing: "-0.02em" }}
          >
            What ERASSTACK LTD does
          </h2>
          <p className="text-base leading-relaxed" style={{ color: t.colors.text.secondary }}>
            Our mandate spans software development, digital transformation, next-generation
            product engineering, and the commercialisation of proprietary technology.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group rounded-xl p-7 transition-shadow"
              style={{
                background: t.colors.bg.primary,
                border: t.components.card.border,
                boxShadow: t.shadow.sm,
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: t.colors.accent.light,
                  color: t.colors.accent.primary,
                }}
              >
                {service.icon}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: t.colors.text.primary }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: t.colors.text.secondary }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
