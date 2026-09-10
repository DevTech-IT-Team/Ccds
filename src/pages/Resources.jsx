import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { HERO_IMAGES } from '../data/heroImages';
import { siteContent } from '../data/content';
import { Film, BookOpen, ExternalLink, PlayCircle, Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';
import blogGlyphosateImg from '../assets/blog_glyphosate.jpg';
import blogYanaImg from '../assets/blog/ccds_supports_YANA.jpg';
import blogAlternativeDailyImg from '../assets/blog/from_alternative_daily.png';
import blogPooPooImg from '../assets/blog/on_the_town_with_ccdc.jpg';

const imageMap = {
  'glyphosate': blogGlyphosateImg,
  'yana': blogYanaImg,
  'alternativeDaily': blogAlternativeDailyImg,
  'poopoo': blogPooPooImg
};

const Resources = () => {
  const [activeTab, setActiveTab] = useState('documentaries');

  const tabs = [
    { id: 'documentaries', label: 'Motivating Documentaries', icon: Film },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
  ];

  return (
    <div>
      <PageHero
        label="Wellness Library"
        title={siteContent.resources.heading}
        subtitle={siteContent.resources.description}
        image={HERO_IMAGES.resources}
      />

      <section className="py-12 md:py-20 bg-[#F9FAF6] min-h-[60vh] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#38838A] text-white shadow-md transform -translate-y-0.5'
                      : 'bg-white text-slate-600 border border-[#E2EEEC] hover:bg-[#EAF5F3] hover:text-[#38838A]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Documentaries Tab Content */}
          {activeTab === 'documentaries' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-[#050F2C] mb-4">
                  Motivating Documentaries
                </h2>
                <p className="text-slate-600">
                  Explore our curated list of eye-opening and motivating documentaries that have inspired countless individuals on their wellness journeys.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {siteContent.resources.documentaries.map((doc, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl border border-[#E2EEEC] p-5 flex items-center justify-between group transition-all duration-300 ${
                      doc.link ? 'hover:shadow-md hover:border-[#38838A]/30 hover:-translate-y-1' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        doc.link ? 'bg-[#EAF5F3] group-hover:bg-[#38838A] text-[#38838A] group-hover:text-white' : 'bg-slate-50 border border-slate-100 text-slate-300'
                      }`}>
                        <PlayCircle className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-[#050F2C] text-sm sm:text-base leading-tight">
                        {doc.name}
                      </span>
                    </div>
                    {doc.link && (
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EAF5F3] transition-colors"
                        title={`Watch ${doc.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#38838A]" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blogs Tab Content */}
          {activeTab === 'blogs' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-[#050F2C] mb-4">
                  Wellness Blog
                </h2>
                <p className="text-slate-600">
                  Read our latest articles, insights, and health advice to help you maintain a balanced and clean lifestyle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteContent.resources.blogs.map((blog, i) => {
                  const imageUrl = blog.image ? imageMap[blog.image] : `https://picsum.photos/seed/healthblog${i}/800/600`;
                  const isInternal = blog.link && blog.link.startsWith('/');
                  
                  const cardContent = (
                    <>
                      <div className="h-48 bg-slate-100 relative overflow-hidden">
                        <img 
                          src={imageUrl} 
                          alt={blog.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050F2C]/60 via-transparent to-transparent opacity-80" />
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#38838A] uppercase tracking-wider mb-4">
                          <Calendar className="w-4 h-4" />
                          {blog.date}
                        </div>
                        
                        <h3 className="text-xl font-display font-bold text-[#050F2C] leading-snug mb-3 group-hover:text-[#38838A] transition-colors">
                          {blog.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-[#E2EEEC]/60 flex items-center justify-between text-[#38838A] font-semibold text-sm">
                          <span>{isInternal ? 'Read Full Article' : 'Read on our site'}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </>
                  );

                  return isInternal ? (
                    <Link
                      to={blog.link}
                      key={i}
                      className="group bg-white rounded-[2rem] border border-[#E2EEEC] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                      className="group bg-white rounded-[2rem] border border-[#E2EEEC] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                    >
                      {cardContent}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Resources;