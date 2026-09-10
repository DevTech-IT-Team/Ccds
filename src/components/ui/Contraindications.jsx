   import React from 'react';
import Accordion from './Accordion';

const Contraindications = ({ title, note, items }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2EEEC]/60 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500">
        <Accordion items={[
          {
            title: (
              <div className="flex items-center justify-center gap-3 w-full py-4">
                <div className="w-2 h-2 rounded-full bg-[#B36C63] animate-pulse"></div>
                <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-[#050F2C] text-center">{title}</span>
              </div>
            ),
            content: (
              <div className="p-6 sm:p-8 bg-[#F9FAF6] text-slate-800 text-left border-t border-[#E2EEEC]/60">
                <p className="mb-6 text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed">{note}</p>
                <div className={items.some(item => typeof item === 'object') ? "flex flex-col gap-5" : "flex flex-wrap gap-2 sm:gap-2.5"}>
                  {items.map((item, i) => {
                    const isObject = typeof item === 'object';
                    const name = isObject ? item.name : item;
                    const desc = isObject ? item.description : null;

                    return (
                      <div key={i} className={isObject ? "flex flex-col gap-1.5" : ""}>
                        <span className={`px-3 sm:px-4 py-2 bg-white text-[#B36C63] text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-rose-100/50 rounded-lg sm:rounded-xl shadow-sm ${isObject ? 'w-fit' : 'hover:scale-105 transition-transform duration-300'}`}>
                          {name}
                        </span>
                        {desc && (
                          <p className="text-[13px] sm:text-[14px] text-slate-600 pl-1 leading-relaxed mt-1">
                            {desc}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          }
        ]} hideCaret className="[&_.accordion-btn]:px-2 sm:[&_.accordion-btn]:px-4" />
      </div>
    </div>
  );
};

export default Contraindications;
