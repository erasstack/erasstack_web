import { theme } from "@/theme";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div
      style={{
        background: theme.components.card.bg,
        border: theme.components.card.border,
        borderRadius: theme.components.card.radius,
        padding: theme.components.card.padding,
        transition: "all 0.3s ease",
      }}
      className="card"
    >
      {children}

      <style>{`
        .card:hover {
          transform: translateY(-4px);
          box-shadow: ${theme.shadow.lg};
          border-color: ${theme.colors.accent.glow};
        }
      `}</style>
    </div>
  );
}
