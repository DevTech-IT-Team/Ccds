import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';
import { siteContent } from '../../data/content';
import logo from '../../assets/logo/ccdclogo.png';

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
    <footer className="bg-[#03091B] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B36C63]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#38838A]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 items-start">

          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6">
            <div className="w-full flex flex-col items-start space-y-3">
              <img
                src={logo}
                alt="CCDC"
                className="h-16 sm:h-20 w-auto object-contain brightness-110 drop-shadow-md"
              />
              <p className="text-blue-pale/80 font-medium text-sm tracking-wide">
                {siteContent.business.tagline}
              </p>
            </div>

            <div className="w-full space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B36C63]/30 transition-colors">
                  <MapPin className="w-4 h-4 text-[#F2B2A8]" />
                </div>
                <span className="text-slate-300">
                  {siteContent.business.address}
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#38838A]/30 transition-colors">
                  <Phone className="w-4 h-4 text-[#93C5FD]" />
                </div>
                <a
                  href={siteContent.business.phoneLink}
                  className="text-white hover:text-[#93C5FD] font-bold transition-colors"
                >
                  {siteContent.business.phone}
                </a>
              </div>
            </div>

            <div>
              <a
                href={siteContent.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-gold text-[#050F2C] text-xs font-bold shadow-lg hover:scale-105 transition-all"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#93C5FD] mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <Clock className="w-4 h-4 text-[#F2B2A8]" />
              Center Hours
            </h4>
            <div className="space-y-1 text-xs">
              {hoursList.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0 px-2 rounded hover:bg-white/5 transition-colors"
                >
                  <span className="text-slate-300 font-bold w-10">{item.day}</span>
                  <span className={`font-medium ${item.time === 'Closed' ? 'text-slate-500' : 'text-white'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#93C5FD] mb-4 border-b border-white/10 pb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-slate-300 hover:text-white font-medium transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38838A] group-hover:bg-[#93C5FD] mr-2.5 transition-colors" />
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
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#93C5FD] mb-4 border-b border-white/10 pb-3">
              Legal & Safety
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors group"
                >
                  <FileText className="w-4 h-4 text-[#93C5FD] flex-shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-[#F2B2A8] flex-shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed max-w-5xl">
            <strong className="text-slate-200 font-semibold">Medical Disclaimer: </strong>
            {siteContent.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-2 border-t border-white/5">
            <p>© {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.</p>
            <p className="text-slate-400">Designed for Holistic Gut Health & Well-being.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;