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
        cyber: {
          bg: '#070b14',
          darker: '#03060c',
          card: '#0c1322',
          cardHover: '#131d33',
          panel: '#10192e',
          border: '#1b2742',
          borderGlow: '#00f5d4',
          primary: '#00f5d4',
          primaryHover: '#38ef7d',
          secondary: '#7b2cbf',
          accent: '#f72585',
          neonBlue: '#00bbf9',
          neonPink: '#ff007f',
          neonYellow: '#ffd166',
          textMuted: '#94a3b8',
          textLight: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif']
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
        'radar': 'radar 4s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(0, 245, 212, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(0, 245, 212, 0.8))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      boxShadow: {
        'cyber-neon': '0 0 20px rgba(0, 245, 212, 0.25), inset 0 0 15px rgba(0, 245, 212, 0.05)',
        'cyber-purple': '0 0 20px rgba(123, 44, 191, 0.3), inset 0 0 15px rgba(123, 44, 191, 0.1)',
        'cyber-pink': '0 0 20px rgba(247, 37, 133, 0.3), inset 0 0 15px rgba(247, 37, 133, 0.1)',
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}
