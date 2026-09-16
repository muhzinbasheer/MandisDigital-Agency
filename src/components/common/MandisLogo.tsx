import React from 'react';

interface MandisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  height?: number | string;
  className?: string;
  variant?: 'full' | 'mark' | 'badge';
  glow?: boolean;
  color?: string;
}

export const MandisLogo: React.FC<MandisLogoProps> = ({
  size = 48,
  height,
  className = '',
  variant = 'full',
  glow = false,
  color = 'currentColor',
  ...props
}) => {
  const glowStyle = glow ? 'drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]' : '';

  // 1. Icon Mark / Badge Variant (for small headers, chips)
  if (variant === 'mark' || variant === 'badge') {
    const markSize = typeof size === 'number' ? size : 32;
    return (
      <svg
        width={markSize}
        height={height || markSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${glowStyle} shrink-0`}
        {...props}
      >
        <g stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 15 80 V 35 C 15 20 38 20 38 35 V 80 M 38 35 C 38 20 61 20 61 35 V 80" />
          <path d="M 85 80 V 15" />
          <path d="M 85 35 C 65 35 65 80 85 80" />
        </g>
      </svg>
    );
  }

  // 2. Full Standard Mandis Digital Logotype (matching provided logo image 2 exactly)
  const logoHeight = height || (typeof size === 'number' ? size : 48);
  // ViewBox: 0 0 440 250 -> Aspect Ratio ~ 1.76 : 1
  const logoWidth = typeof logoHeight === 'number' ? logoHeight * 1.76 : 'auto';

  return (
    <svg
      width={logoWidth}
      height={logoHeight}
      viewBox="0 0 440 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glowStyle} shrink-0 transition-all duration-300`}
      {...props}
    >
      {/* 
        LOGOTYPE: mandis 
        Exact vector reproduction matching Mandis Digital brand image 2
      */}
      <g stroke={color} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* 'm' */}
        <path d="M 25 80 V 200" />
        <path d="M 25 80 C 25 52 70 52 70 80 V 200" />
        <path d="M 70 80 C 70 52 115 52 115 80 V 200" />

        {/* 'a' - double loop / rounded curve matching exact image 2 */}
        <path d="M 175 80 V 200" />
        <path d="M 175 80 C 135 80 135 140 175 140 C 135 140 135 200 175 200" />

        {/* 'n' */}
        <path d="M 205 80 V 200" />
        <path d="M 205 80 C 205 52 250 52 250 80 V 200" />

        {/* 'd' - ascender stem at x=315 */}
        <path d="M 315 20 V 200" />
        <path d="M 315 80 C 275 80 275 200 315 200" />

        {/* 'i' - x-height stem and tall bar dot aligned at ascender height y=20 */}
        <path d="M 342 100 V 200" />
        <path d="M 342 20 V 65" />

        {/* 's' - stylized tall letter s */}
        <path d="M 420 80 H 380 C 365 80 365 135 400 135 C 425 135 425 200 375 200 H 365" />
      </g>

      {/* SUBTITLE: d i g i t a l (No marketing solutions tagline below) */}
      <g fill={color}>
        <text
          x="25"
          y="238"
          fontFamily="'Inter', 'Montserrat', system-ui, -apple-system, sans-serif"
          fontWeight="400"
          fontSize="24"
          letterSpacing="18"
        >
          digital
        </text>
      </g>
    </svg>
  );
};
