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
        dark: {
          bg: '#090d16',
          darker: '#05070d',
          card: '#0f172a',
          cardHover: '#162238',
          panel: '#131d33',
          border: '#1e293b',
          borderHover: '#334155'
        },
        laser: {
          cyan: '#06b6d4',
          cyanLight: '#22d3ee',
          emerald: '#10b981',
          sky: '#38bdf8',
          rose: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'laser-glow': '0 0 20px -5px rgba(6, 182, 212, 0.25)',
        'laser-glow-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.25)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
