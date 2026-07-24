import { motion } from 'framer-motion';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
