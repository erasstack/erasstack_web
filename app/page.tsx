import { CTASection } from "@/components/layouts/cta";
import { FeaturesSection } from "@/components/layouts/features";
import { Footer } from "@/components/layouts/footer";
import { Hero } from "@/components/layouts/hero";
import { ProcessSection } from "@/components/layouts/howwebuild";
import { Navbar } from "@/components/layouts/navbar";
import { theme } from "@/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(theme.brand.site),

  title: {
    default: theme.brand.name,
    template: `%s | ${theme.brand.name}`,
  },

  description: theme.brand.subtext,

  keywords: [
    "AI systems",
    "software development",
    "scalable platforms",
    "automation",
    "web development",
    "ErasStack",
  ],

  authors: [{ name: "ErasStack Team" }],

  creator: "ErasStack",

  openGraph: {
    title: theme.brand.name,
    description: theme.brand.subtext,
    url: theme.brand.site,
    siteName: theme.brand.name,
    images: [
      {
        url: "/og-image.png", // put in /public
        width: 1200,
        height: 630,
        alt: theme.brand.name,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: theme.brand.name,
    description: theme.brand.subtext,
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Page() {
  const t = theme;

  return (
    <main
      className="relative overflow-hidden"
      style={{
        background: t.colors.bg.primary,
        color: t.colors.text.primary,
        fontFamily: t.typography.fontFamily.primary,
      }}
    >
      {/* GLOBAL BACKGROUND SYSTEM (smooth + blended) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${t.colors.accent.glow}, transparent 40%),
                         radial-gradient(circle at 70% 60%, ${t.colors.bg.secondary}20, transparent 50%)`,
          }}
        />

        {/* Soft noise / depth layer */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="sm:px-10 px-3 ">
          <FeaturesSection />

          <ProcessSection />
        </div>
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
