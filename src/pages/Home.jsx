import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Droplet, Zap, Users, ChevronRight, Sparkles, Radio, Leaf, Star, MapPin, Phone } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import OfficeTourVideo from '../components/ui/OfficeTourVideo';
import { siteContent } from '../data/content';
import heroBgImg from '../assets/ccdcbg.webp';
import ccdcLogo from '../assets/logo/ccdclogo.png';
import glassShapeImg from '../assets/hero.png';
import lisa from '../assets/about/lisa.jpg';
import kimberly from '../assets/kimberly.jpeg';

const StepCard = ({ number, title, desc }) => (
  <div className="relative flex gap-5">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-rose text-white text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-glow z-10">
        {number}
      </div>
      {number < 3 && <div className="flex-1 w-0.5 bg-gradient-to-b from-blue/50 to-transparent mt-1" />}
    </div>
    <div className="pb-8">
      <h4 className="font-bold text-navy-mid mb-1">{title}</h4>
      <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// Custom Team Member Card Component for updated Cards Section UI
const TeamMemberCard = ({ name, role, bio, titleBadge, imageSrc, certifications, imagePosition, imageScale }) => (
  <article className="bg-white rounded-3xl overflow-hidden shadow-card border border-blue-pale/80 flex flex-col h-full">
    {/* Image Container with Badge */}
    <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{
          objectPosition: imagePosition || 'center top',
          transform: imageScale ? `scale(${imageScale})` : undefined,
        }}
      />
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-[#050F2C]/85 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full backdrop-blur-md shadow-md border border-white/20">
          {titleBadge}
        </span>
      </div>
    </div>

    {/* Content Container */}
    <div className="p-6 sm:p-7 flex flex-col flex-grow text-left justify-between">
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-[#050F2C] leading-snug">{name}</h3>
          <p className="text-xs font-bold text-[#38838A] uppercase tracking-wide mt-1">{role}</p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Badges / Certifications Container */}
      <div className="mt-6 pt-4 border-t border-slate-100 bg-[#F4F9F8] rounded-2xl p-4 border border-[#E2EEEC]">
        <span className="text-[10px] font-bold text-[#38838A] uppercase tracking-wider block mb-2.5">
          Credentials & Specialties
        </span>
        <div className="flex flex-wrap gap-1.5">
          {certifications.map((cert, idx) => (
            <span
              key={idx}
              className="bg-white text-[#050F2C] text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-[#E2EEEC] shadow-2xs inline-flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B36C63] flex-shrink-0" />
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

const Home = () => {
  // Updated Cards Data
  const teamMembers = [
    {
      name: "Lisa Smith, I-ACT",
      role: "Certified Colon Hydrotherapist",
      titleBadge: "Founder",
      imageSrc: lisa,
      imagePosition: "center 60%",
      imageScale: 1.0,
      bio: "Lisa Smith is a certified Colon Hydrotherapist dedicated to providing professional, individualized care in a comfortable and welcoming environment. She brings compassion, enthusiasm, and a strong commitment to helping every client feel respected and supported.",
      certifications: ["Foundation (2015)", "Intermediate (2019)", "Advanced (2020)", "Angel of Water (2019)"]
    },
    {
      name: "Kimberly Allenson",
      role: "Instructor-Level Hydrotherapist",
      titleBadge: "Instructor",
      imageSrc: kimberly,
      imagePosition: "center 15%",
      bio: "Kimberly Allenson is an I-ACT-certified Instructor-level Colon Hydrotherapist with a double major in Physical and Health Education and a lifelong interest in health and the human body. She is committed to creating a safe, comfortable environment where clients feel informed, empowered, and supported.",
      certifications: ["I-ACT Instructor-Level", "Double Major: Physical & Ed.", "Certified Wellness Coach", "Digestive Health Specialist"]
    }
  ];

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Clean, modern light background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F9F8] via-[#E2EEEC] to-[#F9FAF6]" aria-hidden="true" />

        {/* Subtle, crisp decorative glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#38838A]/10 to-transparent blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#B36C63]/10 to-transparent blur-[100px] pointer-events-none" aria-hidden="true" />

        {/* Clean dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-2xl">


            <h1 className="text-[#050F2C] mb-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#B36C63] via-[#D98E84] to-[#38838A] bg-clip-text text-transparent drop-shadow-sm">
                Revitalize Your Life.
              </span>{' '}
              Master the Practice at Our Academy.
            </h1>

            <p className="text-[#050F2C]/80 text-lg leading-relaxed mb-9 max-w-lg font-medium">
              {siteContent.home.hero.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-base hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg btn-primary-new"
              >
                {siteContent.home.hero.ctaPrimary}
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href={siteContent.business.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 shadow-md hover:scale-105 btn-secondary-new"
              >
                {siteContent.home.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Logo */}
        <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-[54%] max-w-[680px] items-center justify-center pointer-events-none z-10">
          {/* Subtle Glow Behind Logo for Visibility */}
          <div className="absolute w-[90%] h-[90%] bg-white/50 blur-[80px] rounded-full" />
          <img src={ccdcLogo} alt="Colorado Colonics Logo" className="relative z-10 w-full h-auto object-contain drop-shadow-xl animate-fade-in-up" />
        </div>

        {/* <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 max-w-sm w-full hidden md:block">
          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex gap-1.5">
              {['Colon Hydrotherapy', 'Ion Foot Detox'].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white whitespace-nowrap border border-white/20 transition-all duration-200 hover:border-blue-btn/60 hover:bg-blue/20"
                  style={{ background: 'rgba(10,25,80,0.50)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              {['BioCharger', 'Liver Cleanse', 'Mineralizing Soak'].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white whitespace-nowrap border border-white/20 transition-all duration-200 hover:border-blue-btn/60 hover:bg-blue/20"
                  style={{ background: 'rgba(10,25,80,0.50)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          <div
            className="rounded-2xl p-4 border border-white/10"
            style={{ background: 'rgba(5,15,44,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          >
            <p className="text-white font-bold text-sm mb-1.5">Expert-led care for all ages</p>
            <p className="text-white/55 text-xs leading-relaxed">
              Our certified therapists provide personalized wellness support, helping clients find balance, cleansing, and renewed vitality.
            </p>
          </div> 
        </div> */}
      </section>

      {/* ── OFFICE TOUR ── */}
      <OfficeTourVideo />

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(219,234,254,0.5) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold text-blue uppercase tracking-widest mb-3 block">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-mid leading-tight">
                Our Services
              </h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-gradient-rose" />
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-pale bg-blue-faint text-blue text-sm font-semibold hover:bg-blue-pale transition-all flex-shrink-0"
            >
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Droplet,
                num: '01',
                title: 'Colon Hydrotherapy',
                blurb: 'Gentle, filtered water cleansing with FDA-registered equipment. 45–60 min sessions, no chemicals.',
                link: '/services/colon-hydrotherapy',
                badge: 'Most Popular',
              },
              {
                icon: Zap,
                num: '02',
                title: 'Ion Foot Detox',
                blurb: 'Low-level ionic cleanse supporting your body\'s natural detox pathways. For ages 18+.',
                link: '/services/ion-foot-detox',
              },
              {
                icon: Radio,
                num: '03',
                title: 'BioCharger',
                blurb: 'Light & frequency therapy targeting natural energy systems with customizable programs.',
                link: '/services/biocharger',
              },
              // {
              //   icon: Leaf,
              //   num: '04',
              //   title: 'Liver Cleanse',
              //   blurb: '9-day Medical Medium 3•6•9 protocol — 1 consultation, 3 colonics & 3 foot detoxes.',
              //   link: '/services/liver-cleanse',
              // },
              {
                icon: Sparkles,
                num: '05',
                title: 'Mineralizing Foot Soak',
                blurb: 'Replenishing 30-min mineral soak. Take it standalone or stack with detox sessions.',
                link: '/services/mineralizing-soak',
              },
            ].map(({ icon: Icon, num, title, blurb, link, badge }) => (
              <Link
                key={title}
                to={link}
                className="group relative bg-white p-7 flex flex-col hover:bg-blue-faint transition-colors duration-300"
              >
                <div className="flex items-start justify-between h-11 mb-5">
                  <span className="text-3xl font-display font-bold text-blue-pale leading-none select-none">
                    {num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-blue-faint border border-blue-pale flex items-center justify-center group-hover:bg-blue-pale group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                </div>

                <div className="h-5 mb-1.5">
                  {badge && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue">
                      ★ {badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-navy-mid text-base leading-snug mb-3 group-hover:text-blue transition-colors duration-200">
                  {title}
                </h3>

                <p className="text-ink-soft text-sm leading-relaxed flex-1">
                  {blurb}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-blue mt-5 pt-4 border-t border-blue-pale group-hover:gap-3 transition-all duration-200">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
            <div className="hidden sm:block bg-white" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-blue-faint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-blue uppercase tracking-widest mb-3">
                Simple Process
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-mid mb-3 leading-tight">
                How Your Session<br />Is Built
              </h2>
              <div className="h-1 w-16 rounded-full bg-gradient-rose mb-8" />

              <div className="space-y-0">
                <StepCard number={1} title="Intake & Consultation" desc="We review your health history and answer any questions in a comfortable, judgment-free environment." />
                <StepCard number={2} title="Personalized Session" desc="Using FDA-registered equipment, your therapist guides a gentle, filtered-water cleanse tailored to your needs." />
                <StepCard number={3} title="Aftercare & Guidance" desc="Leave with a personalised wellness plan, hydration tips, and optional add-on recommendations." />
              </div>

              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-7 py-3.5 rounded-xl bg-gradient-rose text-white font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all"
              >
                Book Your First Session <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Droplet, title: 'Colon Hydrotherapy', desc: 'Gentle, filtered, body-temperature water — no chemicals, no drugs. 45–60 min sessions.' },
                { icon: Zap, title: 'Ion Foot Detox', desc: 'Low-level ionic cleanse that supports your body\'s natural detox pathways. Ages 18+.' },
                { icon: Users, title: 'Expert Team', desc: 'All therapists are I-ACT certified and dedicated to compassionate, professional care.' },
                { icon: CheckCircle2, title: 'Safe Equipment', desc: 'FDA-registered, single-use disposable tubes. Approved for colonoscopy prep.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card border border-blue-pale/60 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-pale flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <h4 className="font-bold text-navy-mid text-sm mb-2">{title}</h4>
                  <p className="text-ink-soft text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO PROMO SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12">
              <span className="inline-block text-xs font-semibold text-[#38838A] uppercase tracking-widest mb-3">
                Watch & Learn
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#050F2C] mb-6 leading-tight">
                Discover the Benefits of Colon Hydrotherapy
              </h2>
              <div className="h-1 w-16 rounded-full bg-[#B36C63] mb-6" />
              <p className="text-[#050F2C]/80 text-lg leading-relaxed font-medium mb-8">
                Curious about what a session looks like? Watch this informative guide on the process, benefits, and why so many people are turning to hydro colonics for digestive wellness and renewed energy.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/watch?v=AcG8mLoJhMk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#B36C63] hover:text-[#050F2C] transition-colors"
                >
                  Watch on YouTube <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:w-7/12 w-full">
              <div className="relative aspect-video w-full overflow-hidden rounded-[24px] border border-[#E2EEEC] shadow-sm bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/AcG8mLoJhMk?si=PgoeJ97z6Awv6bs1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPDATED TEAM CARDS SECTION ── */}
      <section className="py-24 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Specialized Team"
            subtitle="I-ACT certified hydrotherapists committed to your comfort and wellbeing."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} {...member} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-navy-mid transition-colors group"
            >
              Learn more about us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full bg-[#F9FAF6] py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
            <span className="text-sm font-bold tracking-widest text-[#050F2C] uppercase">Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#050F2C] tracking-tight mb-3">
            What our clients say
          </h2>
          <div className="w-10 h-1 bg-[#B36C63] rounded-full"></div>
        </div>

        <div className="relative w-full max-w-6xl">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#B36C63]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#38838A]/10 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 items-start">

            {/* Card 1 */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E2EEEC] p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1.5 text-[#CBB06B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-[#CBB06B]" />
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-70" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                </div>
                <blockquote className="text-[#050F2C]/90 text-sm md:text-base italic leading-relaxed font-medium">
                  "Lisa is absolutely amazing! Her knowledge of colon hydrotherapy is incredible and the environment is so peaceful."
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-9 h-9 bg-[#B36C63] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#050F2C] text-sm">Maggie P.</span>
                  <span className="text-xs text-slate-500 font-medium">Local Guide</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E2EEEC] p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1.5 text-[#CBB06B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-[#CBB06B]" />
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-70" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                </div>
                <blockquote className="text-[#050F2C]/90 text-sm md:text-base italic leading-relaxed font-medium">
                  "The clinical excellence here is unmatched. I felt completely supported throughout my entire wellness journey."
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-9 h-9 bg-[#38838A] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#050F2C] text-sm">James R.</span>
                  <span className="text-xs text-slate-500 font-medium">1 review</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E2EEEC] p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px] md:translate-y-6">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1.5 text-[#CBB06B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-[#CBB06B]" />
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-70" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                </div>
                <blockquote className="text-[#050F2C]/90 text-sm md:text-base italic leading-relaxed font-medium">
                  "A truly transformative experience. The staff is professional, empathetic, and highly skilled."
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-9 h-9 bg-[#B36C63] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#050F2C] text-sm">Sarah L.</span>
                  <span className="text-xs text-slate-500 font-medium">Local Guide</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center z-10">
          <a
            href="https://www.google.com/search?q=Colorado+Colonics+%26+Detox+Center&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0u2MLAwszROMUwzSzK1MqgwMjUxMDBOTEkzSjEwS0ozXsSq4Jyfk1-UmJIPZuRlJhcrqCm4pJbkVyg4p-aVpBYBAFlKcVVMAAAA&hl=en&mat=CVIpPhvBf1LLElYBa0lj_9ocp7Fv5mSBTLbreLz5imnz2iC_Em4kUZnnFBlVizStTHdotwmyZ0jzony-BWdauwC-BX5Uc-7tn4Tmi-FYyiTyeH5glOPJgIn0fxUUKd73DA&authuser=0#mpd=~14650913005152119122/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-[#E2EEEC] bg-white rounded-full font-bold text-sm text-[#050F2C] hover:border-[#38838A] shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
            Read more on Google
            <ArrowRight className="w-4 h-4 text-[#38838A] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="py-10 bg-blue-faint border-y border-blue-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {['Circulation', 'Assimilation', 'Relaxation', 'Elimination', 'All Are Welcome'].map((v) => (
              <span key={v} className="flex items-center gap-2 text-navy-mid font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-blue" />
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-[#F9FAF6] via-[#E2EEEC] to-[#C8DFDC] border border-[#B2D4D0] text-[#050F2C]">
          {/* Subtle Ambient Lighting */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B36C63]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#38838A]/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(5,15,44,0.4) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 sm:px-12 md:px-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#B2D4D0] backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#38838A] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B36C63]" />
              Start Your Wellness Journey Today
            </span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight max-w-4xl text-[#050F2C]">
              Ready to feel your <span className="bg-gradient-to-r from-[#B36C63] via-[#D98E84] to-[#38838A] bg-clip-text text-transparent">best?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#050F2C]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Book your appointment today and experience personalized digestive care with our world-class team of certified hydrotherapists.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-white font-bold text-base px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg btn-primary-new w-full sm:w-auto"
              >
                {siteContent.home.closingCTA.cta || "Book Now"}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/services"
                className="flex items-center justify-center gap-2 text-[#050F2C] font-semibold text-base px-8 py-4 rounded-full border-2 border-[#38838A] bg-white/80 backdrop-blur-md hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>

            {/* Footer Contact Info Pill Strip */}
            <div className="mt-14 pt-8 border-t border-[#B2D4D0]/60 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-[#B2D4D0] backdrop-blur-sm text-xs sm:text-sm text-[#050F2C] font-medium shadow-xs">
                <MapPin className="w-4 h-4 text-[#B36C63]" />
                <span>{siteContent.business.address}</span>
              </div>
              <a
                href={siteContent.business.phoneLink}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-[#B2D4D0] backdrop-blur-sm text-xs sm:text-sm text-[#050F2C] font-semibold hover:bg-white transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#38838A]" />
                <span>{siteContent.business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;