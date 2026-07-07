"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Server,
  Code2,
  Link2,
  Cpu,
  BrainCircuit,
  ShoppingBag,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Server,
    tag: "INFRASTRUCTURE",
    title: "Solusi IT Perusahaan",
    desc: "Infrastruktur IT, keamanan siber, dan cloud computing skala enterprise.",
  },
  {
    icon: Code2,
    tag: "CUSTOM DEV",
    title: "Aplikasi Pendukung Bisnis",
    desc: "Custom Web & Mobile Apps (Android/iOS) sesuai kebutuhan operasional.",
  },
  {
    icon: Link2,
    tag: "INTEGRATION",
    title: "Integrasi Sistem (S2S)",
    desc: "API management, menghubungkan sistem legacy dengan sistem baru.",
  },
  {
    icon: Cpu,
    tag: "IOT",
    title: "Penerapan IoT",
    desc: "Sensor pintar, automasi industri, monitoring aset real-time.",
  },
  {
    icon: BrainCircuit,
    tag: "AI & ML",
    title: "Implementasi AI",
    desc: "Analisis data prediktif, machine learning, dan otomatisasi proses bisnis.",
  },
  {
    icon: ShoppingBag,
    tag: "E-COMMERCE",
    title: "Marketplace Integrator",
    desc: "Sinkronisasi stok, produk, dan pesanan antar marketplace secara terpusat.",
  },
  {
    icon: Layers,
    tag: "ERP",
    title: "ERP Partner System",
    desc: "Implementasi dan kustomisasi ERP (Odoo, SAP, custom) untuk efisiensi bisnis.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="layanan" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-sodiata-bg via-sodiata-bg-card/30 to-sodiata-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] text-sodiata-cyan font-medium uppercase">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            7 Pilar Solusi Digital
            <br />
            <span className="gradient-text">Enterprise</span>
          </h2>
          <p className="text-sodiata-text-muted max-w-2xl mx-auto text-base leading-relaxed">
            Dari infrastruktur dasar hingga kecerdasan buatan — Sodiata
            menghadirkan ekosistem teknologi lengkap untuk transformasi digital
            bisnis Anda.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.tag}
              variants={cardVariants}
              className="group glass-card rounded-xl p-6 hover:border-sodiata-cyan/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)] cursor-pointer"
            >
              <span className="text-[10px] tracking-[0.15em] text-sodiata-cyan/70 font-semibold uppercase">
                {service.tag}
              </span>
              <div className="mt-4 mb-3 w-10 h-10 rounded-lg bg-sodiata-cyan/10 flex items-center justify-center group-hover:bg-sodiata-cyan/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-sodiata-cyan" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-sodiata-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-sodiata-text-muted leading-relaxed mb-4">
                {service.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-sodiata-cyan/80 group-hover:text-sodiata-cyan transition-colors duration-300">
                Pelajari Lebih
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}