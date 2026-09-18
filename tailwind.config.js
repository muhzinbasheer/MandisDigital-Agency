/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAF8F5',
          card: '#FFFFFF',
          elevated: '#F4F1EA',
          border: '#E6E3DB'
        },
        brand: {
          terracotta: '#E05236',
          'terracotta-hover': '#C9432A',
          'terracotta-light': '#FDF1EE',
          navy: '#181C30',
          'navy-hover': '#252A47',
          charcoal: '#111113',
          stone: '#FAF8F5',
          'stone-card': '#FFFFFF',
          'stone-border': '#E6E3DB',
          50: '#fdf3f0',
          100: '#fbe4dc',
          200: '#f8c9ba',
          300: '#f3a38d',
          400: '#eb775b',
          500: '#e05236',
          600: '#cc381d',
          700: '#ab2c15',
          800: '#8d2716',
          900: '#752417',
          accent: '#e05236',
          cyan: '#e05236',
          violet: '#181c30',
          indigo: '#181c30',
          emerald: '#10b981',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'ai-shimmer': 'ai-shimmer 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'ai-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

