const MembershipTopBanner = () => {
  return (
    <aside
      className="mt-16 sm:mt-[68px] md:mt-[72px] bg-[#132D4B] text-white py-2.5 sm:py-3 px-4 text-center relative z-20 shadow-xs border-b border-white/10"
      aria-label="Membership announcement"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-[13.5px] font-medium tracking-wide text-white/95">
          Membership is available to established Colorado Colonics clients.
        </p>
      </div>
    </aside>
  );
};

export default MembershipTopBanner;
