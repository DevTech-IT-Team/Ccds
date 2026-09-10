import { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import { pricingData } from '../data/pricing';
import { siteContent } from '../data/content';
import { ArrowRight, Phone } from 'lucide-react';
import PricingCards from '../components/ui/PricingCards';

import colonImg from '../assets/service/colon/angel-of-water-treatment-room-2-1.jpg';
import ionImg from '../assets/service/Ionfoot/foot.png';
import bioImg from '../assets/service/Biocharger/bio.png';
import peopleImg from '../assets/people.jpg';

const categories = [
  { id: 'colon-hydrotherapy', label: 'COLON HYDROTHERAPY', image: colonImg, data: pricingData.colonHydrotherapy },
  { id: 'ion-foot-detox', label: 'ION FOOT DETOX', image: ionImg, data: pricingData.ionFootDetox },
  { id: 'packages', label: 'PACKAGES', image: peopleImg, isComponent: true },
  { id: 'biocharger', label: 'BIO CHARGER', image: bioImg, data: pricingData.biocharger },
];

const PricingList = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[2.5rem] shadow-lg border border-[#E2EEEC] overflow-hidden transform transition-all animate-fade-in mt-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F4F9F8] via-[#EAF5F3] to-[#F4F9F8] p-6 sm:p-8 border-b border-[#E2EEEC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#38838A] block mb-1">
            Service Rates
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#050F2C]">
            {data.title}
          </h3>
        </div>
        {data.bookingLink && (
          <a
            href={data.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#38838A] hover:bg-[#2A656B] text-white font-medium text-sm shadow-sm hover:shadow transition-all flex-shrink-0"
          >
            <span>{data.bookingText || 'Book an Appointment'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Items List */}
      <div className="p-6 sm:p-10">
        <ul className="divide-y divide-[#E2EEEC]">
          {data.items.map((item, idx) => (
            <li
              key={idx}
              className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
            >
              <div className="flex-1 pr-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-base sm:text-lg font-display font-medium text-[#050F2C]">
                    {item.package}
                  </span>
                  {item.length && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF5F3] text-[#2A656B] border border-[#B2D4D0]/50">
                      {item.length}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <p className="text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
              <div className="sm:text-right flex-shrink-0 pt-0.5">
                <span className="text-xl sm:text-2xl font-display font-semibold text-[#38838A]">
                  {item.price}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footnote / Policy Note */}
      {data.note && (
        <div className="bg-[#F9FAF8] border-t border-[#E2EEEC] px-6 py-4 sm:px-10">
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            {data.note}
          </p>
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('colon-hydrotherapy');

  return (
    <div>
      <PageHero
        label="Transparent Pricing"
        title="Prices"
        subtitle="Select a service below to view our upfront rates."
        isGradient
      />

      <section className="py-16 md:py-20 bg-[#F9FAF6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* The 4 Category Cards - Bright, Unobstructed, Refined */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group flex flex-col w-full text-left rounded-3xl overflow-hidden bg-white border transition-all duration-300 outline-none ${
                    isActive
                      ? 'border-[#38838A] shadow-lg ring-2 ring-[#38838A]/30 -translate-y-1'
                      : 'border-[#E2EEEC] shadow-xs hover:shadow-md hover:border-[#38838A]/40'
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-4 text-center">
                    <span className={`block font-display text-sm sm:text-base tracking-wide transition-colors ${
                      isActive ? 'text-[#38838A] font-semibold' : 'text-[#050F2C] font-medium group-hover:text-[#38838A]'
                    }`}>
                      {cat.label}
                    </span>
                    <div className={`mt-2 mx-auto h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? 'w-8 bg-[#38838A]' : 'w-0 bg-transparent'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Pricing Section */}
          <div className="mt-8 transition-all duration-500 ease-in-out">
            <div className="animate-fade-in">
              {activeCategory === 'packages' ? (
                <div className="mt-8 bg-white rounded-3xl sm:rounded-[3rem] shadow-lg border border-[#E2EEEC] overflow-hidden">
                  <PricingCards />
                </div>
              ) : (
                <PricingList data={categories.find(c => c.id === activeCategory).data} />
              )}
            </div>
          </div>

          {/* Clean Consultation Banner Strip */}
          <div className="mt-20 bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-[#E2EEEC] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5F3] border border-[#B2D4D0] flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-[#38838A]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-[#050F2C] text-xl sm:text-2xl mb-1">Need help choosing a plan?</h3>
                <p className="text-slate-600 font-normal text-sm sm:text-base">
                  Call or text us and we'll help tailor the right package for your wellness goals.
                </p>
              </div>
            </div>

            <a
              href={siteContent.business.phoneLink}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#38838A] hover:bg-[#2A656B] text-white font-medium text-sm shadow-sm hover:shadow transition-all flex-shrink-0"
            >
              <span>{siteContent.business.phone}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pricing;