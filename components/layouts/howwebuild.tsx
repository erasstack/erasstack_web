"use client";

import { steps } from "@/data";
import { theme } from "@/theme";
import { motion } from "framer-motion";

const t = theme;

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
        background: `linear-gradient(160deg, #F5F7FA 0%, #EAEef5 100%)`,
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
            Our Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ color: t.colors.text.primary, letterSpacing: "-0.02em" }}
          >
            How we work
          </h2>
          <p className="text-base leading-relaxed" style={{ color: t.colors.text.secondary }}>
            A structured approach to designing, building, and delivering software
            systems.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-7"
              style={{
                background: t.colors.bg.primary,
                border: t.components.card.border,
                boxShadow: t.shadow.sm,
              }}
            >
              <div
                className="text-xs font-bold mb-4 inline-block px-2.5 py-1 rounded-md"
                style={{
                  background: t.colors.accent.light,
                  color: t.colors.accent.primary,
                }}
              >
                0{index + 1}
              </div>

              <h3
                className="text-base font-semibold mb-2"
                style={{ color: t.colors.text.primary }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: t.colors.text.secondary }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
