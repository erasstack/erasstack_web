import { theme } from "@/theme";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        background: theme.colors.bg.primary,
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily.primary,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: theme.layout.maxWidth,
          margin: "0 auto",
          padding: `0 ${theme.layout.sectionPaddingX}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
