import { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Heart,
  Sparkles,
  Laptop,
  Award,
  CheckCircle2,
  ArrowRight,
  Quote,
  Clock,
  Users,
  Building,
  ChevronRight,
  Compass,
} from 'lucide-react';
import aboutHeroLogo from '../assets/logo/about_hero_logo.jpg';

/* ─────────────────────────────────────────
   Curriculum Modules Data
───────────────────────────────────────── */
const curriculumModules = [
  {
    id: 'anatomy-physiology',
    number: '01',
    title: 'Anatomy & Physiology of the Gut',
    tagline: 'Scientific Foundation of Microbiome & Digestive Health',
    icon: BookOpen,
    color: 'from-[#B36C63] to-[#D98E84]',
    description:
      'Gain a deep, scientific understanding of the digestive tract, the microbiome, and how gut health impacts the entire body—from the immune system to mental clarity.',
    topics: [
      'Microbiome & Gut-Brain Axis Science',
      'Digestive Tract Anatomy & Pathophysiology',
      'Systemic Effects of Gut Inflammation & Toxins',
      'Enteric Nervous System & Stress Responses',
    ],
  },
  {
    id: 'equipment-safety',
    number: '02',
    title: 'Equipment Mastery & Clinical Safety',
    tagline: 'FDA-Registered Devices & Sanitation Standards',
    icon: ShieldCheck,
    color: 'from-[#38838A] to-[#4AA5AE]',
    description:
      'Learn the operational mechanics of FDA-registered colon hydrotherapy devices. We prioritize rigorous sanitation protocols, contraindication screening, and clinical safety standards.',
    topics: [
      'FDA-Registered Device Operations & Maintenance',
      'Strict Sanitation & Sterilization Protocols',
      'Comprehensive Contraindication Screening',
      'Emergency Preparedness & Clinical Safety',
    ],
  },
  {
    id: 'client-care',
    number: '03',
    title: 'The Art of Client Care & Consultation',
    tagline: 'Compassionate Guidance & Client Trust',
    icon: Heart,
    color: 'from-[#B36C63] to-[#D98E84]',
    description:
      'A successful therapist is also a guide. Learn how to conduct professional consultations, ease client anxiety, and create a calming, supportive environment for healing.',
    topics: [
      'Empathetic Pre-Treatment Consultations',
      'Client Anxiety Reduction & Comfort Techniques',
      'Trauma-Informed & Non-Judgmental Care',
      'Long-Term Client Retention & Wellness Support',
    ],
  },
  {
    id: 'nutrition-detox',
    number: '04',
    title: 'Nutrition & Detoxification Support',
    tagline: 'Holistic Pre & Post-Therapy Protocols',
    icon: Sparkles,
    color: 'from-[#38838A] to-[#4AA5AE]',
    description:
      'Understand the vital role of pre- and post-therapy nutrition, hydration, and supplementation to maximize the benefits of the colonics treatment.',
    topics: [
      'Pre-Colonic Dietary Preparation Protocols',
      'Electrolyte Balance & Hydration Science',
      'Post-Therapy Probiotic & Nutrient Replenishment',
      'Seasonal Detoxification & Lifestyle Guidance',
    ],
  },
  {
    id: 'practice-management',
    number: '05',
    title: 'Practice Management & Compliance',
    tagline: 'Business Operations, Regulations & Marketing',
    icon: Building,
    color: 'from-[#050F2C] to-[#38838A]',
    description:
      'From understanding local health regulations and liability to marketing your new services, we prepare you for the realities of running a professional wellness business.',
    topics: [
      'State Health Regulations & Legal Compliance',
      'Liability Insurance & Documentation Best Practices',
      'Wellness Practice Marketing & Client Acquisition',
      'Financial Management & Pricing Strategies',
    ],
  },
];

/* ─────────────────────────────────────────
   Why Choose Us Pillars
───────────────────────────────────────── */
const whyChoosePillars = [
  {
    icon: Laptop,
    title: 'State-of-the-Art Digital Learning',
    description:
      'Our partnership with Athena LMS means your coursework is beautifully organized, easy to navigate, and accessible 24/7. Study at your own pace with high-quality video modules, interactive quizzes, and downloadable resources.',
    highlight: '24/7 Athena LMS Access',
  },
  {
    icon: Users,
    title: 'Industry-Leading Instructors',
    description:
      'Learn directly from seasoned professionals who have successfully built and managed their own thriving hydrotherapy practices with decades of clinical experience.',
    highlight: 'Mentorship by Licensed Experts',
  },
  {
    icon: Compass,
    title: 'The "Tree of Life" Philosophy',
    description:
      'We don’t just teach the mechanics of the machine; we teach the philosophy of holistic, root-cause healing that nurtures mind, body, and spirit.',
    highlight: 'Root-Cause Healing Approach',
  },
  {
    icon: Award,
    title: 'Professional Certification',
    description:
      'Graduate with a recognized credential that demonstrates your commitment to excellence, safety, and professional ethics in the global wellness community.',
    highlight: 'Industry-Recognized Credential',
  },
];

const Academy = () => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div>
      {/* ── Page Hero ── */}
      <PageHero
        label="Professional Certification Program"
        title="Empower Others Through Digestive Health"
        subtitle="Turn your passion for holistic wellness into a rewarding, professional career as a Certified Hydro Colonics Therapist."
        heroLogo={aboutHeroLogo}
        heroLogoAlt="Colorado Colonics Certification Academy Logo"
      />

      {/* ── Intro & Market Demand Section ── */}
      <section className="py-20 bg-[#F9FAF6] border-b border-[#E2EEEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B2D4D0] text-xs font-bold uppercase tracking-widest text-[#38838A] shadow-2xs">
                <GraduationCap className="w-4 h-4 text-[#B36C63]" />
                Career Opportunities in Wellness
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] leading-tight">
                The Skyrocketing Demand for{' '}
                <span className="bg-gradient-to-r from-[#B36C63] via-[#D98E84] to-[#38838A] bg-clip-text text-transparent">
                  Certified Specialists
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                At the intersection of modern wellness and ancient healing lies the foundational importance of gut health. As awareness of the microbiome and digestive wellness continues to skyrocket, the demand for trained, compassionate, and highly skilled Hydro Colonics Therapists is at an all-time high.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Whether you are looking to start a new career in the holistic health sector or expand the offerings of your current wellness practice, our comprehensive certification program provides the knowledge, technical expertise, and business foundation you need to succeed.
              </p>

              {/* Stat Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white border border-[#E2EEEC] shadow-2xs">
                  <span className="text-2xl font-bold text-[#050F2C] block">24/7 Access</span>
                  <span className="text-xs font-semibold text-[#38838A] uppercase tracking-wider">Athena LMS Digital</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E2EEEC] shadow-2xs">
                  <span className="text-2xl font-bold text-[#050F2C] block">Clinical</span>
                  <span className="text-xs font-semibold text-[#38838A] uppercase tracking-wider">Hands-On Practicum</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E2EEEC] shadow-2xs">
                  <span className="text-2xl font-bold text-[#050F2C] block">Recognized</span>
                  <span className="text-xs font-semibold text-[#38838A] uppercase tracking-wider">Professional License</span>
                </div>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#050F2C] to-[#162B5E] p-8 sm:p-10 text-white shadow-2xl border border-white/10">
                {/* Ambient lighting orb */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B36C63]/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#38838A]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D98E84]">
                    <Award className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white leading-snug">
                    The Colorado Colonics Certification Program
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">
                    Powered by the intuitive <strong>Athena LMS</strong> platform, our digitized professional certification program allows you to master theoretical foundations from anywhere, seamlessly bridging online learning with hands-on clinical practicum.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-xs font-semibold text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E84] flex-shrink-0" />
                      <span>Online Theoretical Modules via Athena LMS</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E84] flex-shrink-0" />
                      <span>Direct Mentorship by Certified Instructors</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D98E84] flex-shrink-0" />
                      <span>FDA-Registered Equipment Clinical Mastery</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <a
                      href={siteContent.business.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#B36C63] to-[#D98E84] text-white font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform duration-200"
                    >
                      <span>Enroll in Upcoming Cohort</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Curriculum Section: What You Will Learn ── */}
      <section className="py-24 bg-white border-b border-[#E2EEEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#38838A] uppercase tracking-widest block mb-2">
              Comprehensive Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C]">
              What You Will Learn
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#B36C63] to-[#D98E84] mx-auto" />
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Our rigorous curriculum covers every aspect of colon hydrotherapy, ensuring you graduate with absolute confidence in your clinical skills and practice management.
            </p>
          </div>

          {/* Interactive Curriculum Selector */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Module Selector Buttons (Left Column) */}
            <div className="lg:col-span-5 space-y-3">
              {curriculumModules.map((mod, idx) => {
                const Icon = mod.icon;
                const isActive = activeModule === idx;

                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModule(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                      isActive
                        ? 'bg-[#050F2C] text-white border-[#050F2C] shadow-lg scale-[1.01]'
                        : 'bg-[#F9FAF6] text-[#050F2C] border-[#E2EEEC] hover:bg-white hover:border-[#38838A]/40 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                          isActive
                            ? 'bg-gradient-to-r from-[#B36C63] to-[#D98E84] text-white shadow-xs'
                            : 'bg-white text-[#38838A] border border-[#E2EEEC]'
                        }`}
                      >
                        {mod.number}
                      </div>
                      <div>
                        <h4 className="font-bold text-base leading-snug">{mod.title}</h4>
                        <span className={`text-xs block mt-0.5 ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
                          {mod.tagline}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${isActive ? 'text-[#D98E84] translate-x-1' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Module Detail Card (Right Column) */}
            <div className="lg:col-span-7">
              {(() => {
                const mod = curriculumModules[activeModule];
                const Icon = mod.icon;

                return (
                  <div className="bg-[#F9FAF6] rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-md relative overflow-hidden flex flex-col justify-between min-h-[440px]">
                    {/* Background accent badge */}
                    <div className="absolute top-6 right-6 text-7xl font-display font-extrabold text-[#050F2C]/5 pointer-events-none select-none">
                      {mod.number}
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E2EEEC] text-xs font-bold text-[#38838A] uppercase tracking-wider mb-6 shadow-2xs">
                        <Icon className="w-4 h-4 text-[#B36C63]" />
                        <span>Module {mod.number} Detail</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] mb-3 leading-tight">
                        {mod.title}
                      </h3>

                      <p className="text-slate-600 text-base leading-relaxed mb-8">
                        {mod.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <span className="text-xs font-bold text-[#050F2C] uppercase tracking-wider block mb-2">
                          Key Learning Outcomes:
                        </span>
                        {mod.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E2EEEC] shadow-2xs">
                            <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm font-semibold">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E2EEEC] flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Athena LMS Module Integration
                      </span>
                      <a
                        href={siteContent.business.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#38838A] hover:text-[#050F2C] transition-colors"
                      >
                        <span>View Full Syllabus</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Our Academy? ── */}
      <section className="py-24 bg-[#F9FAF6] border-b border-[#E2EEEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#38838A] uppercase tracking-widest block mb-2">
              The Academy Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C]">
              Why Choose Our Academy?
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#B36C63] to-[#D98E84] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoosePillars.map((pillar, idx) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 sm:p-9 border border-[#E2EEEC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#F4F9F8] border border-[#E2EEEC] flex items-center justify-center text-[#38838A]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold text-[#B36C63] bg-[#FDF6F5] px-3 py-1 rounded-full border border-[#F5E2E0] uppercase tracking-wider">
                        {pillar.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#050F2C] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Closing Call-To-Action & Quote Banner ── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-[#050F2C] via-[#0E204A] to-[#162B5E] text-white">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B36C63]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#38838A]/30 rounded-full blur-[120px] pointer-events-none" />

          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 sm:py-20 px-6 sm:px-12 md:px-20">
            
            {/* Quote Badge */}
            <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 mb-10 shadow-inner">
              <Quote className="w-8 h-8 text-[#D98E84] mx-auto mb-3 opacity-90" />
              <p className="text-lg sm:text-xl font-display italic text-white/95 leading-snug">
                “All disease begins in the gut.”
              </p>
              <span className="text-xs font-bold text-[#D98E84] uppercase tracking-widest block mt-2">
                — Hippocrates
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight max-w-4xl text-white">
              Ready to Cultivate Wellness from the{' '}
              <span className="bg-gradient-to-r from-[#B36C63] via-[#D98E84] to-[#38838A] bg-clip-text text-transparent">
                Inside Out?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Step into a career that allows you to facilitate profound healing and detoxification. Spaces in our upcoming digital and clinical cohorts are limited to ensure personalized instruction and mentorship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-white font-bold text-base px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg bg-gradient-to-r from-[#B36C63] to-[#D98E84] w-full sm:w-auto"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={siteContent.business.phoneLink}
                className="flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
              >
                <span>Speak with an Admissions Advisor</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
