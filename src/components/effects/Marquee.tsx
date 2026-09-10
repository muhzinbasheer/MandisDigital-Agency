import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = 'left',
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate items array to ensure seamless infinite looping
  const displayItems = [...items, ...items, ...items, ...items];

  if (prefersReducedMotion) {
    return (
      <div className={`py-6 overflow-x-auto flex gap-8 items-center justify-center border-y border-[#212638] bg-[#0b0d14] ${className}`}>
        {items.map((item, index) => (
          <span key={index} className="text-sm font-semibold tracking-wider uppercase text-slate-400 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    );
  }

  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <div className={`relative overflow-hidden py-6 border-y border-[#212638] bg-[#0b0d14]/80 backdrop-blur-sm group ${className}`}>
      {/* Left/Right Gradient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#08090d] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#08090d] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max group-hover:[animation-play-state:paused]">
        <div className={`flex gap-12 items-center whitespace-nowrap ${animationClass}`}>
          {displayItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-indigo-400 transition-colors duration-200">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-indigo-500/40" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
