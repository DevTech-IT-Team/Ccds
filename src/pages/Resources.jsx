import PageHero from '../components/layout/PageHero';
import { HERO_IMAGES } from '../data/heroImages';
import { siteContent } from '../data/content';
import { FileText, Download, ArrowRight, Sparkles } from 'lucide-react';

const Resources = () => (
  <div>
    <PageHero
      label="Wellness Library"
      title={siteContent.resources.heading}
      subtitle={siteContent.resources.description}
      image={HERO_IMAGES.resources}
    />

    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {siteContent.resources.downloads.map((dl, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl border border-blue-pale shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div className="flex gap-5 items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-faint border border-blue-pale flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-pale transition-all">
                  <FileText className="w-7 h-7 text-blue" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue uppercase tracking-widest block mb-1">
                    PDF Document
                  </span>
                  <h3 className="font-bold text-navy-mid text-lg leading-snug group-hover:text-blue transition-colors">
                    {dl.title}
                  </h3>
                </div>
              </div>

              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                {dl.description}
              </p>

              <div className="pt-4 border-t border-blue-pale/60">
                <a
                  href={dl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue hover:text-navy-mid transition-colors uppercase tracking-wider"
                >
                  <Download className="w-4 h-4" /> Download Guide
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Information Notice */}
        <div className="mt-12 bg-blue-faint rounded-3xl p-8 md:p-10 border border-blue-pale text-center max-w-3xl mx-auto">
          <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-5 h-5 text-blue" />
          </div>
          <h3 className="font-bold text-navy-mid text-base mb-2">More Guides Coming Soon</h3>
          <p className="text-ink-soft text-sm mb-6 max-w-lg mx-auto">
            We are constantly adding new guides, preparation instructions, and protocol downloads. Check back regularly for updates.
          </p>
          <a
            href={siteContent.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-rose text-white text-sm font-semibold shadow hover:shadow-glow hover:scale-105 transition-all"
          >
            Book a session to learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  </div>
);

export default Resources;