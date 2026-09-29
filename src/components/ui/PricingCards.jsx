import { CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { siteContent } from '../../data/content';

const PricingCards = () => {
  return (
    <div className="animate-fade-in transition-all w-full">
      <div className="max-w-4xl mx-auto">

        {/* Date Night Couple's Package Spotlight */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#E2EEEC] shadow-lg overflow-hidden">
          
          {/* Content Column */}
          <div className="p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#38838A] uppercase mb-2 block flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-[#38838A]" /> Specialty Couple's Experience
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#050F2C]">
                  Date Night Couple's Package
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#2A656B] mt-2">
                  A healthy date for two!
                </p>
              </div>
              <div className="lg:text-right flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-1">
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#38838A] block">$444</span>
                <span className="inline-block text-xs font-bold tracking-wide text-[#2A656B] bg-[#EAF5F3] px-3 py-1 rounded-full border border-[#B2D4D0]/50">
                  2hr 30min
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-[15px] sm:text-[17px] font-medium leading-[1.8] mb-10 max-w-3xl">
              This service includes two (2) Ion Foot Detoxes and two (2) Colon Hydrotherapy sessions on either the Closed system, the Open system, or both.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-10">
              <div className="flex items-start gap-3 bg-[#F4F9F8] p-5 rounded-2xl border border-[#E2EEEC]/60">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#050F2C]/80 leading-relaxed">
                  2x Colon Hydrotherapy Sessions (Open or Closed)
                </span>
              </div>
              <div className="flex items-start gap-3 bg-[#F4F9F8] p-5 rounded-2xl border border-[#E2EEEC]/60">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#050F2C]/80 leading-relaxed">
                  2x Ion Foot Detox Sessions
                </span>
              </div>
              <div className="flex items-start gap-3 bg-[#F4F9F8] p-5 rounded-2xl border border-[#E2EEEC]/60">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#050F2C]/80 leading-relaxed">
                  Booked together for a shared relaxing time
                </span>
              </div>
              <div className="flex items-start gap-3 bg-[#F4F9F8] p-5 rounded-2xl border border-[#E2EEEC]/60">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#050F2C]/80 leading-relaxed">
                  Please allow 2 hours for appointment
                </span>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-8 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-[#E2EEEC]/60">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xl:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#38838A] hover:bg-[#2A656B] text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                <span>Book Date Night Package</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed">
                <strong className="text-slate-700">** For existing CCDC Clients.</strong> These sessions are booked together. Please allow 2 hours for your appointment. Must be used or shared within 12 months of purchase. No refunds after services begin. If shared, there is a $45.00 initial consultation fee. No cash value. Must be scheduled in advance.
              </p>
            </div>
          </div>
        </div>

        {/* Commented out for now: Membership and Subscription cards section
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#38838A] uppercase tracking-wider block mb-1">
            Memberships & Subscriptions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-[#050F2C]">
            Choose Your Wellness Journey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
            Optimal Gut Health & Vitality. Compare our monthly wellness plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative bg-[#EAF5F3]/70 rounded-3xl p-7 sm:p-8 border-2 border-[#38838A] shadow-md flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-6">
              <span className="inline-block text-[11px] font-semibold text-[#38838A] bg-white px-3 py-1 rounded-full border border-[#B2D4D0]/50 mb-3 uppercase tracking-wider">
                Most Comprehensive
              </span>
              <h3 className="text-xl font-display font-semibold text-[#050F2C]">
                Unlimited Wellness Plan
              </h3>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-display font-semibold text-[#050F2C]">$299</span>
                <span className="text-sm font-medium text-slate-600"> / month</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm font-normal">
                Comprehensive Health & Training
              </p>
            </div>

            <hr className="border-[#38838A]/20 mb-6" />

            <div className="space-y-4 flex-1 mb-8">
              {[
                'Unlimited 30-Minute Colonics',
                'Unlimited 10-Minute BioCharger Sessions',
                'Unlimited 10-Minute Foot Detox Sessions',
                'One Free Consultation (Initial Session)',
                '15-Minute Follow-Up Consultation (After 3 Sessions/3 Months)',
                'Full Access: Colonic Academy Training & Certification Program'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38838A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-slate-700 text-xs sm:text-sm font-normal leading-snug">
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
                className="block w-full py-3 rounded-full bg-[#38838A] hover:bg-[#2A656B] text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-300"
              >
                Subscribe Now
              </a>
              <p className="text-[11px] text-slate-500 mt-3 font-normal">
                *Additional time: $1/minute (Colonics, BC, FD)
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-[#E2EEEC] shadow-sm flex flex-col transition-all duration-300 hover:shadow-md">
            <div className="text-center mb-6">
              <span className="inline-block text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Essential Care
              </span>
              <h3 className="text-xl font-display font-semibold text-[#050F2C]">
                Essential Wellness Plan
              </h3>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-display font-semibold text-[#050F2C]">$99</span>
                <span className="text-sm font-medium text-slate-600"> / month</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                Monthly Gut Health Support
              </p>
            </div>

            <hr className="border-[#E2EEEC] mb-6" />

            <div className="space-y-4 flex-1 mb-8">
              {[
                '1 Colonic Session Per Month',
                'Unlimited 10-Minute BioCharger Sessions',
                'Unlimited 10-Minute Foot Detox Sessions',
                'One Free Consultation (Initial Session)',
                'Membership to Colonic Academy'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-slate-600 text-xs sm:text-sm font-normal leading-snug">
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
                className="block w-full py-3 rounded-full bg-[#295B6A] hover:bg-[#38838A] text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-300"
              >
                Subscribe Now
              </a>
              <p className="text-[11px] text-slate-500 mt-3 font-normal">
                *Additional time: $1/minute (BioCharger, Foot Detox)
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default PricingCards;
