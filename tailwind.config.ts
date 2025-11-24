import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#1F2D3A',
        primary: {
          DEFAULT: '#35556E',
          foreground: '#FFFFFF',
          hover: '#2F4D63',
        },
        secondary: {
          DEFAULT: '#1F2D3A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFD978',
          foreground: '#1F2D3A',
        },
        grey: {
          light: '#F5F6F7',
          medium: '#E5E7EB',
          deep: '#D1D5DB',
        },
        'body-text': '#4B5563',
        'small-label': '#6B7280',
        border: '#E5E7EB',
        input: '#D1D5DB',
        ring: '#35556E',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2D3A',
          border: '#E5E7EB',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },
        'button-lift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'soft-scale': 'soft-scale 0.3s ease-in-out forwards',
        'button-lift': 'button-lift 0.2s ease-out forwards',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
