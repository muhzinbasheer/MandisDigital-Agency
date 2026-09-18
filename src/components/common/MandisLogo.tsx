import React from 'react';

interface MandisLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number | string;
  size?: number | string;
  className?: string;
  variant?: 'full' | 'mark' | 'badge' | 'with-tagline';
  glow?: boolean;
  color?: string;
  showTagline?: boolean;
}

export const MandisLogo: React.FC<MandisLogoProps> = ({
  height,
  size,
  className = '',
  variant = 'full',
  glow = false,
  color = 'currentColor',
  showTagline = false,
  ...props
}) => {
  const logoHeight = height || size || 50;
  const glowStyle = glow ? 'drop-shadow-[0_2px_12px_rgba(24,28,48,0.15)]' : '';

  // Determine whether to use white or dark logo asset based on color prop
  const isWhite =
    color === '#FFFFFF' ||
    color === 'white' ||
    color === '#fff' ||
    className.includes('text-white');

  const logoSrc = isWhite ? '/mandis-logo-white.png' : '/mandis-logo-black.png';

  return (
    <div
      className={`inline-flex items-center select-none ${glowStyle} ${className}`}
      {...props}
    >
      <img
        src={logoSrc}
        alt="Mandis Digital"
        className="w-auto object-contain transition-transform duration-200"
        style={{
          height: typeof logoHeight === 'number' ? `${logoHeight}px` : logoHeight,
        }}
      />
    </div>
  );
};
