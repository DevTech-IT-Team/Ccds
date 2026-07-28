import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Droplet, Zap, Users, ChevronRight, Sparkles, Radio, Leaf, Star, MapPin, Phone } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeading from '../components/ui/SectionHeading';
import StaffCard from '../components/ui/StaffCard';
import VideoThumbnailCard from '../components/ui/VideoThumbnailCard';
import { siteContent } from '../data/content';
import { staff } from '../data/staff';
import hospitalImg from '../assets/herobg.jpg';
import glassShapeImg from '../assets/hero.png';
import lisa from '../assets/lisa.png';
import kimberly from '../assets/kimberly.jpeg';
import jessica from '../assets/jessica.png';

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
const TeamMemberCard = ({ name, role, bio, titleBadge, imageSrc, certifications }) => (
  <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full">
    {/* Image Container with Badge */}
    <div className="relative aspect-[4/3] bg-sky-50 overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-t-lg shadow-sm">
          {titleBadge}
        </span>
      </div>
    </div>

    {/* Content Container */}
    <div className="p-6 sm:p-8 flex flex-col flex-grow items-center text-center">
      <h3 className="text-xl font-bold text-slate-900 mb-0.5">{name}</h3>
      <p className="text-xs font-semibold text-blue-600 mb-4">{role}</p>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {bio}
      </p>

      {/* Badges / Certifications Container */}
      <div className="w-full pt-4 border-t border-slate-100 mt-auto flex flex-wrap gap-1.5 justify-center">
        {certifications.map((cert, idx) => (
          <span
            key={idx}
            className="bg-sky-50 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-sky-100 inline-flex items-center gap-1"
          >
            <span className="text-blue-500 font-bold">✓</span> {cert}
          </span>
        ))}
      </div>
    </div>
  </article>
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

  // Updated Cards Data
  const teamMembers = [
    {
      name: "Lisa Smith, I-ACT",
      role: "Certified Colon Hydrotherapist",
      titleBadge: "Founder",
      imageSrc: lisa,
      bio: "Childhood health struggles led Lisa to herbalism in 1994. After a transformative experience in 2008, she became a certified hydrotherapist in 2016, dedicated to helping others achieve lasting digestive wellness.",
      certifications: ["Foundation (2015)", "Intermediate (2019)", "Advanced (2020)", "Angel of Water (2019)"]
    },
    {
      name: "Kimberly Allenson, PHE",
      role: "Instructor-Level Hydrotherapist",
      titleBadge: "Instructor",
      imageSrc: kimberly,
      bio: "Kimberly brings a strong educational background to her practice with a double major in Physical and Health Education. As an Instructor-Level Hydrotherapist, she excels in both client care and professional education.",
      certifications: ["I-ACT Instructor-Level", "Double Major: Physical & Ed.", "Certified Wellness Coach", "Digestive Health Specialist"]
    },
    {
      name: "Jessica Fuentes, LMT",
      role: "Integrative Health Coach",
      titleBadge: "Advanced Specialist",
      imageSrc: jessica,
      bio: "Jessica offers a holistic approach to wellness with multiple certifications. Her diverse background allows her to support clients through various modalities, providing comprehensive and personalized health support.",
      certifications: ["Advanced Colon Hydrotherapist", "Integrative Health Coach", "Licensed Massage Therapist", "Reiki Practitioner"]
    }
  ];

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-100 ease-out"
          style={{
            backgroundImage: `url(${hospitalImg})`,
            backgroundPosition: `calc(50% + ${mousePos.x * 0.4}px) calc(30% + ${mousePos.y * 0.4}px)`,
            transform: `scale(1.04)`,
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-overlay-new"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(rgba(147,197,253,1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
          aria-hidden="true"
        />

        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-2xl">


            <h1 className="text-[#050F2C] mb-6">
              {siteContent.home.hero.headline}
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

        <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 max-w-sm w-full hidden md:block">
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
        </div>
      </section>

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-blue-pale rounded-2xl overflow-hidden shadow-card">
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
              {
                icon: Leaf,
                num: '04',
                title: 'Liver Cleanse',
                blurb: '9-day Medical Medium 3•6•9 protocol — 1 consultation, 3 colonics & 3 foot detoxes.',
                link: '/services/liver-cleanse',
              },
              {
                icon: Sparkles,
                num: '05',
                title: 'Mineralizing Foot Soak',
                blurb: 'Replenishing 30-min mineral soak. Take it standalone or stack with detox sessions.',
                link: '/services/mineralizing-soak',
              },
              {
                icon: Users,
                num: '06',
                title: 'Community Resources',
                blurb: 'Local recovery & wellness referrals. We support the body on the journey after recovery.',
                link: '/services/community-resources',
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
                  href="https://www.youtube.com/watch?v=CXFi6TEPplY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#B36C63] hover:text-[#050F2C] transition-colors"
                >
                  Watch on YouTube <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:w-7/12 w-full">
              <VideoThumbnailCard videoId="CXFi6TEPplY" title="YouTube video" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="flex gap-1.5 text-[#CBB06B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#CBB06B]" />
                  ))}
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
                  <span className="text-xs text-[#38838A] font-medium">Verified Patient</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E2EEEC] p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex gap-1.5 text-[#CBB06B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#CBB06B]" />
                  ))}
                </div>
                <blockquote className="text-[#050F2C]/90 text-sm md:text-base italic leading-relaxed font-medium">
                  "The clinical excellence here is unmatched. I felt completely supported throughout my entire wellness journey."
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-9 h-9 bg-[#B36C63] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#050F2C] text-sm">James R.</span>
                  <span className="text-xs text-[#38838A] font-medium">Verified Patient</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E2EEEC] p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px] md:translate-y-6">
              <div>
                <div className="flex gap-1.5 text-[#CBB06B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#CBB06B]" />
                  ))}
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
                  <span className="text-xs text-[#38838A] font-medium">Verified Patient</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center z-10">
          <a
            href={siteContent.home.testimonialSection.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-[#38838A] rounded-full font-semibold text-sm text-[#050F2C] hover:bg-black/5 transition-all duration-300 group"
          >
            View All Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* ── CLOSING CTA (NEW REPLACED SECTION) ── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-[0px_20px_50px_rgba(0,0,0,0.1)] bg-overlay-new">
          {/* Atmospheric Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,212,208,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 px-8 md:px-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#050F2C] mb-4 tracking-tight">
              {siteContent.home.closingCTA.heading || "Ready to feel your best?"}
            </h2>

            <p className="font-sans text-base md:text-xl text-[#050F2C]/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              {siteContent.home.closingCTA.subhead || "Book your appointment today and start your journey to wellness with our world-class team of dedicated professionals."}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-primary-new"
              >
                {siteContent.home.closingCTA.cta || "Book Now"}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/services"
                className="font-semibold text-[#050F2C] backdrop-blur-md border-2 border-[#38838A] px-8 py-5 rounded-xl transition-all hover:bg-black/5"
              >
                Our Services
              </Link>
            </div>

            {/* Footer Info Embedded in Section */}
            <div className="mt-16 pt-6 border-t border-[#E2EEEC] w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 opacity-80">
              <div className="flex items-center gap-2 font-medium text-[#050F2C]/80 text-sm">
                <MapPin className="w-4 h-4 text-[#B36C63]" />
                {siteContent.business.address}
              </div>
              <a
                href={siteContent.business.phoneLink}
                className="flex items-center gap-2 font-medium text-[#050F2C]/80 text-sm hover:text-[#050F2C] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B36C63]" />
                {siteContent.business.phone}
              </a>
            </div>
          </div>

          {/* Floating Aesthetic Elements */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#B36C63]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#38838A]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
};

export default Home;