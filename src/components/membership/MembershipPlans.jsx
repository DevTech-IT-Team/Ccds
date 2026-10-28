import { Check, ArrowRight } from 'lucide-react';
import { siteContent } from '../../data/content';

const MembershipPlans = () => {
  const bookingUrl = siteContent.business.bookingUrl;

  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A] mb-3">
            Choose what fits
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] tracking-tight mb-4">
            Two simple ways to belong.
          </h2>
          <p className="text-[#050F2C]/70 text-base sm:text-lg leading-relaxed">
            Both memberships include colon hydrotherapy, BioCharger access, Foot Detox access, and preferred member upgrades.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          
          {/* Plan 1: Essential Membership */}
          <div className="relative flex flex-col p-8 sm:p-10 rounded-3xl bg-white border border-[#E2EEEC] shadow-md hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050F2C] mb-2">
                Essential Membership
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#050F2C]">
                  $99
                </span>
                <span className="text-[#050F2C]/60 text-sm font-semibold">
                  / month
                </span>
              </div>

              <p className="text-xs sm:text-sm font-bold text-[#38838A] mb-5">
                Best for steady monthly care
              </p>

              {/* Value Highlight Box */}
              <div className="p-4 rounded-2xl bg-[#EAF5F7] border border-[#D7E3E6] text-xs sm:text-sm leading-relaxed text-[#050F2C] mb-6">
                <strong className="font-bold text-[#050F2C]">Save $46 each month</strong> on your included colonic—a potential $552 annual savings compared with the regular $145 price.
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      One 30-minute colonic appointment each month
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Includes approximately 25 minutes of table time
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Additional 30-minute colonics for $100
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Regular price: $145
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Included BioCharger General Tonic recipe
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Approximately 10–12 minutes per eligible visit
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Included 10-minute Foot Detox sessions
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Within established safety and scheduling guidelines
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Preferred member upgrades
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      50-minute table time +$30 · 30-minute Foot Detox +$20 · Additional BioCharger recipes $20 each
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-[#E2EEEC]/60 space-y-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#050F2C]/30 hover:border-[#050F2C] bg-[#FAF8F5] hover:bg-white text-[#050F2C] text-sm font-bold transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                Choose Essential
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-[#050F2C]/60 text-center leading-relaxed">
                Monthly benefits do not roll over. Use them within the current billing period.
              </p>
            </div>
          </div>

          {/* Plan 2: Unlimited Membership (Featured) */}
          <div className="relative flex flex-col p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#38838A] shadow-xl hover:shadow-2xl transition-all duration-300 md:-translate-y-2">
            
            {/* Top Ribbon */}
            <div className="absolute -top-3.5 right-6 sm:right-8 px-4 py-1.5 rounded-full bg-[#38838A] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-xs">
              Maximum flexibility
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050F2C] mb-2">
                Unlimited Membership
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#050F2C]">
                  $299
                </span>
                <span className="text-[#050F2C]/60 text-sm font-semibold">
                  / month
                </span>
              </div>

              <p className="text-xs sm:text-sm font-bold text-[#38838A] mb-5">
                Best for practitioner-approved frequent care
              </p>

              {/* Value Highlight Box */}
              <div className="p-4 rounded-2xl bg-[#FDF3F1] border border-[#F3D7D2] text-xs sm:text-sm leading-relaxed text-[#050F2C] mb-6">
                <strong className="font-bold text-[#050F2C]">Three regular colonics total $435.</strong> Members pay $299 monthly—a $136 difference before included wellness benefits.
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Up to one 30-minute colonic per day
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      By appointment, subject to availability, client eligibility, and practitioner discretion
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Approximately 25 minutes of table time
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      With each included 30-minute appointment
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Included BioCharger General Tonic recipe
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Approximately 10–12 minutes per eligible visit
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Included 10-minute Foot Detox sessions
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Within established safety and scheduling guidelines
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B36C63]/15 text-[#B36C63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-[#050F2C] font-semibold block">
                      Preferred member upgrades
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      50-minute table time +$30 · 30-minute Foot Detox +$20 · Additional BioCharger recipes $20 each
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-[#E2EEEC]/60 space-y-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#B36C63] hover:bg-[#9E5A52] text-white text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Choose Unlimited
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-[#050F2C]/60 text-center leading-relaxed">
                “Unlimited” does not guarantee daily appointments or override practitioner recommendations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
