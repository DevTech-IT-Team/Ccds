import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, GraduationCap, X, ExternalLink } from 'lucide-react';
import lobbyImg from '../../assets/home/ccdshome.JPEG';
import roomImg1 from '../../assets/service/colon/angel-of-water-treatment-room-2-1.jpg';
import roomImg2 from '../../assets/service/colon/closed-system-1.jpg';
import facilityTourVideo from '../../assets/video/ccdc_walk_through_816.mp4';
import angelOfWaterVideo from '../../assets/video/aofw_628.mp4';
import openSystemVideo from '../../assets/video/open_system.mp4';
import ccdcLogo from '../../assets/logo/ccdclogo.png';
import { siteContent } from '../../data/content';

const TOUR_VIDEOS = [
  {
    id: 1,
    suiteNum: 'Suite 01',
    tag: 'Reception & Comfort',
    title: 'Main Facility Tour',
    subtitle: 'Warm welcome area & soothing hydration amenities',
    videoSrc: facilityTourVideo,
    driveUrl: 'https://drive.google.com/file/d/1H50AYixb1f48xFj615oAc_FpK6XOE2ai/view',
    thumbnail: lobbyImg,
  },
  {
    id: 2,
    suiteNum: 'Suite 02',
    tag: 'Open System Suite',
    title: 'Angel of Water Suite',
    subtitle: 'Private open-system hydrotherapy in a serene sanctuary',
    videoSrc: angelOfWaterVideo,
    driveUrl: 'https://drive.google.com/file/d/1XfYXvxPLcaKSa-oTEAi43H7AekZcN-qo/view',
    thumbnail: roomImg1,
  },
  {
    id: 3,
    suiteNum: 'Suite 03',
    tag: 'Closed System Suite',
    title: 'Colonic Hydrotherapy Suite',
    subtitle: 'Hospital-grade sanitized clinical treatment space',
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

  const handleClose = (e) => {
    e.stopPropagation();
    setPlayingIndex(null);
  };

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-38 pb-20 sm:pb-24 bg-gradient-to-b from-[#F5F9F8] via-[#FAF9F5] to-white border-b border-[#050F2C]/6">
      {/* ── Top-Left Logo for Desktop (Prominent Hero Sizing) ── */}
      <div className="hidden md:block absolute top-6 sm:top-7 md:top-8 lg:top-9 left-2 sm:left-3 md:left-4 z-30">
        <Link
          to="/"
          className="inline-flex items-center group transition-all duration-300 hover:scale-[1.03] origin-left -ml-8 sm:-ml-12 md:-ml-14 lg:-ml-16"
          aria-label="Colorado Colonics Home"
        >
          <img
            src={ccdcLogo}
            alt="Colorado Colonics Detox Center"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transform scale-125 sm:scale-135 md:scale-145 origin-left drop-shadow-sm transition-all duration-300 group-hover:brightness-105"
          />
        </Link>
      </div>

      {/* ── Subtle Ambient Glow Accents for Depth ── */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] rounded-full bg-gradient-to-bl from-[#38838A]/8 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-0 w-[35%] h-[35%] rounded-full bg-gradient-to-br from-[#B36C63]/8 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header Introduction ── */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#38838A]/25 shadow-2xs text-[#38838A] text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38838A]" />
            Colorado Colonics · Englewood, CO
          </div>

          {/* Big Bold Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-extrabold text-[#050F2C] tracking-tight leading-[1.08] mb-5">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#38838A] via-[#2C7379] to-[#38838A] bg-clip-text text-transparent">
              Colorado Colonics
            </span>
          </h1>

          {/* Subtle Accent Divider */}
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#B36C63] to-[#38838A] mx-auto mb-6" />

          {/* Engaging Welcome Message */}
          <p className="text-[#050F2C]/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Denver & Englewood’s trusted sanctuary for gentle colon hydrotherapy and full-body renewal. Experience clinical-grade care, soothing private suites, and accredited therapist guidance.
          </p>

          {/* Side-by-Side Action Buttons: Book an Appointment & Join the Academy */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#050F2C] text-white text-sm sm:text-base font-bold hover:bg-[#38838A] transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              Book an Appointment
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/academy"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#B36C63] text-white text-sm sm:text-base font-bold hover:bg-[#9E5A52] transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              <GraduationCap className="w-5 h-5" />
              Join the Academy
            </Link>
          </div>

          {/* Subtle Phone Reassurance */}
          <p className="text-xs text-[#050F2C]/55 mt-4 font-medium">
            Questions? Call or text <a href={siteContent.business.phoneLink} className="text-[#38838A] font-semibold hover:underline">(303) 505-0026</a> · No prescription required
          </p>
        </div>

        {/* ── 3 Tour Video Cards (Clean & Refined Showcase) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {TOUR_VIDEOS.map((video, index) => {
            const isPlaying = playingIndex === index;

            return (
              <div key={video.id} className="group flex flex-col">
                {/* Media Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-[#050F2C]/8 shadow-[0_12px_32px_-12px_rgba(5,15,44,0.12)] group-hover:shadow-[0_20px_45px_-12px_rgba(56,131,138,0.22)] group-hover:-translate-y-1 transition-all duration-300">
                  {!isPlaying ? (
                    <div
                      className="absolute inset-0 cursor-pointer flex items-center justify-center"
                      onClick={() => handlePlay(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${video.title}`}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlay(index)}
                    >
                      {/* Image properly fills background */}
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />

                      {/* Subtle Dark Vignette for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-colors" />

                      {/* Perfectly Centered Clean Play Icon Button */}
                      <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#050F2C] group-hover:bg-[#38838A] group-hover:text-white transition-all duration-300 shadow-xl group-hover:scale-110">
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </div>

                      {/* Clean Tag Badge at Bottom-Left */}
                      <div className="absolute bottom-3.5 left-3.5 z-10 pointer-events-none">
                        <span className="text-[11px] font-bold text-white bg-[#050F2C]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                          {video.tag}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <video
                        src={video.videoSrc}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-contain"
                      >
                        Your browser does not support the video tag.
                      </video>

                      {/* Clean Close & External Backup */}
                      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
                        <button
                          onClick={handleClose}
                          className="px-2.5 py-1 rounded-md text-xs font-medium text-white bg-black/75 hover:bg-black transition-colors cursor-pointer inline-flex items-center gap-1 shadow-sm"
                        >
                          <X className="w-3.5 h-3.5" /> Close
                        </button>
                        <a
                          href={video.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md text-white/80 hover:text-white bg-black/75 transition-colors"
                          title="Open on Google Drive"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Clean Editorial Caption Below Media */}
                <div className="mt-4 px-0.5 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#38838A]">
                    {video.suiteNum}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#050F2C] mt-0.5 leading-snug group-hover:text-[#38838A] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#050F2C]/70 mt-1 leading-relaxed">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfficeTourVideo;
