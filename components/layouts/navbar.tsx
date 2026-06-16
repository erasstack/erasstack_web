"use client";

import logo from "@/app/logo.png";
import { theme } from "@/theme";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const t = theme;

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) return;
    const id = href.split("#")[1];
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-white focus:text-[#0C1E3E] focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b shadow-sm"
            : "bg-white/95"
        }`}
        style={{ borderColor: t.colors.border.subtle }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" aria-label="Go to homepage" className="flex items-center gap-3">
              <Image
                src={logo}
                alt="ErasStack logo"
                className="object-contain brightness-0"
                width={34}
                height={34}
              />
              <span
                className="font-semibold text-base tracking-tight hidden sm:block"
                style={{ color: t.colors.text.primary }}
              >
                {t.brand.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: t.colors.text.secondary }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#0C1E3E] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  background: t.components.button.primary.bg,
                  color: t.components.button.primary.color,
                }}
              >
                Get in Touch
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 rounded"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                style={{ color: t.colors.text.primary }}
              >
                <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
                <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
                <span className="block w-5 h-0.5 bg-current transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white overflow-hidden"
              style={{ borderColor: t.colors.border.subtle }}
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium py-1 transition-colors hover:text-[#C8943A]"
                    style={{ color: t.colors.text.secondary }}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg text-sm font-medium mt-1"
                  style={{
                    background: t.components.button.primary.bg,
                    color: t.components.button.primary.color,
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
