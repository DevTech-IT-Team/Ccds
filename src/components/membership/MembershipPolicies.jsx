import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const policies = [
  {
    title: 'Membership cancellation',
    content:
      'Cancel at any time through your online account, the Colorado Colonics website, email, text, or phone. Cancellation prevents the next automatic renewal, and benefits remain available through the end of the current paid billing period. Membership payments are nonrefundable and not prorated. You may re-enroll at any time; current pricing and terms will apply.',
  },
  {
    title: 'Appointment cancellation',
    content:
      'Membership appointments require at least 24 hours’ notice to cancel or reschedule. With less than 24 hours’ notice, a $50 fee applies if the appointment can be filled by another client, or $100 if it cannot. The applicable fee is charged to the card on file. Genuine illness or emergency exceptions may be considered at Colorado Colonics’ discretion.',
  },
  {
    title: 'Billing and payment',
    content:
      'Memberships are billed automatically each month through Tersavia using the payment method on file. Benefits activate after the first successful payment, and the enrollment date becomes the monthly renewal date.',
  },
  {
    title: 'Using your benefits',
    content:
      'Monthly benefits do not roll over and have no cash value. Memberships are nontransferable. All appointments and services are subject to availability, client eligibility, established safety guidelines, and practitioner discretion.',
  },
];

const MembershipPolicies = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePolicy = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="policies" className="py-20 lg:py-28 bg-[#F2F8F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#38838A] mb-3">
            Clear from the beginning
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] tracking-tight mb-3">
            Simple terms. No surprises.
          </h2>
          <p className="text-[#050F2C]/65 text-base sm:text-lg">
            Tap each item to review the details.
          </p>
        </div>

        {/* Policies Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto items-start">
          {policies.map((policy, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#D7E3E6] shadow-2xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => togglePolicy(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg text-[#050F2C] pr-4">
                    {policy.title}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#B36C63] text-white rotate-180'
                        : 'bg-[#EAF5F7] text-[#38838A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#050F2C]/75 leading-relaxed border-t border-[#E2EEEC]/60 animate-fade-in">
                    {policy.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MembershipPolicies;
