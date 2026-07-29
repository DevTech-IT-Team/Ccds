import { Phone, Calendar } from 'lucide-react';
import { siteContent } from '../../data/content';

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#F9FAF6] border-t border-[#E2EEEC] shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
    <div className="flex divide-x divide-[#E2EEEC]">
      <a
        href={siteContent.business.phoneLink}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-[#050F2C] font-semibold text-sm hover:bg-black/5 transition-colors"
      >
        <Phone className="w-4 h-4" />
        Call / Text
      </a>
      <a
        href={siteContent.business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 btn-gold !rounded-none"
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </a>
    </div>
  </div>
);

export default MobileCTA;
