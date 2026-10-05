import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import academyLogo from '../assets/academy/Colonic_Academy_Logo.png';
import lisaImage from '../assets/Lisamain.png';

const useCounter = (end, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasTriggered]);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return {
    displayValue: hasTriggered && count === end ? `${formatNumber(count)}${suffix}` : formatNumber(count),
    nodeRef
  };
};

const AnimatedCounter = ({ end, duration, suffix, title, subtitle }) => {
  const { displayValue, nodeRef } = useCounter(end, duration, suffix);

  return (
    <div ref={nodeRef} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-[2.5rem] md:text-5xl font-serif text-[#C4A464] mb-2">{displayValue}</div>
      <div className="text-white text-sm md:text-[13px] font-bold tracking-wide">{title}</div>
      {subtitle && <div className="text-white/70 text-xs md:text-sm mt-1">{subtitle}</div>}
    </div>
  );
};

const CurriculumCard = ({ id, title, hours, desc }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-[1rem] border border-[#E2E8F0] shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-md transition-shadow overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-[#08183A] text-[13.5px]">
          <span className="text-[#6B7280] font-normal mr-1.5">{id} &middot;</span> {title}
        </span>
        <span className="text-[#E39686] font-medium text-[13px]">{hours}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
          <div className="h-px bg-slate-100 w-full mb-4"></div>
          <p className="text-[13px] text-[#5A6577] leading-[1.7]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Academy = () => {
  const [activeTab, setActiveTab] = useState('online');

  const onlineCurriculum = [
    { id: 'W01', title: 'History, Theory & Practice', hours: '30h', desc: 'History, standards of practice, regulations, equipment, professional procedures, and risk awareness.' },
    { id: 'W02', title: 'Anatomy & Physiology', hours: '60h', desc: 'Human body systems with focused study of digestion and how body systems relate to one another.' },
    { id: 'W03', title: 'Microbiology', hours: '25h', desc: 'Microbiology fundamentals, infection prevention, personal hygiene, sanitation, and disinfection.' },
    { id: 'W04', title: 'Intestinal Health', hours: '14h', desc: 'Healthy digestive function versus dysfunction, including nutrition, stress, and gut flora within scope of practice.' },
    { id: 'W05', title: 'Nutrition', hours: '16h', desc: 'Food, Nutrition and Health coursework supporting a strong foundation in wellness education.' },
    { id: 'W06', title: 'Drug Interactions', hours: '10h', desc: 'Professional awareness of medication interactions and considerations relevant to client care.' },
    { id: 'W07', title: 'Business Ethics & Office Procedures', hours: '40h', desc: 'Business setup, operations, marketing, regulations, career paths, ethics, and office procedures.' },
    { id: 'W08', title: 'Complementary Modalities', hours: '5h', desc: 'Introduction to breath work, reflexology, aromatherapy, and peristalsis points.' },
  ];

  const clinicalCurriculum = [
    { id: 'C01', title: 'Office Procedures', hours: '5h', desc: 'Policies, client engagement, intake procedures, session preparation, and post-session care.' },
    { id: 'C02', title: 'Health & Sanitation', hours: '5h', desc: 'Treatment room and device preparation, hygiene, sanitation, and disinfection protocols.' },
    { id: 'C03', title: 'Anatomy of the Alimentary Tract', hours: '5h', desc: 'Focused review of digestive anatomy and the structure and function of the alimentary tract.' },
    { id: 'C04', title: 'Practicum & Client Sessions', hours: '50h', desc: 'Thirty-five supervised sessions covering intake, equipment, session procedures, client care, charting, sanitation, contraindications, and referrals.' },
  ];

  const currentCurriculum = activeTab === 'online' ? onlineCurriculum : clinicalCurriculum;

  return (
    <div className="bg-[#FCFCFA] text-[#0A1C3A] font-sans selection:bg-[#E39686] selection:text-white pb-0">
      {/* ── Hero Section ── */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <img
          src={academyLogo}
          alt="Colonic Academy Logo"
          className="mx-auto h-40 md:h-[180px] object-contain mb-8"
        />
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-serif text-[#0A1C3A] mb-6 leading-[1.15] tracking-tight">
          Follow Your Interest <br className="hidden md:block" /> to a Professional Path <br className="hidden md:block" /> in Colon Hydrotherapy
        </h1>
        <p className="text-[#4A5568] text-[15px] md:text-[17px] max-w-2xl mx-auto mb-10 leading-relaxed">
          Train with Colonic Academy through our I-ACT-approved 265-hour Professional Colon Hydrotherapy Training Program.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact?subject=Academy%20Inquiry#contact-form"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#E39686] text-white font-semibold tracking-wide text-sm rounded-full hover:bg-[#D48171] transition-all flex items-center justify-center gap-2"
          >
            Request More Information &rarr;
          </Link>
          <a
            href="#curriculum"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#0A1C3A] text-[#0A1C3A] font-semibold tracking-wide text-sm rounded-full hover:bg-[#0A1C3A] hover:text-white transition-colors"
          >
            Explore the Program
          </a>
        </div>
      </section>

      {/* ── At a Glance Section ── */}
      <section className="bg-[#0A1C3A] py-20 w-full shadow-inner">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <span className="text-[10px] md:text-xs font-bold text-[#86A6B8] uppercase tracking-[0.2em]">
              COLONIC ACADEMY AT A GLANCE
            </span>
          </div>

          <div className="w-full">
            <div className="py-10 border-b border-white/10">
              <AnimatedCounter
                end={3500}
                duration={2000}
                suffix="+"
                title="Years of Documented Bowel-Cleansing History"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="py-8 border-b md:border-b-0 md:border-r border-white/10">
                <AnimatedCounter end={265} title="Total Training Hours" />
              </div>
              <div className="py-8 border-b md:border-b-0 md:border-r border-white/10">
                <AnimatedCounter end={35} title="Clinical Sessions" />
              </div>
              <div className="py-8">
                <AnimatedCounter end={2} title="Professional Career Paths" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Your Instructor ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">

            {/* Image Column */}
            <div className="relative flex-shrink-0 mt-8 lg:mt-6 ml-10 lg:ml-8">
              {/* Decorative blob behind - EXACT clone of the image shape */}
              <div className="absolute top-6 -left-6 w-[240px] h-[340px] bg-[#C1E6E4] rounded-t-full rounded-b-[1.5rem] -z-10"></div>

              <div className="w-[240px] h-[340px] overflow-hidden rounded-t-full rounded-b-[1.5rem] relative z-10 shadow-sm">
                <img
                  src={lisaImage}
                  alt="Lisa Smith"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center flex-grow w-full pt-4 lg:pt-0">
              <span className="text-[11px] font-bold text-[#557A9E] uppercase tracking-[0.2em] mb-4">
                MEET YOUR INSTRUCTOR
              </span>
              <h2 className="text-[2.2rem] md:text-[2.85rem] font-serif text-[#08183A] leading-[1.15] tracking-tight mb-6">
                Professional guidance. Practical<br className="hidden md:block" /> experience. Personal support.
              </h2>

              <div className="space-y-6 text-[#5A6577] leading-[1.8] text-[14px] md:text-[14.5px] mb-8 font-normal">
                <p>
                  Lisa Smith is the founder of Colorado Colonics and a co-founder and instructor at Colonic Academy in Englewood, Colorado. She is an NBCHT Credentialed Colon Hydrotherapist and a Certified Professional I-ACT Instructor committed to advancing education, professionalism, and high standards within the colon hydrotherapy field.
                </p>
                <p>
                  Through Colonic Academy, Lisa prepares future practitioners with comprehensive instruction that combines foundational knowledge, hands-on clinical experience, professional ethics, and practical guidance for working confidently with clients. Her teaching approach emphasizes competency, safety, individualized support, and respect for every student's learning process.
                </p>
                <p>
                  Lisa served I-ACT as Secretary/Treasurer from 2023 to 2025 and currently serves as Vice President for the 2025–2027 term. Her leadership, practical experience, and enthusiasm for education reflect her dedication to aspiring practitioners and the continued growth of the profession.
                </p>
              </div>

              {/* Credentials Badges - fitting on one line */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  'NBCHT Credentialed',
                  'Certified Professional I-ACT Instructor',
                  'Co-Founder, Colonic Academy',
                  'I-ACT Vice President, 2025–2027'
                ].map((credential, i) => (
                  <span key={i} className="inline-flex items-center px-4 py-2 rounded-full bg-[#EBF5F6] text-[#2F6486] text-[10.5px] font-medium tracking-wide">
                    {credential}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Training Experience ── */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold text-[#557A9E] uppercase tracking-[0.2em] block mb-4">
              YOUR TRAINING EXPERIENCE
            </span>
            <h2 className="text-[2.2rem] md:text-[3rem] font-serif text-[#08183A] leading-[1.15] mb-4">
              What the 265-hour program <br className="hidden md:block" /> includes
            </h2>
            <p className="text-[#6B7280] text-[13px] md:text-[14px]">
              A structured blend of online education, guided clinical experience, and professional preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: '200', title: 'Online Education', desc: 'Flexible coursework covering the essential knowledge required for professional practice.' },
              { icon: '65', title: 'Hands-On Clinical Training', desc: 'In-person instruction and supervised client sessions at Colorado Colonics in Englewood.' },
              { icon: '1:1', title: 'Instructor Guidance', desc: 'Individualized support throughout the online and clinical portions of the program.' },
              { icon: '✓', title: 'Professional Practice', desc: 'Practical experience with professional equipment, client care, and session procedures.' },
              { icon: '+', title: 'Safety & Ethics', desc: 'Training in sanitation, professional boundaries, documentation, and ethical practice.' },
              { icon: '✓', title: 'Exam Preparation', desc: 'Preparation for the NBCHT Credentialing Exam after program requirements are completed.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow border border-white">
                <div className="w-8 h-8 rounded-full bg-[#EBF5F6] text-[#2F6486] flex items-center justify-center text-[10px] font-bold mb-6">
                  {item.icon}
                </div>
                <h4 className="font-serif text-[#08183A] mb-3 text-[1.3rem]">{item.title}</h4>
                <p className="text-[13.5px] text-[#5A6577] leading-[1.7] pr-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A1832] rounded-[1rem] text-white flex flex-col md:flex-row items-center justify-between p-8 md:px-10 md:py-8 gap-6 shadow-xl w-full">
            <div className="text-center md:text-left">
              <div className="text-[#CFA16B] font-serif font-medium text-[1.8rem] leading-none mb-2 tracking-wide">7–10 DAYS</div>
              <div className="text-[13.5px] mb-1.5 text-[#E2E8F0]">Condensed in-person clinical training</div>
              <p className="text-white/70 text-[11.5px] max-w-[650px] leading-relaxed">
                Complete the 65 clinical hours in Englewood, Colorado over 7–10 consecutive days, or ask about an extended schedule.
              </p>
            </div>
            <Link
              to="/contact?subject=Academy%20Training%20Dates#contact-form"
              className="px-8 py-3.5 bg-[#E39686] hover:bg-[#D48171] rounded-full text-white font-medium text-[13px] tracking-wide transition-colors whitespace-nowrap flex-shrink-0"
            >
              Ask About Training Dates
            </Link>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section id="curriculum" className="py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold text-[#557A9E] uppercase tracking-[0.2em] block mb-4">
              I-ACT-APPROVED CURRICULUM
            </span>
            <h2 className="text-[2.2rem] md:text-[3rem] font-serif text-[#08183A] leading-[1.1] mb-4">
              Explore what you will learn
            </h2>
            <p className="text-[#6B7280] text-[13px] md:text-[14px]">
              Select a program section, then open any topic for a quick overview.
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTab('online')}
              className={`px-7 py-2.5 rounded-full text-[13.5px] font-medium transition-all ${activeTab === 'online'
                  ? 'bg-[#08183A] text-white shadow-md'
                  : 'bg-white text-[#4A5568] border border-[#CBD5E1] hover:border-[#08183A]'
                }`}
            >
              Online Coursework &middot; 200 Hours
            </button>
            <button
              onClick={() => setActiveTab('clinical')}
              className={`px-7 py-2.5 rounded-full text-[13.5px] font-medium transition-all ${activeTab === 'clinical'
                  ? 'bg-[#08183A] text-white shadow-md'
                  : 'bg-white text-[#4A5568] border border-[#CBD5E1] hover:border-[#08183A]'
                }`}
            >
              Clinical Training &middot; 65 Hours
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
            {currentCurriculum.map((item) => (
              <CurriculumCard
                key={item.id}
                id={item.id}
                title={item.title}
                hours={item.hours}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Professional Future ── */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold text-[#557A9E] uppercase tracking-[0.2em] block mb-4">
              BUILD YOUR PROFESSIONAL FUTURE
            </span>
            <h2 className="text-[2.2rem] md:text-[3rem] font-serif text-[#08183A] leading-[1.1] mb-5 tracking-tight">
              Two paths. One strong <br className="hidden md:block" /> foundation.
            </h2>
            <p className="text-[#5A6577] text-[14px] md:text-[14.5px]">
              Your education can support a role in an established practice or help prepare you to develop a practice of your own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[1050px] mx-auto mb-20">
            <div className="bg-[#E9F3F6] p-10 lg:p-12 rounded-[1.25rem]">
              <h4 className="font-serif text-[#08183A] mb-5 text-[1.5rem] font-normal">Career Path</h4>
              <p className="text-[14px] text-[#5A6577] mb-8 leading-[1.7] pr-4">
                Prepare to contribute confidently in an established wellness or colon hydrotherapy practice.
              </p>
              <ul className="space-y-4 text-[14px] text-[#5A6577] ml-2">
                <li className="flex items-start"><span className="mr-3 mt-[1px] opacity-70 text-[18px] leading-none">&bull;</span> Professional skills and client-care preparation</li>
                <li className="flex items-start"><span className="mr-3 mt-[1px] opacity-70 text-[18px] leading-none">&bull;</span> Practical clinical experience</li>
                <li className="flex items-start"><span className="mr-3 mt-[1px] opacity-70 text-[18px] leading-none">&bull;</span> Résumé and employment-search guidance</li>
              </ul>
            </div>

            <div className="bg-[#F6EBEA] p-10 lg:p-12 rounded-[1.25rem]">
              <h4 className="font-serif text-[#08183A] mb-5 text-[1.5rem] font-normal">Business Path</h4>
              <p className="text-[14px] text-[#5A6577] mb-8 leading-[1.7] pr-4">
                Build the professional foundation needed to explore opening and operating your own practice.
              </p>
              <ul className="space-y-4 text-[14px] text-[#5A6577] ml-2">
                <li className="flex items-start"><span className="mr-3 mt-[1px] opacity-70 text-[18px] leading-none">&bull;</span> Business planning and office procedures</li>
                <li className="flex items-start"><span className="mr-3 mt-[1px] opacity-70 text-[18px] leading-none">&bull;</span> Branding and marketing guidance</li>
                <li className="flex items-start"><span className="mr-3 mt-[1px] opacity-70 text-[18px] leading-none">&bull;</span> Ethical, organized practice operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-[#0A1C3A] pt-24 pb-12 px-4">
        <div className="max-w-[800px] mx-auto text-center mb-24">
          <h3 className="text-3xl md:text-[2.5rem] font-serif text-white mb-6 leading-[1.2]">
            Ready to explore your future in colon<br className="hidden md:block" /> hydrotherapy?
          </h3>
          <p className="text-white/80 text-[13px] md:text-[14px] mb-10">
            Contact Colonic Academy for tuition, upcoming training dates, and enrollment information.
          </p>
          <Link
            to="/contact?subject=Academy%20Enrollment#contact-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E39686] text-white font-semibold tracking-wide text-sm rounded-full hover:bg-[#D48171] transition-all"
          >
            Request More Information &rarr;
          </Link>
        </div>

        {/* Very bottom footer bar */}
        {/* <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 text-xs text-white/50">
          <div className="mb-2 md:mb-0">
            <span className="font-bold text-white/80">Colonic Academy</span><br/>
            Englewood, Colorado
          </div>
          <div>
            Professional education with purpose, guidance, and heart.
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Academy;
