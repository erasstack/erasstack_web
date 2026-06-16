"use client";

import { theme } from "@/theme";
import { motion } from "framer-motion";
import { useState } from "react";

const t = theme;

export function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${t.brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: `1.5px solid ${t.colors.border.strong}`,
    fontSize: 14,
    color: t.colors.text.primary,
    background: t.colors.bg.primary,
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 6,
    color: t.colors.text.primary,
  };

  return (
    <section
      id="contact"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
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
              Contact Us
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ color: t.colors.text.primary, letterSpacing: "-0.02em" }}
            >
              Get in touch with our team
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: t.colors.text.secondary }}
            >
              We welcome enquiries from businesses and organisations interested
              in working with us. Reach out and we will respond within one
              business day.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: t.brand.email,
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: t.brand.phone,
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: t.brand.location,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: t.colors.accent.light,
                      color: t.colors.accent.primary,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: t.colors.text.muted }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: t.colors.text.primary }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{
              background: t.colors.bg.primary,
              border: t.components.card.border,
              boxShadow: t.shadow.md,
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: t.colors.accent.light, color: t.colors.accent.primary }}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: t.colors.text.primary }}>
                  Message sent
                </h3>
                <p className="text-sm" style={{ color: t.colors.text.secondary }}>
                  Your email client should have opened. We&apos;ll respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your project or enquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: t.components.button.primary.bg,
                    color: t.components.button.primary.color,
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
