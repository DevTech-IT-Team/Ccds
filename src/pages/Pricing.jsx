import { useState } from 'react';
import PricingTable from '../components/ui/PricingTable';
import PageHero from '../components/layout/PageHero';
import { HERO_IMAGES } from '../data/heroImages';
import { pricingData } from '../data/pricing';
import { siteContent } from '../data/content';
import { ArrowRight, Phone, Sparkles, Filter } from 'lucide-react';

import PricingCards from '../components/ui/PricingCards';

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const pricingSections = [
    { ...pricingData.colonHydrotherapy, id: 'colon-hydrotherapy' },
    { ...pricingData.ionFootDetox, id: 'ion-foot-detox' },
    { ...pricingData.biocharger, id: 'biocharger' },
    { ...pricingData.other, id: 'other' },
  ];

  const categoryTabs = [
    { id: 'all', label: 'All Treatments' },
    { id: 'colon-hydrotherapy', label: 'Colon Hydrotherapy' },
    { id: 'ion-foot-detox', label: 'Ion Foot Detox' },
    { id: 'biocharger', label: 'BioCharger' },
    { id: 'other', label: 'Other Services' },
  ];

  return (
    <div>
      <PageHero
        label="Transparent Pricing"
        title="Simple, Clear Pricing"
        subtitle="No hidden fees. Every package, every session — priced upfront."
        image={HERO_IMAGES.pricing}
      />

      {/* Wellness Journey Subscription Cards */}
      <PricingCards />

      {false && (
      <section className="py-16 bg-[#F9FAF6] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#38838A] uppercase tracking-widest mb-2 block">
                Upfront Rates & Transparent Value
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#050F2C]">
                Service Packages & Single Sessions
              </h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#B36C63] to-[#D98E84]" />
            </div>

            {/* Quick Filter Pill Switch: All / Single / Packages */}
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#E2EEEC] shadow-xs">
              <button
                onClick={() => setActiveType('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeType === 'all'
                    ? 'bg-[#050F2C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#050F2C]'
                }`}
              >
                All Options
              </button>
              <button
                onClick={() => setActiveType('single')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeType === 'single'
                    ? 'bg-[#050F2C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#050F2C]'
                }`}
              >
                Single Sessions
              </button>
              <button
                onClick={() => setActiveType('package')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeType === 'package'
                    ? 'bg-[#050F2C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#050F2C]'
                }`}
              >
                Multi-Packs & Bundles
              </button>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-[#38838A] text-white shadow-md scale-105'
                    : 'bg-white border border-[#E2EEEC] text-[#050F2C]/75 hover:bg-slate-50 hover:text-[#050F2C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Unboxed Interactive Pricing Table directly on page background */}
          <PricingTable
            data={pricingSections}
            activeCategory={activeCategory}
            activeType={activeType}
          />

          {/* Clean Consultation Banner Strip */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E2EEEC] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#38838A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#050F2C] text-lg">Need help choosing a plan?</h3>
                <p className="text-slate-600 text-sm mt-0.5">
                  Call or text us and we'll help tailor the right package for your wellness goals.
                </p>
              </div>
            </div>

            <a
              href={siteContent.business.phoneLink}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full btn-primary-new text-sm font-bold shadow-md hover:scale-105 transition-all flex-shrink-0"
            >
              <span>{siteContent.business.phone}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
      )}
    </div>
  );
};

export default Pricing;