const MembershipEligibility = () => {
  const criteria = [
    {
      num: '1',
      title: 'Membership is for established clients.',
      desc: 'New clients may become eligible after completing their initial Colorado Colonics appointment.',
    },
    {
      num: '2',
      title: 'Finish current packages first.',
      desc: 'Any remaining package sessions must be used before beginning a membership.',
    },
    {
      num: '3',
      title: 'Your care remains personal.',
      desc: 'Service type and frequency are based on eligibility, safety guidelines, appointment availability, and practitioner discretion.',
    },
  ];

  return (
    <section id="eligibility" className="py-20 lg:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-5xl mx-auto p-8 sm:p-12 lg:p-14 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#E2EEEC]/60 via-[#FAF8F5] to-[#F7EDE8]/70 border border-[#E2EEEC] shadow-md grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A]">
              Is membership right for you?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-display font-bold text-[#050F2C] leading-tight tracking-tight">
              Start with the right foundation.
            </h2>
          </div>

          {/* Right Checklist Column */}
          <div className="lg:col-span-7 space-y-6">
            {criteria.map((item) => (
              <div key={item.num} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-[#E2EEEC] shadow-2xs backdrop-blur-xs">
                <div className="w-9 h-9 rounded-full bg-white border border-[#38838A]/30 text-[#38838A] flex items-center justify-center font-display font-bold flex-shrink-0 shadow-2xs">
                  {item.num}
                </div>
                <div>
                  <strong className="block text-base font-bold text-[#050F2C]">
                    {item.title}
                  </strong>
                  <p className="text-xs sm:text-sm text-[#050F2C]/70 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MembershipEligibility;
