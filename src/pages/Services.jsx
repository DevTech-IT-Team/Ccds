import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
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
} from 'lucide-react';

/* ─────────────────────────────────────────
   Icon map
───────────────────────────────────────── */
const iconMap = {
  droplet:   Droplet,
  zap:       Zap,
  radio:     Radio,
  leaf:      Leaf,
  sparkles:  Sparkles,
  users:     Users,
};

/* ─────────────────────────────────────────
   Shared primitives
───────────────────────────────────────── */
const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-6 border border-blue-pale shadow-card">
    <h3 className="font-bold text-navy-mid mb-3 text-sm">{title}</h3>
    {children}
  </div>
);

const Tag = ({ children }) => (
  <span className="px-3 py-1 bg-blue-pale text-navy-mid text-xs font-medium rounded-full border border-blue-pale">
    {children}
  </span>
);

/* ─────────────────────────────────────────
   Per-service detail panels
───────────────────────────────────────── */
const ColonHydrotherapy = ({ services }) => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-5">
      <InfoCard title="Systems Available">
        <ul className="space-y-2 text-ink-soft text-sm">
          <li className="flex gap-2"><span className="text-blue mt-0.5">•</span>{services.colonHydrotherapy.systems.closed}</li>
          <li className="flex gap-2"><span className="text-blue mt-0.5">•</span>{services.colonHydrotherapy.systems.open}</li>
        </ul>
      </InfoCard>
      <InfoCard title="Session Details">
        <p className="text-ink-soft text-sm leading-relaxed">{services.colonHydrotherapy.description}</p>
      </InfoCard>
    </div>
    <InfoCard title="May Help With">
      <div className="flex flex-wrap gap-2">
        {services.colonHydrotherapy.mayHelpWith.map((item, i) => <Tag key={i}>{item}</Tag>)}
      </div>
    </InfoCard>
    <InfoCard title="Benefits">
      <ul className="grid sm:grid-cols-2 gap-2">
        {services.colonHydrotherapy.benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-ink-soft text-sm">
            <span className="text-blue mt-0.5 flex-shrink-0">✓</span>{b}
          </li>
        ))}
      </ul>
    </InfoCard>
    <Accordion items={[
      { title: services.colonHydrotherapy.misconceptions.title, content: services.colonHydrotherapy.misconceptions.items },
      {
        title: services.colonHydrotherapy.contraindications.title,
        content: (
          <div>
            <p className="mb-3 text-ink-soft text-sm">{services.colonHydrotherapy.contraindications.note}</p>
            <div className="flex flex-wrap gap-2">
              {services.colonHydrotherapy.contraindications.items.map((item, i) => <Tag key={i}>{item}</Tag>)}
            </div>
          </div>
        ),
      },
      { title: services.colonHydrotherapy.expectations.title, content: services.colonHydrotherapy.expectations.items },
    ]} />
  </div>
);

const IonFootDetox = ({ services }) => (
  <div className="space-y-5">
    <p className="text-ink-soft leading-relaxed">{services.ionFootDetox.description}</p>
    <div className="grid md:grid-cols-2 gap-5">
      <InfoCard title="Session Details">
        <ul className="space-y-2 text-sm text-ink-soft">
          <li className="flex gap-2"><span className="text-blue">•</span>Duration: {services.ionFootDetox.duration}</li>
          <li className="flex gap-2"><span className="text-blue">•</span>{services.ionFootDetox.effects}</li>
          <li className="flex gap-2"><span className="text-blue">•</span>{services.ionFootDetox.ageLimit}</li>
        </ul>
      </InfoCard>
      <InfoCard title="Equipment">
        <p className="text-ink-soft text-sm leading-relaxed">{services.ionFootDetox.dealerNote}</p>
      </InfoCard>
    </div>
    <InfoCard title={services.ionFootDetox.addOn.title}>
      <p className="text-ink-soft text-sm">{services.ionFootDetox.addOn.description}</p>
    </InfoCard>
  </div>
);

const BioCharger = ({ services }) => (
  <div className="space-y-5">
    <p className="text-ink-soft leading-relaxed">{services.biocharger.description}</p>
    <InfoCard title="How It Works">
      <p className="text-ink-soft text-sm">{services.biocharger.pathways}</p>
    </InfoCard>
    <div className="bg-blue-faint rounded-2xl p-6 border border-blue-pale">
      <p className="text-xs font-semibold text-blue uppercase tracking-wide mb-1">Special Offer</p>
      <p className="text-navy-mid font-bold">{services.biocharger.discount}</p>
    </div>
    <div className="flex gap-3 flex-wrap">
      <Button variant="primary" onClick={() => window.open(services.biocharger.videoDemo, '_blank')}>Watch Demo</Button>
      <Button variant="outline" onClick={() => window.open(services.biocharger.faqLink, '_blank')}>FAQ</Button>
    </div>
  </div>
);

const LiverCleanse = ({ services }) => (
  <div className="space-y-5">
    <h3 className="text-xl font-display font-bold text-navy-mid">{services.liverCleanse.title}</h3>
    <p className="text-ink-soft">{services.liverCleanse.protocol}</p>
    <InfoCard title="Program Details">
      <p className="text-ink-soft text-sm mb-3">{services.liverCleanse.program}</p>
      <p className="text-3xl font-display font-bold text-blue">{services.liverCleanse.price}</p>
    </InfoCard>
    <div className="bg-blue-faint rounded-2xl p-5 border border-blue-pale">
      <p className="text-ink-soft text-sm mb-4">{services.liverCleanse.bookingNote}</p>
      <Button variant="primary" onClick={() => window.location.href = siteContent.business.phoneLink}>
        Call to Book
      </Button>
    </div>
  </div>
);

const MineralizingSoak = ({ services }) => (
  <div className="space-y-5">
    <div className="grid md:grid-cols-2 gap-5">
      <InfoCard title="Standalone Session">
        <p className="text-2xl font-display font-bold text-blue">{services.mineralizingSoak.standalone}</p>
      </InfoCard>
      <InfoCard title="With Foot Detox">
        <p className="text-2xl font-display font-bold text-blue">{services.mineralizingSoak.combined}</p>
      </InfoCard>
    </div>
    <Button variant="primary" onClick={() => window.open(siteContent.business.bookingUrl, '_blank')}>
      Book Now <ArrowRight className="w-4 h-4 ml-1" />
    </Button>
  </div>
);

const CommunityResources = ({ services }) => (
  <div className="space-y-5">
    <div className="bg-blue-faint border-l-4 border-blue rounded-r-2xl p-5">
      <p className="text-ink-soft text-sm italic">{services.communityResources.disclaimer}</p>
    </div>
    <h3 className="font-bold text-navy-mid">Referral Resources</h3>
    <div className="grid sm:grid-cols-2 gap-3">
      {services.communityResources.referrals.map((r, i) => (
        <div key={i} className="bg-white rounded-xl p-4 border border-blue-pale shadow-card">
          <p className="font-medium text-navy-mid text-sm">{r.name}</p>
          {r.phone && <p className="text-xs text-ink-soft mt-0.5">{r.phone}</p>}
        </div>
      ))}
    </div>
  </div>
);

const detailPanelMap = {
  'colon-hydrotherapy':  (s) => <ColonHydrotherapy services={s} />,
  'ion-foot-detox':      (s) => <IonFootDetox services={s} />,
  'biocharger':          (s) => <BioCharger services={s} />,
  'liver-cleanse':       (s) => <LiverCleanse services={s} />,
  'mineralizing-soak':   (s) => <MineralizingSoak services={s} />,
  'community-resources': (s) => <CommunityResources services={s} />,
};

/* ─────────────────────────────────────────
   Service selector card
───────────────────────────────────────── */
const ServiceSelectorCard = ({ tab, isActive, onClick, index }) => {
  const Icon = iconMap[tab.icon] || Droplet;

  // Gradient pairs per card index for visual variety
  const gradients = [
    'from-blue to-blue-btn',
    'from-indigo-500 to-blue',
    'from-blue-btn to-sky-400',
    'from-teal-500 to-blue',
    'from-violet-500 to-blue-btn',
    'from-blue to-indigo-400',
  ];
  const grad = gradients[index % gradients.length];

  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left rounded-2xl p-5 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue/30 ${
        isActive
          ? 'bg-gradient-to-br ' + grad + ' border-transparent shadow-lg shadow-blue/20 scale-[1.02]'
          : 'bg-white border-blue-pale hover:border-blue-light hover:shadow-card-hover hover:-translate-y-0.5'
      }`}
      aria-pressed={isActive}
    >
      {/* top shimmer when active */}
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-2xl" />
      )}

      {/* badge */}
      {tab.badge && (
        <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
          isActive ? 'bg-white/20 text-white' : 'bg-blue-pale text-blue'
        }`}>
          {tab.badge}
        </span>
      )}

      {/* icon */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
        isActive
          ? 'bg-white/20 group-hover:bg-white/30'
          : 'bg-blue-faint group-hover:bg-blue-pale group-hover:scale-110'
      }`}>
        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue'}`} />
      </div>

      {/* label */}
      <p className={`font-bold text-sm leading-snug mb-1.5 transition-colors ${
        isActive ? 'text-white' : 'text-navy-mid group-hover:text-blue'
      }`}>
        {tab.label}
      </p>

      {/* blurb */}
      <p className={`text-xs leading-relaxed line-clamp-2 ${
        isActive ? 'text-white/75' : 'text-ink-soft'
      }`}>
        {tab.blurb}
      </p>

      {/* active indicator arrow */}
      <div className={`mt-3 flex items-center gap-1 text-xs font-semibold transition-all ${
        isActive ? 'text-white/90' : 'text-blue opacity-0 group-hover:opacity-100'
      }`}>
        {isActive ? 'Viewing details' : 'View details'}
        <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
      </div>
    </button>
  );
};

/* ─────────────────────────────────────────
   Main page
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
    // Smooth scroll to detail panel on mobile / small screens
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  // Sync if URL param changes
  useEffect(() => {
    if (category) {
      const idx = tabs.findIndex((t) => t.id === category);
      if (idx >= 0) setActiveIndex(idx);
    }
  }, [category]);

  return (
    <div>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Explore our complete range of detox and wellness treatments."
        image={HERO_IMAGES.services}
      />

      <section className="py-16 bg-white relative overflow-hidden">
        {/* subtle background tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(219,234,254,0.4) 0%, transparent 60%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section heading ── */}
          <div className="mb-10">
            <span className="text-xs font-bold text-blue uppercase tracking-widest mb-2 block">6 Treatments</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-mid leading-tight">
              Choose a Service to Explore
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue to-blue-btn" />
          </div>

          {/* ── 6-card selector grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {tabs.map((tab, i) => (
              <ServiceSelectorCard
                key={tab.id}
                tab={tab}
                index={i}
                isActive={activeIndex === i}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>

          {/* ── Detail panel ── */}
          <div
            ref={detailRef}
            className="bg-white rounded-3xl border border-blue-pale shadow-card overflow-hidden scroll-mt-24"
          >
            {/* Panel header */}
            <div className="bg-gradient-to-r from-navy to-navy-mid px-8 py-6 flex items-center gap-4">
              {(() => {
                const Icon = iconMap[activeTab.icon] || Droplet;
                return (
                  <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                );
              })()}
              <div>
                <p className="text-blue-glow/70 text-xs font-semibold uppercase tracking-widest mb-0.5">Service Details</p>
                <h2 className="text-xl font-display font-bold text-white">{activeTab.label}</h2>
              </div>
              {/* tab counter */}
              <div className="ml-auto hidden sm:flex items-center gap-1.5">
                {tabs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    aria-label={`Go to ${tabs[i].label}`}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === activeIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Panel body */}
            <div className="p-6 md:p-8">
              {detailPanelMap[activeTab.id]?.(services)}
            </div>

            {/* Panel footer nav */}
            <div className="border-t border-blue-pale px-6 md:px-8 py-4 bg-blue-faint/50 flex items-center justify-between gap-4">
              <button
                onClick={() => handleSelect((activeIndex - 1 + tabs.length) % tabs.length)}
                className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-navy-mid font-medium transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                {tabs[(activeIndex - 1 + tabs.length) % tabs.length].label}
              </button>
              <span className="text-xs text-ink-soft font-medium">
                {activeIndex + 1} / {tabs.length}
              </span>
              <button
                onClick={() => handleSelect((activeIndex + 1) % tabs.length)}
                className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-navy-mid font-medium transition-colors"
              >
                {tabs[(activeIndex + 1) % tabs.length].label}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
