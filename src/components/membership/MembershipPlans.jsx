import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../data/content';
import flyerImg from '../../assets/membership/Colorado-Colonics-Membership-Flyer.jpg';

const MembershipPlans = () => {
  const bookingUrl = siteContent.business.bookingUrl;

  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A] mb-3">
            Choose what fits
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] tracking-tight mb-4">
            Choose Your Membership
          </h2>
          <p className="text-[#050F2C]/70 text-base sm:text-lg leading-relaxed">
            Essential & VIP options designed for your digestive wellness and whole-body vitality.
          </p>
        </div>

        {/* Membership Flyer Image Showcase */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#E2EEEC] p-3 sm:p-5 md:p-6">
            <img
              src={flyerImg}
              alt="Colorado Colonics Membership Plans - Essential Membership $99 and VIP Membership $297"
              className="w-full h-auto rounded-2xl mx-auto object-contain shadow-sm"
              loading="eager"
            />
          </div>

          {/* Action CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#050F2C] text-white text-sm sm:text-base font-bold hover:bg-[#38838A] transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              Join Essential Membership · $99/mo
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B36C63] text-white text-sm sm:text-base font-bold hover:bg-[#9E5A52] transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              Join VIP Membership · $297/mo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-[#050F2C]/60 text-center mt-4 leading-relaxed">
            Automatic monthly billing · Cancel anytime · Appointments subject to availability and practitioner discretion
          </p>
        </div>

      </div>
    </section>
  );
};

export default MembershipPlans;
