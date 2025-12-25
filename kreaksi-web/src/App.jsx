import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Globe, ArrowRight, BarChart, Smartphone, 
  Monitor, PenTool, Camera, Share2, CheckCircle, 
  Rocket, Users, Clock, Shield, ChevronRight, Mail, Phone,
  TrendingUp, Users2, Instagram
} from 'lucide-react';

/**
 * KREAKSI DIGITAL LANDING PAGE
 * * Features:
 * - Bilingual Support (ID/EN)
 * - Responsive Tailwind CSS Design
 * - Custom "RevealOnScroll" Animation Component
 * - Meta Pixel Integration Added
 * - Content extracted directly from "KREAKSI - ALL IN ONE PROPOSAL.pdf"
 */

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID; 

// --- UTILS: ANIMATION COMPONENT ---
const RevealOnScroll = ({ children, className = "", delay = 0, as: Component = "div" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
};

// --- ASSETS & DATA ---

// Content Dictionary
const content = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      workflow: "Alur Kerja",
      contact: "Hubungi Kami",
      cta: "Konsultasi Gratis"
    },
    hero: {
      tagline: "Your All In One Digital & Creative Growth Partner",
      headline: "Berkolaborasi, Berinovasi, dan Membangun Solusi yang Berdampak.",
      subhead: "Bantu brand Anda berkembang melalui pendekatan kreatif, strategi terarah, dan teknologi digital maksimal.",
      cta_primary: "Mulai Project",
      cta_secondary: "Lihat Portfolio"
    },
    stats: {
      items: [
        { label: "ROAS (Return on Ad Spend)", value: "20X" },
        { label: "Leads Generated", value: "1.500+" },
        { label: "Partner Brand", value: "50+" },
        { label: "Tahun Pengalaman", value: "5+" }
      ]
    },
    about: {
      title: "Tentang Kreaksi",
      desc: "Berdiri sejak 2019, Kreaksi adalah digital & creative agency yang bekerja secara remote. Kami percaya setiap brand memiliki cerita dan potensi yang bisa dibawa lebih jauh dengan eksekusi yang tepat.",
      values: [
        { title: "Elevated Creativity", desc: "Kreativitas tingkat tinggi untuk setiap solusi." },
        { title: "Strategic Collaboration", desc: "Kolaborasi erat demi strategi yang tepat sasaran." },
        { title: "Adaptive Precision", desc: "Presisi dalam beradaptasi dengan tren digital." },
        { title: "Uncompromising Integrity", desc: "Integritas dan transparansi tanpa kompromi." }
      ]
    },
    services: {
      title: "Layanan Kami",
      subtitle: "Solusi Kreatif & Digital Dalam Satu Tempat",
      pricing_note: "*Harga mulai dari",
      items: [
        {
          id: 1,
          icon: <BarChart className="w-10 h-10 text-yellow-400" />,
          title: "Digital Advertising",
          desc: "Strategi iklan berbasis data (Google, Meta, TikTok) untuk menjangkau audiens yang tepat.",
          price: "Rp 3.000.000",
          features: ["Digital Strategy", "Campaign Optimasi", "Paid Ads Handling", "Reporting Bulanan"]
        },
        {
          id: 2,
          icon: <Monitor className="w-10 h-10 text-yellow-400" />,
          title: "Website Development",
          desc: "Landing Page modern, responsif, dan high-conversion untuk mendukung bisnis.",
          price: "Rp 2.500.000",
          features: ["Landing Page Design", "Free Domain + Hosting", "Mobile Responsive", "SEO Basic"]
        },
        {
          id: 3,
          icon: <Smartphone className="w-10 h-10 text-yellow-400" />,
          title: "Super Apps Development",
          desc: "Ekosistem terintegrasi website, CMS Admin, dan Mobile Apps (iOS & Android).",
          price: "Rp 50.000.000",
          features: ["Website Building", "Cloud Storage", "CMS Admin", "iOS & Android Apps"]
        },
        {
          id: 4,
          icon: <PenTool className="w-10 h-10 text-yellow-400" />,
          title: "Branding & Identity",
          desc: "Membangun identitas visual yang utuh untuk kepercayaan dan loyalitas pelanggan.",
          price: "Rp 2.000.000",
          features: ["Company Profile", "Brand Guideline", "Logo Structure", "Color Palette"]
        },
        {
          id: 5,
          icon: <Share2 className="w-10 h-10 text-yellow-400" />,
          title: "Social Media Handling",
          desc: "Pengelolaan akun strategis: Konten Pillar, Kalender, hingga Posting Terjadwal.",
          price: "Rp 5.000.000/bln",
          features: ["Content Pillar", "Copywriting & Narasi", "Produksi Konten", "Admin Posting"]
        },
        {
          id: 6,
          icon: <Camera className="w-10 h-10 text-yellow-400" />,
          title: "Photography & Video",
          desc: "Aset visual berkualitas tinggi untuk mendukung branding dan promosi produk.",
          price: "Rp 1.000.000/project",
          features: ["Photo Product", "Video Commercial", "Digital Imaging", "Editing Professional"]
        }
      ]
    },
    workflow: {
      title: "Alur Kerja",
      steps: [
        { title: "Discovery & Research", desc: "Memahami kebutuhan dan tujuan bisnis Anda secara mendalam." },
        { title: "Ideation & Concepting", desc: "Menyusun strategi kreatif dan konsep visual yang relevan." },
        { title: "Production", desc: "Eksekusi produksi konten atau pengembangan aset digital." },
        { title: "Revision", desc: "Penyempurnaan hingga mencapai standar kualitas terbaik." },
        { title: "Delivery", desc: "Hasil akhir diserahkan lengkap dan siap digunakan." }
      ]
    },
    case_studies: {
      title: "Studi Kasus & Hasil Nyata",
      subtitle: "Bukti dampak strategi kami pada pertumbuhan bisnis partner.",
      cta_text: "Lihat Detail Case Study Lainnya",
      list: [
        {
          title: "Travel Umroh",
          category: "Lead Generation",
          icon: <Users2 className="w-6 h-6" />,
          desc: "Mengelola campaign digital ads untuk brand travel umroh dengan fokus akuisisi leads WhatsApp.",
          stats: [
            { label: "Total Leads", value: "1.500+" },
            { label: "Cost Per Lead", value: "Rp 8.000" },
            { label: "Budget Ads", value: "Rp 13 Juta" }
          ]
        },
        {
          title: "Brand Retail",
          category: "Sales & ROAS",
          icon: <TrendingUp className="w-6 h-6" />,
          desc: "Strategi targeting presisi untuk produk retail guna memaksimalkan nilai pembelian dan ROAS.",
          stats: [
            { label: "Purchase Value", value: "Rp 524 Juta" },
            { label: "ROAS", value: "20X" },
            { label: "Budget Ads", value: "Rp 24 Juta" }
          ]
        }
      ]
    },
    contact: {
      title: "Mari Bangun Sesuatu yang Hebat",
      desc: "Hubungi kami untuk diskusi lebih lanjut mengenai kebutuhan digital brand Anda.",
      btn_wa: "Chat via WhatsApp",
      btn_email: "Kirim Email",
      pm_role: "Project Manager (Reza)",
      bm_role: "Business Manager (Zen)"
    },
    footer: {
      rights: "© 2025 Kreaksi Digital by PT Empat Arah Angin."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      workflow: "Workflow",
      contact: "Contact",
      cta: "Free Consultation"
    },
    hero: {
      tagline: "Your All In One Digital & Creative Growth Partner",
      headline: "Collaborate, Innovate, and Build Solutions That Matter.",
      subhead: "Helping brands grow through creative approaches, strategic direction, and maximum digital technology utilization.",
      cta_primary: "Start Project",
      cta_secondary: "View Portfolio"
    },
    stats: {
      items: [
        { label: "ROAS (Return on Ad Spend)", value: "20X" },
        { label: "Leads Generated", value: "1,500+" },
        { label: "Partner Brands", value: "50+" },
        { label: "Years Experience", value: "5+" }
      ]
    },
    about: {
      title: "About Kreaksi",
      desc: "Established in 2019, Kreaksi is a digital & creative agency working remotely. We believe every brand has a story and potential that can be elevated with the right execution.",
      values: [
        { title: "Elevated Creativity", desc: "High-level creativity for every solution." },
        { title: "Strategic Collaboration", desc: "Close collaboration for targeted strategies." },
        { title: "Adaptive Precision", desc: "Precision in adapting to digital trends." },
        { title: "Uncompromising Integrity", desc: "Integrity and transparency without compromise." }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Creative & Digital Solutions All In One Place",
      pricing_note: "*Starting from",
      items: [
        {
          id: 1,
          icon: <BarChart className="w-10 h-10 text-yellow-400" />,
          title: "Digital Advertising",
          desc: "Data-driven ad strategies (Google, Meta, TikTok) to reach the right audience.",
          price: "Rp 3.000.000",
          features: ["Digital Strategy", "Campaign Optimization", "Paid Ads Handling", "Monthly Reporting"]
        },
        {
          id: 2,
          icon: <Monitor className="w-10 h-10 text-yellow-400" />,
          title: "Website Development",
          desc: "Modern, responsive, and high-conversion landing pages to support business growth.",
          price: "Rp 2.500.000",
          features: ["Landing Page Design", "Free Domain + Hosting", "Mobile Responsive", "SEO Basic"]
        },
        {
          id: 3,
          icon: <Smartphone className="w-10 h-10 text-yellow-400" />,
          title: "Super Apps Development",
          desc: "Integrated ecosystem covering website, CMS Admin, and Mobile Apps (iOS & Android).",
          price: "Rp 50.000.000",
          features: ["Website Building", "Cloud Storage", "CMS Admin", "iOS & Android Apps"]
        },
        {
          id: 4,
          icon: <PenTool className="w-10 h-10 text-yellow-400" />,
          title: "Branding & Identity",
          desc: "Building a complete visual identity to establish trust and customer loyalty.",
          price: "Rp 2.000.000",
          features: ["Company Profile", "Brand Guideline", "Logo Structure", "Color Palette"]
        },
        {
          id: 5,
          icon: <Share2 className="w-10 h-10 text-yellow-400" />,
          title: "Social Media Handling",
          desc: "Strategic account management: Content Pillars, Calendars, and Scheduled Posting.",
          price: "Rp 5.000.000/mo",
          features: ["Content Pillar", "Copywriting & Narrative", "Content Production", "Posting Admin"]
        },
        {
          id: 6,
          icon: <Camera className="w-10 h-10 text-yellow-400" />,
          title: "Photography & Video",
          desc: "High-quality visual assets to support branding and product promotion.",
          price: "Rp 1.000.000/project",
          features: ["Photo Product", "Video Commercial", "Digital Imaging", "Professional Editing"]
        }
      ]
    },
    workflow: {
      title: "Our Workflow",
      steps: [
        { title: "Discovery & Research", desc: "Deeply understanding your business needs and goals." },
        { title: "Ideation & Concepting", desc: "Developing creative strategies and relevant visual concepts." },
        { title: "Production", desc: "Executing content production or digital asset development." },
        { title: "Revision", desc: "Refining until the highest quality standards are met." },
        { title: "Delivery", desc: "Final results delivered complete and ready for use." }
      ]
    },
    case_studies: {
      title: "Case Studies & Real Results",
      subtitle: "Proof of our strategy's impact on partner business growth.",
      cta_text: "View Other Case Studies",
      list: [
        {
          title: "Umrah Travel",
          category: "Lead Generation",
          icon: <Users2 className="w-6 h-6" />,
          desc: "Managed digital ads campaigns for umrah travel brands focused on WhatsApp lead acquisition.",
          stats: [
            { label: "Total Leads", value: "1,500+" },
            { label: "Cost Per Lead", value: "Rp 8,000" },
            { label: "Ads Budget", value: "Rp 13 Mio" }
          ]
        },
        {
          title: "Retail Brand",
          category: "Sales & ROAS",
          icon: <TrendingUp className="w-6 h-6" />,
          desc: "Precise targeting strategy for retail products to maximize purchase value and ROAS.",
          stats: [
            { label: "Purchase Value", value: "Rp 524 Mio" },
            { label: "ROAS", value: "20X" },
            { label: "Ads Budget", value: "Rp 24 Mio" }
          ]
        }
      ]
    },
    contact: {
      title: "Let's Build Something Great",
      desc: "Contact us to discuss your brand's digital needs further.",
      btn_wa: "Chat via WhatsApp",
      btn_email: "Send Email",
      pm_role: "Project Manager (Reza)",
      bm_role: "Business Manager (Zen)"
    },
    footer: {
      rights: "© 2025 Kreaksi Digital by PT Empat Arah Angin."
    }
  }
};

const Navbar = ({ lang, setLang, t, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#111111]/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter flex items-center group cursor-pointer">
          <span className="text-white group-hover:text-gray-300 transition-colors">Kre</span>
          <span className="text-yellow-400 group-hover:rotate-12 transition-transform inline-block">Ə</span>
          <span className="text-white group-hover:text-gray-300 transition-colors">ksi</span>
          <span className="text-xs text-gray-400 font-normal border border-gray-300 px-1 rounded">TW</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {['home', 'about', 'services', 'workflow'].map((key) => (
            <li key={key}><a href={`#${key}`} className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors hover:scale-105 transform block">
              {t.nav[key]}
            </a></li>
          ))}
          
          {/* Language Toggle */}
          <li><button 
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-2 text-sm text-white border border-gray-600 px-3 py-1 rounded-full hover:border-yellow-400 transition-all hover:scale-105"
          >
            <Globe className="w-4 h-4 text-yellow-400" />
            <span>{lang.toUpperCase()}</span>
          </button></li>

          <li><a href="#contact" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all transform hover:scale-110 shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]">
            {t.nav.cta}
          </a></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111111] border-b border-gray-800 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-10 duration-300">
          {['home', 'about', 'services', 'workflow', 'contact'].map((key) => (
            <a key={key} href={`#${key}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-yellow-400 text-lg">
              {t.nav[key]}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <span className="text-gray-400">Language / Bahasa</span>
            <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-2 text-white font-bold"
            >
              <Globe className="w-4 h-4 text-yellow-400" />
              {lang === 'id' ? 'Bahasa Indonesia' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ t }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-[#111111] overflow-hidden">
    {/* Abstract Space Background - Animated */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
      <RevealOnScroll>
        <div className="inline-block mb-6 px-4 py-1 border border-yellow-400/30 rounded-full bg-yellow-400/10 backdrop-blur-sm hover:border-yellow-400/60 transition-colors">
          <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">{t.hero.tagline}</span>
        </div>
      </RevealOnScroll>
      
      <RevealOnScroll delay={200}>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
          {t.hero.headline}
        </h1>
      </RevealOnScroll>
      
      <RevealOnScroll delay={400}>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {t.hero.subhead}
        </p>
      </RevealOnScroll>
      
      <RevealOnScroll delay={600}>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="group bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 transform hover:scale-105">
            {t.hero.cta_primary} <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="https://drive.google.com/file/d/139stp6d1CFdRJm3E1a0wzy7EXbE-v3xX/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-yellow-400 hover:text-yellow-400 transition-all hover:bg-white/5"
          >
            {t.hero.cta_secondary}
          </a>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Stats = ({ t }) => (
  <section className="bg-black py-12 border-y border-gray-900">
    <dl className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {t.stats.items.map((stat, idx) => (
        <RevealOnScroll key={idx} delay={idx * 150} className="text-center group hover:transform hover:-translate-y-1 transition-transform">
          <dd className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">{stat.value}</dd>
          <dt className="text-gray-500 text-sm md:text-base uppercase tracking-wider group-hover:text-gray-400">{stat.label}</dt>
        </RevealOnScroll>
      ))}
    </dl>
  </section>
);

const About = ({ t }) => (
  <section id="about" className="py-24 bg-[#111111] text-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <RevealOnScroll>
            <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm">| {t.nav.about}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              {t.about.desc}
            </p>
          </RevealOnScroll>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.about.values.map((val, idx) => (
              <RevealOnScroll as="li" key={idx} delay={300 + (idx * 100)}>
                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all hover:bg-[#222]">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400" /> {val.title}
                  </h4>
                  <p className="text-sm text-gray-500">{val.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
        <div className="relative">
          <RevealOnScroll delay={200}>
            {/* Visual representation of "Creative Space" */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-gray-700 relative p-8 flex flex-col justify-end hover:scale-[1.02] transition-transform duration-500 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Users className="w-16 h-16 text-yellow-400 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Remote-First Agency</h4>
                <p className="text-gray-400">Collaborating across boundaries to deliver excellence.</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const Services = ({ t }) => (
  <section id="services" className="py-24 bg-black text-white relative">
    <div className="container mx-auto px-6">
      <RevealOnScroll className="text-center mb-16">
        <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm">| {t.nav.services}</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">{t.services.subtitle}</p>
      </RevealOnScroll>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((service, idx) => (
          <RevealOnScroll as="li" key={service.id} delay={idx * 100}>
            <div className="h-full group bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/5">
              <div className="mb-6 bg-[#1a1a1a] w-fit p-4 rounded-xl group-hover:bg-yellow-400/20 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{service.title}</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{service.desc}</p>
              
              <ul className="space-y-3 mb-6 border-t border-gray-800 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 flex items-end justify-between">
                <div>
                  <span className="text-xs text-gray-500 block mb-1">{t.services.pricing_note}</span>
                  <span className="text-xl font-bold text-yellow-400">{service.price}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </ul>
    </div>
  </section>
);

const CaseStudy = ({ t }) => (
  <section className="py-24 bg-[#111111] text-white">
    <div className="container mx-auto px-6">
      <RevealOnScroll className="text-center mb-16">
        <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm">| SUCCESS STORIES</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-4">{t.case_studies.title}</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">{t.case_studies.subtitle}</p>
      </RevealOnScroll>
      
      <ul className="grid md:grid-cols-2 gap-8">
        {t.case_studies.list.map((study, index) => (
          <RevealOnScroll as="li" key={index} delay={index * 200}>
            <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 relative overflow-hidden group hover:border-yellow-400/50 transition-colors">
              {/* Background Accents */}
              <div className={`absolute top-0 right-0 w-48 h-48 ${index % 2 === 0 ? 'bg-yellow-400/10' : 'bg-purple-500/10'} rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#1a1a1a] rounded-xl border border-gray-700 text-yellow-400">
                    {study.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">{study.title}</h4>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">{study.category}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-8 flex-grow">{study.desc}</p>
                
                <dl className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-6">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="text-center md:text-left">
                      <dd className="text-yellow-400 text-xl font-bold mb-1">{stat.value}</dd>
                      <dt className="text-gray-500 text-[10px] uppercase tracking-wide leading-tight">{stat.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </ul>
      
      <RevealOnScroll delay={400} className="mt-12 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-yellow-400 pb-1 hover:text-yellow-400 transition-colors group">
          {t.case_studies.cta_text} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </RevealOnScroll>
    </div>
  </section>
);

const Workflow = ({ t }) => (
  <section id="workflow" className="py-24 bg-black text-white">
    <div className="container mx-auto px-6">
      <RevealOnScroll className="text-center mb-16">
        <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm">| {t.nav.workflow}</h2>
        <h3 className="text-3xl md:text-4xl font-bold">{t.workflow.title}</h3>
      </RevealOnScroll>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {t.workflow.steps.map((step, idx) => (
            <RevealOnScroll as="li" key={idx} delay={idx * 200}>
              <div className="bg-[#111111] p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all text-center group hover:-translate-y-2 h-full">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-colors ring-4 ring-black shadow-lg">
                  {idx + 1}
                </div>
                <h4 className="font-bold mb-2 text-sm group-hover:text-yellow-400 transition-colors">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const Contact = ({ t }) => (
  <section id="contact" className="py-24 bg-[#111111] text-white">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-gray-800 text-center hover:border-gray-700 transition-colors">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-gray-400 mb-10 text-lg">{t.contact.desc}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/6282233660335?text=Halo%2C%20saya%20mau%20tanya%20tanya%20tentang%20Kreaksi%20Digital" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
            >
              <Phone className="w-5 h-5" /> {t.contact.btn_wa}
            </a>
            <a href="mailto:kreaksidigitalagency@gmail.com" className="flex items-center justify-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-700 transition-all border border-gray-700 transform hover:scale-105">
              <Mail className="w-5 h-5" /> {t.contact.btn_email}
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 grid md:grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-gray-500 text-sm block mb-1">{t.contact.pm_role}</span>
              <span className="text-white font-mono hover:text-yellow-400 transition-colors cursor-default">+62 822-3366-0335</span>
            </div>
            <div className="md:text-right">
              <span className="text-gray-500 text-sm block mb-1">{t.contact.bm_role}</span>
              <span className="text-white font-mono hover:text-yellow-400 transition-colors cursor-default">+62 813-8182-3633</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer className="bg-black text-gray-500 py-8 border-t border-gray-900">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm">{t.footer.rights}</div>
      <div className="flex gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">
          <span className="sr-only">Instagram</span>
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  const [lang, setLang] = useState('id'); // Default Indonesian
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize Meta Pixel
  useEffect(() => {
    // Only init if ID is provided and not already initialized
    if (META_PIXEL_ID && META_PIXEL_ID !== "YOUR_PIXEL_ID_HERE") {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  // Scroll listener for Navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#111111] font-sans selection:bg-yellow-400 selection:text-black">
      {/* Meta Pixel Noscript Fallback */}
      {META_PIXEL_ID && META_PIXEL_ID !== "YOUR_PIXEL_ID_HERE" && (
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="pixel"
          />
        </noscript>
      )}

      <Navbar lang={lang} setLang={setLang} t={t} isScrolled={isScrolled} />
      <Hero t={t} />
      <Stats t={t} />
      <About t={t} />
      <Services t={t} />
      <CaseStudy t={t} />
      <Workflow t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}