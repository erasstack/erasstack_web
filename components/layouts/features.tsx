"use client";

import { theme } from "@/theme";
import { motion } from "framer-motion";
import { ImageCard } from "./image-card";

const features = [
  {
    title: "AI Systems",
    description:
      "We design intelligent AI-driven platforms that automate complex workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Systems engineered to handle production-scale traffic and data.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Platforms",
    description: "Modern, fast, and responsive platforms built for real users.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automation Engines",
    description: "Replace manual work with intelligent automated systems.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Custom systems for businesses and institutional environments.",
    image:
      "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Product Engineering",
    description: "End-to-end development from idea to production deployment.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
];
const t = theme;

export function FeaturesSection() {
  return (
    <section
      id="feature"
      className="py-10"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
      }}
    >
      {/* HEADER (soft reveal, no staging feel) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          What We Build
        </h2>

        <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed ">
          Intelligent systems, scalable platforms, and modern digital products
          designed for the next era of technology.
        </p>
      </motion.div>

      {/* GRID (smooth, no stagger) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -6,
              scale: 1.01,
            }}
            className="transition-transform flex grow"
          >
            <div className="group relative h-full">
              {/* glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-500/10 rounded-xl" />

              <div className="relativeh-full ">
                <ImageCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
