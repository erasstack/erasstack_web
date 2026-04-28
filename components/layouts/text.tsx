import { theme } from "@/theme";
import { ReactNode } from "react";

type TextProps = {
  variant?: "title" | "h1" | "h2" | "h3" | "body" | "small";
  children: ReactNode;
};

export function Text({ variant = "body", children }: TextProps) {
  const styles = {
    title: theme.typography.variants.title,
    h1: theme.typography.variants.h1,
    h2: theme.typography.variants.h2,
    h3: theme.typography.variants.h3,
    body: theme.typography.variants.body,
    small: theme.typography.variants.small,
  };

  const style = styles[variant];

  return (
    <p
      style={{
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight || "normal",
        letterSpacing: theme.typography.letterSpacing.normal,
        color: theme.colors.text.primary,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}
