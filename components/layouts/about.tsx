"use client";

import { theme } from "@/theme";
import { motion } from "framer-motion";

const t = theme;

const facts = [
  { label: "Legal Name", value: "ERASSTACK LTD" },
  { label: "Registration", value: "CAC-Certified" },
  { label: "Industry", value: "Technology & Innovation" },
  { label: "Location", value: "Abuja, Nigeria" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
        background: t.colors.bg.secondary,
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: t.layout.maxWidth }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: t.colors.accent.primary }}
            >
              About ErasStack
            </span>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{
                color: t.colors.text.primary,
                letterSpacing: "-0.02em",
              }}
            >
              A registered technology company engineering transformative solutions
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: t.colors.text.secondary }}
            >
              ERASSTACK LTD is a technology company incorporated and registered in
              Nigeria under the Corporate Affairs Commission (CAC). Our mandate is to
              engineer transformative solutions — from digital platforms to next-generation
              products that improve lives, empower businesses, and redefine technology.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: t.colors.text.secondary }}
            >
              We design, develop, and deploy software applications, digital platforms,
              and technology infrastructure. We also provide IT consultancy, digital
              transformation services, and enterprise technology support to individuals,
              corporate bodies, and government institutions.
            </p>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                background: t.colors.accent.light,
                color: t.colors.accent.primary,
                border: `1px solid rgba(200,148,58,0.2)`,
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Legally registered business entity
            </div>
          </motion.div>

          {/* Right: facts grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl p-6"
                style={{
                  background: t.colors.bg.primary,
                  border: t.components.card.border,
                  boxShadow: t.shadow.sm,
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: t.colors.text.muted }}
                >
                  {fact.label}
                </p>
                <p
                  className="text-base font-semibold"
                  style={{ color: t.colors.text.primary }}
                >
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
