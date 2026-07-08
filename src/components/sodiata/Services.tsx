"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle2, Server, Code2, Link2, Cpu, BrainCircuit, ShoppingBag, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import ServiceWorkflow, { type WorkflowStep } from "@/components/sodiata/ServiceWorkflow";
import { useI18n } from "@/lib/i18n";

// Static data that never changes between languages
const serviceIcons = [Server, Code2, Link2, Cpu, BrainCircuit, ShoppingBag, Layers];
const serviceHrefs = [
  "#layanan-infrastructure", "#layanan-custom-dev", "#layanan-integration",
  "#layanan-iot", "#layanan-ai-ml", "#layanan-ecommerce", "#layanan-erp",
];
const serviceTechStacks = [
  ["AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform", "Docker", "Prometheus", "Grafana"],
  ["Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
  ["REST API", "gRPC", "GraphQL", "Apache Kafka", "RabbitMQ", "MuleSoft", "Kong", "Webhooks"],
  ["MQTT", "InfluxDB", "Grafana", "Edge Computing", "Arduino", "Raspberry Pi", "LoRaWAN", "Node-RED"],
  ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "FastAPI", "MLflow"],
  ["Node.js", "Redis", "PostgreSQL", "REST API", "Webhooks", "Message Queue", "Cron Jobs", "React"],
  ["Odoo", "SAP B1", "Python", "PostgreSQL", "REST API", "Microservices", "Docker", "CI/CD"],
];
const serviceWorkflowIcons: string[][] = [
  ["search", "layers", "server", "shield", "database", "monitor", "cog"],
  ["search", "workflow", "pencil", "gitBranch", "testTube", "rocket", "refreshCw"],
  ["search", "layers", "gitBranch", "database", "testTube", "rocket", "monitor"],
  ["search", "box", "server", "database", "brain", "zap", "refreshCw"],
  ["search", "database", "brain", "testTube", "rocket", "monitor", "refreshCw"],
  ["users", "database", "gitBranch", "refreshCw", "testTube", "rocket", "cog"],
  ["search", "cog", "gitBranch", "database", "testTube", "users", "check"],
];

type TabKey = "overview" | "features" | "workflow" | "tech";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const { t } = useI18n();

  // Build services array from translations + static data
  const services = useMemo(() =>
    t.services.items.map((item, i) => ({
      icon: serviceIcons[i],
      tag: item.tag,
      title: item.title,
      shortDesc: item.shortDesc,
      href: serviceHrefs[i],
      tech: serviceTechStacks[i],
      detail: {
        overview: item.detail.overview,
        features: item.detail.features,
        deliverables: item.detail.deliverables,
        workflow: item.detail.workflow.map((w, j) => ({
          label: w.label,
          sublabel: w.sublabel,
          icon: serviceWorkflowIcons[i][j],
        })) as WorkflowStep[],
      },
    })),
  [t]);

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

  const openDetail = (index: number) => {
    setActiveIndex(index);
    setActiveTab("overview");
    setDialogOpen(true);
  };

  const activeService = activeIndex !== null ? services[activeIndex] : null;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "overview", label: t.services.dialog.tabOverview },
    { key: "features", label: t.services.dialog.tabFeatures },
    { key: "workflow", label: t.services.dialog.tabWorkflow },
    { key: "tech", label: t.services.dialog.tabTech },
  ];

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
            {t.services.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            {t.services.sectionTitle.line1}
            <br />
            <span className="gradient-text">{t.services.sectionTitle.highlight}</span>
          </h2>
          <p className="text-sodiata-text-muted max-w-2xl mx-auto text-base leading-relaxed">
            {t.services.sectionDesc}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.tag}
              variants={cardVariants}
              onClick={() => openDetail(index)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(index); } }}
              role="button"
              tabIndex={0}
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
                {service.shortDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-sodiata-cyan/80 group-hover:text-sodiata-cyan transition-colors duration-300">
                {t.services.card.learnMore}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Detail Dialog — Tabbed (no vertical scroll) */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl bg-sodiata-bg border-sodiata-border text-sodiata-text p-0 [&>button]:hidden flex flex-col max-h-[85vh]">
          {activeService && (
            <>
              {/* Fixed Header */}
              <div className="flex-shrink-0 relative px-6 sm:px-8 pt-6 pb-4 border-b border-sodiata-border">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sodiata-cyan via-cyan-500 to-sodiata-cyan/50" />
                <button
                  onClick={() => setDialogOpen(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full border border-sodiata-border flex items-center justify-center text-sodiata-text-muted hover:text-sodiata-cyan hover:border-sodiata-cyan/50 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sodiata-cyan/10 border border-sodiata-cyan/20 flex items-center justify-center flex-shrink-0">
                    <activeService.icon className="w-5 h-5 text-sodiata-cyan" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] tracking-[0.2em] text-sodiata-cyan/70 font-semibold uppercase">
                      {activeService.tag}
                    </span>
                    <DialogHeader className="mt-0.5">
                      <DialogTitle className="text-lg sm:text-xl font-bold text-white text-left leading-tight">
                        {activeService.title}
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                </div>
              </div>

              {/* Fixed Tab Bar */}
              <div className="flex-shrink-0 px-6 sm:px-8 border-b border-sodiata-border">
                <div className="flex gap-1 -mb-px">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-2.5 text-xs font-medium tracking-wide uppercase transition-all duration-200 border-b-2 ${
                        activeTab === tab.key
                          ? "text-sodiata-cyan border-sodiata-cyan"
                          : "text-sodiata-text-dim border-transparent hover:text-sodiata-text-muted"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content — flex-1 overflow hidden, no scroll */}
              <div className="flex-1 min-h-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    {/* OVERVIEW TAB */}
                    {activeTab === "overview" && (
                      <div className="px-6 sm:px-8 py-5 h-full flex flex-col justify-center">
                        <p className="text-sm text-sodiata-text-muted leading-relaxed mb-6">
                          {activeService.detail.overview}
                        </p>
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                          <div className="w-1 h-3.5 rounded-full bg-cyan-500" />
                          {t.services.dialog.deliverablesTitle}
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {activeService.detail.deliverables.map((d, i) => (
                            <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg border border-sodiata-border/50">
                              <div className="w-4 h-4 rounded-md bg-sodiata-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[9px] font-bold text-sodiata-cyan">{i + 1}</span>
                              </div>
                              <p className="text-xs text-sodiata-text-muted leading-relaxed">{d}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FEATURES TAB */}
                    {activeTab === "features" && (
                      <div className="px-6 sm:px-8 py-5 h-full overflow-y-auto">
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {activeService.detail.features.map((feature, i) => {
                            const boldPart = feature.split(" — ")[0];
                            const descPart = feature.split(" — ")[1];
                            return (
                              <div
                                key={i}
                                className="flex gap-2.5 p-3 rounded-lg bg-sodiata-elevated/70 border border-sodiata-border/60 hover:border-sodiata-cyan/20 transition-colors duration-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-sodiata-cyan flex-shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                  <p className="text-xs font-medium text-white leading-snug">{boldPart}</p>
                                  {descPart && (
                                    <p className="text-[11px] text-sodiata-text-muted mt-0.5 leading-relaxed">{descPart}</p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* WORKFLOW TAB */}
                    {activeTab === "workflow" && (
                      <div className="px-6 sm:px-8 py-5 h-full overflow-y-auto">
                        {activeService.detail.workflow && (
                          <ServiceWorkflow
                            steps={activeService.detail.workflow}
                            title={t.services.dialog.workflowTitle}
                          />
                        )}
                      </div>
                    )}

                    {/* TECH TAB */}
                    {activeTab === "tech" && (
                      <div className="px-6 sm:px-8 py-5 h-full flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-5">
                          {activeService.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="px-3 py-1.5 text-xs font-mono border-sodiata-border text-sodiata-cyan/80 bg-sodiata-elevated/60 hover:bg-sodiata-cyan/10 hover:text-sodiata-cyan transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {activeService.detail.deliverables.map((d, i) => (
                            <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg border border-sodiata-border/50">
                              <div className="w-4 h-4 rounded-md bg-sodiata-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[9px] font-bold text-sodiata-cyan">{i + 1}</span>
                              </div>
                              <p className="text-xs text-sodiata-text-muted leading-relaxed">{d}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Fixed Footer */}
              <div className="flex-shrink-0 px-6 sm:px-8 py-3.5 border-t border-sodiata-border flex flex-col sm:flex-row gap-2.5 sm:justify-end bg-sodiata-elevated/60">
                <button
                  onClick={() => setDialogOpen(false)}
                  className="px-4 py-2 rounded-lg border border-sodiata-border text-sm text-sodiata-text-muted hover:text-sodiata-cyan hover:border-sodiata-cyan/30 transition-all duration-300"
                >
                  {t.services.dialog.close}
                </button>
                <a
                  href="#kontak"
                  onClick={() => setDialogOpen(false)}
                  className="px-4 py-2 rounded-lg bg-sodiata-cyan hover:bg-cyan-400 text-sodiata-on-accent text-sm font-semibold text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                >
                  {t.services.dialog.cta}
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}