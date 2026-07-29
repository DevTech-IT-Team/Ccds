import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'btn-primary-new',
    secondary:
      'btn-secondary-new',
    clay:
      'btn-primary-new',
    outline:
      'btn-secondary-new bg-transparent !text-teal-900',
    'outline-white':
      'border-2 border-white/60 text-white bg-transparent hover:bg-white hover:text-[#050F2C] active:scale-95 focus:ring-white/40',
    ghost:
      'text-[#050F2C] hover:bg-black/5 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  };

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
