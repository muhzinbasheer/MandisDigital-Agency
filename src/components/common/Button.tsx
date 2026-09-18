import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Spinner } from './Spinner';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  magnetic?: boolean;
  href?: string;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  magnetic = false,
  href,
  isLoading = false,
  loadingText,
  disabled = false,
  onClick,
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E05236] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#E05236] hover:bg-[#C9432A] text-white shadow-md shadow-[#E05236]/25 border border-[#E05236]",
    glow: "bg-[#E05236] hover:bg-[#C9432A] text-white shadow-[0_4px_20px_rgba(224,82,54,0.35)] hover:shadow-[0_6px_25px_rgba(224,82,54,0.5)] border border-[#E05236]",
    secondary: "bg-[#181C30] hover:bg-[#252A47] text-white border border-[#181C30] shadow-sm",
    outline: "border border-[#E05236] text-[#E05236] hover:bg-[#FDF1EE] shadow-sm",
    ghost: "text-[#111113] hover:text-[#E05236] hover:bg-[#F4F1EA]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const spinnerSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'md' as const,
  };

  const combinedClass = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const content = (
    <>
      {isLoading ? (
        <>
          <Spinner size={spinnerSizeMap[size]} variant="current" />
          <span>{loadingText || children}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </>
      )}
    </>
  );

  const motionProps = magnetic && !isDisabled
    ? {
        whileHover: { scale: 1.04, y: -2 },
        whileTap: { scale: 0.97 },
      }
    : isDisabled
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

  if (href && !isDisabled) {
    return (
      <motion.a
        href={href}
        className={combinedClass}
        {...(motionProps as HTMLMotionProps<'a'>)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={combinedClass}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

