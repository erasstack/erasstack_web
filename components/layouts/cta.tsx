"use client";

import { theme } from "@/theme";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  const t = theme;

  return (
    <section
      id="cta"
      className="py-10"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView="show"
        variants={t.motion.variants.fadeUp}
        transition={{ duration: t.motion.duration.normal }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          border: t.colors.border.subtle,
          background: t.colors.bg.elevated,
          textAlign: "center",
          overflow: "hidden",
          padding: t.spacing.lg,
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 400,
              height: 400,
              background: t.colors.accent.glow,
              filter: "blur(120px)",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            margin: "0 auto",
          }}
          className="w-full"
        >
          <h2
            style={{
              fontSize: t.typography.variants.h2.fontSize,
              fontWeight: t.typography.variants.h2.fontWeight,
              lineHeight: t.typography.variants.h2.lineHeight,
              letterSpacing: t.typography.letterSpacing.normal,
              marginBottom: t.spacing.md,
            }}
            className="w-full text-center"
          >
            Let’s Build the Future Together
          </h2>

          <p
            style={{
              fontSize: t.typography.variants.body.fontSize,
              color: t.colors.text.secondary,
              lineHeight: t.typography.variants.body.lineHeight,
              marginBottom: t.spacing.lg,
            }}
          >
            {t.brand.subtext}
          </p>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: t.spacing.md,
            }}
            className="w-full"
          >
            {/* Primary */}
            <Link
              href={`mailto:${theme.brand.email}`}
              style={{
                background: t.components.button.primary.bg,
                color: t.components.button.primary.color,
                padding: `${t.components.button.primary.paddingY}px ${t.components.button.primary.paddingX}px`,
                borderRadius: t.components.button.primary.radius,
                border: "none",
                cursor: "pointer",
              }}
            >
              Start a Project
            </Link>

            {/* Secondary */}
            <Link
              href={`mailto:${theme.brand.email}`}
              style={{
                background: t.components.button.secondary.bg,
                color: t.components.button.secondary.color,
                padding: `${t.components.button.secondary.paddingY}px ${t.components.button.secondary.paddingX}px`,
                borderRadius: t.components.button.secondary.radius,
                border: t.components.button.secondary.border,
                cursor: "pointer",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
