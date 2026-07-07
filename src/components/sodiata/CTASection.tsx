"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="kontak" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sodiata-cyan/10 via-sodiata-bg-card to-sodiata-cyan/5" />
          <div className="absolute inset-0 border border-sodiata-border rounded-2xl" />

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-sodiata-cyan/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/10 rounded-full blur-[80px]" />

          <div className="relative px-8 sm:px-16 py-16 sm:py-20 text-center">
            <span className="text-xs tracking-[0.25em] text-sodiata-cyan font-medium uppercase">
              Mulai Sekarang
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
              Siap Memulai
              <br />
              <span className="gradient-text">Transformasi Digital?</span>
            </h2>
            <p className="text-sodiata-text-muted max-w-xl mx-auto text-base leading-relaxed mb-10">
              Konsultasikan kebutuhan IT enterprise Anda bersama tim ahli
              Sodiata. Gratis, tanpa komitmen, dan kami siapkan proposal teknis
              dalam 3 hari kerja.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sodiata-cyan hover:bg-cyan-400 text-sodiata-bg font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] group"
              >
                <a href="#kontak">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-sodiata-border text-sodiata-text hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400 px-8 py-3.5 rounded-lg transition-all duration-300 group"
              >
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  Chat WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}