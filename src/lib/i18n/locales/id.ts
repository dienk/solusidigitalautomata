const id = {
  header: {
    brand: { subtitle: "Solusi Digital Automata" },
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      contact: "Hubungi Kami",
    },
    cta: "Konsultasi Gratis",
    themeAria: "Ganti tema",
  },
  hero: {
    tag: "Enterprise IT Solutions",
    title: {
      line1: "Transformasi Digital",
      line2: "Bisnis Anda Bersama",
      highlight: "Sodiata",
    },
    description:
      "Solusi IT enterprise komprehensif — dari infrastruktur cloud, integrasi sistem, IoT industri, hingga implementasi AI. Satu mitra untuk seluruh perjalanan digital bisnis Anda.",
    cta: { primary: "Mulai Konsultasi", secondary: "Lihat Layanan Kami" },
    stats: {
      projects: "PROYEK SELESAI",
      clients: "KLIEN PUAS",
      years: "TAHUN PENGALAMAN",
      uptime: "UPTIME SLA",
    },
    badge: { new: "NEW" },
    card: {
      title: "AI & IoT Enterprise",
      description: "Otomatisasi cerdas untuk industri manufaktur & distribusi",
    },
    scroll: { label: "Scroll to Explore" },
  },
  services: {
    sectionTag: "Layanan Kami",
    sectionTitle: {
      line1: "7 Pilar Solusi Digital",
      highlight: "Enterprise",
    },
    sectionDesc:
      "Dari infrastruktur dasar hingga kecerdasan buatan — Sodiata menghadirkan ekosistem teknologi lengkap untuk transformasi digital bisnis Anda.",
    card: { learnMore: "Pelajari Lebih" },
    dialog: {
      tabOverview: "Ringkasan",
      tabFeatures: "Fitur",
      tabWorkflow: "Alur Kerja",
      tabTech: "Teknologi",
      featuresTitle: "Fitur Utama",
      deliverablesTitle: "Deliverables",
      workflowTitle: "Alur Kerja Implementasi",
      techTitle: "Teknologi yang Digunakan",
      close: "Tutup",
      cta: "Konsultasi Layanan Ini",
    },
    items: [
      {
        tag: "INFRASTRUCTURE",
        title: "Solusi IT Perusahaan",
        shortDesc: "Infrastruktur IT, keamanan siber, dan cloud computing skala enterprise.",
        detail: {
          overview:
            "Kami menyediakan fondasi infrastruktur IT yang kokoh dan skalabel untuk mendukung operasional bisnis enterprise Anda. Dari perencanaan arsitektur hingga implementasi dan pemeliharaan berkelanjutan, tim kami memastikan seluruh infrastruktur berjalan optimal dengan SLA 99.9% uptime.",
          features: [
            "Cloud Migration & Management (AWS, Google Cloud, Azure) — migrasi seamless dari on-premise ke cloud dengan minimal downtime",
            "Network Infrastructure — desain dan implementasi jaringan enterprise termasuk SD-WAN, VPN, dan load balancing",
            "Cybersecurity Solutions — firewall enterprise, intrusion detection system (IDS), endpoint protection, dan security operations center (SOC)",
            "Disaster Recovery & Business Continuity — strategi backup, failover otomatis, dan recovery plan teruji",
            "Server & Data Center Management — provisioning, monitoring, dan optimasi server fisik maupun virtual",
            "IT Governance & Compliance — kebijakan IT, audit keamanan, dan kepatuhan terhadap regulasi (ISO 27001, SOC 2)",
          ],
          deliverables: [
            "Arsitektur infrastruktur cloud-native",
            "Setup monitoring 24/7 dengan alerting",
            "Dokumentasi topology & runbook",
            "Pelatihan tim internal IT",
          ],
          workflow: [
            { label: "Assessment", sublabel: "Audit infrastruktur & kebutuhan" },
            { label: "Architecture", sublabel: "Desain topologi cloud-native" },
            { label: "Provisioning", sublabel: "Setup server & jaringan" },
            { label: "Security", sublabel: "Implementasi keamanan siber" },
            { label: "Migration", sublabel: "Migrasi data & aplikasi" },
            { label: "Monitoring", sublabel: "Monitoring 24/7 & alerting" },
            { label: "Optimization", sublabel: "Tuning performa & skalabilitas" },
          ],
        },
      },
      {
        tag: "CUSTOM DEV",
        title: "Aplikasi Pendukung Bisnis",
        shortDesc: "Custom Web & Mobile Apps (Android/iOS) sesuai kebutuhan operasional.",
        detail: {
          overview:
            "Sodiata mengembangkan aplikasi web dan mobile yang disesuaikan sepenuhnya dengan kebutuhan operasional bisnis Anda. Dengan pendekatan agile development, kami memastikan setiap fitur dibangun tepat sasaran, teruji secara menyeluruh, dan siap digunakan oleh pengguna akhir.",
          features: [
            "Web Application Development — aplikasi web responsif dan progresif (PWA) menggunakan framework modern seperti Next.js dan React",
            "Mobile App Development (Android & iOS) — aplikasi native maupun cross-platform menggunakan React Native untuk efisiensi pengembangan",
            "Dashboard & Analytics — dashboard interaktif untuk visualisasi data bisnis real-time dengan chart dan laporan yang mudah dipahami",
            "Workflow Automation Apps — aplikasi otomasi alur kerja yang mengurangi proses manual dan meningkatkan produktivitas tim",
            "Internal Tools & Portals — sistem manajemen internal, employee portal, dan admin panel yang intuitif",
            "API-First Development — arsitektur API yang robust dan terdokumentasi untuk memudahkan integrasi ke depannya",
          ],
          deliverables: [
            "Aplikasi production-ready dengan CI/CD pipeline",
            "Dokumentasi API (Swagger/OpenAPI)",
            "Manual pengguna & panduan deploy",
            "Garansi bug fixing 3 bulan pasca-launch",
          ],
          workflow: [
            { label: "Discovery", sublabel: "Analisis kebutuhan bisnis" },
            { label: "Planning", sublabel: "Sprint planning & roadmap" },
            { label: "UI/UX Design", sublabel: "Wireframe & prototyping" },
            { label: "Development", sublabel: "Iteratif per sprint (2 minggu)" },
            { label: "QA Testing", sublabel: "Unit, integration & UAT" },
            { label: "Deployment", sublabel: "CI/CD ke production" },
            { label: "Support", sublabel: "Bug fixing & maintenance" },
          ],
        },
      },
      {
        tag: "INTEGRATION",
        title: "Integrasi Sistem (S2S)",
        shortDesc: "API management, menghubungkan sistem legacy dengan sistem baru.",
        detail: {
          overview:
            "Banyak enterprise memiliki beragam sistem yang berjalan terpisah — mulai dari sistem legacy, aplikasi pihak ketiga, hingga platform cloud modern. Sodiata membantu menghubungkan seluruh ekosistem ini menjadi satu kesatuan yang terintegrasi melalui arsitektur API dan middleware yang reliable.",
          features: [
            "API Gateway & Management — centralisasi seluruh API dengan authentication, rate limiting, dan analytics menggunakan Kong atau AWS API Gateway",
            "Legacy System Integration — koneksi ke sistem lama (AS/400, mainframe, database lawas) melalui adapter dan wrapper modern",
            "Enterprise Service Bus (ESB) — middleware untuk routing dan transformasi data antar sistem secara real-time",
            "Data Synchronization — sinkronisasi data dua arah antar sistem dengan conflict resolution dan retry mechanism",
            "Webhook & Event-Driven Integration — arsitektur event-based menggunakan message queue untuk komunikasi asinkron antar layanan",
            "Third-Party Integration — koneksi ke platform seperti SAP, Salesforce, Google Workspace, dan berbagai SaaS lainnya",
          ],
          deliverables: [
            "Arsitektur integrasi end-to-end",
            "API documentation & versioning strategy",
            "Monitoring dashboard untuk semua connection",
            "SLA untuk response time & availability",
          ],
          workflow: [
            { label: "System Audit", sublabel: "Pemetaan seluruh sistem" },
            { label: "Architecture", sublabel: "Desain API & middleware" },
            { label: "Adapter Dev", sublabel: "Bangun koneksi ke tiap sistem" },
            { label: "Data Mapping", sublabel: "Transformasi & validasi data" },
            { label: "Testing", sublabel: "End-to-end integration test" },
            { label: "Go-Live", sublabel: "Deployment & cutover" },
            { label: "Monitoring", sublabel: "Log & SLA monitoring" },
          ],
        },
      },
      {
        tag: "IOT",
        title: "Penerapan IoT",
        shortDesc: "Sensor pintar, automasi industri, monitoring aset real-time.",
        detail: {
          overview:
            "Sodiata membantu enterprise memanfaatkan kekuatan Internet of Things untuk mengotomasi proses industri, memonitor aset secara real-time, dan mengambil keputusan berbasis data. Dari pemasangan sensor hingga dashboard analitik, kami menyediakan solusi IoT end-to-end.",
          features: [
            "Industrial IoT (IIoT) — sensor dan aktuator untuk monitoring kondisi mesin, suhu, tekanan, getaran, dan parameter produksi lainnya secara real-time",
            "Smart Asset Tracking — pelacakan lokasi dan kondisi aset menggunakan GPS, RFID, dan Bluetooth Low Energy (BLE)",
            "Predictive Maintenance — analisis data sensor dengan machine learning untuk memprediksi kegagalan mesin sebelum terjadi, mengurangi downtime hingga 60%",
            "SCADA & HMI Integration — integrasi dengan sistem kontrol industri yang sudah ada untuk memperluas kapabilitas monitoring",
            "Edge Computing — pemrosesan data di titik edge untuk respons real-time tanpa bergantung pada koneksi cloud",
            "IoT Dashboard & Alerting — dashboard terpusat untuk memantau seluruh device, dengan alert otomatis saat terjadi anomali",
          ],
          deliverables: [
            "Instalasi & konfigurasi sensor di lapangan",
            "IoT platform dengan dashboard real-time",
            "Sistem alerting & notifikasi otomatis",
            "Pelatihan operator & dokumentasi teknis",
          ],
          workflow: [
            { label: "Site Survey", sublabel: "Assesmen lapangan & kebutuhan" },
            { label: "Sensor Setup", sublabel: "Instalasi sensor & gateway" },
            { label: "Edge Deploy", sublabel: "Setup edge computing node" },
            { label: "Data Pipeline", sublabel: "MQTT broker & data ingestion" },
            { label: "Analytics", sublabel: "Dashboard & ML model" },
            { label: "Automation", sublabel: "Rule-based alerting & actuator" },
            { label: "Maintenance", sublabel: "Kalibrasi & support berkelanjutan" },
          ],
        },
      },
      {
        tag: "AI & ML",
        title: "Implementasi AI",
        shortDesc: "Analisis data prediktif, machine learning, dan otomatisasi proses bisnis.",
        detail: {
          overview:
            "Sodiata mengimplementasikan solusi Artificial Intelligence dan Machine Learning yang konkret dan memberikan dampak nyata pada bisnis Anda. Kami tidak hanya membangun model — kami memastikan model tersebut terintegrasi ke dalam proses bisnis dan menghasilkan ROI yang terukur.",
          features: [
            "Predictive Analytics — model prediksi untuk demand forecasting, churn prediction, dan risk assessment berdasarkan data historis perusahaan",
            "Natural Language Processing (NLP) — chatbot cerdas, analisis sentimen, document processing, dan text extraction untuk otomatisasi layanan pelanggan",
            "Computer Vision — sistem pengenalan objek, OCR, quality inspection otomatis, dan analisis citra untuk konteks industri",
            "Process Automation (RPA + AI) — otomatisasi proses bisnis repetitif yang dikombinasikan dengan AI untuk penanganan kasus yang lebih kompleks",
            "Recommendation Engine — sistem rekomendasi personal untuk meningkatkan engagement dan conversion di platform digital Anda",
            "AI-Powered Analytics — dashboard analitik yang dilengkapi insight otomatis, anomaly detection, dan natural language querying",
          ],
          deliverables: [
            "Model ML yang terlatih & di-deploy ke production",
            "API endpoint untuk integrasi ke sistem existing",
            "Laporan performa model & monitoring drift",
            "Workshop AI literacy untuk tim bisnis",
          ],
          workflow: [
            { label: "Data Audit", sublabel: "Identifikasi sumber & kualitas data" },
            { label: "Preprocessing", sublabel: "Cleansing, labeling & feature eng" },
            { label: "Modeling", sublabel: "Training & hyperparameter tuning" },
            { label: "Evaluation", sublabel: "Testing akurasi & benchmark" },
            { label: "Deployment", sublabel: "API endpoint ke production" },
            { label: "Monitoring", sublabel: "Drift detection & retraining" },
            { label: "Iteration", sublabel: "Feedback loop & improvement" },
          ],
        },
      },
      {
        tag: "E-COMMERCE",
        title: "Marketplace Integrator",
        shortDesc: "Sinkronisasi stok, produk, dan pesanan antar marketplace secara terpusat.",
        detail: {
          overview:
            "Bagi enterprise yang berjualan di berbagai marketplace, mengelola stok, produk, dan pesanan secara terpisah adalah tantangan besar. Sodiata membangun sistem integrator terpusat yang menyinkronkan seluruh data antar marketplace dalam satu platform, menghilangkan inkonsistensi dan menghemat waktu operasional.",
          features: [
            "Multi-Marketplace Sync — sinkronisasi real-time antar Tokopedia, Shopee, Lazada, Bukalapak, Blibli, dan marketplace lainnya dari satu dashboard",
            "Inventory Management Terpusat — pengelolaan stok otomatis yang meng-update di seluruh channel penjualan saat ada transaksi atau restock",
            "Order Management System — pemusatan seluruh pesanan dari berbagai marketplace dengan workflow fulfillment yang bisa dikustomisasi",
            "Product Catalog Management — kelola ribuan SKU dengan mass upload, variant management, dan template deskripsi produk",
            "Pricing & Promotion Engine — atur harga dinamis dan promosi lintas marketplace dengan rule-based pricing engine",
            "Analytics & Reporting — laporan penjualan terkonsolidasi, analisis performa per marketplace, dan insight untuk optimasi strategi penjualan",
          ],
          deliverables: [
            "Platform integrator multi-marketplace",
            "Koneksi API ke seluruh marketplace target",
            "Dashboard analytics & laporan otomatis",
            "Onboarding & training tim operasional",
          ],
          workflow: [
            { label: "Onboarding", sublabel: "Registrasi seller & akun API" },
            { label: "Catalog Setup", sublabel: "Import SKU & mapping produk" },
            { label: "Integration", sublabel: "Koneksi API tiap marketplace" },
            { label: "Sync Engine", sublabel: "Real-time stock & order sync" },
            { label: "Testing", sublabel: "Uji sinkronisasi end-to-end" },
            { label: "Go-Live", sublabel: "Launch & monitoring awal" },
            { label: "Optimization", sublabel: "Tuning & tambah marketplace" },
          ],
        },
      },
      {
        tag: "ERP",
        title: "ERP Partner System",
        shortDesc: "Implementasi dan kustomisasi ERP (Odoo, SAP, custom) untuk efisiensi bisnis.",
        detail: {
          overview:
            "Sistem ERP adalah tulang punggung operasional enterprise. Sodiata membantu implementasi, kustomisasi, dan integrasi ERP — baik menggunakan platform seperti Odoo dan SAP, maupun membangun sistem ERP custom yang sepenuhnya disesuaikan dengan proses bisnis unik perusahaan Anda.",
          features: [
            "Odoo Implementation — implementasi modul Odoo (Sales, Inventory, Accounting, HR, Manufacturing, dll.) yang dikonfigurasi sesuai kebutuhan bisnis Indonesia",
            "SAP Integration — integrasi dan kustomisasi SAP Business One / S/4HANA untuk enterprise berskala besar dengan kompleksitas tinggi",
            "Custom ERP Development — pembangunan sistem ERP dari nol menggunakan arsitektur microservices untuk fleksibilitas maksimal",
            "Module Development — pengembangan modul tambahan yang tidak tersedia di ERP standar, seperti approval workflow khusus atau integrasi dengan sistem pemerintah",
            "Data Migration — migrasi data dari sistem lama ke ERP baru dengan validasi, cleansing, dan rekonsiliasi data yang teliti",
            "Change Management — pendampingan transformasi proses bisnis, pelatihan pengguna, dan dukungan pasca-implementasi",
          ],
          deliverables: [
            "ERP system yang terimplementasi & terintegrasi",
            "Kustomisasi modul sesuai requirement",
            "Migrasi data dari sistem lama",
            "Pelatihan comprehensive & support pasca-go-live",
          ],
          workflow: [
            { label: "Business Analysis", sublabel: "Pemetaan proses bisnis (AS-IS)" },
            { label: "Configuration", sublabel: "Setup modul & workflow ERP" },
            { label: "Customization", sublabel: "Modul tambahan & integrasi" },
            { label: "Data Migration", sublabel: "Cleansing & migrasi data lama" },
            { label: "UAT", sublabel: "User acceptance testing" },
            { label: "Training", sublabel: "Pelatihan super user & end user" },
            { label: "Go-Live", sublabel: "Launch & support pasca-implementasi" },
          ],
        },
      },
    ],
  },
  why: {
    sectionTag: "Mengapa Sodiata",
    sectionTitle: { line1: "Mitra Teknologi yang", highlight: "Anda Percaya" },
    sectionDesc:
      "Kami bukan sekadar vendor teknologi — kami adalah mitra strategis yang memahami tantangan bisnis Anda dan memberikan solusi yang terukur, andal, dan skalabel.",
    guarantees: [
      "Konsultasi gratis tanpa komitmen",
      "Proposal teknis dalam 3 hari kerja",
      "Garansi implementasi sesuai spesifikasi",
    ],
    features: [
      {
        title: "Berpengalaman",
        desc: "Lebih dari 5 tahun menangani proyek IT enterprise berskala besar di berbagai industri Indonesia.",
      },
      {
        title: "Teknologi Terkini",
        desc: "Menggunakan stack teknologi terdepan: cloud-native, AI/ML, IoT, dan microservices architecture.",
      },
      {
        title: "Tim Ahli Bersertifikat",
        desc: "Engineer bersertifikat AWS, Google Cloud, dan Cisco siap memberikan solusi terbaik untuk bisnis Anda.",
      },
      {
        title: "Support 24/7",
        desc: "Tim support responsif siap membantu 24 jam sehari, 7 hari seminggu dengan SLA 99.9% uptime.",
      },
    ],
  },
  stats: {
    sectionTag: "Pencapaian Kami",
    sectionTitle: { line1: "Angka yang", highlight: "Berbicara" },
    items: [
      { label: "Proyek Selesai", sub: "Delivered on time & budget" },
      { label: "Klien Puas", sub: "Enterprise clients served" },
      { label: "Tahun Pengalaman", sub: "In enterprise IT solutions" },
      { label: "Uptime SLA", sub: "Guaranteed service availability" },
    ],
  },
  tech: {
    sectionTag: "Stack Teknologi",
    sectionTitle: { line1: "Arsitektur Digital", highlight: "5 Lapisan" },
    sectionDesc:
      "Setiap solusi Sodiata dibangun di atas arsitektur berlapis yang terintegrasi — dari infrastruktur cloud hingga kecerdasan buatan — memastikan sistem yang andal, skalabel, dan siap masa depan.",
    layers: [
      { title: "AI & Intelligence Layer", desc: "Model prediktif, NLP, computer vision, dan otomatisasi berbasis kecerdasan buatan." },
      { title: "Application Layer", desc: "Aplikasi web & mobile custom yang cepat, aman, dan skalabel untuk kebutuhan bisnis." },
      { title: "Integration Layer", desc: "Middleware dan API gateway yang menghubungkan semua sistem secara real-time." },
      { title: "Data & IoT Layer", desc: "Penyimpanan, streaming, dan pemrosesan data dari sensor IoT hingga data warehouse." },
      { title: "Infrastructure Layer", desc: "Cloud-native infrastructure dengan keamanan enterprise dan SLA 99.9% uptime." },
    ],
    arrowLabel: "Foundation → Intelligence",
    industries: {
      title: "INDUSTRI YANG KAMI LAYANI",
      list: [
        { name: "Manufaktur", count: "18 Proyek" },
        { name: "Logistik", count: "12 Proyek" },
        { name: "Keuangan", count: "9 Proyek" },
        { name: "Retail & E-Com", count: "11 Proyek" },
      ],
    },
    results: {
      title: "HASIL TERUKUR KLIEN KAMI",
      list: [
        { label: "Rata-rata pengurangan downtime", value: "73%" },
        { label: "Peningkatan efisiensi operasional", value: "58%" },
        { label: "ROI rata-rata dalam 12 bulan", value: "3.2×" },
      ],
    },
    iso: {
      title: "ISO 27001 Ready",
      desc: "Standar keamanan informasi internasional diterapkan di seluruh proses pengembangan.",
    },
  },
  testimonials: {
    sectionTag: "Testimoni Klien",
    sectionTitle: { line1: "Apa Kata", highlight: "Klien Kami" },
    sectionDesc:
      "Kepercayaan klien adalah aset terbesar kami. Berikut pengalaman nyata dari mitra bisnis yang telah berhasil bertransformasi bersama Sodiata.",
    items: [
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
    ],
    aria: { previous: "Testimoni sebelumnya", next: "Testimoni berikutnya" },
  },
  cta: {
    sectionTag: "Mulai Sekarang",
    sectionTitle: { line1: "Siap Memulai", highlight: "Transformasi Digital?" },
    sectionDesc:
      "Konsultasikan kebutuhan IT enterprise Anda bersama tim ahli Sodiata. Gratis, tanpa komitmen, dan kami siapkan proposal teknis dalam 3 hari kerja.",
    primary: "Konsultasi Gratis Sekarang",
    whatsapp: "Chat WhatsApp",
  },
  footer: {
    brand: { subtitle: "Solusi Digital Automata" },
    description: "Mitra teknologi terpercaya untuk transformasi digital enterprise Indonesia.",
    address: "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190",
    links: {
      title: "Links",
      home: "Beranda",
      services: "Layanan",
      contact: "Hubungi Kami",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    social: { title: "Ikuti Kami" },
    copyright: "\u00a9 2026 PT SOLUSI DIGITAL AUTOMATA",
  },
  whatsapp: {
    tooltip: "Chat WhatsApp",
    button: "Chat WhatsApp",
    aria: "Chat via WhatsApp",
  },
} as const;

export type Translations = typeof id;
export default id;