import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteContent } from '../../data/content';
import logo from '../../assets/logo/ccdslogo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  const navLinks = [
    { path: '/',          label: 'Home' },
    { path: '/services',  label: 'Services' },
    { path: '/pricing',   label: 'Pricing' },
    { path: '/about',     label: 'About' },
    { path: '/contact',   label: 'Contact' },
    { path: '/resources', label: 'Resources' },
  ];

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F9FAF6]/95 backdrop-blur-xl shadow-md border-b border-[#E2EEEC]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <img
              src={logo}
              alt="Colorado Colonics Detox Center"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ── Desktop nav — pill container like Healora reference ── */}
          <nav
            className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-white/5 border border-white/10'
                : 'bg-black/5 backdrop-blur-sm border border-black/10'
            }`}
            role="navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white text-[#050F2C] font-bold shadow-sm'
                    : 'text-[#050F2C]/70 hover:text-[#050F2C] hover:bg-black/5'
                }`}
              >
                {isActive(link.path) && (
                  <span className="absolute left-3 -top-0.5 w-1 h-1 rounded-full bg-[#D98E84]" />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteContent.business.phoneLink}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-[#050F2C]/80 hover:text-[#050F2C]`}
            >
              <Phone className="w-4 h-4" />
              {siteContent.business.phone}
            </a>
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-[#050F2C] text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-gold"
            >
              Book Now
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <svg className="w-3 h-3 fill-[#050F2C]" viewBox="0 0 8 8"><path d="M1 4h6M4 1l3 3-3 3"/><path stroke="#050F2C" strokeWidth="1.2" strokeLinecap="round" d="M1 4h6M4 1.5l2.5 2.5L4 6.5"/></svg>
              </span>
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border bg-black/5 border-black/10 hover:bg-black/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X className="w-5 h-5 text-[#050F2C]" />
              : <Menu className="w-5 h-5 text-[#050F2C]" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#F9FAF6]/98 backdrop-blur-xl border-t border-[#E2EEEC] px-4 py-5 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-[#050F2C] bg-black/5 font-semibold'
                  : 'text-[#050F2C]/70 hover:text-[#050F2C] hover:bg-black/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#E2EEEC] space-y-3 mt-2">
            <a
              href={siteContent.business.phoneLink}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-[#050F2C]/80 hover:text-[#050F2C] hover:bg-black/5 font-medium transition-all"
            >
              <Phone className="w-4 h-4" />
              {siteContent.business.phone}
            </a>
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-3 rounded-xl text-[#050F2C] font-bold shadow-lg bg-gradient-gold"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
