import React from 'react';
import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
import Button from '../components/ui/Button';
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
import lisa from '../assets/lisa.png';
import kimberly from '../assets/kimberly.jpeg';
import jessica from '../assets/jessica.png';

/* ─────────────────────────────────────────
   Team Data Structures
───────────────────────────────────────── */
const teamMembers = [
  {
    id: 'lisa-smith',
    name: 'Lisa Smith',
    image: lisa,
    role: 'CCDC Founder & Certified Colon Hydrotherapist',
    quote: 'My energy, passion, and enthusiasm to help others are gifts I love to share.',
    bio: [
      `There are many events in my life that pointed towards becoming a Colon Hydrotherapist. My first enema was at the age of 2 because of trauma that affected my colon and natural process of elimination. However, there were multiple reasons for my lifelong constipation: trauma, very little fresh food, all my meals were frozen, from a can, from a restaurant, or fast food, stress, PTSD, and many deep emotional issues. As a teenager my digestive problems showed on my skin making it rough for my already fragile self-esteem.`,
      `In 1994, I was given my first herbs to help my body with the healing process. This new approach helped me to see and understand the logic behind a more natural approach and preventative health care. In 2000, an opportunity to help others who were suffering from their own health issues presented itself and it was exciting! Suddenly everything that was natural, drug and chemical free made sense. Helping people with natural products was extremely satisfying.`,
      `In April of 2008, it was recommended that I have a colon hydrotherapy session. The experience plus many more with multiple practitioners was life-changing. It seemed so important to share that enlightened experience with others. By October 2016, I had completed my training to become certified as a Colon Hydrotherapist. My training has helped me understand the digestive system and to help ease the body to work at its best for optimal results.`,
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
    quote: 'Helping people feel healthier, more empowered, and at ease in their bodies is what lights me up.',
    bio: [
      `Hi, I’m Kimberly, a certified Instructor Level I-ACT Colon Hydrotherapist with a lifelong passion for health and the human body. My curiosity started young. At just four years old, I asked my mom, “Does food pile up and come out of your mouth when you get older?” That innocent question sparked a fascination with how the body works. I devoured anatomy books and read my grandparents’ Nutrition Facts newsletters from their AARP catalog like they were treasure maps.`,
      `I went on to earn a double major in Physical and Health Education, driven by a desire to learn and share what I discovered. My path eventually led me to California, where I was introduced to colon hydrotherapy, and it was like everything clicked. I knew I’d found not just a career, but a calling.`,
      `Helping people feel healthier, more empowered, and at ease in their bodies is what lights me up. I’m committed to creating a safe, comfortable space for my clients to heal and thrive. I’m thrilled to be part of the Colorado Colonics and Detox Center family, working alongside Lisa and supporting our amazing community.`,
    ],
    highlights: [
      'Instructor Level I-ACT Certified',
      'Double Major in Physical & Health Education',
      'Dedicated to compassionate client empowerment',
    ],
  },
  {
    id: 'jessica-fuentes',
    name: 'Jessica Fuentes',
    image: jessica,
    role: 'Advanced Colon Hydrotherapist & Integrative Health Coach',
    quote: 'True well-being isn’t just physical—it encompasses emotional, mental, and spiritual health as well.',
    bio: [
      `Hi, I’m Jessica Fuentes. I’m an Advanced Colon Hydrotherapist, Integrative Health Coach, Licensed Massage Therapist, Certified Gluten-Free Practitioner, and Advanced Reiki Practitioner. I recently completed training in Arvigo, a traditional Maya Indigenous Abdominal Massage.`,
      `I’m originally from Connecticut but now call Colorado home. My healthcare journey began in high school, and after working as a physical therapy assistant, I came to embrace the idea that “food is medicine.” Studying at the University of Connecticut provided me with a deeper understanding of the human body and inspired my holistic approach to health and wellness.`,
      `Over time, I came to see just how powerful gut health and stress are and how the digestive system is our “brain in the gut.” Now, I guide my clients to understand that true well-being isn’t just physical, it encompasses emotional, mental, and spiritual health as well. Through compassionate education and hands-on therapy, I empower people to take charge of their health with mindfulness and self-care.`,
    ],
    highlights: [
      'Advanced Colon Hydrotherapist & Integrative Health Coach',
      'Licensed Massage Therapist & Advanced Reiki Practitioner',
      'Trained in Arvigo Maya Abdominal Massage',
      'Certified Gluten-Free Practitioner',
    ],
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
        image={HERO_IMAGES.about}
      />

      {/* ── Mission & Values Section ── */}
      <section className="py-20 bg-blue-faint border-y border-blue-pale/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue uppercase tracking-widest block mb-2">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#050F2C]">
              Healing From the Inside Out
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#B36C63] to-[#D98E84] mx-auto" />
            <p className="mt-4 text-ink-soft text-sm md:text-base leading-relaxed">
              At Colorado Colonics and Detox Center, we view gut health as the foundation of total well-being.
              Our team combines deep clinical expertise with genuine empathy to empower your journey.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-blue-pale/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-faint border border-blue-pale flex items-center justify-center mb-6 text-blue flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-mid mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Team Biographies ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={member.id}
                id={member.id}
                className="bg-white rounded-3xl border border-blue-pale shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0 scroll-mt-24"
              >
                {/* Visual Side Container (Hero Photo Column) */}
                <div
                  className={`lg:col-span-5 relative min-h-[360px] lg:min-h-[500px] bg-[#E2EEEC] overflow-hidden flex flex-col justify-end ${!isEven ? 'lg:order-last' : ''
                    }`}
                >
                  {/* Full Cover Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent lg:bg-gradient-to-t lg:from-white/90 lg:via-white/40 lg:to-transparent" />

                  {/* Info Overlay at Bottom of Photo */}
                  <div className="relative z-10 p-6 lg:p-8 text-[#050F2C] space-y-2">
                    <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-md border border-[#E2EEEC] text-xs font-semibold rounded-full text-[#050F2C] mb-1">
                      Practitioner Profile
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[#050F2C] drop-shadow-sm">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#38838A] font-bold leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Main Content Details */}
                <div className="lg:col-span-7 p-8 lg:p-12 space-y-8 flex flex-col justify-between bg-white">

                  {/* Bio Paragraphs */}
                  <div className="space-y-4 text-ink-soft leading-relaxed text-sm md:text-base">
                    {member.bio.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlight Quote */}
                  <div className="p-5 rounded-2xl bg-blue-faint/60 border border-blue-pale/80 flex gap-4 items-start">
                    <Quote className="w-6 h-6 text-blue flex-shrink-0 mt-1" />
                    <p className="text-xs md:text-sm italic text-navy-mid font-medium leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>

                  {/* Certifications Block (Lisa) */}
                  {member.certifications && (
                    <div className="pt-6 border-t border-blue-pale">
                      <div className="flex items-center gap-2 text-navy-mid font-bold text-sm mb-3">
                        <GraduationCap className="w-4 h-4 text-blue" />
                        <span>Certifications & Specialized Training</span>
                      </div>
                      <ul className="grid sm:grid-cols-1 gap-2">
                        {member.certifications.map((cert, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-ink-soft">
                            <Award className="w-4 h-4 text-blue mt-0.5 flex-shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights Block (Kimberly / Jessica) */}
                  {member.highlights && (
                    <div className="pt-6 border-t border-blue-pale">
                      <div className="flex items-center gap-2 text-navy-mid font-bold text-sm mb-3">
                        <Award className="w-4 h-4 text-blue" />
                        <span>Specializations & Credentials</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {member.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs md:text-sm text-ink-soft">
                            <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
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
      <section className="py-16 bg-blue-faint relative overflow-hidden border-t border-blue-pale">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-mid mb-4">
            Ready to Begin Your Path to Wellness?
          </h2>
          <p className="text-ink-soft text-sm md:text-base max-w-xl mx-auto mb-8">
            Connect with our certified therapists and experience compassionate, natural health support tailored to your unique needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              onClick={() => window.open(siteContent.business.bookingUrl, '_blank')}
            >
              Book an Appointment <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = siteContent.business.phoneLink}
            >
              Contact Our Center
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;