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
      'bg-gradient-to-r from-blue to-blue-btn text-white hover:shadow-glow hover:scale-105 active:scale-95 focus:ring-blue/40 shadow-lg',
    secondary:
      'bg-blue-pale text-navy-mid hover:bg-blue-glow hover:text-navy active:scale-95 focus:ring-blue-pale/50',
    clay:
      'bg-gradient-to-r from-blue to-blue-btn text-white hover:shadow-glow hover:scale-105 active:scale-95 focus:ring-blue/50 shadow-lg',
    outline:
      'border-2 border-blue text-blue bg-transparent hover:bg-blue hover:text-white active:scale-95 focus:ring-blue/40',
    'outline-white':
      'border-2 border-white/60 text-white bg-transparent hover:bg-white hover:text-navy-mid active:scale-95 focus:ring-white/40',
    ghost:
      'text-navy-mid hover:bg-blue-pale hover:text-blue active:scale-95 focus:ring-blue-pale/50',
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
