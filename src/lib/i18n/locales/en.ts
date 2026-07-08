import type { Translations } from "./id";

const en: Translations = {
  header: {
    brand: { subtitle: "Digital Automata Solutions" },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact Us",
    },
    cta: "Free Consultation",
    themeAria: "Toggle theme",
  },
  hero: {
    tag: "Enterprise IT Solutions",
    title: {
      line1: "Digital Transformation",
      line2: "For Your Business With",
      highlight: "Sodiata",
    },
    description:
      "Comprehensive enterprise IT solutions — from cloud infrastructure, system integration, industrial IoT, to AI implementation. One partner for your entire digital business journey.",
    cta: { primary: "Start Consultation", secondary: "View Our Services" },
    stats: {
      projects: "PROJECTS COMPLETED",
      clients: "SATISFIED CLIENTS",
      years: "YEARS OF EXPERIENCE",
      uptime: "UPTIME SLA",
    },
    badge: { new: "NEW" },
    card: {
      title: "AI & IoT Enterprise",
      description: "Intelligent automation for manufacturing & distribution industries",
    },
    scroll: { label: "Scroll to Explore" },
  },
  services: {
    sectionTag: "Our Services",
    sectionTitle: {
      line1: "7 Pillars of Digital",
      highlight: "Enterprise Solutions",
    },
    sectionDesc:
      "From basic infrastructure to artificial intelligence — Sodiata delivers a complete technology ecosystem for your business digital transformation.",
    card: { learnMore: "Learn More" },
    dialog: {
      tabOverview: "Overview",
      tabFeatures: "Features",
      tabWorkflow: "Workflow",
      tabTech: "Technology",
      featuresTitle: "Key Features",
      deliverablesTitle: "Deliverables",
      workflowTitle: "Implementation Workflow",
      techTitle: "Technologies Used",
      close: "Close",
      cta: "Consult This Service",
    },
    items: [
      {
        tag: "INFRASTRUCTURE",
        title: "Enterprise IT Solutions",
        shortDesc: "IT infrastructure, cybersecurity, and enterprise-scale cloud computing.",
        detail: {
          overview:
            "We provide a robust and scalable IT infrastructure foundation to support your enterprise business operations. From architecture planning to implementation and ongoing maintenance, our team ensures all infrastructure runs optimally with 99.9% uptime SLA.",
          features: [
            "Cloud Migration & Management (AWS, Google Cloud, Azure) — seamless migration from on-premise to cloud with minimal downtime",
            "Network Infrastructure — enterprise network design and implementation including SD-WAN, VPN, and load balancing",
            "Cybersecurity Solutions — enterprise firewall, intrusion detection system (IDS), endpoint protection, and security operations center (SOC)",
            "Disaster Recovery & Business Continuity — backup strategies, automatic failover, and tested recovery plans",
            "Server & Data Center Management — provisioning, monitoring, and optimization of physical and virtual servers",
            "IT Governance & Compliance — IT policies, security audits, and regulatory compliance (ISO 27001, SOC 2)",
          ],
          deliverables: [
            "Cloud-native infrastructure architecture",
            "24/7 monitoring setup with alerting",
            "Topology documentation & runbook",
            "Internal IT team training",
          ],
          workflow: [
            { label: "Assessment", sublabel: "Infrastructure audit & requirements" },
            { label: "Architecture", sublabel: "Cloud-native topology design" },
            { label: "Provisioning", sublabel: "Server & network setup" },
            { label: "Security", sublabel: "Cybersecurity implementation" },
            { label: "Migration", sublabel: "Data & application migration" },
            { label: "Monitoring", sublabel: "24/7 monitoring & alerting" },
            { label: "Optimization", sublabel: "Performance tuning & scalability" },
          ],
        },
      },
      {
        tag: "CUSTOM DEV",
        title: "Business Support Applications",
        shortDesc: "Custom Web & Mobile Apps (Android/iOS) tailored to operational needs.",
        detail: {
          overview:
            "Sodiata develops web and mobile applications fully customized to your business operational needs. With an agile development approach, we ensure every feature is built on target, thoroughly tested, and ready for end users.",
          features: [
            "Web Application Development — responsive and progressive web apps (PWA) using modern frameworks like Next.js and React",
            "Mobile App Development (Android & iOS) — native or cross-platform apps using React Native for development efficiency",
            "Dashboard & Analytics — interactive dashboards for real-time business data visualization with easy-to-understand charts and reports",
            "Workflow Automation Apps — workflow automation applications that reduce manual processes and increase team productivity",
            "Internal Tools & Portals — internal management systems, employee portals, and intuitive admin panels",
            "API-First Development — robust and documented API architecture to facilitate future integrations",
          ],
          deliverables: [
            "Production-ready application with CI/CD pipeline",
            "API documentation (Swagger/OpenAPI)",
            "User manual & deployment guide",
            "3-month post-launch bug fixing warranty",
          ],
          workflow: [
            { label: "Discovery", sublabel: "Business needs analysis" },
            { label: "Planning", sublabel: "Sprint planning & roadmap" },
            { label: "UI/UX Design", sublabel: "Wireframe & prototyping" },
            { label: "Development", sublabel: "Iterative per sprint (2 weeks)" },
            { label: "QA Testing", sublabel: "Unit, integration & UAT" },
            { label: "Deployment", sublabel: "CI/CD to production" },
            { label: "Support", sublabel: "Bug fixing & maintenance" },
          ],
        },
      },
      {
        tag: "INTEGRATION",
        title: "System Integration (S2S)",
        shortDesc: "API management, connecting legacy systems with new systems.",
        detail: {
          overview:
            "Many enterprises have diverse systems running separately — from legacy systems, third-party applications, to modern cloud platforms. Sodiata helps connect this entire ecosystem into an integrated whole through reliable API architecture and middleware.",
          features: [
            "API Gateway & Management — centralize all APIs with authentication, rate limiting, and analytics using Kong or AWS API Gateway",
            "Legacy System Integration — connect to old systems (AS/400, mainframe, legacy databases) through modern adapters and wrappers",
            "Enterprise Service Bus (ESB) — middleware for real-time data routing and transformation between systems",
            "Data Synchronization — bidirectional data synchronization between systems with conflict resolution and retry mechanisms",
            "Webhook & Event-Driven Integration — event-based architecture using message queues for asynchronous communication between services",
            "Third-Party Integration — connect to platforms like SAP, Salesforce, Google Workspace, and various other SaaS",
          ],
          deliverables: [
            "End-to-end integration architecture",
            "API documentation & versioning strategy",
            "Monitoring dashboard for all connections",
            "SLA for response time & availability",
          ],
          workflow: [
            { label: "System Audit", sublabel: "Map all systems" },
            { label: "Architecture", sublabel: "API & middleware design" },
            { label: "Adapter Dev", sublabel: "Build connections to each system" },
            { label: "Data Mapping", sublabel: "Data transformation & validation" },
            { label: "Testing", sublabel: "End-to-end integration test" },
            { label: "Go-Live", sublabel: "Deployment & cutover" },
            { label: "Monitoring", sublabel: "Log & SLA monitoring" },
          ],
        },
      },
      {
        tag: "IOT",
        title: "IoT Implementation",
        shortDesc: "Smart sensors, industrial automation, real-time asset monitoring.",
        detail: {
          overview:
            "Sodiata helps enterprises leverage the power of the Internet of Things to automate industrial processes, monitor assets in real-time, and make data-driven decisions. From sensor installation to analytics dashboards, we provide end-to-end IoT solutions.",
          features: [
            "Industrial IoT (IIoT) — sensors and actuators for real-time monitoring of machine conditions, temperature, pressure, vibration, and other production parameters",
            "Smart Asset Tracking — asset location and condition tracking using GPS, RFID, and Bluetooth Low Energy (BLE)",
            "Predictive Maintenance — sensor data analysis with machine learning to predict machine failures before they occur, reducing downtime by up to 60%",
            "SCADA & HMI Integration — integration with existing industrial control systems to extend monitoring capabilities",
            "Edge Computing — data processing at the edge point for real-time response without depending on cloud connectivity",
            "IoT Dashboard & Alerting — centralized dashboard to monitor all devices with automatic alerts when anomalies occur",
          ],
          deliverables: [
            "Field sensor installation & configuration",
            "IoT platform with real-time dashboard",
            "Alerting & automatic notification system",
            "Operator training & technical documentation",
          ],
          workflow: [
            { label: "Site Survey", sublabel: "Field assessment & requirements" },
            { label: "Sensor Setup", sublabel: "Sensor & gateway installation" },
            { label: "Edge Deploy", sublabel: "Edge computing node setup" },
            { label: "Data Pipeline", sublabel: "MQTT broker & data ingestion" },
            { label: "Analytics", sublabel: "Dashboard & ML model" },
            { label: "Automation", sublabel: "Rule-based alerting & actuator" },
            { label: "Maintenance", sublabel: "Calibration & ongoing support" },
          ],
        },
      },
      {
        tag: "AI & ML",
        title: "AI Implementation",
        shortDesc: "Predictive data analysis, machine learning, and business process automation.",
        detail: {
          overview:
            "Sodiata implements Artificial Intelligence and Machine Learning solutions that are concrete and deliver real impact on your business. We don't just build models — we ensure they integrate into business processes and generate measurable ROI.",
          features: [
            "Predictive Analytics — prediction models for demand forecasting, churn prediction, and risk assessment based on company historical data",
            "Natural Language Processing (NLP) — intelligent chatbots, sentiment analysis, document processing, and text extraction for customer service automation",
            "Computer Vision — object recognition systems, OCR, automatic quality inspection, and image analysis for industrial contexts",
            "Process Automation (RPA + AI) — automation of repetitive business processes combined with AI for handling more complex cases",
            "Recommendation Engine — personalized recommendation systems to increase engagement and conversion on your digital platforms",
            "AI-Powered Analytics — analytics dashboards equipped with automatic insights, anomaly detection, and natural language querying",
          ],
          deliverables: [
            "Trained ML model deployed to production",
            "API endpoint for integration with existing systems",
            "Model performance report & drift monitoring",
            "AI literacy workshop for business teams",
          ],
          workflow: [
            { label: "Data Audit", sublabel: "Identify data sources & quality" },
            { label: "Preprocessing", sublabel: "Cleansing, labeling & feature eng" },
            { label: "Modeling", sublabel: "Training & hyperparameter tuning" },
            { label: "Evaluation", sublabel: "Accuracy testing & benchmark" },
            { label: "Deployment", sublabel: "API endpoint to production" },
            { label: "Monitoring", sublabel: "Drift detection & retraining" },
            { label: "Iteration", sublabel: "Feedback loop & improvement" },
          ],
        },
      },
      {
        tag: "E-COMMERCE",
        title: "Marketplace Integrator",
        shortDesc: "Centralized stock, product, and order synchronization across marketplaces.",
        detail: {
          overview:
            "For enterprises selling across multiple marketplaces, managing stock, products, and orders separately is a major challenge. Sodiata builds a centralized integrator system that synchronizes all data across marketplaces on a single platform, eliminating inconsistencies and saving operational time.",
          features: [
            "Multi-Marketplace Sync — real-time synchronization across Tokopedia, Shopee, Lazada, Bukalapak, Blibli, and other marketplaces from one dashboard",
            "Centralized Inventory Management — automatic stock management that updates across all sales channels upon transactions or restocks",
            "Order Management System — centralize all orders from various marketplaces with customizable fulfillment workflows",
            "Product Catalog Management — manage thousands of SKUs with mass upload, variant management, and product description templates",
            "Pricing & Promotion Engine — set dynamic prices and cross-marketplace promotions with a rule-based pricing engine",
            "Analytics & Reporting — consolidated sales reports, per-marketplace performance analysis, and insights for sales strategy optimization",
          ],
          deliverables: [
            "Multi-marketplace integrator platform",
            "API connections to all target marketplaces",
            "Analytics dashboard & automated reports",
            "Operational team onboarding & training",
          ],
          workflow: [
            { label: "Onboarding", sublabel: "Seller registration & API accounts" },
            { label: "Catalog Setup", sublabel: "SKU import & product mapping" },
            { label: "Integration", sublabel: "API connection per marketplace" },
            { label: "Sync Engine", sublabel: "Real-time stock & order sync" },
            { label: "Testing", sublabel: "End-to-end sync testing" },
            { label: "Go-Live", sublabel: "Launch & initial monitoring" },
            { label: "Optimization", sublabel: "Tuning & add marketplaces" },
          ],
        },
      },
      {
        tag: "ERP",
        title: "ERP Partner System",
        shortDesc: "ERP implementation and customization (Odoo, SAP, custom) for business efficiency.",
        detail: {
          overview:
            "ERP systems are the backbone of enterprise operations. Sodiata helps with ERP implementation, customization, and integration — whether using platforms like Odoo and SAP, or building a fully custom ERP system tailored to your company's unique business processes.",
          features: [
            "Odoo Implementation — Odoo module implementation (Sales, Inventory, Accounting, HR, Manufacturing, etc.) configured for Indonesian business needs",
            "SAP Integration — SAP Business One / S/4HANA integration and customization for large-scale enterprises with high complexity",
            "Custom ERP Development — building ERP systems from scratch using microservices architecture for maximum flexibility",
            "Module Development — developing additional modules not available in standard ERP, such as custom approval workflows or government system integration",
            "Data Migration — data migration from old systems to new ERP with careful validation, cleansing, and data reconciliation",
            "Change Management — business process transformation support, user training, and post-implementation assistance",
          ],
          deliverables: [
            "Implemented & integrated ERP system",
            "Module customization per requirements",
            "Data migration from legacy systems",
            "Comprehensive training & post-go-live support",
          ],
          workflow: [
            { label: "Business Analysis", sublabel: "Business process mapping (AS-IS)" },
            { label: "Configuration", sublabel: "ERP module & workflow setup" },
            { label: "Customization", sublabel: "Additional modules & integration" },
            { label: "Data Migration", sublabel: "Legacy data cleansing & migration" },
            { label: "UAT", sublabel: "User acceptance testing" },
            { label: "Training", sublabel: "Super user & end user training" },
            { label: "Go-Live", sublabel: "Launch & post-implementation support" },
          ],
        },
      },
    ],
  },
  why: {
    sectionTag: "Why Sodiata",
    sectionTitle: { line1: "Technology Partner You", highlight: "Can Trust" },
    sectionDesc:
      "We are not just a technology vendor — we are a strategic partner who understands your business challenges and delivers measurable, reliable, and scalable solutions.",
    guarantees: [
      "Free consultation with no commitment",
      "Technical proposal within 3 business days",
      "Implementation guarantee per specifications",
    ],
    features: [
      {
        title: "Experienced",
        desc: "Over 5 years handling large-scale enterprise IT projects across various industries in Indonesia.",
      },
      {
        title: "Cutting-Edge Technology",
        desc: "Using the latest technology stack: cloud-native, AI/ML, IoT, and microservices architecture.",
      },
      {
        title: "Certified Expert Team",
        desc: "AWS, Google Cloud, and Cisco certified engineers ready to deliver the best solutions for your business.",
      },
      {
        title: "24/7 Support",
        desc: "Responsive support team available 24 hours a day, 7 days a week with 99.9% uptime SLA.",
      },
    ],
  },
  stats: {
    sectionTag: "Our Achievements",
    sectionTitle: { line1: "Numbers That", highlight: "Speak" },
    items: [
      { label: "Projects Completed", sub: "Delivered on time & budget" },
      { label: "Satisfied Clients", sub: "Enterprise clients served" },
      { label: "Years of Experience", sub: "In enterprise IT solutions" },
      { label: "Uptime SLA", sub: "Guaranteed service availability" },
    ],
  },
  tech: {
    sectionTag: "Tech Stack",
    sectionTitle: { line1: "5-Layer Digital", highlight: "Architecture" },
    sectionDesc:
      "Every Sodiata solution is built on an integrated layered architecture — from cloud infrastructure to artificial intelligence — ensuring systems that are reliable, scalable, and future-ready.",
    layers: [
      { title: "AI & Intelligence Layer", desc: "Predictive models, NLP, computer vision, and AI-based automation." },
      { title: "Application Layer", desc: "Fast, secure, and scalable custom web & mobile applications for business needs." },
      { title: "Integration Layer", desc: "Middleware and API gateways connecting all systems in real-time." },
      { title: "Data & IoT Layer", desc: "Storage, streaming, and data processing from IoT sensors to data warehouses." },
      { title: "Infrastructure Layer", desc: "Cloud-native infrastructure with enterprise security and 99.9% uptime SLA." },
    ],
    arrowLabel: "Foundation → Intelligence",
    industries: {
      title: "INDUSTRIES WE SERVE",
      list: [
        { name: "Manufacturing", count: "18 Projects" },
        { name: "Logistics", count: "12 Projects" },
        { name: "Finance", count: "9 Projects" },
        { name: "Retail & E-Com", count: "11 Projects" },
      ],
    },
    results: {
      title: "MEASURABLE CLIENT RESULTS",
      list: [
        { label: "Average downtime reduction", value: "73%" },
        { label: "Operational efficiency increase", value: "58%" },
        { label: "Average ROI in 12 months", value: "3.2×" },
      ],
    },
    iso: {
      title: "ISO 27001 Ready",
      desc: "International information security standards applied across all development processes.",
    },
  },
  testimonials: {
    sectionTag: "Client Testimonials",
    sectionTitle: { line1: "What Our", highlight: "Clients Say" },
    sectionDesc:
      "Client trust is our greatest asset. Here are real experiences from business partners who have successfully transformed with Sodiata.",
    items: [
      {
        name: "Rina Wulandari",
        role: "Head of Digital",
        company: "Bank Digital Nusantara",
        quote:
          "The Sodiata team was very responsive and their AI chatbot solution significantly improved our customer satisfaction. Implementation was completed on time and per specifications.",
        metric: "+35%",
        metricLabel: "CUSTOMER SATISFACTION",
      },
      {
        name: "Hendra Kurniawan",
        role: "IT Director",
        company: "PT Maju Bersama Industri",
        quote:
          "Sodiata successfully integrated our ERP system with marketplaces in just 3 months. Operational efficiency improved by 40% — results that far exceeded our expectations.",
        metric: "+40%",
        metricLabel: "OPERATIONAL EFFICIENCY",
      },
      {
        name: "Rudi Prasetyo",
        role: "Plant Manager",
        company: "PT Energi Nusantara",
        quote:
          "Sodiata's IoT monitoring implementation helped us reduce machine downtime by 60%. Their team was highly professional and responsive throughout the implementation process.",
        metric: "-60%",
        metricLabel: "MACHINE DOWNTIME",
      },
    ],
    aria: { previous: "Previous testimonial", next: "Next testimonial" },
  },
  cta: {
    sectionTag: "Get Started",
    sectionTitle: { line1: "Ready to Start Your", highlight: "Digital Transformation?" },
    sectionDesc:
      "Consult your enterprise IT needs with Sodiata's expert team. Free, no commitment, and we'll prepare a technical proposal within 3 business days.",
    primary: "Free Consultation Now",
    whatsapp: "Chat WhatsApp",
  },
  footer: {
    brand: { subtitle: "Digital Automata Solutions" },
    description: "Trusted technology partner for enterprise digital transformation in Indonesia.",
    address: "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190",
    links: {
      title: "Links",
      home: "Home",
      services: "Services",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    social: { title: "Follow Us" },
    copyright: "\u00a9 2026 PT SOLUSI DIGITAL AUTOMATA",
  },
  whatsapp: {
    tooltip: "Chat WhatsApp",
    button: "Chat WhatsApp",
    aria: "Chat via WhatsApp",
  },
} as const;

export default en;