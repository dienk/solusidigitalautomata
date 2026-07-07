"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina Wulandari",
    role: "Head of Digital",
    company: "Bank Digital Nusantara",
    quote:
      "Tim Sodiata sangat responsif dan solusi AI chatbot mereka meningkatkan kepuasan pelanggan kami secara signifikan. Implementasi selesai tepat waktu dan sesuai spesifikasi.",
    metric: "+35%",
    metricLabel: "CUSTOMER SATISFACTION",
  },
  {
    name: "Hendra Kurniawan",
    role: "IT Director",
    company: "PT Maju Bersama Industri",
    quote:
      "Sodiata berhasil mengintegrasikan sistem ERP kami dengan marketplace dalam waktu 3 bulan. Efisiensi operasional meningkat 40% — hasil yang jauh melampaui ekspektasi kami.",
    metric: "+40%",
    metricLabel: "OPERATIONAL EFFICIENCY",
  },
  {
    name: "Rudi Prasetyo",
    role: "Plant Manager",
    company: "PT Energi Nusantara",
    quote:
      "Implementasi IoT monitoring dari Sodiata membantu kami mengurangi downtime mesin hingga 60%. Tim mereka sangat profesional dan responsif sepanjang proses implementasi.",
    metric: "-60%",
    metricLabel: "MACHINE DOWNTIME",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

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

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-sodiata-bg via-sodiata-bg-card/20 to-sodiata-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] text-sodiata-cyan font-medium uppercase">
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            Apa Kata
            <br />
            <span className="gradient-text">Klien Kami</span>
          </h2>
          <p className="text-sodiata-text-muted max-w-2xl mx-auto text-base leading-relaxed">
            Kepercayaan klien adalah aset terbesar kami. Berikut pengalaman
            nyata dari mitra bisnis yang telah berhasil bertransformasi bersama
            Sodiata.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-sodiata-cyan/5" />

            {/* Metric badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-sodiata-cyan">
                {t.metric}
              </span>
              <span className="text-[10px] tracking-wider text-sodiata-text-dim font-medium">
                {t.metricLabel}
              </span>
            </div>

            {/* Quote text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-base sm:text-lg text-sodiata-text leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-sodiata-text-muted">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-sodiata-border">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-sodiata-cyan w-6"
                        : "bg-sodiata-text-dim/30 hover:bg-sodiata-text-dim/50"
                    }`}
                    aria-label={`Testimoni ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-sodiata-border flex items-center justify-center text-sodiata-text-muted hover:text-sodiata-cyan hover:border-sodiata-cyan/30 transition-all duration-300"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-sodiata-border flex items-center justify-center text-sodiata-text-muted hover:text-sodiata-cyan hover:border-sodiata-cyan/30 transition-all duration-300"
                  aria-label="Testimoni berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}