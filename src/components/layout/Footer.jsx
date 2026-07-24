import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';
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
    { path: '/', label: siteContent.nav.home },
    { path: '/services', label: siteContent.nav.services },
    { path: '/pricing', label: siteContent.nav.pricing },
    { path: '/about', label: siteContent.nav.about },
    { path: '/resources', label: siteContent.nav.resources },
    { path: '/contact', label: siteContent.nav.contact },
  ];

  return (
    <footer className="bg-navy text-white relative overflow-hidden border-t border-white/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-mid/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10 items-start">

          {/* Column 1: Brand & Contact (Left Aligned) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-5">

            {/* Logo & Tagline Group - Left Aligned */}
            <div className="w-full flex flex-col items-start space-y-2">
              <img
                src={logo}
                alt="CCDC"
                className="h-20 sm:h-22 w-auto object-contain"
              />
              <p className="text-white font-medium text-sm tracking-wide text-left">
                {siteContent.business.tagline}
              </p>
            </div>

            {/* Direct Contact Stack */}
            <div className="w-full space-y-2 text-xs sm:text-sm pt-1">
              <div className="flex items-center justify-start gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/30 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-blue-light" />
                </div>
                <span className="text-blue-glow/80">
                  {siteContent.business.address}
                </span>
              </div>

              <div className="flex items-center justify-start gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/30 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-light" />
                </div>
                <a
                  href={siteContent.business.phoneLink}
                  className="text-blue-glow/90 hover:text-white font-medium transition-colors"
                >
                  {siteContent.business.phone}
                </a>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-1">
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white text-xs font-semibold shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4 flex items-center gap-1.5 border-b border-white/10 pb-2">
              <Clock className="w-3.5 h-3.5 text-blue-light" />
              Center Hours
            </h4>
            <div className="space-y-1 text-xs">
              {hoursList.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-1 rounded transition-colors"
                >
                  <span className="text-blue-glow/70 font-medium w-8">{item.day}</span>
                  <span className={`font-medium ${item.time === 'Closed' ? 'text-blue-glow/40' : 'text-white'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4 border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-blue-glow/80 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-light/40 group-hover:bg-blue-light mr-2 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4 border-b border-white/10 pb-2">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-blue-glow/80 hover:text-white transition-colors group"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-light/60 group-hover:text-blue-light flex-shrink-0" />
                  <span>Cancellation</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-blue-glow/80 hover:text-white transition-colors group"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-light/60 group-hover:text-blue-light flex-shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <p className="text-[11px] text-blue-glow/50 leading-relaxed max-w-5xl">
            <strong className="text-blue-glow/70 font-semibold">Medical Disclaimer: </strong>
            {siteContent.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-blue-glow/40 pt-1">
            <p>© {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.</p>
            <p>Designed for Holistic Gut Health & Well-being.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;