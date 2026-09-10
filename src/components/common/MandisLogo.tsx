import React from 'react';

interface MandisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  gradientId?: string;
  glow?: boolean;
}

export const MandisLogo: React.FC<MandisLogoProps> = ({
  size = 24,
  className = "w-6 h-6",
  gradientId = "mandis-logo-grad",
  glow = false,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]' : ''}`}
      {...props}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="2"
          y1="30"
          x2="30"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#6366f1" />
          <stop offset="80%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <filter id={`${gradientId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Signature Mandis Monogram 'M' Mark */}
      {/* Outer sleek ribbon loop */}
      <path
        d="M 4 24 C 3.5 17 6.5 7 11.5 6 C 16.5 5 15.5 17 15.5 17 C 15.5 17 17.5 7 22.5 6 C 27 5.1 27.5 15 27.5 24"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Signature Ascending Spark Arrow / Peak Growth */}
      <path
        d="M 21.5 8 L 27.5 2 M 22 2 H 27.5 V 7.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Signature Precision Core Node */}
      <circle
        cx="15.5"
        cy="22.5"
        r="2"
        fill={`url(#${gradientId})`}
      />

      <circle
        cx="27.5"
        cy="2"
        r="1.5"
        fill="#38bdf8"
        className="animate-ping origin-center"
        style={{ animationDuration: '3s' }}
      />
    </svg>
  );
};
