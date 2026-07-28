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
    <footer className="bg-overlay-new text-[#050F2C] relative overflow-hidden border-t border-[#E2EEEC]">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B36C63]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#38838A]/5 rounded-full blur-[100px] pointer-events-none" />

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
              <p className="text-[#050F2C]/80 font-medium text-sm tracking-wide text-left">
                {siteContent.business.tagline}
              </p>
            </div>

            {/* Direct Contact Stack */}
            <div className="w-full space-y-2 text-xs sm:text-sm pt-1">
              <div className="flex items-center justify-start gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B36C63]/20 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#B36C63]" />
                </div>
                <span className="text-[#050F2C]/80">
                  {siteContent.business.address}
                </span>
              </div>

              <div className="flex items-center justify-start gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#38838A]/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#38838A]" />
                </div>
                <a
                  href={siteContent.business.phoneLink}
                  className="text-[#050F2C]/90 hover:text-[#050F2C] font-bold transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-primary-new text-xs"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#050F2C] mb-4 flex items-center gap-1.5 border-b border-[#E2EEEC] pb-2">
              <Clock className="w-3.5 h-3.5 text-[#B36C63]" />
              Center Hours
            </h4>
            <div className="space-y-1 text-xs">
              {hoursList.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1 border-b border-[#E2EEEC] last:border-0 hover:bg-black/5 px-1 rounded transition-colors"
                >
                  <span className="text-[#050F2C]/70 font-bold w-8">{item.day}</span>
                  <span className={`font-medium ${item.time === 'Closed' ? 'text-[#050F2C]/40' : 'text-[#050F2C]'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#050F2C] mb-4 border-b border-[#E2EEEC] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-[#050F2C]/80 hover:text-[#050F2C] font-medium transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38838A]/40 group-hover:bg-[#38838A] mr-2 transition-colors" />
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
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#050F2C] mb-4 border-b border-[#E2EEEC] pb-2">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-[#050F2C]/80 hover:text-[#050F2C] font-medium transition-colors group"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B36C63]/60 group-hover:text-[#B36C63] flex-shrink-0" />
                  <span>Cancellation</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-[#050F2C]/80 hover:text-[#050F2C] font-medium transition-colors group"
                >
                  <FileText className="w-3.5 h-3.5 text-[#38838A]/60 group-hover:text-[#38838A] flex-shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-6 border-t border-[#E2EEEC] space-y-3">
          <p className="text-[11px] text-[#050F2C]/60 leading-relaxed max-w-5xl">
            <strong className="text-[#050F2C] font-semibold">Medical Disclaimer: </strong>
            {siteContent.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#050F2C]/50 pt-1">
            <p>© {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.</p>
            <p>Designed for Holistic Gut Health & Well-being.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;