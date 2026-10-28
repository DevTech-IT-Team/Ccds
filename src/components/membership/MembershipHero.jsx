import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { siteContent } from '../../data/content';

const MembershipHero = () => {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-20 lg:pb-24 bg-gradient-to-br from-[#E6F3F4] via-[#FAF7F1] to-[#F4E6E0]">
      {/* Decorative ambient background accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#38838A]/20 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-[#B36C63]/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-[#38838A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A]">
              A simpler way to stay consistent
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#050F2C] leading-[1.08] tracking-tight">
              Membership <br className="hidden sm:inline" />
              <em className="font-serif italic font-normal text-[#38838A] block sm:inline">
                made easy.
              </em>
            </h1>

            <p className="text-[#050F2C]/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Flexible monthly options for established clients who want consistency, savings, and more freedom to support their personal wellness routine.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#B36C63] text-white text-sm sm:text-base font-bold hover:bg-[#9E5A52] transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                Compare memberships
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#eligibility"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full border border-[#050F2C]/25 text-[#050F2C] bg-white/60 hover:bg-white text-sm sm:text-base font-bold transition-all duration-200 hover:-translate-y-0.5"
              >
                Check eligibility
              </a>
            </div>

            <p className="text-xs text-[#050F2C]/60 pt-2 leading-relaxed">
              All appointments are subject to availability, client eligibility, and practitioner discretion.
            </p>
          </div>

          {/* Right Column: Hero Promise Panel */}
          <div className="lg:col-span-5">
            <div className="relative p-7 sm:p-9 bg-white/85 backdrop-blur-md rounded-3xl sm:rounded-[2.25rem] border border-white/90 shadow-[0_20px_50px_rgba(19,45,75,0.1)] space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#38838A] block mb-1">
                  The easy part
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] tracking-tight">
                  Join. Book. Feel supported.
                </h2>
                <p className="text-xs sm:text-sm text-[#050F2C]/65 mt-1">
                  Clear benefits. Straightforward choices. No long-term contract.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2EEEC] shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-[#EAF5F7] text-[#38838A] flex items-center justify-center flex-shrink-0 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#38838A]" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#050F2C]">
                      $0 enrollment fee
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      No initiation fee to begin
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2EEEC] shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-[#EAF5F7] text-[#38838A] flex items-center justify-center flex-shrink-0 font-bold">
                    <Sparkles className="w-4 h-4 text-[#38838A]" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#050F2C]">
                      Benefits begin immediately
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      After your first successful payment
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E2EEEC] shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-[#EAF5F7] text-[#38838A] flex items-center justify-center flex-shrink-0 font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#38838A]" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[#050F2C]">
                      Cancel anytime
                    </strong>
                    <span className="text-xs text-[#050F2C]/65">
                      Online, by email, text, or phone
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipHero;
