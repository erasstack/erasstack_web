import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ErasStack | Innovate Build Grow",
  description:
    "ErasStack delivers enterprise-grade software engineering and digital transformation solutions for businesses, NGOs, and government institutions.",
  keywords: [
    "enterprise software",
    "digital transformation",
    "government systems",
    "NGO solutions",
    "software engineering",
    "system modernization",
    "AI solutions",
  ],
  authors: [{ name: "ErasStack" }],
  metadataBase: new URL("https://erasstack.com"),

  openGraph: {
    title: "ErasStack | Enterprise Software Engineering",
    description:
      "Enterprise-grade software engineering and digital transformation solutions for businesses, NGOs, and government institutions.",
    url: "https://erasstack.com",
    siteName: "ErasStack",
    images: [
      {
        url: "@/assets/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@ErasStack",
    images: ["@/assets/logo.png"],
  },

  alternates: {
    canonical: "https://erasstack.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
