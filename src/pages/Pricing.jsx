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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable data={pricingSections} />

          <div className="mt-8 bg-blue-faint rounded-2xl p-6 border border-blue-pale flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-blue" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-navy-mid text-sm">Need help choosing?</p>
              <p className="text-ink-soft text-sm mt-0.5">
                Call or text us and we'll help you find the right package.
              </p>
            </div>
            <a
              href={siteContent.business.phoneLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white text-sm font-semibold shadow hover:shadow-glow hover:scale-105 transition-all flex-shrink-0"
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
