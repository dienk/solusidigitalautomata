"use client";

import { Linkedin, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Hubungi Kami", href: "#kontak" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sodiata-border bg-sodiata-bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sodiata-cyan to-cyan-600 flex items-center justify-center font-bold text-sodiata-bg text-sm">
                S
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-wide text-white">
                  SODIATA
                </span>
                <span className="text-[9px] tracking-[0.2em] text-sodiata-text-dim uppercase">
                  Solusi Digital Automata
                </span>
              </div>
            </div>
            <p className="text-sm text-sodiata-text-muted leading-relaxed mb-4 max-w-sm">
              Mitra teknologi terpercaya untuk transformasi digital enterprise
              Indonesia.
            </p>
            <p className="text-xs text-sodiata-text-dim">
              Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Links</h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-sodiata-text-muted hover:text-sodiata-cyan transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Ikuti Kami
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-sodiata-border flex items-center justify-center text-sodiata-text-muted hover:text-sodiata-cyan hover:border-sodiata-cyan/30 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-sodiata-border">
          <p className="text-xs text-sodiata-text-dim text-center">
            © 2026 PT SOLUSI DIGITAL AUTOMATA
          </p>
        </div>
      </div>
    </footer>
  );
}