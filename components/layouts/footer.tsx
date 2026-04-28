"use client";

import { theme } from "@/theme";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function Footer() {
  const t = theme;

  return (
    <footer
      className="border-t border-white/10 mt-24"
      style={{
        paddingTop: t.layout.sectionPaddingY,
        paddingBottom: t.layout.sectionPaddingY,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: t.layout.maxWidth,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10">
          {/* BRAND */}
          <div>
            <h3
              style={{
                fontSize: t.typography.variants.h3.fontSize,
                fontWeight: t.typography.variants.h3.fontWeight,
                letterSpacing: t.typography.letterSpacing.normal,
              }}
            >
              {t.brand.name}
            </h3>

            <p
              style={{
                marginTop: t.spacing.sm,
                color: t.colors.text.secondary,
                fontSize: t.typography.variants.body.fontSize,
                lineHeight: t.typography.variants.body.lineHeight,
              }}
            >
              {t.brand.identity}
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4
              style={{
                fontSize: t.typography.fontSize.sm,
                fontWeight: t.typography.fontWeight.medium,
                marginBottom: t.spacing.md,
              }}
            >
              Company
            </h4>

            <ul className="text-zinc-400 flex flex-row gap-3 max-sm:flex-col">
              <Link
                href={"/#hero"}
                className="hover:text-white cursor-pointer transition"
              >
                About
              </Link>
              <Link
                href={"/#feature"}
                className="hover:text-white cursor-pointer transition"
              >
                Services
              </Link>
              <Link
                href={"/#cta"}
                className="hover:text-white cursor-pointer transition"
              >
                Contact
              </Link>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <Link
              href={"/#cta"}
              style={{
                fontSize: t.typography.fontSize.sm,
                fontWeight: t.typography.fontWeight.medium,
                marginBottom: t.spacing.md,
              }}
            >
              Contact
            </Link>

            <ul className="space-y-2 text-zinc-400">
              <li>contact@erasstack.com</li>
              <div className="flex item-center gap-x-3">
                <Link href="https://www.facebook.com/profile.php?id=61577486754312">
                  <FaFacebook />{" "}
                </Link>
                <Link href="https://www.instagram.com/erasstackofficial1?igsh=dHFqamIwNGVwOHFm">
                  <FaInstagram />
                </Link>
                <Link href="https://x.com/EStack16009">
                  <FaX />
                </Link>
                <Link href="https://www.tiktok.com/@erasstackofficial">
                  <FaTiktok />
                </Link>
              </div>
              {/* <li>+234 000 000 0000</li> */}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="border-t border-white/10 mt-12 pt-6 text-center text-zinc-500"
          style={{
            fontSize: t.typography.fontSize.sm,
          }}
        >
          © {new Date().getFullYear()} {t.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
