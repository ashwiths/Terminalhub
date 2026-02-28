/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#00f5c4',
          purple: '#a78bfa',
          amber: '#f59e0b',
          blue: '#38bdf8',
        },
        surface: {
          900: '#0a0c12',
          800: '#0e1018',
          700: '#12151f',
          600: '#161923',
          500: '#1e2333',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 8px rgba(0,245,196,0.2)' },
          '50%': { boxShadow: '0 0 24px rgba(0,245,196,0.5)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'card-hover': '0 0 0 1px rgb(0 245 196 / 0.5), 0 8px 32px rgb(0 0 0 / 0.4)',
        'card': '0 4px 24px rgb(0 0 0 / 0.3)',
      },
    },
  },
  plugins: [],
}
