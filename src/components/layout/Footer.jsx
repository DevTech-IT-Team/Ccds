import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { siteContent } from '../../data/content';
import logo from '../../assets/logo/ccdslogo.png';

const Footer = () => {
  const hours = siteContent.hours;
  const hoursList = [
    { day: 'Sun', time: hours.sunday },
    { day: 'Mon', time: hours.monday },
    { day: 'Tue', time: hours.tuesday },
    { day: 'Wed', time: hours.wednesday },
    { day: 'Thu', time: hours.thursday },
    { day: 'Fri', time: hours.friday },
    { day: 'Sat', time: hours.saturday },
  ];

  const navLinks = [
    { path: '/',          label: siteContent.nav.home },
    { path: '/services',  label: siteContent.nav.services },
    { path: '/pricing',   label: siteContent.nav.pricing },
    { path: '/about',     label: siteContent.nav.about },
    { path: '/contact',   label: siteContent.nav.contact },
    { path: '/resources', label: siteContent.nav.resources },
  ];

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-mid/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <img
              src={logo}
              alt="CCDC"
              className="h-14 w-auto object-contain"
            />
            <p className="text-blue-glow text-sm leading-relaxed">
              {siteContent.business.tagline}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-blue-light" />
                </div>
                <span className="text-blue-glow leading-snug">{siteContent.business.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-light" />
                </div>
                <a href={siteContent.business.phoneLink} className="text-blue-glow hover:text-white transition-colors">
                  {siteContent.business.phone}
                </a>
              </div>
            </div>
            <a
              href={siteContent.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white text-sm font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-200"
            >
              Book an Appointment
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-base mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-light" />
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              {hoursList.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                  <span className="text-blue-glow w-8 font-medium">{item.day}</span>
                  <span className="text-white">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-base mb-5">Navigation</h4>
            <nav className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-blue-glow hover:text-white transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-base mb-5">Legal</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/contact" className="block text-blue-glow hover:text-white transition-colors py-1">
                {siteContent.footer.cancellationPolicy}
              </Link>
              <Link to="/contact" className="block text-blue-glow hover:text-white transition-colors py-1">
                {siteContent.footer.privacyPolicy}
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider + disclaimer */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-blue-glow/60 leading-relaxed max-w-4xl mb-4">
            {siteContent.footer.disclaimer}
          </p>
          <p className="text-xs text-blue-glow/40">
            © {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
