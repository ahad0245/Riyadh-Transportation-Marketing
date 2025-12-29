// App.tsx
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import {
  Bus,
  FileText,
  Map as MapIcon,
  TrendingUp,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Layers,
  Zap,
} from "lucide-react";
import "./App.css";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectDetails: string;
}

type ReportItem = { title: string; href: string };

// Data derived from "Business Plan" and "Briefing Document"
const services: Service[] = [
  {
    title: "Exterior Bus Media",
    description:
      "High-impact mobile billboards traversing Riyadh. Utilizing IP65-rated, 5,000+ nits brightness LED panels for daylight visibility.",
    icon: <Bus className="w-8 h-8" />,
    features: [
      "Fleet of 672+ buses",
      "Side panels (2.5m x 1m) & Rear displays",
      "Geo-targeting capabilities",
      "Estimated SAR 35-50M annual revenue",
    ],
  },
  {
    title: "Interior Digital Signage",
    description:
      "Captive audience engagement with high-definition screens targeting passengers with an average dwell time of 20-45 minutes.",
    icon: <Target className="w-8 h-8" />,
    features: [
      "1920x1080 resolution displays",
      "Up to 4 screens per bus",
      "Context-aware content delivery",
      "Public information integration",
    ],
  },
  {
    title: "Station Network",
    description:
      "Premium digital inventory at high-traffic hubs. From large-format LED video walls to interactive kiosks at over 2,000 stops.",
    icon: <MapPin className="w-8 h-8" />,
    features: [
      "High-dwell time environments",
      "Video walls at major hubs",
      "Projected SAR 20-40M annual revenue",
      "Station naming rights opportunities",
    ],
  },
  {
    title: "Corporate Governance",
    description:
      "A sophisticated three-entity structure (Holding, Asset, Media) ensuring operational efficiency and risk segregation.",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "SAPTCO (80%) & RATP Dev (20%) backed",
      "Bank-arranged sinking fund",
      "Comprehensive insurance package",
      "Regulatory compliance workflows",
    ],
  },
];

// Data derived from "Strategic Implementation Plan" and "Risk Analysis"
const methodologyPillars: Pillar[] = [
  {
    title: "Foundation & Setup",
    description:
      "Establishing the Riyadh Bus Holding, Asset, and Media companies. Securing technology partners like Planar & Leyard.",
    icon: <Layers className="w-12 h-12" />,
  },
  {
    title: "Pilot & Deployment",
    description:
      "A phased rollout starting with a 50-bus pilot to validate tech, followed by a 24-month full fleet installation.",
    icon: <Zap className="w-12 h-12" />,
  },
  {
    title: "Commercialization",
    description:
      "Yield management and sales activation to capture the $234M Saudi DOOH market, targeting a 24% IRR.",
    icon: <TrendingUp className="w-12 h-12" />,
  },
];

const englishReports: ReportItem[] = [
  { title: "Digital Buses Riyadh (EN)", href: "/reports/en/Digital Buses Riyadh.pdf" },
  { title: "Briefing Document (EN)", href: "/reports/en/Briefing Document.pdf" },
  { title: "Riyadh Bus Digital Advertising Business Plan (EN)", href: "/reports/en/BUS - Riyhad  Business Plan.pdf" },
  { title: "Theme – Riyadh Bus (EN)", href: "/reports/en/Theme Riyadh Bus.pdf" },
  { title: "Business Case (EN)", href: "/reports/en/Business Case.pdf" },
  { title: "Investment Proposal (EN)", href: "/reports/en/Investment Proposal.pdf" },
  { title: "PMP - Bus Service (EN)", href: "/reports/en/PMP - Bus Service.pdf" },
  { title: "Prospectus Riyadh Bus Co. (EN)", href: "/reports/en/Prospectus Riyadh Bus Co..pdf" },
  { title: "Risk Analysis Report (EN)", href: "/reports/en/Risk Analysis Report.pdf" },
  { title: "Riyadh Study (EN)", href: "/reports/en/Riyadh Study.pdf" },
  { title: "Strategic Implementation Plan (EN)", href: "/reports/en/Strategic Implementation Plan.pdf" },
];

const arabicReports: ReportItem[] = [
  { title: "حافلات الرياض تتحول إلى رقمية", href: "/reports/ar/حافلات الرياض تتحول إلى رقمية.pdf" },
  { title: "حافلات الرياض تحصل على تجديد رقمي", href: "/reports/ar/حافلات الرياض تحصل على تجديد رقمي.pdf" },
  { title: "خطة التنفيذ الاستراتيجية", href: "/reports/ar/خطة التنفيذ الاستراتيجية.pdf" },
  { title: "دراسة جدوى حافلات الرياض", href: "/reports/ar/دراسة جدوى حافلات الرياض.pdf" },
  { title: "تقرير تحليل المخاطر", href: "/reports/ar/تقرير تحليل المخاطر.pdf" },
  { title: "اقتراح استثماري", href: "/reports/ar/اقتراح استثماري.pdf" },
];

function ReportColumn({
  title,
  items,
  dir = "ltr",
  lang,
}: {
  title: string;
  items: ReportItem[];
  dir?: "ltr" | "rtl";
  lang?: string;
}) {
  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-navy-100 p-6 h-full"
      dir={dir}
      lang={lang}
    >
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-6 h-6 text-gold-600" />
        <h3 className="text-2xl font-bold text-navy-800">{title}</h3>
      </div>

      <ul className="space-y-3">
        {items.map((r) => (
          <li
            key={r.href}
            className="flex items-start justify-between gap-3 border border-navy-100 rounded-xl p-3 hover:shadow-sm transition"
          >
            <span className="text-navy-700 font-medium leading-snug">{r.title}</span>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-gold-700 hover:text-gold-800 font-semibold underline"
            >
              Open
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [activeService, setActiveService] = useState(0);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(contactForm),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setSubmitMessage("Thank you! We will contact you within 24 hours.");
        setContactForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectDetails: "",
        });
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(result.error?.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage("Network error. Please check your connection and try again.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-lg flex items-center justify-center">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-navy-800 leading-tight">
                  Riyadh Transportation Marketing

                </h1>
                <p className="text-sm text-navy-600">Digital Advertising Network</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("reports")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Documents
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Inventory
              </button>
              <button
                onClick={() => scrollToSection("methodology")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Strategy
              </button>
              <button
                onClick={() => scrollToSection("map")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Network Map
              </button>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-200 shadow-lg font-medium"
            >
              <span>Invest Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
      >
        <div className="absolute inset-0 bg-financial-pattern opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-semibold mb-6">
                King Abdulaziz Project for Public Transport
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Powering Riyadh’s
              <span className="block text-gold-400">Digital Transit Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
              A SAR 1.3 Billion revenue opportunity monetizing the Riyadh bus fleet through state-of-the-art LED advertising infrastructure.
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Backed by SAPTCO & RATP Dev. Aligned with Vision 2030. 24% Projected IRR.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("reports")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                View Feasibility Study
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>

              <button
                onClick={() => scrollToSection("map")}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Network Map
                <MapIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-800 mb-8">
              Strategic Investment Opportunity
            </h2>
            <p className="text-2xl text-navy-600 max-w-4xl mx-auto leading-relaxed">
              Leveraging SAR 2.65 billion in existing transit assets to create a high-margin digital media network across Riyadh's 672 buses and 2,145 stations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-navy-800 mb-6">Operational Foundation</h3>
              <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                This initiative is built on the robust operational backbone of the Public Transportation Company (PTC), a joint venture between SAPTCO (80%) and French transit operator RATP Dev (20%). With SAR 704M in urban transport revenue (9M 2025), the foundation is secure.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">Projected 24% Internal Rate of Return (IRR)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">SAR 125M Annual Revenue by Year 5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">4.1 Year Payback Period</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">Risk Mitigation via Sinking Fund & Insurance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-navy-50 to-gold-50 p-8 rounded-2xl border border-navy-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">672+</div>
                    <div className="text-navy-600 font-medium">Digital Buses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">2,145</div>
                    <div className="text-navy-600 font-medium">Stations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">SAR 285M</div>
                    <div className="text-navy-600 font-medium">Projected NPV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">$234M</div>
                    <div className="text-navy-600 font-medium">2030 Market Size</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reports + Video */}
      <section
        id="reports"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-50 to-gold-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-800">Project Documentation</h2>
            <p className="text-xl text-navy-600 mt-4">
              Access comprehensive feasibility studies, business plans, and risk analysis reports.
            </p>
          </div>
            <div className="bg-white rounded-2xl shadow-xl border border-navy-100 p-6 h-full flex flex-col mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-6 h-6 text-gold-600" />
                <h3 className="text-2xl font-bold text-navy-800">Media Concept Video</h3>
              </div>

              <div className="rounded-xl overflow-hidden border border-navy-100 bg-black">
                {/* <iframe width="100%" height="660" src="https://www.youtube.com/embed/i0R1F4_eGQM?si=jeU2KrKV5Qq6bIWG" title="Riyadh Bus Media" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                <video
                  src="/video/1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-auto object-cover"
                /> 
              </div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-8">
            <ReportColumn title="Investment Documents (English)" items={englishReports} dir="ltr" />
            <ReportColumn title="وثائق الاستثمار (العربية)" items={arabicReports} dir="rtl" lang="ar" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-800 mb-8">
              Inventory & Technology
            </h2>
            <p className="text-xl text-navy-600 max-w-4xl mx-auto">
              Deploying cutting-edge LED solutions from Planar and Leyard to monetize every touchpoint of the transit journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? "border-gold-500 bg-gold-50"
                      : "border-navy-200 bg-white hover:border-gold-300"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeService === index ? "text-gold-600" : "text-navy-600"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-800">{service.title}</h3>
                      <p className="text-navy-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-gold-50 p-8 rounded-2xl border border-navy-200">
              <div className="mb-6">
                <div className="p-4 bg-gold-100 rounded-lg inline-block mb-4">
                  {services[activeService].icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-lg text-navy-600 mb-6">
                  {services[activeService].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-navy-800 mb-4">Key Features:</h4>
                {services[activeService].features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600" />
                    <span className="text-navy-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach / Methodology */}
      <section
        id="methodology"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-50 to-navy-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-800 mb-8">
              Strategic Implementation
            </h2>
            <p className="text-xl text-navy-600 max-w-4xl mx-auto">
              A phased, risk-managed approach to deploying a SAR 230-280M infrastructure project over 24 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologyPillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl border border-navy-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl mb-6">
                  <div className="text-gold-600">{p.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">{p.title}</h3>
                <p className="text-navy-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Bottom) */}
      <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Riyadh Transit Network Coverage</h2>
            <p className="text-lg text-navy-600 mt-3">
              Covering 54 routes and over 2,100 stations across the Riyadh metropolitan area.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
            <iframe
              title="Riyadh Map"
              className="w-full h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.294829379!2d46.54233777717462!3d24.725286591035544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sca!4v1714589252345!5m2!1sen!2sca"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 to-navy-800 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Contact Investment Team</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              For inquiries regarding the Riyadh Bus Media Company or asset leasing opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Headquarters</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-white/80">Riyadh, Saudi Arabia</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white/80">+966 11 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">invest@riyadhbusmedia.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4">Investment Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Equity Participation",
                    "Asset Leasing",
                    "Debt Financing",
                    "Technology Supply",
                    "Insurance Coverage",
                    "Advertising Sales",
                  ].map((t) => (
                    <div key={t} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gold-400" />
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          {/* Optional: keep message UI if using inline form */}
          {submitMessage && (
            <div
              className={`mt-10 p-4 rounded-lg border max-w-3xl mx-auto ${
                submitSuccess
                  ? "bg-green-100 border-green-300 text-green-800"
                  : "bg-red-100 border-red-300 text-red-800"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Riyadh Transportation Marketing</h3>
                <p className="text-white/60">Digital Advertising Infrastructure</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 mb-4">© 2025 Riyadh Transportation Marketing. All rights reserved.</p>
              <p className="text-white/40 text-sm">
                Confidential Investment Proposal & Feasibility Data
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}