import { siteContent } from '../../data/content';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const PricingTable = ({ data, activeCategory = 'all', activeType = 'all' }) => {
  // Filter sections based on active category tab
  const filteredData = data.filter((section) => {
    if (activeCategory === 'all') return true;
    return section.id === activeCategory;
  });

  // Calculate savings notes for package items
  const getPackageBadge = (item) => {
    const pkg = item.package.toLowerCase();
    if (pkg.includes('6-pack') || pkg.includes('6 sessions') || pkg.includes('10-pack')) {
      return { label: 'Best Value', color: 'bg-[#B36C63] text-white' };
    }
    if (pkg.includes('initial') || pkg.includes('most popular')) {
      return { label: 'Recommended', color: 'bg-[#38838A] text-white' };
    }
    if (pkg.includes('date night') || pkg.includes('couple')) {
      return { label: 'Couples Pack', color: 'bg-amber-500 text-white' };
    }
    return null;
  };

  return (
    <div className="space-y-16">
      {filteredData.map((section, si) => {
        // Filter items based on active rate type (single vs package)
        const items = section.items.filter((item) => {
          if (activeType === 'all') return true;
          const isPackage = item.package.toLowerCase().includes('pack') || 
                            item.package.toLowerCase().includes('sessions') || 
                            item.package.toLowerCase().includes('couple');
          return activeType === 'package' ? isPackage : !isPackage;
        });

        if (items.length === 0) return null;

        return (
          <div key={si} className="space-y-4">
            {/* Category Section Header */}
            <div className="pb-3 border-b-2 border-[#38838A] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C]">
                  {section.title}
                </h3>
                {section.note && (
                  <p className="text-xs font-semibold text-[#B36C63] mt-1">
                    {section.note}
                  </p>
                )}
              </div>
              <span className="text-xs text-slate-400 font-bold hidden sm:inline">
                {items.length} Options Available
              </span>
            </div>

            {/* Interactive Rows */}
            <div className="divide-y divide-[#E2EEEC]">
              {items.map((item, ii) => {
                const badge = getPackageBadge(item);

                return (
                  <div
                    key={ii}
                    className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-white hover:shadow-md hover:border-l-4 hover:border-l-[#B36C63] px-3 sm:px-5 rounded-xl transition-all duration-200 group"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-bold text-[#050F2C] text-base sm:text-lg group-hover:text-[#38838A] transition-colors">
                          {item.package}
                        </p>
                        {badge && (
                          <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-2xs ${badge.color}`}>
                            {badge.label}
                          </span>
                        )}
                      </div>

                      {item.length && (
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                          Duration: {item.length}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 flex-shrink-0">
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-display font-bold text-[#38838A] block">
                          {item.price}
                        </span>
                      </div>

                      <a
                        href={siteContent.business.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full btn-primary-new text-xs font-bold shadow-sm hover:scale-105 transition-all"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingTable;
