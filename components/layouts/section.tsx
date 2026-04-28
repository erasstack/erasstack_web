import { theme } from "@/theme";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
};

export function Section({ children, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={theme.motion.variants.fadeUp.hidden}
      whileInView={theme.motion.variants.fadeUp.show}
      transition={{ duration: theme.motion.duration.normal }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        padding: `${theme.layout.sectionPaddingY} 0`,
        display: "flex",
        flexDirection: "column",
        gap: theme.layout.gap,
      }}
    >
      {children}
    </motion.section>
  );
}
