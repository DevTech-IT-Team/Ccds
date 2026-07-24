import SectionHeading from '../components/ui/SectionHeading';
import StaffCard from '../components/ui/StaffCard';
import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { staff } from '../data/staff';
import { BadgeCheck, ArrowRight } from 'lucide-react';

const About = () => (
  <div>
    <PageHero
      label="Who We Are"
      title="About Colorado Colonics &amp; Detox Center"
      subtitle={siteContent.about.intro}
      image={HERO_IMAGES.team}
    />

    {/* Values strip */}
    <section className="py-10 bg-blue-faint border-b border-blue-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'I-ACT Certified', desc: 'All therapists hold full I-ACT certification from Foundation through Advanced levels.' },
            { title: 'Judgment-Free',   desc: 'A welcoming space where every body and every question is respected.' },
            { title: 'FDA-Registered',  desc: 'We use only FDA-registered, single-use disposable equipment for every session.' },
            { title: 'Compassionate Care', desc: 'Your comfort is our priority from the moment you walk through the door.' },
          ].map(({ title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BadgeCheck className="w-5 h-5 text-blue" />
              </div>
              <div>
                <h4 className="font-bold text-navy-mid text-sm mb-1">{title}</h4>
                <p className="text-ink-soft text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Certified hydrotherapists dedicated to your digestive wellness."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {staff.map((member, i) => (
            <StaffCard key={i} staff={member} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-blue-faint">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-mid mb-4">
          Ready to start your wellness journey?
        </h2>
        <p className="text-ink-soft mb-8">
          Book a consultation with one of our certified therapists today.
        </p>
        <a
          href={siteContent.business.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all"
        >
          Book an Appointment <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  </div>
);

export default About;
