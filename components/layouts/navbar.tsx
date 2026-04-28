"use client";

import logo from "@/app/logo.png";
import { theme } from "@/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const navLinks = [
  { name: "Build wit us", href: "/#build" },
  { name: "Solutions", href: "/#feature" },
  { name: "About", href: "/#hero" },
  { name: "Contact", href: "/#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Skip to content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <motion.header
        role="banner"
        aria-label="Main navigation bar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 py-4 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="text-white max-sm:flex-col max-sm:flex  max-sm:w-full max-sm:items-center font-bold tracking-tight text-lg focus:outline-none focus:ring-2 focus:ring-white/50 rounded flex flex-row items-center gap-x-3"
            >
              <Image
                src={logo}
                alt="Eras Stack logo"
                className="object-contain object-center brightness-0 invert"
                width={36}
                height={36}
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              role="navigation"
              aria-label="Primary"
              className="hidden sm:flex items-center gap-8 text-sm text-gray-300"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-1 py-0.5 transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {link.name}

                    {/* Premium animated underline */}
                    <motion.span
                      layoutId={isActive ? "underline" : undefined}
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-linear-to-r from-white/0 via-white to-white/0 opacity-0 group-hover:opacity-100"
                    />

                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 -z-10 rounded-md bg-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA (hidden on small screens) */}
            <Link
              href={`mailto:${theme.brand.email}`}
              className="hidden md:block"
            >
              <motion.button
                aria-label="Get started"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-white text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span className="relative z-10">Get Started</span>

                {/* Premium hover glow */}
                <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-linear-to-r from-white/20 via-transparent to-white/20" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.header>
    </>
  );
}
