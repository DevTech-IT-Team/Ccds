const MembershipSessionLength = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#050F2C] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38838A]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B36C63]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#93C5FD] mb-3">
            Know before you book
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Choose your session length.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every membership colonic begins with a streamlined 30-minute appointment. Add more table time whenever you want it.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Included 30-minute */}
          <div className="flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/[0.08]">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#38838A] text-white text-[11px] font-extrabold uppercase tracking-wider mb-4">
                Included
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                30-minute appointment
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Approximately 25 minutes of table time, with about 5 minutes available for restroom time.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-baseline gap-2">
              <strong className="text-3xl sm:text-4xl font-display font-bold text-white">
                $0 extra
              </strong>
              <span className="text-xs sm:text-sm text-slate-400">
                with membership
              </span>
            </div>
          </div>

          {/* Card 2: Recommended 50-minute upgrade */}
          <div className="flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-white text-[#050F2C] shadow-2xl transition-all border-2 border-[#B36C63] transform md:-translate-y-1">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#B36C63] text-white text-[11px] font-extrabold uppercase tracking-wider mb-4">
                Recommended upgrade
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050F2C] mb-2">
                50 minutes of table time
              </h3>
              <p className="text-[#050F2C]/75 text-sm sm:text-base leading-relaxed">
                A full 60-minute appointment is reserved, allowing time for your session, restroom use, and room sanitation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2EEEC] flex items-baseline gap-2">
              <strong className="text-3xl sm:text-4xl font-display font-bold text-[#B36C63]">
                +$30
              </strong>
              <span className="text-xs sm:text-sm text-[#050F2C]/65 font-medium">
                each visit
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MembershipSessionLength;
