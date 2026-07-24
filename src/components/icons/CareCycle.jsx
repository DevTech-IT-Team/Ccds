import { motion } from 'framer-motion';

const CareCycle = ({ className = '', size = 200 }) => {
  const steps = [
    { label: 'Circulation', position: 'top' },
    { label: 'Assimilation', position: 'right' },
    { label: 'Relaxation', position: 'bottom' },
    { label: 'Elimination', position: 'left' },
  ];

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer ring */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#DCEAEC"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </motion.svg>

      {/* Inner circle */}
      <svg width={size} height={size} viewBox="0 0 200 200" className="absolute inset-0">
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#7FB3BC"
          strokeWidth="3"
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="block text-2xl font-display font-bold text-teal-deep">CARE</span>
          <span className="block text-xs text-ink-soft">Cycle</span>
        </div>
      </div>

      {/* Step labels */}
      {steps.map((step, index) => {
        const positions = {
          top: { x: 100, y: 10 },
          right: { x: 190, y: 100 },
          bottom: { x: 100, y: 190 },
          left: { x: 10, y: 100 },
        };
        const pos = positions[step.position];

        return (
          <motion.div
            key={step.label}
            className="absolute text-center"
            style={{
              left: pos.x,
              top: pos.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-aqua flex items-center justify-center mb-1">
              <span className="text-xs font-bold text-teal-deep">{index + 1}</span>
            </div>
            <span className="text-xs font-medium text-ink block whitespace-nowrap">
              {step.label}
            </span>
          </motion.div>
        );
      })}

      {/* Animated dots */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 75;
        const x = 100 + radius * Math.cos(angle);
        const y = 100 + radius * Math.sin(angle);

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-clay"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        );
      })}
    </div>
  );
};

export default CareCycle;
