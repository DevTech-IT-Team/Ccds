import PricingTable from '../components/ui/PricingTable';
import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
import { pricingData } from '../data/pricing';
import { siteContent } from '../data/content';
import { ArrowRight, Phone } from 'lucide-react';

const Pricing = () => {
  const pricingSections = [
    pricingData.colonHydrotherapy,
    pricingData.ionFootDetox,
    pricingData.biocharger,
    pricingData.other,
  ];

  return (
    <div>
      <PageHero
        label="Transparent Pricing"
        title="Simple, Clear Pricing"
        subtitle="No hidden fees. Every package, every session — priced upfront."
        image={HERO_IMAGES.pricing}
      />

      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue uppercase tracking-widest mb-2 block">
              Upfront Rates
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-mid">
              Service Packages & Single Sessions
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-rose mx-auto" />
          </div>

          {/* Pricing Table Wrapper */}
          <div className="bg-white rounded-3xl border border-blue-pale shadow-card p-2 sm:p-6 md:p-8">
            <PricingTable data={pricingSections} />
          </div>

          {/* Consultation Banner */}
          <div className="mt-10 bg-gradient-to-br from-navy via-navy-mid to-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-blue-btn/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-glow" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Need help choosing a plan?</h3>
                <p className="text-blue-glow/80 text-sm mt-0.5">
                  Call or text us and we'll help tailor the right package for your wellness goals.
                </p>
              </div>
            </div>

            <a
              href={siteContent.business.phoneLink}
              className="relative z-10 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-navy-mid text-sm font-bold shadow-lg hover:bg-blue-faint hover:scale-105 transition-all flex-shrink-0"
            >
              {siteContent.business.phone} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pricing;