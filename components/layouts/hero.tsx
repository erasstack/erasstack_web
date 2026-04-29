"use client";

import { theme } from "@/theme";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: theme.motion.duration.normal,
      ease: theme.motion.easing.standard,
    },
  },
};
const t = theme;
export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden"
      id="hero"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,

        background: theme.colors.bg.primary,
        borderBottomWidth: 10,
        borderColor: theme.colors.bg.primary,
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute w-125 h-125 blur-[120px] top-[20%] left-1/2 -translate-x-1/2 z-0"
        style={{ background: theme.colors.accent.glow }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >
        {/* Brand */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 uppercase"
          style={{ color: theme.colors.text.primary }}
        >
          {theme.brand.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl mb-4 tracking-wide"
          style={{ color: theme.colors.text.secondary }}
        >
          {theme.brand.slogan}
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 leading-relaxed"
          style={{ color: theme.colors.text.primary }}
        >
          {theme.brand.heroHeadline}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10"
          style={{ color: theme.colors.text.secondary }}
        >
          {theme.brand.subtext}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/#feature"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-md text-sm font-medium transition"
            style={{
              background: theme.components.button.primary.bg,
              color: "#fff",
            }}
          >
            Explore
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=61577486754312"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-md text-sm font-medium transition border"
            style={{
              border: theme.colors.border.subtle,
              color: theme.colors.text.primary,
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
