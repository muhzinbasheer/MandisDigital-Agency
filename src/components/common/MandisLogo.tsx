import React from 'react';

interface MandisLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  height?: number | string;
  className?: string;
  variant?: 'full' | 'mark' | 'badge';
  glow?: boolean;
  color?: string;
}

export const MandisLogo: React.FC<MandisLogoProps> = ({
  size,
  height,
  className = '',
  variant = 'full',
  glow = true,
  color = 'currentColor',
  ...props
}) => {
  const glowStyle = glow ? 'drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]' : '';

  if (variant === 'mark' || variant === 'badge') {
    return (
      <div className={`inline-flex flex-col leading-none select-none ${glowStyle} ${className}`} {...props}>
        <span className="font-display font-black text-white text-base tracking-tight leading-none lowercase">
          mandis
        </span>
        <span className="font-sans font-normal text-cyan-400 text-[9px] tracking-[0.2em] leading-none lowercase mt-0.5">
          digital
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col leading-none select-none ${glowStyle} ${className}`} {...props}>
      {/* Main Text: "mandis" written in a tall, bold, white, sans-serif font */}
      <span className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight leading-none lowercase">
        mandis
      </span>

      {/* Sub-text: "digital" appearing in simpler lowercase lettering */}
      <span className="font-sans font-medium text-cyan-400 text-xs sm:text-sm tracking-[0.32em] leading-none lowercase mt-1.5 pl-0.5 opacity-90">
        digital
      </span>
    </div>
  );
};
