import { Phone, Calendar } from 'lucide-react';
import { siteContent } from '../../data/content';

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy border-t border-white/10 shadow-2xl">
    <div className="flex divide-x divide-white/10">
      <a
        href={siteContent.business.phoneLink}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-blue-glow font-semibold text-sm hover:bg-white/10 transition-colors"
      >
        <Phone className="w-4 h-4" />
        Call / Text
      </a>
      <a
        href={siteContent.business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue to-blue-btn text-white font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </a>
    </div>
  </div>
);

export default MobileCTA;
