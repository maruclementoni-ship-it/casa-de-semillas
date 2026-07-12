/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        seed: {
          50: '#f8f6f0',
          100: '#efebe0',
          200: '#dfd8c5',
          300: '#c9bd9f',
          400: '#b09d74',
          500: '#9a8255',
          600: '#7e6843',
          700: '#645135',
          800: '#4d3f2a',
          900: '#3a3020',
          950: '#1f1a11',
        },
        leaf: {
          50: '#f3f7f0',
          100: '#e3ecdd',
          200: '#c7d9ba',
          300: '#a3c192',
          400: '#7ba46b',
          500: '#5a8849',
          600: '#436c34',
          700: '#345628',
          800: '#2a4421',
          900: '#1f3319',
          950: '#0f1c0b',
        },
        terracotta: {
          50: '#fbf5f1',
          100: '#f5e5db',
          200: '#e9c7b4',
          300: '#d9a187',
          400: '#c87a55',
          500: '#b85d3a',
          600: '#a04a2d',
          700: '#823a25',
          800: '#6a301f',
          900: '#56281b',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
