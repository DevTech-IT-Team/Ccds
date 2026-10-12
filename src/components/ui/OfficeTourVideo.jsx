import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import hospitalImg from '../../assets/hospital.jpg';
import roomImg1 from '../../assets/service/colon/angel-of-water-treatment-room-2-1.jpg';
import roomImg2 from '../../assets/service/colon/closed-system-1.jpg';
import facilityTourVideo from '../../assets/video/ccdc_walk_through_816.mp4';
import angelOfWaterVideo from '../../assets/video/aofw_628.mp4';
import openSystemVideo from '../../assets/video/open_system.mp4';

const TOUR_VIDEOS = [
  {
    id: 1,
    title: 'Main Facility Tour',
    subtitle: 'Reception & Comfort Amenities',
    videoSrc: facilityTourVideo,
    driveUrl: 'https://drive.google.com/file/d/1H50AYixb1f48xFj615oAc_FpK6XOE2ai/view',
    thumbnail: hospitalImg,
  },
  {
    id: 2,
    title: 'Angel of Water Suite',
    subtitle: 'Private Open-System Hydrotherapy',
    videoSrc: angelOfWaterVideo,
    driveUrl: 'https://drive.google.com/file/d/1XfYXvxPLcaKSa-oTEAi43H7AekZcN-qo/view',
    thumbnail: roomImg1,
  },
  {
    id: 3,
    title: 'Colonic Hydrotherapy Suite',
    subtitle: 'Clinical-Grade Treatment Space',
    videoSrc: openSystemVideo,
    driveUrl: 'https://drive.google.com/file/d/1_QUXRDF6QBQ8KVnTwZAW2bOP0ybIBfwo/view',
    thumbnail: roomImg2,
  },
];

const OfficeTourVideo = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

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
          {TOUR_VIDEOS.map((video, index) => {
            const isPlaying = playingIndex === index;

            return (
              <div
                key={video.id}
                className="group relative rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(5,15,44,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(5,15,44,0.15)] bg-slate-950 border border-[#E2EEEC] ring-4 ring-white/60 transition-all duration-500 hover:-translate-y-2 aspect-[4/5] sm:aspect-video md:aspect-[4/5] xl:aspect-[3/4]"
              >
                {!isPlaying ? (
                  /* Custom Thumbnail Poster (Zero overhead on initial load) */
                  <div
                    className="absolute inset-0 z-20 cursor-pointer flex flex-col justify-between p-6 transition-all"
                    onClick={() => handlePlay(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${video.title}`}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlay(index)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050F2C]/85 via-[#050F2C]/30 to-[#050F2C]/10 group-hover:via-[#050F2C]/20 transition-colors duration-300" />

                    {/* Top Badge */}
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-black/40 backdrop-blur-md border border-white/20">
                        Virtual Tour {index + 1}
                      </span>
                    </div>

                    {/* Center Play Button */}
                    <div className="relative z-10 self-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#38838A] transition-all duration-300">
                        <Play className="w-6 h-6 text-[#38838A] group-hover:text-white transition-colors ml-1 fill-current" />
                      </div>
                    </div>

                    {/* Bottom Title & Subtitle */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white leading-snug drop-shadow-md">
                        {video.title}
                      </h3>
                      <p className="text-white/80 text-xs mt-1 drop-shadow-sm line-clamp-1">
                        {video.subtitle}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* High performance native HTML5 video player */
                  <div className="relative w-full h-full bg-slate-950 flex items-center justify-center">
                    <video
                      src={video.videoSrc}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain bg-black"
                    >
                      Your browser does not support the video tag.
                    </video>

                    {/* Fallback helper link */}
                    <a
                      href={video.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 z-30 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-medium text-white/80 hover:text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
                      title="Open video on Google Drive"
                    >
                      <ExternalLink className="w-3 h-3" /> Drive
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfficeTourVideo;
