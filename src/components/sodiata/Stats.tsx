"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Proyek Selesai",
    sub: "Delivered on time & budget",
  },
  {
    value: 30,
    suffix: "+",
    label: "Klien Puas",
    sub: "Enterprise clients served",
  },
  {
    value: 5,
    suffix: "+",
    label: "Tahun Pengalaman",
    sub: "In enterprise IT solutions",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    sub: "Guaranteed service availability",
    isFloat: true,
  },
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
    const duration = 2500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
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

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-sodiata-bg via-sodiata-bg-card/20 to-sodiata-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sodiata-cyan/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] text-sodiata-cyan font-medium uppercase">
            Pencapaian Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Angka yang
            <br />
            <span className="gradient-text">Berbicara</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-xl p-8 text-center group hover:border-sodiata-cyan/20 transition-all duration-500"
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isFloat={stat.isFloat}
                  inView={inView}
                />
              </p>
              <p className="text-sm font-medium text-sodiata-text mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-sodiata-text-dim">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}