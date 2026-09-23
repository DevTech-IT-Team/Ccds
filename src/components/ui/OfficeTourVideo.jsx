const DRIVE_PREVIEW_URL = 'https://drive.google.com/file/d/1H50AYixb1f48xFj615oAc_FpK6XOE2ai/preview';

const OfficeTourVideo = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#38838A] uppercase tracking-widest mb-3 block">Take a Look Inside</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#050F2C] mb-4">
            Welcome to Colorado Colonics
          </h2>
          <div className="h-1 w-12 rounded-full bg-[#B36C63] mx-auto" />
        </div>

        <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(5,15,44,0.15)] bg-slate-900 border-[8px] border-white/50 ring-1 ring-[#E2EEEC] aspect-video">
          <iframe
            src={DRIVE_PREVIEW_URL}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Colorado Colonics office tour"
          />
        </div>
      </div>
    </section>
  );
};

export default OfficeTourVideo;
