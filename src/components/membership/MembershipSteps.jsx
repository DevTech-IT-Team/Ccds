const MembershipSteps = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose your membership',
      desc: 'Select Essential or Unlimited based on your preferred level of flexibility.',
    },
    {
      step: '02',
      title: 'Complete your payment',
      desc: 'Your benefits begin immediately after successful payment. That date becomes your monthly renewal date.',
    },
    {
      step: '03',
      title: 'Book through Tersavia',
      desc: 'Schedule eligible services and select any paid upgrades you would like to add.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A] mb-3">
            No complicated process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] tracking-tight">
            Three steps. That’s it.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-8 rounded-3xl bg-[#FAF8F5] border-t-4 border-[#B36C63] border-x border-b border-[#E2EEEC] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#B36C63] block mb-4">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-bold text-[#050F2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#050F2C]/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MembershipSteps;
