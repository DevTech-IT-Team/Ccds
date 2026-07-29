const SectionHeading = ({ title, subtitle, light = false, className = '' }) => (
  <div className={`mb-12 text-center ${className}`}>
    <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-navy-mid'}`}>
      {title}
    </h2>
    {/* accent rule */}
    <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-rose" />
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-blue-glow' : 'text-ink-soft'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
