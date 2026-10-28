import { Sparkles, Waves } from 'lucide-react';

const MembershipBenefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A] mb-3">
            More included wellness
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] tracking-tight mb-4">
            Your membership goes beyond colonics.
          </h2>
          <p className="text-[#050F2C]/70 text-base sm:text-lg leading-relaxed">
            Enjoy access to two additional Colorado Colonics wellness experiences within practitioner-approved guidelines.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Benefit 1: BioCharger */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E2EEEC] hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5F7] border border-[#38838A]/20 text-[#38838A] flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#38838A]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050F2C] mb-3">
                BioCharger
              </h3>

              <p className="text-[#050F2C]/75 text-sm sm:text-base leading-relaxed mb-6">
                Your membership includes the General Tonic recipe, approximately 10–12 minutes, during eligible visits. BioCharger access is subject to safety guidelines, scheduling, and practitioner discretion.
              </p>
            </div>

            <div className="pt-5 border-t border-[#E2EEEC]">
              <p className="text-xs sm:text-sm font-bold text-[#050F2C]">
                Want to personalize your experience? <span className="text-[#38838A]">Add another recipe for $20 per recipe.</span>
              </p>
            </div>
          </div>

          {/* Benefit 2: Foot Detox */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E2EEEC] hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FDF3F1] border border-[#B36C63]/20 text-[#B36C63] flex items-center justify-center mb-6">
                <Waves className="w-7 h-7 text-[#B36C63]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050F2C] mb-3">
                Foot Detox
              </h3>

              <p className="text-[#050F2C]/75 text-sm sm:text-base leading-relaxed mb-6">
                Your membership includes 10-minute Foot Detox sessions during eligible visits, within established safety and scheduling guidelines.
              </p>
            </div>

            <div className="pt-5 border-t border-[#E2EEEC]">
              <p className="text-xs sm:text-sm font-bold text-[#050F2C]">
                Prefer the standard session? <span className="text-[#B36C63]">Upgrade to a full 30-minute Foot Detox for $20.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
