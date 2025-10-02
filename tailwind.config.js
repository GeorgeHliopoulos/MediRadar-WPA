/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — adjust here to change theme
        brand: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // primary
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          500: '#22c55e', // success green
        },
        surface: '#0b1220',    // deep navy background
        panel: 'rgba(255,255,255,0.06)',
        foreground: 'rgba(255,255,255,0.92)',
        muted: 'rgba(255,255,255,0.70)'
      },
      boxShadow: {
        glow: '0 10px 30px rgba(6,182,212,0.35)'
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        xl2: '1rem'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(6,182,212,0.25), transparent 55%), radial-gradient(ellipse at bottom, rgba(255,255,255,0.06), transparent 55%)',
        'grid': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '24px 24px'
      }
    }
  },
  plugins: []
}
