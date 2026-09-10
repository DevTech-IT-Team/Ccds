import { useState } from 'react';
import { Copy, Play, Check } from "lucide-react";

const FaYoutube = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Replace <Youtube /> in your JSX
const VideoThumbnailCard = ({ videoId, title = "YouTube video" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="bg-white rounded-[24px] border border-[#E2EEEC] shadow-sm overflow-hidden flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2EEEC]">
        <div className="flex items-center gap-3">
          <FaYoutube className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-blue-600 text-[15px] tracking-tight">{title}</span>
        </div>
      </div>

      {/* Video / Thumbnail Area */}
      <div className="relative aspect-video w-full bg-slate-100 p-4">
        {isPlaying ? (
          <iframe
            className="w-full h-full rounded-xl overflow-hidden shadow-inner"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="w-full h-full relative cursor-pointer group rounded-xl overflow-hidden shadow-sm"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
              <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-black/80 transition-all shadow-lg">
                <Play className="w-7 h-7 text-white ml-1 fill-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoThumbnailCard;
