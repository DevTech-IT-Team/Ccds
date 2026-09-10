import { CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { siteContent } from '../../data/content';
import peopleImg from '../../assets/people.jpg';

const PricingCards = () => {
  return (
    <section className="py-8 md:py-12 relative bg-gradient-to-b from-[#F9FAF6] to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E2EEEC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#B2D4D0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Date Night Couple's Package Spotlight */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#E2EEEC] shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Image Column - Generously sized, completely unobstructed, and razor-sharp */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[450px] bg-slate-50">
              <img
                src={peopleImg}
                alt="Date Night Couple's Package"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#38838A] shadow-sm flex items-center gap-1.5 border border-[#E2EEEC]">
                <Heart className="w-3.5 h-3.5 fill-[#38838A] text-[#38838A]" />
                <span>Couple's Retreat</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-[#38838A] uppercase">
                      Specialty Couple's Experience
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#050F2C] mt-1">
                      Date Night Couple's Package
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-display font-semibold text-[#38838A] block">$444</span>
                    <span className="inline-block text-xs font-medium text-[#2A656B] bg-[#EAF5F3] px-2.5 py-0.5 rounded-full border border-[#B2D4D0]/50 mt-0.5">
                      2hr 30min
                    </span>
                  </div>
                </div>

                <p className="text-base font-medium text-[#2A656B] mb-2">
                  A healthy date for two!
                </p>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  This service includes two (2) Ion Foot Detoxes and two (2) Colon Hydrotherapy sessions on either the Closed system, the Open system, or both.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 bg-[#F8FBFA] p-3 rounded-xl border border-[#E2EEEC]">
                    <CheckCircle2 className="w-4 h-4 text-[#38838A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      2x Colon Hydrotherapy Sessions (Open or Closed)
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#F8FBFA] p-3 rounded-xl border border-[#E2EEEC]">
                    <CheckCircle2 className="w-4 h-4 text-[#38838A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      2x Ion Foot Detox Sessions
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#F8FBFA] p-3 rounded-xl border border-[#E2EEEC]">
                    <CheckCircle2 className="w-4 h-4 text-[#38838A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      Booked together for a shared relaxing time
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#F8FBFA] p-3 rounded-xl border border-[#E2EEEC]">
                    <CheckCircle2 className="w-4 h-4 text-[#38838A] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      Please allow 2 hours for appointment
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                  <a
                    href={siteContent.business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#38838A] hover:bg-[#2A656B] text-white font-medium text-sm shadow-sm hover:shadow transition-all"
                  >
                    <span>Book Date Night Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-[#F8FBFA] rounded-xl p-3 border border-[#E2EEEC]">
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    ** For existing CCDC Clients. These sessions are booked together. Please allow 2 hours for your appointment. Must be used or shared within 12 months of purchase. No refunds after services begin. If shared, there is a $45.00 initial consultation fee. No cash value. Must be scheduled in advance.
                  </p>
                </div>
              </div>
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
    </section>
  );
};

export default PricingCards;
