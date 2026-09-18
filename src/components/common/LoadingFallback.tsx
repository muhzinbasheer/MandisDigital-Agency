import React from 'react';
import { motion } from 'framer-motion';
import { Spinner } from './Spinner';
import { MandisLogo } from './MandisLogo';

interface LoadingFallbackProps {
  fullPage?: boolean;
  message?: string;
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  fullPage = true,
  message = "Loading experience..."
}) => {
  if (fullPage) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF8F5]"
      >
        <motion.div
          initial={{ opacity: 0.9, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient Pulsing Aura */}
            <div className="absolute w-28 h-28 rounded-full bg-[#E05236]/20 blur-2xl animate-pulse" />
            
            {/* Outer Spinner Ring */}
            <Spinner size="xl" variant="primary" className="w-16 h-16" />

            {/* Centered Brand Mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <MandisLogo height={24} color="#E05236" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <span className="font-display font-extrabold text-[#111113] tracking-wide text-lg">
              Mandis Digital
            </span>
            <p className="text-stone-700 text-xs font-semibold tracking-wider uppercase">
              {message}
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="w-full h-48 flex items-center justify-center bg-[#FAF8F5]">
      <Spinner size="lg" variant="primary" />
    </div>
  );
};

export default LoadingFallback;
