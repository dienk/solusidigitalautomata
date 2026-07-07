"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 50, suffix: "+", label: "PROYEK SELESAI" },
  { value: 30, suffix: "+", label: "KLIEN PUAS" },
  { value: 5, suffix: "+", label: "TAHUN PENGALAMAN" },
  { value: 99.9, suffix: "%", label: "UPTIME SLA", isFloat: true },
];

function AnimatedCounter({
  target,
  suffix,
  isFloat,
  inView,
}: {
  target: number;
  suffix: string;
  isFloat?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = target * eased;
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setInView(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [handleIntersect]);

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sodiata-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs tracking-[0.2em] text-sodiata-cyan font-medium uppercase">
                Enterprise IT Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Transformasi Digital
              <br />
              Bisnis Anda Bersama{" "}
              <span className="gradient-text">Sodiata</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sodiata-text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Solusi IT enterprise komprehensif — dari infrastruktur cloud,
              integrasi sistem, IoT industri, hingga implementasi AI. Satu mitra
              untuk seluruh perjalanan digital bisnis Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-sodiata-cyan hover:bg-cyan-400 text-sodiata-bg font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] group"
              >
                <a href="#kontak">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-sodiata-border text-sodiata-text hover:bg-sodiata-bg-card-hover hover:border-sodiata-cyan/50 hover:text-sodiata-cyan px-6 py-3 rounded-lg transition-all duration-300"
              >
                <a href="#layanan">Lihat Layanan Kami</a>
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      isFloat={stat.isFloat}
                      inView={inView}
                    />
                  </p>
                  <p className="text-xs text-sodiata-text-dim tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - AI/IoT Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-sodiata-cyan/10 blur-[60px] scale-150" />

              <div className="relative glass-card rounded-2xl p-8 max-w-sm text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sodiata-cyan/10 border border-sodiata-cyan/20 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-sodiata-cyan" />
                  <span className="text-[10px] font-bold tracking-wider text-sodiata-cyan uppercase">
                    NEW
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI &amp; IoT Enterprise
                </h3>
                <p className="text-sm text-sodiata-text-muted leading-relaxed">
                  Otomatisasi cerdas untuk industri manufaktur &amp; distribusi
                </p>

                {/* Decorative tech icons */}
                <div className="flex justify-center gap-3 mt-6">
                  {["AI", "IoT", "ML", "API"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-sodiata-bg/60 border border-sodiata-border text-[11px] font-mono text-sodiata-cyan/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-sodiata-text-dim uppercase">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 text-sodiata-cyan scroll-bounce" />
        </motion.div>
      </div>
    </section>
  );
}