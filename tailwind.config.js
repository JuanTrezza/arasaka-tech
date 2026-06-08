export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#CC0000',
        'brand-cyan': '#00F0FF',
        'brand-white': '#E8EAF0',
        'brand-gray': '#3A3F4B',
        'brand-gold': '#C9A84C',
        'brand-muted': '#606880',
        'brand-surface': '#0D0D1A',
        'brand-black': '#080810',
        'bg-dark': '#080810',
        'surf-dark': '#13131b',
        'surf-high': '#1f1f28',
        'surf-highest': '#292932',
        'steel': '#3a3f4b',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
