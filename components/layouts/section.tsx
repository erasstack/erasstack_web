import { theme } from "@/theme";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  bg?: string;
};

export function Section({ children, id, bg }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={theme.motion.variants.fadeUp.hidden}
      whileInView={theme.motion.variants.fadeUp.show}
      transition={{ duration: theme.motion.duration.normal }}
      viewport={{ once: true, amount: 0.2 }}
      style={{
        paddingTop: theme.layout.sectionPaddingY,
        paddingBottom: theme.layout.sectionPaddingY,
        background: bg ?? theme.colors.bg.primary,
      }}
    >
      <div
        style={{
          maxWidth: theme.layout.maxWidth,
          margin: "0 auto",
          padding: `0 ${theme.layout.sectionPaddingX}px`,
        }}
      >
        {children}
      </div>
    </motion.section>
  );
}
