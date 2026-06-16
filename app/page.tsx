import { AboutSection } from "@/components/layouts/about";
import { CTASection } from "@/components/layouts/cta";
import { FeaturesSection } from "@/components/layouts/features";
import { Footer } from "@/components/layouts/footer";
import { Hero } from "@/components/layouts/hero";
import { ProcessSection } from "@/components/layouts/howwebuild";
import { Navbar } from "@/components/layouts/navbar";
import { TrustSection } from "@/components/layouts/trust";
import { theme } from "@/theme";
import type { Metadata } from "next";

const t = theme;

export const metadata: Metadata = {
  metadataBase: new URL(t.brand.site),

  title: {
    default: t.brand.name,
    template: `%s | ${t.brand.name}`,
  },

  description: t.brand.subtext,

  keywords: [
    "software development Nigeria",
    "backend systems",
    "mobile applications",
    "API infrastructure",
    "enterprise software",
    "CAC registered software company",
    "ErasStack",
    "Abuja technology company",
  ],

  authors: [{ name: "ErasStack" }],
  creator: "ErasStack",

  openGraph: {
    title: t.brand.name,
    description: t.brand.subtext,
    url: t.brand.site,
    siteName: t.brand.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${t.brand.name}: ${t.brand.heroHeadline}`,
      },
    ],
    type: "website",
    locale: "en_NG",
  },

  twitter: {
    card: "summary_large_image",
    title: t.brand.name,
    description: t.brand.subtext,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main style={{ fontFamily: t.typography.fontFamily.primary }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ProcessSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
}
