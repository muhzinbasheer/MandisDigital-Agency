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
  const glowStyle = glow ? 'drop-shadow-[0_0_10px_rgba(6,182,212,0.35)]' : '';

  if (variant === 'mark' || variant === 'badge') {
    return (
      <div className={`inline-flex flex-col leading-none select-none ${glowStyle} ${className}`} {...props}>
        <span className="font-display font-bold text-white text-xs tracking-tight leading-none lowercase">
          mandis
        </span>
        <span className="font-sans font-normal text-cyan-400 text-[8px] tracking-[0.18em] leading-none lowercase -mt-0.5">
          digital
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col leading-none select-none ${glowStyle} ${className}`} {...props}>
      {/* Main Text: "mandis" - decreased size & boldness */}
      <span className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight leading-none lowercase">
        mandis
      </span>

      {/* Sub-text: "digital" - decreased space between mandis and digital */}
      <span className="font-sans font-normal text-cyan-400 text-[10px] sm:text-xs tracking-[0.22em] leading-none lowercase mt-0.5 opacity-90">
        digital
      </span>
    </div>
  );
};
