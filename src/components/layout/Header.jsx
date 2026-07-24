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
          ? 'bg-navy/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
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
                : 'bg-white/10 backdrop-blur-sm border border-white/15'
            }`}
            role="navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white text-navy font-semibold shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive(link.path) && (
                  <span className="absolute left-3 -top-0.5 w-1 h-1 rounded-full bg-blue-btn" />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteContent.business.phoneLink}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              {siteContent.business.phone}
            </a>
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue to-blue-btn text-white text-sm font-bold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Book Now
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 8 8"><path d="M1 4h6M4 1l3 3-3 3"/><path stroke="white" strokeWidth="1.2" strokeLinecap="round" d="M1 4h6M4 1.5l2.5 2.5L4 6.5"/></svg>
              </span>
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X className="w-5 h-5 text-white" />
              : <Menu className="w-5 h-5 text-white" />
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
        <div className="bg-navy/98 backdrop-blur-xl border-t border-white/10 px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-white bg-white/10 font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/8'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3 mt-2">
            <a
              href={siteContent.business.phoneLink}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium transition-all"
            >
              <Phone className="w-4 h-4" />
              {siteContent.business.phone}
            </a>
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white font-bold shadow-lg"
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
