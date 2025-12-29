
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

const services: Service[] = [
  {
    title: "Digital Bus Media Network",
    description:
      "Transform buses into premium moving billboards using onboard LED screens and station placements.",
    icon: <Bus className="w-8 h-8" />,
    features: [
      "Onboard LED screens (inside & exterior-ready)",
      "Station & terminal placements",
      "Audience reach by route & time window",
      "Brand-safe creative guidelines",
    ],
  },
  {
    title: "Campaign Planning & Partnerships",
    description:
      "A complete go-to-market plan for advertisers, agencies, and city partners with measurable outcomes.",
    icon: <Target className="w-8 h-8" />,
    features: [
      "Inventory packages & sponsorship tiers",
      "Agency & brand onboarding kits",
      "Seasonal / event-based campaigns",
      "Public-private collaboration model",
    ],
  },
  {
    title: "Analytics & Performance Reporting",
    description:
      "Transparent reporting and insights to prove ROI and optimize campaigns.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: [
      "Campaign dashboards & reporting cadence",
      "Reach estimates by route & ridership windows",
      "Creative rotation & A/B testing plans",
      "Post-campaign performance summaries",
    ],
  },
  {
    title: "Governance, Safety & Compliance",
    description:
      "Operational readiness with clear governance, safety policies, and brand compliance standards.",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Content policies & approval workflows",
      "Operational SLAs for screen uptime",
      "Privacy-minded measurement approach",
      "Incident & escalation playbooks",
    ],
  },
];

const methodologyPillars: Pillar[] = [
  {
    title: "Deploy",
    description:
      "Roll out digital screens and placements across priority routes and stations with an uptime-first approach.",
    icon: <Bus className="w-12 h-12" />,
  },
  {
    title: "Monetize",
    description:
      "Package inventory into sponsorship tiers and scalable ad products for brands and agencies.",
    icon: <TrendingUp className="w-12 h-12" />,
  },
  {
    title: "Measure",
    description:
      "Provide consistent reporting and insights to optimize creative, routes, and campaign schedules.",
    icon: <BarChart3 className="w-12 h-12" />,
  },
];

// ✅ Put your PDFs in /public/reports/... (convert DOCX → PDF for best browser support)
const englishReports: ReportItem[] = [
  { title: "Digital Buses Riyadh (EN)", href: "/reports/en/Digital Buses Riyadh.pdf" },
  { title: "Briefing Document (EN)", href: "/reports/en/Briefing Document.pdf" },
  { title: "Riyadh Bus Digital Advertising Business Plan (EN)", href: "/reports/en/BUS - Riyhad  Business Plan.pdf" },
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

      {/* <p className="text-sm text-navy-500 mt-5">
        If you want on-page previews, embed each PDF using an iframe under its link.
      </p> */}
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
                <p className="text-sm text-navy-600">Digital Transit Media & Campaign Reporting</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("reports")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Reports
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("methodology")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Approach
              </button>
              <button
                onClick={() => scrollToSection("map")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Map
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-navy-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-200 shadow-lg font-medium"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
      >
        <div className="absolute inset-0 bg-financial-pattern opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-semibold mb-6">
                Riyadh • Transit Media • Campaign Reporting
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Riyadh
              <span className="block text-gold-400">Transportation Marketing</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
              A modern transit media experience: digital screens, measurable campaigns, and bilingual reporting.
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore the reports, watch the bus media video, and view the Riyadh transit map — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("reports")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                View Reports
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>

              <button
                onClick={() => scrollToSection("map")}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Open Map
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
              About Riyadh Transportation Marketing
            </h2>
            <p className="text-2xl text-navy-600 max-w-4xl mx-auto leading-relaxed">
              A transit media concept that turns buses and stations into a high-impact digital advertising network
              — supported by structured plans, bilingual reports, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-navy-800 mb-6">What This Site Includes</h3>
              <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                This website is designed as a one-stop hub: the video shows the concept in action, the reports are
                separated by language for easy access, and the map provides geographic context for the transit network.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">Video on the left (hero section)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">English reports in the middle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">Arabic reports on the right (RTL)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600" />
                  <span className="text-navy-700 font-medium">Transit map at the bottom</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-navy-50 to-gold-50 p-8 rounded-2xl border border-navy-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">B2B</div>
                    <div className="text-navy-600 font-medium">Advertisers & Agencies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">KSA</div>
                    <div className="text-navy-600 font-medium">Riyadh Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">LED</div>
                    <div className="text-navy-600 font-medium">Digital Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-800 mb-2">ROI</div>
                    <div className="text-navy-600 font-medium">Measurable Campaigns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reports + Video (✅ video left, English middle, Arabic right) */}
      <section
        id="reports"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-50 to-gold-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-800">Reports & Media</h2>
            <p className="text-xl text-navy-600 mt-4">
              Video on the left • English reports in the middle • Arabic reports on the right
            </p>
          </div>
           <div className="bg-white rounded-2xl shadow-xl border border-navy-100 p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-6 h-6 text-gold-600" />
                <h3 className="text-2xl font-bold text-navy-800">Bus Video</h3>
              </div>

              <div className="rounded-xl overflow-hidden border border-navy-100 bg-black">
                <iframe width="100%" height="660" src="https://www.youtube.com/embed/i0R1F4_eGQM?si=jeU2KrKV5Qq6bIWG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                {/* <video
                  src="https://youtu.be/i0R1F4_eGQM?si=jeU2KrKV5Qq6bIWG"
                  controls
                  playsInline
                  className="w-full h-[360px] object-cover"
                /> */}
              </div>

              <p className="text-sm text-navy-500 mt-4">
                Put your MP4 here: <code>/public/videos/riyadh-bus.mp4</code>
              </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-8">
            {/* Left: Video */}
           

            {/* Middle: English Reports */}
            <ReportColumn title="Reports (English)" items={englishReports} dir="ltr" />

            {/* Right: Arabic Reports */}
            <ReportColumn title="التقارير (العربية)" items={arabicReports} dir="rtl" lang="ar" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-800 mb-8">
              Services & Capabilities
            </h2>
            <p className="text-xl text-navy-600 max-w-4xl mx-auto">
              Everything needed to launch, sell, operate, and report on a premium transit media network.
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
              Our Approach
            </h2>
            <p className="text-xl text-navy-600 max-w-4xl mx-auto">
              A simple, practical approach to rolling out a transit media network with strong commercial outcomes.
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Riyadh Transit Map</h2>
            <p className="text-lg text-navy-600 mt-3">
              Replace this embed with your official transit map (image or interactive map) when ready.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
            <iframe
              title="Riyadh Map"
              className="w-full h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Riyadh&output=embed"
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
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Contact</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Want to collaborate on transit media, sponsorships, or campaign reporting? Let’s talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>

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
                    <div className="text-white/80">+1–416-623-6345</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">inquiries@riyadhtransit.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4">Topics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Transit Media Rollout",
                    "Sponsorship Packages",
                    "Campaign Planning",
                    "Performance Reporting",
                    "Partnership Models",
                    "Governance & Compliance",
                  ].map((t) => (
                    <div key={t} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gold-400" />
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Existing ContactForm component */}
            <ContactForm />

            {/* If you prefer your inline form logic, you can swap ContactForm back to the commented form.
                Your handlers are still in this file (handleContactFormChange, handleContactFormSubmit). */}
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
                <p className="text-white/60">Transit Media • Reports • Map</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 mb-4">© 2025 Riyadh Transportation Marketing. All rights reserved.</p>
              {/* <p className="text-white/40 text-sm">
                A bilingual transit marketing hub with video, reports, and route context.
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}