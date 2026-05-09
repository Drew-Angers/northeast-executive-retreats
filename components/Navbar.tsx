"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Destinations", href: "/packages" },
  { label: "The Experience", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-serif text-lg font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-navy" : "text-cream"
            }`}
          >
            Northeast Executive
          </span>
          <span
            className={`font-serif text-lg font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-gold" : "text-gold"
            }`}
          >
            Retreats
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-navy" : "text-cream/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/retreat-builder"
            className={`text-xs tracking-widest uppercase font-sans font-medium px-6 py-2.5 border transition-all duration-300 ${
              scrolled
                ? "border-navy text-navy hover:bg-navy hover:text-cream"
                : "border-cream text-cream hover:bg-cream hover:text-navy"
            }`}
          >
            Build Your Retreat
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-cream"
            } ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-cream"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-cream"
            } ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-navy transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase font-sans font-medium text-cream/90 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/retreat-builder"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-2"
          >
            Build Your Retreat
          </Link>
        </nav>
      </div>
    </header>
  );
}
