import PageHero from '../components/layout/PageHero';
import { HERO_IMAGES } from '../data/heroImages';
import { siteContent } from '../data/content';
import {
  Award,
  Heart,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import lisa from '../assets/about/lisa.jpg';
import kimberly from '../assets/kimberly.jpeg';
import aboutHeroLogo from '../assets/logo/ccdclogo.png';
import iactLogo from '../assets/about/iact-logo.jpg';

/* ─────────────────────────────────────────
   Team Data Structures
───────────────────────────────────────── */
const teamMembers = [
  {
    id: 'lisa-smith',
    name: 'Lisa Smith',
    image: lisa,
    role: 'Certified Colon Hydrotherapist',
    experience: '20+ Years Experience',
    badge: 'CCDC Founder',
    quote: 'My energy, passion, and enthusiasm to help others are gifts I love to share.',
    bio: [
      `There are many events in my life that pointed towards becoming a Colon Hydrotherapist. My first enema was at the age of 2 because of trauma that affected my colon and natural process of elimination. However, there were multiple reasons for my lifelong constipation: trauma, very little fresh food, all my meals were frozen, from a can, from a restaurant, or fast food, stress, PTSD, and many deep emotional issues. As a teenager my digestive problems showed on my skin making it rough for my already fragile self-esteem.`,
      `In 1994, I was given my first herbs to help my body with the healing process.  This new approach helped me to see and understand the logic behind a more natural approach and preventative health care. In 2000, an opportunity to help others who were suffering from their own health issues presented itself and it was exciting! Suddenly everything that was natural, drug and chemical free made sense. Helping people with natural products was extremely satisfying.`,
      `In April of 2008, it was recommended that I have colon hydrotherapy session. The experience plus many more with multiple practitioners was life-changing. It seemed so important to share that enlightened experience with others. By October 2016, I had completed by training to become a certified as a Colon Hydrotherapist.  My training has helped me understand the digestive system and to help ease the body to work at its best for optimal results.`,
      `I am eager to connect with you. My energy, passion, and enthusiasm to help others are gifts I love to share.`
    ],
    certifications: [
      'Certified Colon Hydrotherapist with I-ACT',
      'Foundation Level ~ Advanced Colonic Techniques School (Oct 2015)',
      'Intermediate Level ~ International School for Colon Hydrotherapy (Mar 2019)',
      'Advanced Level ~ International Environment Institute (Aug 2020)',
      'Angel of Water Colon Irrigation System ~ Lifestream Colon Hydrotherapy Institute (Oct 2019)',
    ],
  },
  {
    id: 'kimberly-allenson',
    name: 'Kimberly Allenson',
    image: kimberly,
    role: 'Instructor Level I-ACT Colon Hydrotherapist',
    experience: 'Instructor Level Certification',
    badge: 'Certified I-ACT Instructor',
    quote: 'Helping people feel healthier, more empowered, and at ease in their bodies is what lights me up.',
    bio: [
      `Hi, I’m Kimberly, a certified Instructor Level I-ACT Colon Hydrotherapist with a lifelong passion for health and the human body. My curiosity started young. At just four years old, I asked my mom, “Does food pile up and come out of your mouth when you get older?” That innocent question sparked a fascination with how the body works. I devoured anatomy books and read my grandparents’ Nutrition Facts newsletters from their AARP catalog like they were treasure maps.`,
      `I went on to earn a double major in Physical and Health Education, driven by a desire to learn and share what I discovered. My path eventually led me to California, where I was introduced to colon hydrotherapy, and it was like everything clicked. I knew I’d found not just a career, but a calling.`,
      `Helping people feel healthier, more empowered, and at ease in their bodies is what lights me up. I’m committed to creating a safe, comfortable space for my clients to heal and thrive. I’m thrilled to be part of the Colorado Colonics family, working alongside Lisa and supporting our amazing community.`,
    ],
    // highlights: [
    //   'Instructor Level I-ACT Certified',
    //   'Double Major in Physical & Health Education',
    //   'Dedicated to compassionate client empowerment',
    // ],
  },
];

const coreValues = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Creating a safe, non-judgmental environment where every client feels heard and nurtured.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Expertise',
    description: 'Our therapists hold advanced I-ACT certifications and continuous specialized training.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Wellness',
    description: 'Nurturing the gut-brain connection across physical, mental, and emotional pathways.',
  },
];

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
const About = () => {
  return (
    <div>
      <PageHero
        label="Meet Our Team"
        title="Dedicated to Your Health & Healing"
        subtitle="Compassionate experts committed to guiding you on your natural wellness journey."
        heroLogo={aboutHeroLogo}
        heroLogoAlt="Colorado Colonics Detox Center Logo"
      />

      {/* ── Mission & Values Section ── */}
      <section className="py-20 bg-[#F9FAF6] border-b border-[#E2EEEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#38838A] uppercase tracking-widest block mb-2">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#050F2C]">
              Healing From the Inside Out
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#B36C63] to-[#D98E84] mx-auto" />
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              At Colorado Colonics, we view gut health as the foundation of total well-being.
              Our team combines deep clinical expertise with genuine empathy to empower your journey.
            </p>
          </div>

          {/* Core Values Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-[#E2EEEC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 text-[#38838A] flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#050F2C] mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Team Biographies (All Team Members Visible At Once) ── */}
      <section className="py-24 bg-[#F9FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={member.id}
                id={member.id}
                className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] border border-[#E2EEEC]/60 relative overflow-hidden group scroll-mt-28 transition-all duration-500"
              >
                {/* Subtle Background Glows inside the card */}
                <div className={`absolute top-0 w-full h-full pointer-events-none opacity-40 transition-opacity duration-700 group-hover:opacity-70 ${isEven ? 'right-0 bg-gradient-to-l from-[#F4F9F8] to-transparent' : 'left-0 bg-gradient-to-r from-[#F4F9F8] to-transparent'}`} />
                <div className={`absolute -top-32 w-96 h-96 bg-[#38838A]/5 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110 ${isEven ? '-right-20' : '-left-20'}`} />
                <div className={`absolute -bottom-32 w-96 h-96 bg-[#B36C63]/5 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110 ${isEven ? '-left-20' : '-right-20'}`} />

                <div className="relative z-10 space-y-12">
                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  
                  {/* Visual Side Column (Photo Frame) */}
                  <div
                    className={`lg:col-span-5 w-full relative lg:sticky lg:top-32 ${!isEven ? 'lg:order-last' : ''}`}
                  >
                    {/* Decorative elegant frames behind image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#38838A]/20 to-[#B36C63]/20 rounded-[2rem] transform rotate-3 scale-[1.02] transition-transform duration-700 group-hover:rotate-6"></div>
                    <div className="absolute inset-0 bg-[#F4F9F8] rounded-[2rem] transform -rotate-2 scale-[1.02] transition-transform duration-700 group-hover:-rotate-4 border border-[#E2EEEC]"></div>
                    
                    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-white/50 bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          member.id === 'lisa-smith'
                            ? 'object-[center_35%] scale-[1.12]'
                            : 'object-top'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Main Editorial Copy Column */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

                    {/* Header Title Block */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#F4F9F8] to-white border border-[#E2EEEC] text-xs font-bold uppercase tracking-widest text-[#38838A] rounded-full mb-4 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-[#B36C63]" />
                        Practitioner Profile
                      </div>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#050F2C] leading-tight mb-2 tracking-tight">
                        {member.name}
                      </h2>
                      <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#38838A] to-[#2C6A70] bg-clip-text text-transparent">
                        {member.role}
                      </p>
                    </div>

                    {/* Highlight Quote Box */}
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F9FAF6] to-white border border-[#E2EEEC] shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Quote className="absolute top-4 left-4 w-12 h-12 text-[#B36C63]/10" />
                      <div className="relative z-10 flex gap-4 items-stretch">
                        <div className="w-1.5 flex-shrink-0 bg-gradient-to-b from-[#B36C63] to-[#D98E84] rounded-full" />
                        <p className="text-lg sm:text-xl italic text-[#050F2C] font-serif font-medium leading-relaxed">
                          "{member.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Complete Bio Paragraphs */}
                    <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
                      {member.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    </div>
                  </div>

                  {/* Full-width Credentials Section (Shifted to Left/Full Width) */}
                  {(member.certifications || member.highlights) && (
                    <div className="pt-10 border-t border-[#E2EEEC]/80">
                      <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-12 space-y-8">
                          
                          {/* Certifications Block */}
                          {member.certifications && (
                            <div className="flex flex-col sm:flex-row items-start gap-8">
                              {member.id === 'lisa-smith' && (
                                <div className="w-32 sm:w-40 flex-shrink-0 self-center sm:self-start bg-white p-4 rounded-2xl border border-[#E2EEEC] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 relative overflow-hidden group/logo cursor-pointer">
                                  <div className="absolute inset-0 bg-gradient-to-tr from-[#38838A]/10 to-[#B36C63]/5 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />
                                  <img src={iactLogo} alt="I-ACT Certification" className="w-full h-auto object-contain relative z-10 transition-transform duration-500 group-hover/logo:scale-105" />
                                </div>
                              )}
                              <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2.5 text-[#050F2C] font-bold text-lg">
                                  <div className="p-1.5 bg-[#F4F9F8] rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-[#38838A]" />
                                  </div>
                                  <span>Certifications & Specialized Training</span>
                                </div>
                                <ul className="space-y-3.5">
                                  {member.certifications.map((cert, cIdx) => (
                                    <li key={cIdx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-600 group/cert">
                                      <Award className="w-5 h-5 text-[#38838A]/70 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/cert:scale-110 group-hover/cert:text-[#B36C63]" />
                                      <span className="transition-colors duration-300 group-hover/cert:text-[#050F2C] leading-snug">{cert}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Highlights Block */}
                          {member.highlights && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2.5 text-[#050F2C] font-bold text-lg">
                                <div className="p-1.5 bg-[#F4F9F8] rounded-lg">
                                  <Award className="w-5 h-5 text-[#38838A]" />
                                </div>
                                <span>Specializations & Credentials</span>
                              </div>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {member.highlights.map((item, hIdx) => (
                                  <div key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 group/highlight">
                                    <CheckCircle2 className="w-5 h-5 text-[#38838A]/70 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover/highlight:text-[#38838A]" />
                                    <span className="transition-colors duration-300 group-hover/highlight:text-[#050F2C]">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ── Call to Action Banner ── */}
      <section className="py-20 bg-white border-t border-[#E2EEEC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#050F2C] mb-4">
            Ready to Begin Your Path to Wellness?
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-8">
            Connect with our certified therapists and experience compassionate, natural health support tailored to your unique needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-primary-new text-base font-bold shadow-md hover:scale-105 transition-all"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={siteContent.business.phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-[#E2EEEC] text-[#050F2C] text-base font-bold shadow-xs hover:bg-slate-50 transition-all"
            >
              Contact Our Center
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;