/**
 * PageHero — full-bleed hero used on every inner page.
 *
 * Displays a healthcare stock photo (via Unsplash CDN) with a
 * deep navy/blue semi-transparent overlay, matching the reference design.
 *
 * Props:
 *   label    – small eyebrow text (optional)
 *   title    – large headline (required)
 *   subtitle – body copy below headline (optional)
 *   image    – Unsplash/absolute URL for the bg photo (optional, falls back to default)
 */

// Free healthcare images from Unsplash (CDN, no API key needed)
export const HERO_IMAGES = {
  default:   'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format&fit=crop',
  clinic:    'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=80&auto=format&fit=crop',
  wellness:  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80&auto=format&fit=crop',
  team:      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=80&auto=format&fit=crop',
  pricing:   'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format&fit=crop',
  contact:   'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80&auto=format&fit=crop',
  resources: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80&auto=format&fit=crop',
  services:  'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1600&q=80&auto=format&fit=crop',
};

const PageHero = ({ label, title, subtitle, image }) => {
  const bgUrl = image || HERO_IMAGES.default;

  return (
    <section className="relative pt-28 pb-20 overflow-hidden min-h-[340px] flex items-end">
      {/* ── Background photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden="true"
      />

      {/* ── Layered overlay: photo → subtle cream gradient ── */}
      <div
        className="absolute inset-0 bg-overlay-new"
        aria-hidden="true"
      />

      {/* ── Extra bottom fade so content below blends in ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))' }}
        aria-hidden="true"
      />

      {/* ── Subtle dot-grid ── */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(147,197,253,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* ── Glow orb top-right ── */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {label && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#050F2C]/70 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B36C63]" />
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#050F2C] mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#050F2C]/80 text-lg max-w-2xl leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
