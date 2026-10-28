import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { siteContent } from '../../data/content';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Desktop: Show text brand mark when scrolled on Home, or always on inner pages
  const showHeaderTextDesktop = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/membership', label: 'Membership' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/resources', label: 'Resources' },
    { path: '/academy', label: 'Academy' },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-xl shadow-xs border-b border-[#E2EEEC]/80 py-2 sm:py-2.5'
            : 'header-transparent-desktop max-md:bg-white/95 max-md:backdrop-blur-xl max-md:border-b max-md:border-[#E2EEEC]/60 md:bg-transparent md:border-transparent md:shadow-none py-2.5 md:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-12 sm:h-14">

            {/* ── Left Slot: Company Name Text ── */}
            <div className="flex items-center min-w-0 sm:min-w-[180px]">
              <Link
                to="/"
                className={`flex items-center group transition-all duration-300 origin-left ${
                  showHeaderTextDesktop
                    ? 'opacity-100 visible translate-y-0'
                    : 'max-md:opacity-100 max-md:visible max-md:translate-y-0 md:opacity-0 md:invisible md:-translate-y-1 md:pointer-events-none'
                }`}
                aria-label="Colorado Colonics Home"
              >
                <span className="font-serif text-[17px] sm:text-[19px] font-bold tracking-tight text-[#050F2C] transition-colors group-hover:text-[#38838A] whitespace-nowrap">
                  Colorado <span className="font-serif text-[#38838A] font-semibold">Colonics</span>
                </span>
              </Link>
            </div>

            {/* ── Center Slot: Mathematically Centered Nav Pills (Desktop) ── */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-auto">
              <nav
                className={`flex items-center gap-1 p-1 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-white/90 border border-[#E2EEEC] shadow-xs backdrop-blur-md'
                    : 'bg-white/75 border border-white/70 shadow-xs backdrop-blur-sm'
                }`}
                role="navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                      isActive(link.path)
                        ? 'bg-[#050F2C] text-white shadow-xs'
                        : 'text-[#050F2C]/75 hover:text-[#050F2C] hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ── Right Slot: Desktop CTAs ── */}
            <div className="hidden md:flex items-center gap-3 sm:min-w-[140px] justify-end">
              <a
                href={siteContent.business.phoneLink}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#050F2C]/80 hover:text-[#050F2C] transition-colors py-1.5 px-2 rounded-lg hover:bg-black/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#38838A]" />
                {siteContent.business.phone}
              </a>
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-4 py-2 rounded-full text-[#050F2C] text-xs font-bold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] bg-gradient-gold border border-[#D4AF57]/30"
              >
                Book Now
                <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <svg className="w-2.5 h-2.5 fill-[#050F2C]" viewBox="0 0 8 8"><path stroke="#050F2C" strokeWidth="1.2" strokeLinecap="round" d="M1 4h6M4 1.5l2.5 2.5L4 6.5" /></svg>
                </span>
              </a>
            </div>

            {/* ── Mobile Hamburger Toggle ── */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border bg-white border-slate-200 text-[#050F2C] shadow-2xs hover:bg-slate-50 transition-colors ml-auto flex items-center justify-center"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5 text-[#050F2C]" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Fullscreen Modern Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#FAFDFD] flex flex-col justify-between transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible translate-y-0'
            : 'opacity-0 pointer-events-none invisible -translate-y-2'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Top Header inside overlay */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2EEEC] bg-white">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-[18px] font-bold text-[#050F2C]"
          >
            Colorado <span className="text-[#38838A] font-semibold">Colonics</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-[#050F2C] flex items-center justify-center transition-colors shadow-2xs"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-[#050F2C]" />
          </button>
        </div>

        {/* Middle Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[17px] font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-[#38838A]/10 text-[#38838A] font-bold'
                  : 'text-[#050F2C]/80 hover:text-[#050F2C] hover:bg-black/5'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className={`w-4 h-4 ${isActive(link.path) ? 'text-[#38838A]' : 'text-slate-300'}`} />
            </Link>
          ))}
        </div>

        {/* Bottom Actions inside overlay */}
        <div className="px-5 pb-8 pt-4 border-t border-[#E2EEEC] space-y-3 bg-white">
          <a
            href={siteContent.business.phoneLink}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-[#38838A]/30 text-[#050F2C] font-semibold text-sm hover:bg-[#38838A]/5 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#38838A]" />
            {siteContent.business.phone}
          </a>
          <a
            href={siteContent.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-gold text-[#050F2C] font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Book An Appointment
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
