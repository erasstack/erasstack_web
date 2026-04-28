"use client";

import { steps } from "@/data";
import { theme } from "@/theme";
import { motion } from "framer-motion";
const t = theme;

export function ProcessSection() {
  return (
    <section
      id="build"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
      }}
    >
      {/* HEADER */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          How We Build
        </h2>
        <p className="mt-3 text-zinc-400">
          A structured approach to designing, building, and scaling intelligent
          systems.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover="hover"
            className="group relative bg-(--bg-elevated) border border-white/10 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* subtle glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500/5 blur-xl" />

            <div className="relative">
              <motion.div
                initial={false}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-sm text-blue-500 mb-2 font-medium"
              >
                0{index + 1}
              </motion.div>

              <motion.h3
                initial={{ y: 0, opacity: 1 }}
                variants={{
                  hover: {
                    y: -2,
                    color: "#ffffff",
                    transition: { duration: 0.25 },
                  },
                }}
                className="text-lg font-medium text-white mb-2"
              >
                {step.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0.7 }}
                variants={{
                  hover: {
                    opacity: 1,
                    y: -1,
                    transition: { duration: 0.25 },
                  },
                }}
                className="text-sm text-zinc-400 leading-relaxed"
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
