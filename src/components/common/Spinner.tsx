import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'white' | 'dark' | 'current';
  className?: string;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'current',
  className = '',
  label = 'Loading...',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-5 h-5 border-[2.5px]',
    lg: 'w-8 h-8 border-3',
    xl: 'w-12 h-12 border-4',
  };

  const variantClasses = {
    primary: 'border-[#E05236]/20 border-t-[#E05236]',
    white: 'border-white/25 border-t-white',
    dark: 'border-[#111113]/20 border-t-[#111113]',
    current: 'border-current/25 border-t-current',
  };

  const spinnerClass = twMerge(
    clsx(
      'inline-block rounded-full animate-spin shrink-0',
      sizeClasses[size],
      variantClasses[variant],
      className
    )
  );

  return (
    <span className="inline-flex items-center justify-center" role="status" aria-label={label}>
      <span className={spinnerClass} />
      <span className="sr-only">{label}</span>
    </span>
  );
};

export default Spinner;
