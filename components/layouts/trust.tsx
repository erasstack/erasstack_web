"use client";

import { theme } from "@/theme";
import { motion } from "framer-motion";

const t = theme;

const trustItems = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Registered Business Entity",
    description:
      "ErasStack is legally registered under the Corporate Affairs Commission (CAC) of Nigeria.",
    detail: t.brand.registration,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Business Contact",
    description: "Our official business email address for all enquiries and correspondence.",
    detail: t.brand.email,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    description: "Direct business line for client enquiries during working hours.",
    detail: t.brand.phone,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Business Location",
    description: "Our registered business address in the Federal Capital Territory.",
    detail: t.brand.location,
  },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
        background: t.colors.bg.navy,
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
            Verification & Registration
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ color: t.colors.text.inverse, letterSpacing: "-0.02em" }}
          >
            ERASSTACK LTD: A Legitimate, Registered Company
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            ERASSTACK LTD is a formally incorporated technology company operating
            under Nigerian commercial law. Our registration and business details
            are publicly verifiable through the Corporate Affairs Commission (CAC).
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "rgba(217,119,6,0.15)",
                  color: t.colors.accent.primary,
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: t.colors.text.inverse }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {item.description}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: t.colors.accent.secondary }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
