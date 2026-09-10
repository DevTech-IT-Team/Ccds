import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import officeVideo from '../../assets/video/ccdc_walk_through_816.mp4';

const OfficeTourVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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

        <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(5,15,44,0.15)] bg-slate-900 border-[8px] border-white/50 ring-1 ring-[#E2EEEC] aspect-video group">
          <video
            ref={videoRef}
            src={officeVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050F2C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
            <div className="flex items-center gap-4 w-full">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#050F2C] transition-all border border-white/30 shadow-sm"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
              </button>

              <button
                onClick={toggleMute}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#050F2C] transition-all border border-white/30 shadow-sm"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <div className="ml-auto text-white/90 font-medium text-sm md:text-base hidden sm:block drop-shadow-md">
                Take a virtual tour of our facilities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeTourVideo;
