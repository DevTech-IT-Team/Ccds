import { Link } from 'react-router-dom';
import { Droplet, Footprints, Sparkles, Users, Leaf, ArrowRight } from 'lucide-react';

const iconMap = {
  droplet:    Droplet,
  footprints: Footprints,
  sparkles:   Sparkles,
  users:      Users,
  leaf:       Leaf,
};

const ServiceCard = ({ title, blurb, icon, link, className = '' }) => {
  const Icon = iconMap[icon] || Droplet;

  return (
    <Link
      to={link}
      className={`group relative bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-blue-pale/60 overflow-hidden ${className}`}
    >
      {/* top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue to-blue-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue to-blue-btn flex items-center justify-center mb-5 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-base font-bold text-navy-mid mb-2 group-hover:text-blue transition-colors">
        {title}
      </h3>
      <p className="text-ink-soft text-sm leading-relaxed mb-5">{blurb}</p>
      <span className="inline-flex items-center text-sm font-semibold text-blue group-hover:text-navy-mid transition-colors">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
      </span>
    </Link>
  );
};

export default ServiceCard;
