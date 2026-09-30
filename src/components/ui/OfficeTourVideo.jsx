import { useState } from 'react';
import hospitalImg from '../../assets/hospital.jpg';

const DRIVE_PREVIEW_URLS = [
  'https://drive.google.com/file/d/1H50AYixb1f48xFj615oAc_FpK6XOE2ai/preview',
  'https://drive.google.com/file/d/1XfYXvxPLcaKSa-oTEAi43H7AekZcN-qo/preview',
  'https://drive.google.com/file/d/1_QUXRDF6QBQ8KVnTwZAW2bOP0ybIBfwo/preview'
];

const OfficeTourVideo = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#F9FAF6] overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#E8F1F0] to-transparent opacity-60 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#FDF8F7] to-transparent opacity-80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#E8F1F0] text-[#38838A] text-xs font-bold uppercase tracking-widest mb-4">
            Take a Look Inside
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#050F2C] mb-6">
            Welcome to Colorado Colonics
          </h2>
          <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#B36C63] to-[#D98E84] mx-auto" />
          <p className="mt-6 text-[#050F2C]/70 text-lg">
            Experience our soothing, state-of-the-art facility designed for your complete comfort and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {DRIVE_PREVIEW_URLS.map((url, index) => (
            <div 
              key={index} 
              className="group relative rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(5,15,44,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(5,15,44,0.15)] bg-white border border-[#E2EEEC] ring-4 ring-white/60 transition-all duration-500 hover:-translate-y-2 aspect-[4/5] sm:aspect-video md:aspect-[4/5] xl:aspect-[3/4]"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 z-10 pointer-events-none rounded-[2rem] border border-white/40 mix-blend-overlay" />
              
              {/* Custom Thumbnail for 1st Video */}
              {index === 0 && !isPlaying1 ? (
                <div 
                  className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black/10 transition-all"
                  onClick={() => setIsPlaying1(true)}
                >
                  <img src={hospitalImg} alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#050F2C]/20 group-hover:bg-[#050F2C]/10 transition-colors duration-300" />
                  <div className="relative z-30 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#38838A] border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              ) : null}

              {/* Render iframe only if it's not the first video, OR if the first video is playing */}
              {(index !== 0 || isPlaying1) && (
                <iframe
                  src={url}
                  className="absolute top-0 left-0 w-full h-full border-0 bg-slate-50 transition-transform duration-700 group-hover:scale-[1.02]"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`Colorado Colonics office tour ${index + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeTourVideo;
