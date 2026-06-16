"use client";

import { theme } from "@/theme";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const t = theme;

export function Footer() {
  return (
    <footer style={{ background: t.colors.bg.navyDark }}>
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 py-16"
        style={{ maxWidth: t.layout.maxWidth }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-base font-semibold mb-3"
              style={{ color: t.colors.text.inverse }}
            >
              {t.brand.name}
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {t.brand.identity}
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {t.brand.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Process", href: "/#process" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Legal
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t.brand.email}
            </p>

            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61577486754312",
                  icon: <FaFacebook size={16} />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/erasstackofficial1?igsh=dHFqamIwNGVwOHFm",
                  icon: <FaInstagram size={16} />,
                  label: "Instagram",
                },
                {
                  href: "https://x.com/EStack16009",
                  icon: <FaXTwitter size={16} />,
                  label: "X",
                },
                {
                  href: "https://www.tiktok.com/@erasstackofficial",
                  icon: <FaTiktok size={16} />,
                  label: "TikTok",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <span>© {new Date().getFullYear()} {t.brand.name}. All rights reserved.</span>
          <span>{t.brand.registration}</span>
        </div>
      </div>
    </footer>
  );
}
