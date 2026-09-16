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
        <g stroke={color} strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" fill="none">
          {/* Emblem: stylized 'm' and 'd' */}
          <path d="M 15 80 V 35 C 15 22 36 22 36 35 V 80 M 36 35 C 36 22 57 22 57 35 V 80" />
          <path d="M 85 80 V 15" />
          <path d="M 85 35 C 65 35 65 80 85 80" />
        </g>
      </svg>
    );
  }

  // 2. Full Standard Mandis Digital Logotype (matching provided logo image)
  const logoHeight = height || (typeof size === 'number' ? size : 48);
  // ViewBox: 0 0 460 260 -> Aspect Ratio ~ 1.77 : 1
  const logoWidth = typeof logoHeight === 'number' ? logoHeight * 1.77 : 'auto';

  return (
    <svg
      width={logoWidth}
      height={logoHeight}
      viewBox="0 0 460 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glowStyle} shrink-0 transition-all duration-300`}
      {...props}
    >
      {/* 
        LOGOTYPE: mandis 
        Exact tall, rounded-condensed geometric font matching the brand image
      */}
      <g fill="none" stroke={color} strokeWidth="15" strokeLinecap="square" strokeLinejoin="miter">
        {/* 'm' */}
        <path d="M 25 70 V 195" />
        <path d="M 25 70 C 25 45 70 45 70 70 V 195" />
        <path d="M 70 70 C 70 45 115 45 115 70 V 195" />

        {/* 'a' */}
        <path d="M 180 70 V 195" />
        <path d="M 180 70 C 135 70 135 130 180 130" />
        <path d="M 180 130 C 135 130 135 195 180 195" />

        {/* 'n' */}
        <path d="M 210 70 V 195" />
        <path d="M 210 70 C 210 45 255 45 255 70 V 195" />

        {/* 'd' */}
        <path d="M 320 20 V 195" />
        <path d="M 320 70 C 275 70 275 195 320 195" />

        {/* 'i' */}
        <path d="M 350 95 V 195" />
        <path d="M 350 20 V 65" />

        {/* 's' */}
        <path d="M 435 70 H 390 C 375 70 375 130 405 130 C 435 130 435 195 390 195 H 375" />
      </g>

      {/* SUBTITLE: d i g i t a l */}
      <g fill={color}>
        <text
          x="25"
          y="242"
          fontFamily="'Inter', 'Montserrat', system-ui, -apple-system, sans-serif"
          fontWeight="400"
          fontSize="28"
          letterSpacing="18"
        >
          digital
        </text>
      </g>
    </svg>
  );
};
