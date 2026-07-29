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

import { HERO_IMAGES } from '../../data/heroImages';

const PageHero = ({ label, title, subtitle, image, bgPosition }) => {
  const bgUrl = image || HERO_IMAGES.default;

  return (
    <section className="relative pt-28 pb-20 overflow-hidden min-h-[340px] flex items-end bg-[#F9FAF6]">
      {/* ── Background photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${bgUrl})`, backgroundPosition: bgPosition || 'center 35%' }}
        aria-hidden="true"
      />

      {/* ── Luminous Light Left Text Shield ── */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#F9FAF6] via-[#F9FAF6]/90 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Bottom smooth blend line ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F9FAF6)' }}
        aria-hidden="true"
      />

      {/* ── Subtle dot-grid ── */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(5,15,44,0.3) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* ── Soft glow orb ── */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(179,108,99,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── Content (Bright, Luminous & 100% Legible Dark Navy Typography) ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {label && (
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#B2D4D0] backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#38838A] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#B36C63]" />
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#050F2C] mb-4 leading-tight max-w-3xl">
          {typeof title === 'string' && title.includes(' ') ? (
            <>
              <span className="bg-gradient-to-r from-[#B36C63] via-[#D98E84] to-[#38838A] bg-clip-text text-transparent">
                {title.split(' ')[0]}
              </span>{' '}
              {title.split(' ').slice(1).join(' ')}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p className="text-[#050F2C]/85 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
