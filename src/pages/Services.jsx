import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Accordion from '../components/ui/Accordion';
import Contraindications from '../components/ui/Contraindications';
import PageHero from '../components/layout/PageHero';
import VideoThumbnailCard from '../components/ui/VideoThumbnailCard';
import biochargerImg from '../assets/service/Biocharger/bio.png';
import footDetoxVideo from '../assets/service/Ionfoot/foot_detox_video_421_210.mp4';
import footDetoxPoster from '../assets/service/Ionfoot/foot.png';
import colonClosedSys1 from '../assets/service/colon/closed-system-1.jpg';
import colonRelax from '../assets/service/colon/Relax-and-reconnect.jpg';
import colonAngel1 from '../assets/service/colon/angel-of-water-treatment-room-2-1.jpg';
import colonAngel3 from '../assets/service/colon/angel-of-water-treatment-room-2-3.jpg';
import closedSystemVideo from '../assets/service/colon/closed_system.mp4';
import { HERO_IMAGES } from '../data/heroImages';
import { siteContent } from '../data/content';
import {
  ArrowRight,
  Droplet,
  Zap,
  Radio,
  Leaf,
  Sparkles,
  Users,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';

const iconMap = {
  droplet: Droplet,
  zap: Zap,
  radio: Radio,
  leaf: Leaf,
  sparkles: Sparkles,
  users: Users,
};

const serviceImages = {
  'colon-hydrotherapy': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80&auto=format&fit=crop',
  'ion-foot-detox': 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80&auto=format&fit=crop',
  'biocharger': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80&auto=format&fit=crop',
  // 'liver-cleanse':      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80&auto=format&fit=crop',
  'mineralizing-soak': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
  'community-resources': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80&auto=format&fit=crop',
};

/* ─────────────────────────────────────────
   1. COLON HYDROTHERAPY VIEW
───────────────────────────────────────── */
const ColonHydrotherapyView = ({ services }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const videos = [
    {
      title: 'Angel of Water - Open System',
      type: 'youtube',
      videoId: 'A0DV-fAHRdI'
    },
    {
      title: 'Closed System',
      type: 'local',
      src: closedSystemVideo,
      poster: colonClosedSys1
    }
  ];

  const handleNext = () => setActiveVideoIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setActiveVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="space-y-12 pb-16">
      
      {/* 2-Column Hero & Slider */}
      <div className="grid lg:grid-cols-2 gap-10 items-center pt-4">
        <div>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#E2EEEC]/50 border border-[#38838A]/20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38838A]">Core Service</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-[#050F2C] leading-tight mb-4 tracking-tight">
            Colon Hydrotherapy
          </h2>
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-500 mb-2">
            What's the most common reaction?
          </h3>
          <p className="text-3xl sm:text-4xl font-display italic bg-gradient-to-r from-[#B36C63] via-[#d68579] to-[#D98E84] bg-clip-text text-transparent font-bold tracking-wide drop-shadow-sm pb-6">
            "I FEEL... LIGHTER!"
          </p>

          <div className="text-[15px] sm:text-base text-[#050F2C]/80 leading-[1.8] font-medium space-y-4">
            <p>
              Colon hydrotherapy gently bathes the colon with filtered, body temperature water utilizes a safeguard principle of gentle infusion of water into the colon via the rectum with medical grade equipment. No chemicals or drugs are involved and the entire therapy session is both relaxing and effective. Sessions are typically 45 minutes to an hour.
            </p>
            <p>
              Common symptoms or conditions that Colon Hydrotherapy can help with include indigestion, insomnia, gastrointestinal upset, cramping, and gas. There are many other symptoms that Colon Hydrotherapy can help with.
            </p>
          </div>
        </div>

        {/* Video Slider Area */}
        <div className="relative w-full rounded-[24px] overflow-hidden shadow-2xl bg-[#050F2C] border border-[#E2EEEC]/50 group">
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#050F2C] shadow-sm tracking-wide">
            {videos[activeVideoIndex].title}
          </div>
          
          <div className="aspect-[16/9] w-full flex items-center justify-center relative">
            {videos[activeVideoIndex].type === 'youtube' ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[activeVideoIndex].videoId}`}
                title={videos[activeVideoIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={videos[activeVideoIndex].src} 
                controls
                className="w-full h-full object-cover"
                poster={videos[activeVideoIndex].poster}
              />
            )}
          </div>

          {/* Slider Controls */}
          <button 
            onClick={handlePrev} 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-20 shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-[#050F2C]" />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-20 shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-[#050F2C]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {videos.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveVideoIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === activeVideoIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-6 pt-12 pb-4">
      <a
        href="https://app.shamrok.com/book/colorado-colonics"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#38838A] to-[#2A656B] text-white rounded-full font-bold shadow-lg shadow-[#38838A]/20 hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm"
      >
        Book An Appointment <ArrowRight className="w-5 h-5" />
      </a>
    </div>

    {/* Image Grid */}
    <div className="max-w-5xl mx-auto pt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { title: 'Closed System', img: colonClosedSys1 },
          { title: 'Relax and Reconnect', img: colonRelax },
          { title: 'Angel of Water - Open System', img: colonAngel1 },
          { title: 'Private and Discrete', img: colonAngel3 }
        ].map((item, idx) => (
          <div key={idx} className="relative aspect-square group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050F2C]/90 via-[#050F2C]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-0 w-full px-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-md">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-3">
        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
          Please refer to our list on <a href="https://www.ccdc.love/safety-first.html" target="_blank" rel="noopener noreferrer" className="text-[#38838A] hover:underline">contraindications for colon hydrotherapy</a>. If you have any questions regarding any of these conditions, please call (303) 505-0026.
        </p>
      </div>
    </div>

    {/* What to expect */}
    <div className="pt-16 border-t border-[#E2EEEC]/60 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6 justify-center">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#38838A]"></div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] text-center">
          What should I expect for my first Colon Hydrotherapy session?
        </h3>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#38838A]"></div>
      </div>
      <p className="text-[15px] sm:text-base text-slate-600 leading-[1.8] text-center">
        After filling out the necessary paperwork, you will have a brief Q&A with our resident colon hydrotherapist. This is for us to understand your life (where you grew up), lifestyle (how do you eat, sleep, exercise), and to get to know you as a person. We encourage you to ask us as many questions as you need in order to understand who we are, why we’re here, and the process of the session. Your comfort and trust are paramount to us because the more comfortable you feel, the better you will release. Talking also helps you release. We hold your experience in the highest regard and honor your privacy. Be normal, be yourself. Eat normal, dress comfortably. The less amount of stress you place on your body and mind, the better you will feel. We are only here to help, not judge. We love and honor your beautiful body; this is the best gift you could ever give yourself for your health and wellness.
      </p>
    </div>

    {/* More Information */}
    <div className="pt-16 max-w-4xl mx-auto text-center">
      <h3 className="text-2xl font-display font-bold text-[#050F2C] mb-4">
        More Information
      </h3>
      <div className="inline-block p-6 bg-[#F4F9F8] rounded-2xl border border-[#E2EEEC]/60 shadow-sm">
        <p className="text-[15px] sm:text-base text-slate-600 leading-[1.8]">
          <a href="http://colonicstv.com/" target="_blank" rel="noopener noreferrer" className="text-[#38838A] hover:text-[#B36C63] transition-colors font-bold text-lg mr-1">ColonicsTV</a>
          is a great resource to answer your questions, but feel free to contact us with your personal questions.
        </p>
      </div>
    </div>

    {/* Contraindications Link */}
    <div className="pt-16 border-t border-[#E2EEEC]/60 text-center max-w-4xl mx-auto">
      <div className="bg-[#F4F9F8] p-8 sm:p-12 rounded-[2.5rem] border border-[#E2EEEC] shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] mb-4">
          Contraindications for Colon Hydrotherapy
        </h3>
        <p className="text-[15px] sm:text-[17px] text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
          Please review the list of contraindications before booking your session to ensure colon hydrotherapy is safe for you.
        </p>
        <Link 
          to="/contraindications/colon-hydrotherapy"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B36C63] to-[#9c5a52] text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md shadow-[#B36C63]/20"
        >
          View Contraindications <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
    </div>
  );
};
/* ─────────────────────────────────────────
   2. ION FOOT DETOX VIEW
───────────────────────────────────────── */
const IonFootDetoxView = ({ services }) => (
  <div className="space-y-10 pb-16">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#38838A] mb-3 block">
          Cellular Detoxification
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
          Ion Foot Detox
        </h2>
        <div className="text-base sm:text-lg text-[#050F2C]/80 leading-relaxed font-medium space-y-4">
          <p>
            During an Ion Foot Cleanse, the body can safely and naturally eliminate impurities. Using a low level of D.C. (direct current) to create an environment called Electrolysis of the Water. The newly created ions are allowed to penetrate the skin’s surface, attach, and neutralize the existing ions in the body.
          </p>
          <p>
            The now neutralized ions are eliminated through the pores of the skin. This is typically done with either the hands or the feet because of the abundance of pores in a small area. Sessions are 30-60 minutes. Multiple sessions will be customized to your needs.
          </p>
        </div>
      </div>

      <div className="w-full h-64 sm:h-[400px] rounded-3xl overflow-hidden shadow-md bg-[#050F2C] border border-[#E2EEEC] flex items-center justify-center relative">
        <video 
          src={footDetoxVideo} 
          controls
          className="w-full h-full object-cover rounded-2xl"
          poster={footDetoxPoster}
        />
      </div>
    </div>

    <div className="grid lg:grid-cols-12 gap-12 pt-8">
      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Pricing & Packages
        </h3>
        <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
          <ul className="space-y-5 text-[15px] sm:text-base text-[#050F2C]/80 font-medium">
            <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
              <span>Initial Consultation + 30 Min Session</span>
              <span className="font-bold text-[#38838A]">$85</span>
            </li>
            <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
              <span>Single Session Only (No Consultation)</span>
              <span className="font-bold text-[#38838A]">$50</span>
            </li>
            <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
              <span>3 Sessions</span>
              <span className="font-bold text-[#38838A]">$160</span>
            </li>
            <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
              <span>6 Sessions</span>
              <span className="font-bold text-[#38838A]">$275</span>
            </li>
            <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
              <span>Couple's Foot Detox (2)</span>
              <span className="font-bold text-[#38838A]">$105</span>
            </li>
            <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
              <span>Tripartite Foot Detox (3)</span>
              <span className="font-bold text-[#38838A]">$120</span>
            </li>
            <li className="flex justify-between">
              <span>Quadruple Foot Detox (4)</span>
              <span className="font-bold text-[#38838A]">$160</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
          Booking & Enhancements
        </h3>
        
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 mb-6">
          <p className="text-xs font-bold text-[#B36C63] uppercase tracking-wider mb-1">Enhance Your Session</p>
          <p className="text-[#050F2C] font-semibold text-sm">
            Add the <span className="font-bold">Mineralizing Protocol</span> to your session for <span className="font-bold text-[#B36C63]">$35.00</span> and enjoy another 30 minutes of relaxation.
          </p>
        </div>

        <p className="text-base text-[#050F2C]/80 leading-relaxed mb-6">
          Ready for a restorative detox? Book an appointment today and experience the benefits of the Magic Ion Cleanse.
        </p>

        <a
          href="https://app.shamrok.com/book/colorado-colonics"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-md hover:scale-105 transition-all"
        >
          Book an Appointment <ArrowRight className="w-5 h-5" />
        </a>

        <div className="mt-8 pt-6 border-t border-[#E2EEEC]">
          <p className="text-sm font-medium text-slate-500 leading-relaxed">
            <span className="font-bold text-[#38838A]">Authorized Dealer:</span> CCDC is the Authorized Dealer for the Magic Ion Cleanse. Ask us about renting or purchasing a unit for your own personal use at home!
          </p>
        </div>
      </div>

      <div className="lg:col-span-12 pt-8">
        <h3 className="text-2xl font-bold font-display text-[#050F2C] pb-4 border-b border-[#E2EEEC] mb-6">
          More Information About Foot Detoxes
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2EEEC]">
            <h4 className="font-bold text-[#38838A] mb-3">What can I expect from my first session?</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Imagine soaking your feet in warm water and allowing the water and ion unit to help your body eliminate toxins. Painless and simple, a 30-minute session can help reveal signs of toxicity. During a “typical” session, your practitioner will discuss the colors and debris in your water and the benefits of regular cleansing. Some people may experience continued detoxification for 24-72 hours after a session. Because every person is different, experiences and sessions will vary. Whatever your water color is, you will most likely feel a difference within a few sessions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2EEEC]">
            <h4 className="font-bold text-[#38838A] mb-3">Who can benefit from a session?</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Anyone 18 years and older looking for a simple (yet effective) cleanse.
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* Contraindications Link */}
    <div className="pt-16 border-t border-[#E2EEEC]/60 text-center max-w-4xl mx-auto">
      <div className="bg-[#F4F9F8] p-8 sm:p-12 rounded-[2.5rem] border border-[#E2EEEC] shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] mb-4">
          Contraindications for Ion Foot Detox
        </h3>
        <p className="text-[15px] sm:text-[17px] text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
          Please review the list of contraindications before booking your session to ensure ion foot detox is safe for you.
        </p>
        <Link 
          to="/contraindications/ion-foot-detox"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B36C63] to-[#9c5a52] text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md shadow-[#B36C63]/20"
        >
          View Contraindications <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   3. BIOCHARGER VIEW
───────────────────────────────────────── */
const BioChargerView = ({ services }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const videos = [
    {
      title: 'What is the BioCharger NG?',
      videoId: 'V7cHIEzHwX8'
    },
    {
      title: 'BioCharger Experience',
      videoId: 'jlr0PEMQd-A'
    }
  ];

  const handleNext = () => setActiveVideoIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setActiveVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="space-y-10 pb-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#38838A] mb-3 block">
            Subtle Energy Technology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-6 leading-tight">
            BioCharger
          </h2>
          <div className="text-base sm:text-lg text-[#050F2C]/80 leading-relaxed font-medium space-y-4">
            <p>
              Introducing the BioCharger – your gateway to a revitalized, energized, and healthier you! This cutting-edge wellness technology harnesses advanced light and frequency therapies to provide you with a holistic approach to enhanced vitality. Imagine having a device that can help you supercharge your energy levels, boost your overall performance, and promote a sense of balance and well-being.
            </p>
            <p>
              The BioCharger NG offers a convenient and non-invasive way to potentially optimize your health by targeting the body's natural energy systems. With its customizable programs, you can tailor your sessions to meet your unique wellness goals.
            </p>
            <p>
              Join the growing community of individuals who are exploring the potential benefits of this technology. Unlock your full potential and experience the future of wellness today!
            </p>
          </div>
        </div>

        {/* Video Slider */}
        <div className="relative w-full rounded-[24px] overflow-hidden shadow-2xl bg-[#050F2C] border border-[#E2EEEC]/50 group">
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#050F2C] shadow-sm tracking-wide">
            {videos[activeVideoIndex].title}
          </div>
          
          <div className="aspect-[16/9] w-full flex items-center justify-center relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videos[activeVideoIndex].videoId}`}
              title={videos[activeVideoIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Slider Controls */}
          <button 
            onClick={handlePrev} 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-20 shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-[#050F2C]" />
          </button>
          <button 
            onClick={handleNext} 
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-20 shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-[#050F2C]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {videos.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveVideoIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === activeVideoIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 pt-8">
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
            Pricing
          </h3>
          <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
            <ul className="space-y-5 text-[15px] sm:text-base text-[#050F2C]/80 font-medium">
              <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
                <span>BioCharger Session (60 Min.)</span>
                <span className="font-bold text-[#38838A]">$90</span>
              </li>
              <li className="flex justify-between border-b border-[#E2EEEC] pb-2">
                <span>+ 30 Minutes (add to any service)</span>
                <span className="font-bold text-[#38838A]">$50</span>
              </li>
              <li className="flex justify-between">
                <span>Add BioCharger to Colon Hydrotherapy**</span>
                <span className="font-bold text-[#38838A]">$70</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
            Booking
          </h3>
          <p className="text-base text-[#050F2C]/80 leading-relaxed mb-6">
            Ready to experience the revitalizing power of the BioCharger? Book your session online today.
          </p>
          <a
            href="https://app.shamrok.com/book/colorado-colonics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#38838A] to-[#2A656B] text-white rounded-full font-bold shadow-lg shadow-[#38838A]/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book an Appointment <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* Contraindications Link */}
      <div className="pt-16 border-t border-[#E2EEEC]/60 text-center max-w-4xl mx-auto">
        <div className="bg-[#F4F9F8] p-8 sm:p-12 rounded-[2.5rem] border border-[#E2EEEC] shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] mb-4">
            Contraindications for BioCharger
          </h3>
          <p className="text-[15px] sm:text-[17px] text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
            Please review the list of contraindications before booking your session to ensure BioCharger is safe for you.
          </p>
          <Link 
            to="/contraindications/biocharger"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B36C63] to-[#9c5a52] text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md shadow-[#B36C63]/20"
          >
            View Contraindications <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   4. LIVER CLEANSE VIEW
───────────────────────────────────────── */
// const LiverCleanseView = ({ services, image }) => (
//   <div className="space-y-10">
//     <div>
//       <span className="text-xs font-bold uppercase tracking-widest text-[#B36C63] mb-3 block">
//         Targeted Organ Protocol
//       </span>
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
//         Liver & Gallbladder Flush
//       </h2>
//       <p className="text-base sm:text-lg text-[#050F2C]/80 max-w-3xl leading-relaxed font-medium">
//         {services.liverCleanse.protocol}
//       </p>
//     </div>

//     <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
//       <img src={image} alt="Liver Cleanse" className="w-full h-full object-cover" />
//     </div>

//     <div className="grid lg:grid-cols-12 gap-12 pt-2">
//       <div className="lg:col-span-6 space-y-6">
//         <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
//           Program Details
//         </h3>
//         <p className="text-base text-[#050F2C]/80 leading-relaxed">
//           {services.liverCleanse.program}
//         </p>
//       </div>

//       <div className="lg:col-span-6 space-y-6">
//         <h3 className="text-xl font-bold font-display text-[#050F2C] pb-2 border-b border-[#E2EEEC]">
//           Investment & Booking
//         </h3>
//         <p className="text-4xl font-display font-bold text-[#38838A]">{services.liverCleanse.price}</p>
//         <p className="text-sm text-[#050F2C]/70">{services.liverCleanse.bookingNote}</p>
//         <div className="pt-2">
//           <a
//             href={siteContent.business.phoneLink}
//             className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-lg hover:scale-105 transition-all"
//           >
//             Call to Book Protocol <ArrowRight className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

/* ─────────────────────────────────────────
   5. MINERALIZING SOAK VIEW
───────────────────────────────────────── */
const MineralizingSoakView = ({ services, image }) => (
  <div className="space-y-10 pb-16">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#38838A] mb-3 block">
          Restorative Hydro-Therapy
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-tight">
          Mineralizing Bath Soak
        </h2>
        <div className="text-base sm:text-lg text-[#050F2C]/80 leading-relaxed font-medium space-y-4">
          <p>
            If you are feeling stressed, tired, worn, depleted of energy, or have over-indulged; you might enjoy the Foot Bomb! or Mineralizing Protocol. This will add the missing minerals back into the body in a relaxing environment.
          </p>
          <p>
            Our current lifestyles have depleted our natural mineral sources on every level; it’s not always easy or convenient to replenish those minerals our bodies need to function at our best. Sessions are 30 minutes. Add the Ion Foot Detox to your session for an unforgettable hour of detox and pampering.
          </p>
        </div>
      </div>

      <div className="w-full h-64 sm:h-[400px] rounded-3xl overflow-hidden shadow-md bg-[#F4F9F8] border border-[#E2EEEC] flex items-center justify-center p-2 sm:p-4">
        <img src={image} alt="Mineralizing Bath Soak" className="w-full h-full object-cover sm:object-contain rounded-2xl drop-shadow-sm" />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 pt-2">
      <div className="space-y-3 pb-4 border-b md:border-b-0 md:border-r border-[#E2EEEC] md:pr-8">
        <h3 className="text-xl font-bold font-display text-[#050F2C]">Standalone Session</h3>
        <p className="text-4xl font-display font-bold text-[#38838A]">{services.mineralizingSoak.standalone}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold font-display text-[#050F2C]">Combined with Foot Detox</h3>
        <p className="text-4xl font-display font-bold text-[#B36C63]">{services.mineralizingSoak.combined}</p>
      </div>
    </div>

    <div className="pt-4">
      <a
        href={siteContent.business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#38838A] to-[#2A656B] text-white rounded-full font-bold shadow-lg shadow-[#38838A]/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Book Bath Soak <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);



const detailPanelMap = {
  'colon-hydrotherapy': (s, img) => <ColonHydrotherapyView services={s} image={img} />,
  'ion-foot-detox': (s, img) => <IonFootDetoxView services={s} image={img} />,
  'biocharger': (s, img) => <BioChargerView services={s} image={img} />,
  // 'liver-cleanse': (s, img) => <LiverCleanseView services={s} image={img} />,
  'mineralizing-soak': (s, img) => <MineralizingSoakView services={s} image={img} />,
};

/* ─────────────────────────────────────────
   Main Services Page Component
───────────────────────────────────────── */
const Services = () => {
  const { category } = useParams();
  const services = siteContent.services;
  const tabs = services.tabs;

  const defaultIndex = category
    ? Math.max(0, tabs.findIndex((t) => t.id === category))
    : 0;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const detailRef = useRef(null);

  const activeTab = tabs[activeIndex];

  const handleSelect = (index) => {
    setActiveIndex(index);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const [prevCategory, setPrevCategory] = useState(category);
  if (category !== prevCategory) {
    setPrevCategory(category);
    if (category) {
      const idx = tabs.findIndex((t) => t.id === category);
      if (idx >= 0) setActiveIndex(idx);
    }
  }

  return (
    <div>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Explore our complete range of detox and wellness treatments."
        isGradient
      />

      <section className="py-16 bg-[#F9FAF6] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stunning Pill Tabs */}
          <div className="mb-14 flex justify-center w-full px-2">
            <div className="inline-flex items-center gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-x-auto max-w-full no-scrollbar">
              {tabs.map((tab, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelect(i)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full text-[13px] sm:text-sm font-bold tracking-wide transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#38838A] to-[#2A656B] text-white shadow-lg shadow-[#38838A]/20'
                        : 'text-[#050F2C]/60 hover:text-[#050F2C] hover:bg-[#F4F9F8]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Editorial Treatment View directly on page */}
          <div ref={detailRef} className="scroll-mt-24">
            {detailPanelMap[activeTab.id]?.(services, serviceImages[activeTab.id])}
          </div>

          {/* Clean Bottom Navigation Bar */}
          <div className="mt-20 pt-8 border-t border-[#E2EEEC] flex items-center justify-between gap-4">
            <button
              onClick={() => handleSelect((activeIndex - 1 + tabs.length) % tabs.length)}
              className="flex items-center gap-2 text-sm text-[#050F2C] hover:text-[#38838A] font-bold transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180 text-[#38838A]" />
              <span>{tabs[(activeIndex - 1 + tabs.length) % tabs.length].label}</span>
            </button>

            <span className="text-xs text-slate-400 font-bold hidden sm:inline">
              Treatment {activeIndex + 1} of {tabs.length}
            </span>

            <button
              onClick={() => handleSelect((activeIndex + 1) % tabs.length)}
              className="flex items-center gap-2 text-sm text-[#050F2C] hover:text-[#38838A] font-bold transition-colors"
            >
              <span>{tabs[(activeIndex + 1) % tabs.length].label}</span>
              <ChevronRight className="w-4 h-4 text-[#38838A]" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
