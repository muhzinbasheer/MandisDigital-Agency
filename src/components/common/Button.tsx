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
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 border border-indigo-400/30",
    glow: "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-indigo-500/50 hover:brightness-110 border border-white/20",
    secondary: "bg-[#171a26] hover:bg-[#212638] text-slate-100 border border-[#212638] hover:border-indigo-500/40 shadow-md",
    outline: "border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-white",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
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
