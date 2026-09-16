import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  magnetic?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  magnetic = false,
  href,
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 border border-cyan-400/40",
    glow: "bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:brightness-110 border border-cyan-300/40",
    secondary: "bg-[#121626] hover:bg-[#1c2236] text-slate-100 border border-[#1e2438] hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/10",
    outline: "border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    ghost: "text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const combinedClass = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const motionProps = magnetic
    ? {
        whileHover: { scale: 1.04, y: -2 },
        whileTap: { scale: 0.97 },
      }
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

  if (href) {
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
      className={combinedClass}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};
