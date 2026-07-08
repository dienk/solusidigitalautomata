"use client";

import { useI18n } from "@/lib/i18n";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Logo } from "@/components/sodiata/Logo";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
];

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = [
    { label: t.footer.links.home, href: "#beranda" },
    { label: t.footer.links.services, href: "#layanan" },
    { label: t.footer.links.contact, href: "#kontak" },
    { label: t.footer.links.privacy, href: "#" },
    { label: t.footer.links.terms, href: "#" },
  ];

  return (
    <footer className="border-t border-sodiata-border bg-sodiata-elevated/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="h-8 w-auto" />
              <span className="text-[9px] tracking-[0.2em] text-sodiata-text-dim uppercase">
                {t.footer.brand.subtitle}
              </span>
            </div>
            <p className="text-sm text-sodiata-text-muted leading-relaxed mb-4 max-w-sm">
              {t.footer.description}
            </p>
            <p className="text-xs text-sodiata-text-dim">
              {t.footer.address}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.links.title}</h4>
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
              {t.footer.social.title}
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
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}