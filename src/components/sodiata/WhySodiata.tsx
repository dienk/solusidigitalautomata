"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Cpu, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Berpengalaman",
    desc: "Lebih dari 5 tahun menangani proyek IT enterprise berskala besar di berbagai industri Indonesia.",
  },
  {
    icon: Cpu,
    title: "Teknologi Terkini",
    desc: "Menggunakan stack teknologi terdepan: cloud-native, AI/ML, IoT, dan microservices architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Tim Ahli Bersertifikat",
    desc: "Engineer bersertifikat AWS, Google Cloud, dan Cisco siap memberikan solusi terbaik untuk bisnis Anda.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    desc: "Tim support responsif siap membantu 24 jam sehari, 7 hari seminggu dengan SLA 99.9% uptime.",
  },
];

const guarantees = [
  "Konsultasi gratis tanpa komitmen",
  "Proposal teknis dalam 3 hari kerja",
  "Garansi implementasi sesuai spesifikasi",
];

export default function WhySodiata() {
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
    <section id="tentang" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.25em] text-sodiata-cyan font-medium uppercase">
              Mengapa Sodiata
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Mitra Teknologi yang
              <br />
              <span className="gradient-text">Anda Percaya</span>
            </h2>
            <p className="text-sodiata-text-muted leading-relaxed mb-8 max-w-lg">
              Kami bukan sekadar vendor teknologi — kami adalah mitra strategis
              yang memahami tantangan bisnis Anda dan memberikan solusi yang
              terukur, andal, dan skalabel.
            </p>

            {/* Guarantee list */}
            <div className="space-y-4">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sodiata-cyan/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-sodiata-cyan"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-sodiata-text">{g}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card rounded-xl p-6 hover:border-sodiata-cyan/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-sodiata-cyan/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-sodiata-cyan" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-sodiata-text-muted leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}