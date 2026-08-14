import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '../../data/content';

const PricingCards = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#F9FAF6] to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E2EEEC]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#B2D4D0]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#050F2C] tracking-tight uppercase">
            CHOOSE YOUR WELLNESS JOURNEY
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600 font-medium">
            Optimal Gut Health & Vitality. Compare Our Monthly Plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Unlimited Wellness Plan - Highlighted Card */}
          <div className="relative bg-[#EAF5F3] rounded-[2rem] p-8 sm:p-10 border-2 border-[#38838A] shadow-xl flex flex-col transform md:-translate-y-4 transition-transform duration-300 hover:shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#050F2C] uppercase tracking-wide">
                Unlimited Wellness Plan
              </h3>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-black text-[#050F2C]">$299</span>
                <span className="text-lg font-bold text-[#050F2C]"> / MONTH</span>
              </div>
              <p className="text-slate-700 font-medium">
                Comprehensive Health & Training
              </p>
            </div>

            <hr className="border-[#38838A]/20 mb-8" />

            <div className="space-y-5 flex-1 mb-10">
              {[
                'Unlimited 30-Minute Colonics',
                'Unlimited 10-Minute BioCharger Sessions',
                'Unlimited 10-Minute Foot Detox Sessions',
                'One Free Consultation (Initial Session)',
                '15-Minute Follow-Up Consultation (After 3 Sessions/3 Months)',
                'Full Access: Colonic Academy Training & Certification Program'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#38838A] flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-slate-800 font-medium leading-tight pt-0.5">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-full bg-[#38838A] text-white font-bold text-lg shadow-lg hover:bg-[#2A666B] hover:shadow-xl transition-all duration-300"
              >
                SUBSCRIBE NOW
              </a>
              <p className="text-xs font-semibold text-slate-600 mt-4">
                *Additional time: $1/minute (Colonics, BC, FD)
              </p>
            </div>
          </div>

          {/* Essential Wellness Plan - Standard Card */}
          <div className="relative bg-white rounded-[2rem] p-8 sm:p-10 border border-[#E2EEEC] shadow-lg flex flex-col transition-transform duration-300 hover:shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#050F2C] uppercase tracking-wide">
                Essential Wellness Plan
              </h3>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-black text-[#050F2C]">$99</span>
                <span className="text-lg font-bold text-[#050F2C]"> / MONTH</span>
              </div>
              <p className="text-slate-600 font-medium">
                Monthly Gut Health Support
              </p>
            </div>

            <hr className="border-[#E2EEEC] mb-8" />

            <div className="space-y-5 flex-1 mb-10">
              {[
                '1 Colonic Session Per Month',
                'Unlimited 10-Minute BioCharger Sessions',
                'Unlimited 10-Minute Foot Detox Sessions',
                'One Free Consultation (Initial Session)',
                'Membership to Colonic Academy'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-400 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-slate-700 font-medium leading-tight pt-0.5">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-full bg-[#3B82F6] text-white font-bold text-lg shadow-lg hover:bg-[#2563EB] hover:shadow-xl transition-all duration-300"
              >
                SUBSCRIBE NOW
              </a>
              <p className="text-xs font-semibold text-slate-500 mt-4">
                *Additional time: $1/minute (BioCharger, Foot Detox)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingCards;
