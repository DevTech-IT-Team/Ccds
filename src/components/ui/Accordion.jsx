import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="border border-blue-pale rounded-xl overflow-hidden bg-white shadow-card">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-blue-faint transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue/30"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-navy-mid text-sm">{item.title}</span>
            <ChevronDown
              className={`w-4 h-4 text-blue flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
            <div className="px-5 py-4 bg-blue-faint border-t border-blue-pale/50">
              {Array.isArray(item.content) ? (
                <ul className="space-y-2">
                  {item.content.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span className="text-blue mt-0.5 flex-shrink-0">•</span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-ink-soft">{item.content}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
