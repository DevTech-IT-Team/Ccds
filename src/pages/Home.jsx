import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Droplet, Zap, Users, ChevronRight, Sparkles } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import SectionHeading from '../components/ui/SectionHeading';
import StaffCard from '../components/ui/StaffCard';
import { siteContent } from '../data/content';
import { staff } from '../data/staff';
import hospitalImg from '../assets/herobg.jpg';
import glassShapeImg from '../assets/hero.png';


const StepCard = ({ number, title, desc }) => (
  <div className="relative flex gap-5">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-btn text-white text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-glow z-10">
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


const Home = () => {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
  <div>
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── BG photo with parallax shift ── */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${hospitalImg})`,
          backgroundPosition: `calc(50% + ${mousePos.x * 0.4}px) calc(30% + ${mousePos.y * 0.4}px)`,
          transform: `scale(1.04)`,
        }}
        aria-hidden="true"
      />

      {/* ── multi-stop overlay: left dark for text, right lighter to show image ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(5,15,44,0.96) 0%, rgba(10,31,92,0.88) 38%, rgba(10,31,92,0.60) 60%, rgba(5,15,44,0.30) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(147,197,253,1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      {/* ── ambient glow left ── */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── floating service tags ── */}

      {/* ── decorative glass shape (your hero.png) ── */}
      <div
        className="absolute right-[4%] top-[12%] w-48 opacity-20 pointer-events-none hidden xl:block"
        style={{
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
          transition: 'transform 0.15s ease-out',
        }}
        aria-hidden="true"
      >
        <img src={glassShapeImg} alt="" className="w-full h-auto" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-2xl">

          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-btn/40 bg-blue/15 backdrop-blur-sm mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-btn animate-pulse" />
            <span className="text-xs font-bold text-blue-glow uppercase tracking-[0.15em]">
              Certified Colon Hydrotherapy
            </span>
          </div>

          <h1 className="text-white mb-6">
            {siteContent.home.hero.headline}
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-9 max-w-lg">
            {siteContent.home.hero.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue to-blue-btn text-white font-bold text-base shadow-glow hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.55)] transition-all duration-300"
            >
              {siteContent.home.hero.ctaPrimary}
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href={siteContent.business.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
            >
              {siteContent.home.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM-RIGHT — tags + expert blurb pinned to bottom-right of hero ── */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 max-w-sm w-full hidden md:block">
        {/* service tag pills — 2 rows, compact */}
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

        {/* expert blurb */}
        <div
          className="rounded-2xl p-4 border border-white/10"
          style={{ background: 'rgba(5,15,44,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
          <p className="text-white font-bold text-sm mb-1.5">Expert-led care for all ages</p>
          <p className="text-white/55 text-xs leading-relaxed">
            Our certified therapists provide personalized wellness support, helping clients find balance, cleansing, and renewed vitality.
          </p>
        </div>
      </div>

    </section>

    {/* ════════════════════════════════
        SERVICES
    ════════════════════════════════ */}
    <section className="py-24 bg-white relative overflow-hidden">
      {/* subtle background tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(219,234,254,0.5) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold text-blue uppercase tracking-widest mb-3 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-mid leading-tight">
              Our Services
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue to-blue-btn" />
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-pale bg-blue-faint text-blue text-sm font-semibold hover:bg-blue-pale transition-all flex-shrink-0"
          >
            View all services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* grid — 1 featured left + 4 compact right */}
        <div className="grid lg:grid-cols-3 gap-5">

          {/* ── FEATURED card ── */}
          <Link
            to="/services/colon-hydrotherapy"
            className="group lg:row-span-2 relative rounded-3xl overflow-hidden flex flex-col justify-end min-h-[360px]"
            style={{ background: 'linear-gradient(150deg, #0a1f5c 0%, #1d4ed8 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-6 right-6 w-40 h-40 rounded-full bg-blue-btn/20 blur-3xl pointer-events-none" />
            {/* icon */}
            <div className="absolute top-8 left-8">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                <Droplet className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="relative p-8 pt-28">
              <span className="text-[10px] font-bold text-blue-glow/80 uppercase tracking-widest mb-2 block">Most Popular</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 leading-snug group-hover:text-blue-glow transition-colors">
                Colon Hydrotherapy
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Gentle, filtered, body-temperature water cleansing. FDA-registered equipment, no chemicals. 45–60 min sessions.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* ── 4 compact cards ── */}
          {[
            {
              icon: Zap,
              title: 'Ion Foot Detox',
              blurb: 'Ionic cleanse supporting your body\'s natural detox pathways. Ages 18+.',
              link: '/services/ion-foot-detox',
            },
            {
              icon: Users,
              title: 'BioCharger',
              blurb: 'Light & frequency therapy targeting natural energy systems with customizable programs.',
              link: '/services/biocharger',
            },
            {
              icon: Droplet,
              title: 'Liver Cleanse',
              blurb: '9-day Medical Medium 3•6•9 protocol — 1 consult, 3 colonics, 3 foot detoxes.',
              link: '/services/liver-cleanse',
            },
            {
              icon: Sparkles,
              title: 'Mineralizing Soak',
              blurb: 'Replenishing 30-min mineral foot soak. Standalone or stacked with detox sessions.',
              link: '/services/mineralizing-soak',
            },
          ].map(({ icon: Icon, title, blurb, link }) => (
            <Link
              key={title}
              to={link}
              className="group relative bg-white rounded-2xl p-6 border border-blue-pale hover:border-blue-light hover:shadow-card-hover transition-all duration-300 overflow-hidden flex gap-5 items-start"
            >
              {/* hover top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue to-blue-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              {/* icon */}
              <div className="w-11 h-11 rounded-xl bg-blue-faint flex items-center justify-center flex-shrink-0 group-hover:bg-blue-pale group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-blue" />
              </div>
              {/* text */}
              <div className="min-w-0">
                <h3 className="font-bold text-navy-mid text-sm mb-1.5 group-hover:text-blue transition-colors">{title}</h3>
                <p className="text-ink-soft text-xs leading-relaxed">{blurb}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue mt-3 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>

    {/* ════════════════════════════════
        HOW IT WORKS
    ════════════════════════════════ */}
    <section className="py-24 bg-blue-faint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — steps */}
          <div>
            <span className="inline-block text-xs font-semibold text-blue uppercase tracking-widest mb-3">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-mid mb-3 leading-tight">
              How Your Session<br />Is Built
            </h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue to-blue-btn mb-8" />

            <div className="space-y-0">
              <StepCard number={1} title="Intake & Consultation" desc="We review your health history and answer any questions in a comfortable, judgment-free environment." />
              <StepCard number={2} title="Personalized Session" desc="Using FDA-registered equipment, your therapist guides a gentle, filtered-water cleanse tailored to your needs." />
              <StepCard number={3} title="Aftercare & Guidance" desc="Leave with a personalised wellness plan, hydration tips, and optional add-on recommendations." />
            </div>

            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all"
            >
              Book Your First Session <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — info cards */}
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

    {/* ════════════════════════════════
        TEAM PREVIEW
    ════════════════════════════════ */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Specialized Team"
          subtitle="I-ACT certified hydrotherapists committed to your comfort and wellbeing."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {staff.map((member, i) => (
            <StaffCard key={i} staff={member} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-blue font-semibold hover:text-navy-mid transition-colors"
          >
            Learn more about us <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════
        TESTIMONIALS
    ════════════════════════════════ */}
    <section className="py-24 bg-gradient-to-br from-navy via-navy-mid to-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-mid/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={siteContent.home.testimonialSection.heading}
          light
        />
        <div className="max-w-3xl mx-auto mb-8">
          <TestimonialCarousel />
        </div>
        <div className="text-center">
          <a
            href={siteContent.home.testimonialSection.googleReviewUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all"
          >
            {siteContent.home.testimonialSection.readMore}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════
        VALUES STRIP
    ════════════════════════════════ */}
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

    {/* ════════════════════════════════
        CLOSING CTA
    ════════════════════════════════ */}
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-blue" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-btn/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue/20 rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 py-16 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {siteContent.home.closingCTA.heading}
            </h2>
            <p className="text-blue-glow text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              {siteContent.home.closingCTA.subhead}
            </p>
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-navy-mid font-bold text-base shadow-xl hover:bg-blue-pale hover:scale-105 transition-all duration-200"
            >
              {siteContent.home.closingCTA.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-8 text-blue-glow/60 text-sm">
              {siteContent.business.address} &nbsp;·&nbsp;{' '}
              <a href={siteContent.business.phoneLink} className="hover:text-white transition-colors">
                {siteContent.business.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
