/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0b12',
        surface: '#12121b',
        brand: {
          DEFAULT: '#7b5cff',
          50: '#efeaff',
          100: '#dcd1ff',
          200: '#baa5ff',
          300: '#9a80ff',
          400: '#886bff',
          500: '#7b5cff',
          600: '#5b3fff',
          700: '#4a30df',
          800: '#3c27b2',
          900: '#2d1b86',
        },
        neon: '#10ff7a'
      },
      boxShadow: {
        glow: '0 0 40px rgba(123,92,255,0.35)',
        neon: '0 0 30px rgba(16,255,122,0.6)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.75)', opacity: '0.6' }
        },
        'draw-line': {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' }
        },
        'rotate-gradient': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.2s ease-in-out infinite',
        'draw-line': 'draw-line 1.5s ease forwards',
        'rotate-gradient': 'rotate-gradient 5s linear infinite'
      }
    },
  },
  plugins: [],
}
