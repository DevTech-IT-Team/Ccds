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

const PageHero = ({ label, title, subtitle, image, bgPosition, bgSize, imageOpacity, heroLogo, heroLogoAlt, isGradient }) => {
  const isGradientOnly = isGradient || image === 'gradient' || image === null;
  const bgUrl = isGradientOnly ? null : (image || (heroLogo ? null : HERO_IMAGES.default));

  return (
    <section className="relative pt-28 pb-16 md:pb-20 overflow-hidden min-h-[380px] flex items-center bg-gradient-to-br from-[#F9FAF6] via-[#F4F9F8] to-[#E8F3F1]">
      {/* ── Background photo (if not gradient-only) ── */}
      {bgUrl && (
        <div
          className="absolute inset-0 bg-no-repeat transition-opacity duration-300"
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundPosition: bgPosition || 'center 35%',
            backgroundSize: bgSize || 'cover',
            opacity: imageOpacity ?? 0.6,
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Luminous Light Left Text Shield ── */}
      {bgUrl && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F9FAF6] via-[#F9FAF6]/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* ── Glowing Ambient Accents (Rose Gold & Teal Orbs) ── */}
      <div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(179,108,99,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-36 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,131,138,0.20) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,142,132,0.12) 0%, transparent 70%)' }}
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

      {/* ── Content Container ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className={`grid grid-cols-1 ${heroLogo ? 'md:grid-cols-12 gap-8 md:gap-10 items-center' : ''}`}>
          {/* Left Text Content */}
          <div className={heroLogo ? 'md:col-span-7 lg:col-span-7' : 'w-full max-w-3xl'}>
            {label && (
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#B2D4D0] backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#38838A] mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#B36C63]" />
                {label}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#050F2C] mb-4 leading-[1.15]">
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
              <p className="text-[#050F2C]/85 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Logo Showcase (Transparent blend, zero overlap, zero white box) */}
          {heroLogo && (
            <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end mt-4 md:mt-0 z-20">
              <div className="relative flex items-center justify-center p-2">
                {/* Glow ring behind logo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#B36C63]/25 via-[#D98E84]/20 to-[#38838A]/25 rounded-full blur-2xl opacity-75 pointer-events-none" />

                <img
                  src={heroLogo}
                  alt={heroLogoAlt || 'Colorado Colonics Logo'}
                  className="w-64 sm:w-72 md:w-80 lg:w-[340px] h-auto object-contain relative z-10 transition-transform duration-300 hover:scale-105"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
