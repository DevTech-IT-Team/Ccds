import { siteContent } from '../../data/content';

const PricingTable = ({ data, className = '' }) => (
  <div className={`space-y-6 ${className}`}>
    {data.map((section, si) => (
      <div key={si} className="bg-white rounded-2xl shadow-card border border-blue-pale overflow-hidden">
        {/* Section header */}
        <div className="px-6 py-4 bg-gradient-to-r from-navy to-navy-mid border-b border-blue-pale/20">
          <h3 className="text-lg font-display font-bold text-white">{section.title}</h3>
          {section.note && <p className="text-xs text-blue-glow mt-1">{section.note}</p>}
        </div>

        {/* Rows */}
        <div className="divide-y divide-blue-pale/50">
          {section.items.map((item, ii) => (
            <div
              key={ii}
              className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-blue-faint transition-colors"
            >
              <div className="flex-1">
                <p className="font-medium text-navy-mid text-sm">{item.package}</p>
                {item.length && <p className="text-xs text-ink-muted mt-0.5">{item.length}</p>}
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-lg font-bold text-blue">{item.price}</span>
                <a
                  href={siteContent.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue to-blue-btn text-white text-xs font-semibold shadow hover:shadow-glow hover:scale-105 transition-all"
                >
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default PricingTable;
