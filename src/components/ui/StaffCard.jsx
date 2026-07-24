import { BadgeCheck } from 'lucide-react';

const StaffCard = ({ staff, className = '' }) => {
  const initials = staff.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-blue-pale/60 overflow-hidden ${className}`}>
      {/* Avatar area */}
      <div className="relative h-48 bg-gradient-to-br from-navy via-navy-mid to-blue flex items-center justify-center overflow-hidden">
        {staff.image ? (
          <img src={staff.image} alt={staff.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 text-white text-2xl font-display font-bold flex items-center justify-center">
            {initials}
          </div>
        )}
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="px-6 pb-6 pt-2">
        <h3 className="text-lg font-display font-bold text-navy-mid mb-0.5">{staff.name}</h3>
        <p className="text-xs font-semibold text-blue uppercase tracking-wide mb-3">{staff.title}</p>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">{staff.bio}</p>
        {staff.credentials?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {staff.credentials.map((cred, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-xs font-medium bg-blue-pale text-navy-mid px-2.5 py-1 rounded-full">
                <BadgeCheck className="w-3 h-3 text-blue" />
                {cred}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffCard;
