import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { Calendar, User, ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';
import blogAlternativeDailyImg from '../assets/blog/from_alternative_daily.png';

const BlogAlternativeDaily = () => {
  // Find the blog data from content.js
  const blog = siteContent.resources.blogs.find(b => b.link === '/blog/from-alternative-daily');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <p>Blog post not found.</p>
        <Link to="/resources" className="text-[#38838A] hover:underline mt-4 inline-block">Return to Resources</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F9FAF6] w-full pb-10">
      
      {/* Blog Header Image (Full Bleed with proper header offset) */}
      <div className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-32 w-full flex flex-col justify-end min-h-[50vh] md:min-h-[60vh]">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0 bg-[#050F2C]">
          <img 
            src={blogAlternativeDailyImg} 
            alt={blog.title} 
            className="w-full h-full object-contain sm:object-cover object-center opacity-80"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050F2C]/90 via-[#050F2C]/60 to-[#050F2C]/30" />
        </div>
        
        <div className="relative z-10 w-full">
          {/* Breadcrumbs */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 flex items-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/resources" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Resources
            </Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80 truncate">Wellness Blog</span>
          </div>

          {/* Header Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm font-medium mb-6">
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                <Calendar className="w-4 h-4" /> {blog.date}
              </span>
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                <User className="w-4 h-4" /> CCDC Team
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight sm:leading-tight max-w-4xl drop-shadow-md">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Content (No Containers) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-32">
        
        {/* Content Body */}
        <article className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[#050F2C] prose-a:text-[#38838A] hover:prose-a:text-[#2A656B] space-y-8">
          {blog.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C] mt-10 mb-4">
                  {section.heading}
                </h2>
              )}
              <p className="text-slate-700 leading-relaxed font-normal text-lg">
                {section.text}
              </p>
            </div>
          ))}
          
          <div className="mt-12 pt-8 border-t border-[#E2EEEC]">
            <a 
              href="https://links.thealternativedaily.com/a/75/click/9752526/745340521/_d005ee9a73c73d48afe4e2ca1cdbfa9df3f86d6b/99d7e22954bf67d41cad954214d8e38fd596b18a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#050F2C] text-white font-semibold hover:bg-[#38838A] transition-colors shadow-md"
            >
              Watch the Presentation <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </article>
        
        {/* Footer actions */}
        <div className="mt-16 mb-24 sm:mb-32 pt-8 border-t border-[#E2EEEC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-[#38838A] font-semibold hover:text-[#2A656B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          
          <a
            href="https://links.thealternativedaily.com/a/75/click/9752526/745340521/_d005ee9a73c73d48afe4e2ca1cdbfa9df3f86d6b/99d7e22954bf67d41cad954214d8e38fd596b18a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38838A] text-white font-medium text-sm hover:bg-[#2A656B] shadow-sm hover:shadow transition-all"
          >
            View Original Source <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default BlogAlternativeDaily;
