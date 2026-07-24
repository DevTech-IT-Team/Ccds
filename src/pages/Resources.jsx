import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { FileText, Download, ArrowRight } from 'lucide-react';

const Resources = () => (
  <div>
    <PageHero
      label="Wellness Library"
      title={siteContent.resources.heading}
      subtitle={siteContent.resources.description}
      image={HERO_IMAGES.resources}
    />

    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {siteContent.resources.downloads.map((dl, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all p-6 flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-navy-mid mb-1 text-sm">{dl.title}</h3>
                <p className="text-ink-soft text-xs leading-relaxed mb-4">{dl.description}</p>
                <a
                  href={dl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue hover:text-navy-mid transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-faint rounded-2xl p-8 border border-blue-pale text-center">
          <p className="text-ink-soft text-sm mb-4">
            More resources coming soon. Check back regularly for updated wellness information.
          </p>
          <a
            href={siteContent.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-navy-mid transition-colors"
          >
            Book a session to learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Resources;
