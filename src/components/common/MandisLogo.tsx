import React from 'react';

interface MandisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  height?: number | string;
  className?: string;
  variant?: 'full' | 'mark' | 'badge' | 'logotype' | 'card';
  glow?: boolean;
  color?: string;
  showTagline?: boolean;
  withBg?: boolean;
  bgColor?: string;
}

export const MandisLogo: React.FC<MandisLogoProps> = ({
  size = 48,
  height,
  className = '',
  variant = 'full',
  glow = true,
  color = '#FFFFFF',
  showTagline = true,
  withBg = false,
  bgColor = '#0038FF',
  ...props
}) => {
  const glowStyle = glow ? 'drop-shadow-[0_0_18px_rgba(0,56,255,0.75)] hover:drop-shadow-[0_0_24px_rgba(0,56,255,0.95)]' : '';

  // 1. Icon Mark Only (Monogram emblem for small badges / favicon)
  if (variant === 'mark' || variant === 'badge') {
    const markSize = typeof size === 'number' ? size : 40;
    return (
      <svg
        width={markSize}
        height={height || markSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${glowStyle} shrink-0 rounded-xl`}
        {...props}
      >
        {withBg && <rect width="100" height="100" rx="20" fill={bgColor} />}
        <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
          {/* Monogram emblem 'm' and 'd' */}
          <path d="M 18 75 V 36 C 18 22 36 22 36 36 V 75 M 36 36 C 36 22 54 22 54 36 V 75" strokeWidth="10" />
          <path d="M 68 75 V 18" strokeWidth="10" />
          <path d="M 68 36 H 76 C 88 36 88 75 76 75 H 68" strokeWidth="10" />
        </g>
      </svg>
    );
  }

  // 2. Full Standard Brand Logotype (Navbar, Footer, Headers)
  // ViewBox: 0 0 480 250 -> aspect ratio is ~1.92:1
  const logoHeight = height || (typeof size === 'number' ? size : 48);
  const logoWidth = typeof logoHeight === 'number' ? logoHeight * 1.92 : 'auto';

  return (
    <svg
      width={logoWidth}
      height={logoHeight}
      viewBox="0 0 480 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glowStyle} shrink-0 transition-all duration-300`}
      {...props}
    >
      {/* Background Rect (Optional, defaults to transparent/no bg) */}
      {withBg && <rect width="480" height="250" rx="28" fill={bgColor} />}

      {/* Main Logotype geometry: mandis (Distinct, highly readable geometric lettering) */}
      <g fill="none" stroke={color} strokeLinecap="square" strokeLinejoin="round">
        {/* 'm' */}
        <path d="M 45 92 V 168" strokeWidth="22" />
        <path d="M 45 92 C 45 58 84 58 84 92 V 168" strokeWidth="22" />
        <path d="M 84 92 C 84 58 123 58 123 92 V 168" strokeWidth="22" />

        {/* 'a' - Right stem, top arch, lower bowl on left */}
        <path d="M 184 60 V 168" strokeWidth="22" />
        <path d="M 152 92 C 152 60 184 60 184 60" strokeWidth="22" />
        <path d="M 184 114 H 168 C 152 114 152 168 168 168 H 184" strokeWidth="22" />

        {/* 'n' */}
        <path d="M 212 92 V 168" strokeWidth="22" />
        <path d="M 212 92 C 212 58 250 58 250 92 V 168" strokeWidth="22" />

        {/* 'd' - Ascender stem at x=310 & full round left bowl matching x-height */}
        <path d="M 310 30 V 168" strokeWidth="22" />
        <path d="M 310 60 H 294 C 278 60 278 168 294 168 H 310" strokeWidth="22" />

        {/* 'i' - x-height stem at x=338 & distinct dot above x-height */}
        <path d="M 338 68 V 168" strokeWidth="22" />
        <path d="M 338 20 V 42" strokeWidth="22" strokeLinecap="square" />

        {/* 's' */}
        <path d="M 418 60 H 384 C 366 60 366 114 384 114 H 400 C 418 114 418 168 400 168 H 366" strokeWidth="22" />
      </g>

      {/* Subtitle: digital */}
      <g fill={color} fontFamily="'Inter', system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="36" letterSpacing="12">
        <text x="45" y="215">digital</text>
      </g>

      {/* Tagline: marketing solutions */}
      {showTagline && (
        <g fill={color} opacity="0.95" fontFamily="'Inter', system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="15" letterSpacing="1">
          <text x="270" y="235">marketing solutions</text>
        </g>
      )}
    </svg>
  );
};

