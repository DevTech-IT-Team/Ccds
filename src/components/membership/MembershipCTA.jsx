import { ArrowRight } from 'lucide-react';

const MembershipCTA = () => {
  return (
    <section id="join" className="py-20 lg:py-28 bg-gradient-to-br from-[#B36C63] via-[#BA746B] to-[#9E5A52] text-white relative overflow-hidden text-center">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Ready when you are
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Make consistent care feel effortless.
          </h2>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Choose the plan that fits your routine, activate your benefits, and start booking.
          </p>

          <div className="pt-4">
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#050F2C] text-sm sm:text-base font-bold shadow-xl hover:bg-[#FAF8F5] hover:scale-105 transition-all duration-200"
            >
              Choose your membership
              <ArrowRight className="w-4 h-4 text-[#B36C63]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;
