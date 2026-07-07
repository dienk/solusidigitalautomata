"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const layers = [
  {
    num: 5,
    title: "AI & Intelligence Layer",
    desc: "Model prediktif, NLP, computer vision, dan otomatisasi berbasis kecerdasan buatan.",
    tags: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"],
  },
  {
    num: 4,
    title: "Application Layer",
    desc: "Aplikasi web & mobile custom yang cepat, aman, dan skalabel untuk kebutuhan bisnis.",
    tags: ["Next.js", "React Native", "Node.js", "FastAPI", "GraphQL"],
  },
  {
    num: 3,
    title: "Integration Layer",
    desc: "Middleware dan API gateway yang menghubungkan semua sistem secara real-time.",
    tags: ["REST API", "gRPC", "Kafka", "RabbitMQ", "Webhooks"],
  },
  {
    num: 2,
    title: "Data & IoT Layer",
    desc: "Penyimpanan, streaming, dan pemrosesan data dari sensor IoT hingga data warehouse.",
    tags: ["PostgreSQL", "MongoDB", "InfluxDB", "MQTT", "Edge Computing"],
  },
  {
    num: 1,
    title: "Infrastructure Layer",
    desc: "Cloud-native infrastructure dengan keamanan enterprise dan SLA 99.9% uptime.",
    tags: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform"],
  },
];

const industries = [
  { name: "Manufaktur", count: "18 Proyek" },
  { name: "Logistik", count: "12 Proyek" },
  { name: "Keuangan", count: "9 Proyek" },
  { name: "Retail & E-Com", count: "11 Proyek" },
];

const results = [
  { label: "Rata-rata pengurangan downtime", value: "73%" },
  { label: "Peningkatan efisiensi operasional", value: "58%" },
  { label: "ROI rata-rata dalam 12 bulan", value: "3.2×" },
];

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-xs tracking-[0.25em] text-sodiata-cyan font-medium uppercase">
            Stack Teknologi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            Arsitektur Digital
            <br />
            <span className="gradient-text">5 Lapisan</span>
          </h2>
          <p className="text-sodiata-text-muted max-w-2xl mx-auto text-base leading-relaxed">
            Setiap solusi Sodiata dibangun di atas arsitektur berlapis yang
            terintegrasi — dari infrastruktur cloud hingga kecerdasan buatan —
            memastikan sistem yang andal, skalabel, dan siap masa depan.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Layers */}
          <div className="space-y-3">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="layer-gradient rounded-lg p-5 hover:bg-sodiata-cyan/[0.06] transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                    <span className="text-sodiata-cyan/50 text-sm font-mono font-bold">
                      L
                    </span>
                    <span className="text-2xl font-bold text-sodiata-cyan/30 group-hover:text-sodiata-cyan/60 transition-colors duration-300 font-mono">
                      {layer.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-sodiata-text-muted leading-relaxed mb-3">
                      {layer.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-sodiata-bg/80 text-sodiata-cyan/70 border border-sodiata-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Arrow label */}
            <div className="flex justify-center pt-2">
              <span className="text-[10px] tracking-wider text-sodiata-text-dim font-mono uppercase">
                Foundation → Intelligence
              </span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-white mb-4">
                INDUSTRI YANG KAMI LAYANI
              </h3>
              <div className="space-y-3">
                {industries.map((ind) => (
                  <div
                    key={ind.name}
                    className="flex items-center justify-between py-1.5"
                  >
                    <span className="text-sm text-sodiata-text">{ind.name}</span>
                    <span className="text-xs text-sodiata-cyan/70 font-mono">
                      {ind.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Client Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-white mb-4">
                HASIL TERUKUR KLIEN KAMI
              </h3>
              <div className="space-y-4">
                {results.map((r) => (
                  <div key={r.label}>
                    <p className="text-xs text-sodiata-text-muted mb-1">
                      {r.label}
                    </p>
                    <p className="text-2xl font-bold text-sodiata-cyan">
                      {r.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ISO Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card rounded-xl p-6 flex items-start gap-3"
            >
              <ShieldIcon className="w-8 h-8 text-sodiata-cyan flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">
                  ISO 27001 Ready
                </p>
                <p className="text-xs text-sodiata-text-muted mt-1 leading-relaxed">
                  Standar keamanan informasi internasional diterapkan di seluruh
                  proses pengembangan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}