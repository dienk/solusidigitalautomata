"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "@/components/sodiata/Logo";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const navLinks = [
    { label: t.header.nav.home, href: "#beranda" },
    { label: t.header.nav.about, href: "#tentang" },
    { label: t.header.nav.services, href: "#layanan" },
    { label: t.header.nav.contact, href: "#kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === "id" ? "en" : "id");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sodiata-bg/90 backdrop-blur-md py-3 border-b border-sodiata-border"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2.5 group">
          <Logo className="h-8 w-auto sm:h-9" />
          <span className="hidden sm:block text-[10px] tracking-[0.2em] text-sodiata-text-muted uppercase">
            {t.header.brand.subtitle}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sodiata-text-muted hover:text-sodiata-cyan transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sodiata-cyan after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-sm text-sodiata-text-muted hover:text-sodiata-cyan transition-colors duration-300 px-2.5 py-1.5 rounded-lg border border-sodiata-border hover:border-sodiata-cyan/30"
            aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium uppercase text-xs">{locale === "id" ? "EN" : "ID"}</span>
          </button>

          <Button
            asChild
            className="bg-sodiata-cyan hover:bg-cyan-400 text-sodiata-on-accent font-semibold text-sm px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <a href="#kontak">{t.header.cta}</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLocale}
            className="text-sodiata-text-muted p-2"
            aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sodiata-bg/95 backdrop-blur-lg border-t border-sodiata-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sodiata-text-muted hover:text-sodiata-cyan transition-colors py-2 text-base"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-sodiata-cyan hover:bg-cyan-400 text-sodiata-on-accent font-semibold w-full mt-2"
              >
                <a href="#kontak" onClick={() => setMobileOpen(false)}>
                  {t.header.cta}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}