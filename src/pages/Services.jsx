import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../components/ui/Accordion';
import PageHero from '../components/layout/PageHero';
import { HERO_IMAGES } from '../data/heroImages';
import { siteContent } from '../data/content';
import {
  ArrowRight,
  Droplet,
  Zap,
  Radio,
  Leaf,
  Sparkles,
  Users,
  ChevronRight,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';

const iconMap = {
  droplet: Droplet,
  zap: Zap,
  radio: Radio,
  leaf: Leaf,
  sparkles: Sparkles,
  users: Users,
};

const serviceImages = {
  'colon-hydrotherapy': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80&auto=format&fit=crop',
  'ion-foot-detox':     'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80&auto=format&fit=crop',
  'biocharger':         'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80&auto=format&fit=crop',
  'liver-cleanse':      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80&auto=format&fit=crop',
  'mineralizing-soak':  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
  'community-resources':'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80&auto=format&fit=crop',
};

/* ─────────────────────────────────────────
   1. COLON HYDROTHERAPY VIEW
───────────────────────────────────────── */
const ColonHydrotherapyView = ({ services, image }) => (
  <div className="space-y-10">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B36C63]">
          Core Hydrotherapy Modality
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#38838A]" />
        <span className="text-xs text-slate-500 font-semibold">FDA-Registered Equipment</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
        Colon Hydrotherapy
      </h2>
      <p className="text-base sm:text-lg text-[#050F2C]/80 max-w-3xl leading-relaxed font-medium">
        {services.colonHydrotherapy.description}
      </p>
    </div>

    <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
      <img src={image} alt="Colon Hydrotherapy" className="w-full h-full object-cover" />
    </div>

    <div className="grid lg:grid-cols-12 gap-12 pt-2">
      <div className="lg:col-span-6 space-y-8">
        <div>
          <h3 className="text-xl font-bold font-display text-[#050F2C] mb-4 pb-2 border-b border-[#E2EEEC]">
            Systems Available
          </h3>
          <ul className="space-y-4 text-sm text-[#050F2C]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#050F2C] font-bold block text-base mb-0.5">Closed System</strong>
                <span>{services.colonHydrotherapy.systems.closed}</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#050F2C] font-bold block text-base mb-0.5">Open System (Angel of Water)</strong>
                <span>{services.colonHydrotherapy.systems.open}</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold font-display text-[#050F2C] mb-3">
            May Help Support
          </h3>
          <div className="flex flex-wrap gap-2">
            {services.colonHydrotherapy.mayHelpWith.map((item, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-full bg-sky-50 text-[#050F2C] text-xs font-semibold border border-sky-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-8">
        <div>
          <h3 className="text-xl font-bold font-display text-[#050F2C] mb-4 pb-2 border-b border-[#E2EEEC]">
            Treatment Benefits
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#050F2C]/80">
            {services.colonHydrotherapy.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B36C63] flex-shrink-0 mt-1" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold font-display text-[#050F2C] mb-3">
            Frequently Asked Questions
          </h3>
          <Accordion items={[
            { title: services.colonHydrotherapy.misconceptions.title, content: services.colonHydrotherapy.misconceptions.items },
            {
              title: services.colonHydrotherapy.contraindications.title,
              content: (
                <div>
                  <p className="mb-3 text-[#050F2C]/80 text-sm font-medium">{services.colonHydrotherapy.contraindications.note}</p>
                  <div className="flex flex-wrap gap-2">
                    {services.colonHydrotherapy.contraindications.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-rose-50 text-[#B36C63] text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            },
            { title: services.colonHydrotherapy.expectations.title, content: services.colonHydrotherapy.expectations.items },
          ]} />
        </div>
      </div>
    </div>

    <div className="pt-4">
      <a
        href={siteContent.business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-lg hover:scale-105 transition-all"
      >
        Book Colon Hydrotherapy Session <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   2. ION FOOT DETOX VIEW
───────────────────────────────────────── */
const IonFootDetoxView = ({ services, image }) => (
  <div className="space-y-10">
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#38838A] mb-3 block">
        Cellular Detoxification
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
        Ion Foot Detox
      </h2>
      <p className="text-base sm:text-lg text-[#050F2C]/80 max-w-3xl leading-relaxed font-medium">
        {services.ionFootDetox.description}
      </p>
    </div>

    <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
      <img src={image} alt="Ion Foot Detox" className="w-full h-full object-cover" />
    </div>

    <div className="grid lg:grid-cols-12 gap-12 pt-2">
      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Session Specifications
        </h3>
        <ul className="space-y-4 text-sm text-[#050F2C]/80">
          <li className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#38838A]" />
            <span className="text-base"><strong>Duration:</strong> {services.ionFootDetox.duration}</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
            <span className="text-base">{services.ionFootDetox.effects}</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
            <span className="text-base">{services.ionFootDetox.ageLimit}</span>
          </li>
        </ul>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Equipment Standards
        </h3>
        <p className="text-base text-[#050F2C]/80 leading-relaxed">
          {services.ionFootDetox.dealerNote}
        </p>
        <div className="pt-4">
          <h4 className="font-bold text-lg text-[#050F2C] mb-1">{services.ionFootDetox.addOn.title}</h4>
          <p className="text-sm text-[#050F2C]/70 mb-6">{services.ionFootDetox.addOn.description}</p>
          <a
            href={siteContent.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-md hover:scale-105 transition-all"
          >
            Book Ion Foot Detox <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   3. BIOCHARGER VIEW
───────────────────────────────────────── */
const BioChargerView = ({ services, image }) => (
  <div className="space-y-10">
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#93C5FD] mb-3 block">
        Subtle Energy Technology
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
        BioCharger NG
      </h2>
      <p className="text-base sm:text-lg text-[#050F2C]/80 max-w-3xl leading-relaxed font-medium">
        {services.biocharger.description}
      </p>
    </div>

    <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
      <img src={image} alt="BioCharger NG" className="w-full h-full object-cover" />
    </div>

    <div className="grid lg:grid-cols-12 gap-12 pt-2">
      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          How It Operates
        </h3>
        <p className="text-base text-[#050F2C]/80 leading-relaxed">
          {services.biocharger.pathways}
        </p>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Special Offer & Demo
        </h3>
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100">
          <p className="text-xs font-bold text-[#38838A] uppercase tracking-wider mb-1">Package Special</p>
          <p className="text-[#050F2C] font-bold text-lg">{services.biocharger.discount}</p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={services.biocharger.videoDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary-new text-sm font-bold shadow-md hover:scale-105 transition-all"
          >
            Watch Demo Video <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={services.biocharger.faqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#38838A] text-[#050F2C] font-semibold text-sm hover:bg-sky-50 transition-all"
          >
            BioCharger FAQ
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   4. LIVER CLEANSE VIEW
───────────────────────────────────────── */
const LiverCleanseView = ({ services, image }) => (
  <div className="space-y-10">
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#B36C63] mb-3 block">
        Targeted Organ Protocol
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
        Liver & Gallbladder Flush
      </h2>
      <p className="text-base sm:text-lg text-[#050F2C]/80 max-w-3xl leading-relaxed font-medium">
        {services.liverCleanse.protocol}
      </p>
    </div>

    <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
      <img src={image} alt="Liver Cleanse" className="w-full h-full object-cover" />
    </div>

    <div className="grid lg:grid-cols-12 gap-12 pt-2">
      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Program Details
        </h3>
        <p className="text-base text-[#050F2C]/80 leading-relaxed">
          {services.liverCleanse.program}
        </p>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Investment & Booking
        </h3>
        <p className="text-4xl font-display font-bold text-[#38838A]">{services.liverCleanse.price}</p>
        <p className="text-sm text-[#050F2C]/70">{services.liverCleanse.bookingNote}</p>
        <div className="pt-2">
          <a
            href={siteContent.business.phoneLink}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-lg hover:scale-105 transition-all"
          >
            Call to Book Protocol <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   5. MINERALIZING SOAK VIEW
───────────────────────────────────────── */
const MineralizingSoakView = ({ services, image }) => (
  <div className="space-y-10">
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#38838A] mb-3 block">
        Restorative Hydro-Therapy
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
        Mineralizing Bath Soak
      </h2>
      <p className="text-base sm:text-lg text-[#050F2C]/80 max-w-3xl leading-relaxed font-medium">
        Replenishing magnesium and mineral soak designed to ease muscular tension and recharge your nervous system.
      </p>
    </div>

    <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
      <img src={image} alt="Mineralizing Bath Soak" className="w-full h-full object-cover" />
    </div>

    <div className="grid md:grid-cols-2 gap-8 pt-2">
      <div className="space-y-3 pb-4 border-b md:border-b-0 md:border-r border-[#E2EEEC] md:pr-8">
        <h3 className="text-xl font-bold font-display text-[#050F2C]">Standalone Session</h3>
        <p className="text-4xl font-display font-bold text-[#38838A]">{services.mineralizingSoak.standalone}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold font-display text-[#050F2C]">Combined with Foot Detox</h3>
        <p className="text-4xl font-display font-bold text-[#B36C63]">{services.mineralizingSoak.combined}</p>
      </div>
    </div>

    <div className="pt-4">
      <a
        href={siteContent.business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-lg hover:scale-105 transition-all"
      >
        Book Bath Soak <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);



const detailPanelMap = {
  'colon-hydrotherapy': (s, img) => <ColonHydrotherapyView services={s} image={img} />,
  'ion-foot-detox': (s, img) => <IonFootDetoxView services={s} image={img} />,
  'biocharger': (s, img) => <BioChargerView services={s} image={img} />,
  'liver-cleanse': (s, img) => <LiverCleanseView services={s} image={img} />,
  'mineralizing-soak': (s, img) => <MineralizingSoakView services={s} image={img} />,
};

/* ─────────────────────────────────────────
   Main Services Page Component
───────────────────────────────────────── */
const Services = () => {
  const { category } = useParams();
  const services = siteContent.services;
  const tabs = services.tabs;

  const defaultIndex = category
    ? Math.max(0, tabs.findIndex((t) => t.id === category))
    : 0;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const detailRef = useRef(null);

  const activeTab = tabs[activeIndex];

  const handleSelect = (index) => {
    setActiveIndex(index);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const [prevCategory, setPrevCategory] = useState(category);
  if (category !== prevCategory) {
    setPrevCategory(category);
    if (category) {
      const idx = tabs.findIndex((t) => t.id === category);
      if (idx >= 0) setActiveIndex(idx);
    }
  }

  return (
    <div>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Explore our complete range of detox and wellness treatments."
        isGradient
      />

      <section className="py-16 bg-[#F9FAF6] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Minimalist Horizontal Text Tabs directly on page */}
          <div className="mb-14 border-b border-[#E2EEEC]">
            <div className="flex items-center overflow-x-auto no-scrollbar space-x-6 sm:space-x-10 pb-4">
              {tabs.map((tab, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelect(i)}
                    className={`whitespace-nowrap pb-2 text-sm sm:text-base font-bold transition-all relative ${
                      isActive
                        ? 'text-[#050F2C]'
                        : 'text-[#050F2C]/60 hover:text-[#050F2C]'
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B36C63] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Editorial Treatment View directly on page */}
          <div ref={detailRef} className="scroll-mt-24">
            {detailPanelMap[activeTab.id]?.(services, serviceImages[activeTab.id])}
          </div>

          {/* Clean Bottom Navigation Bar */}
          <div className="mt-20 pt-8 border-t border-[#E2EEEC] flex items-center justify-between gap-4">
            <button
              onClick={() => handleSelect((activeIndex - 1 + tabs.length) % tabs.length)}
              className="flex items-center gap-2 text-sm text-[#050F2C] hover:text-[#38838A] font-bold transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180 text-[#38838A]" />
              <span>{tabs[(activeIndex - 1 + tabs.length) % tabs.length].label}</span>
            </button>

            <span className="text-xs text-slate-400 font-bold hidden sm:inline">
              Treatment {activeIndex + 1} of {tabs.length}
            </span>

            <button
              onClick={() => handleSelect((activeIndex + 1) % tabs.length)}
              className="flex items-center gap-2 text-sm text-[#050F2C] hover:text-[#38838A] font-bold transition-colors"
            >
              <span>{tabs[(activeIndex + 1) % tabs.length].label}</span>
              <ChevronRight className="w-4 h-4 text-[#38838A]" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
