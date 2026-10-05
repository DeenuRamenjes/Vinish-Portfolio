import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-card': '#111111',
        'bg-card-alt': '#1A1A1A',
        'accent-red': '#E53935',
        'accent-red-dark': '#B71C1C',
        'text-secondary': '#9E9E9E',
        'text-muted': '#666666',
        'border-card': '#1E1E1E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
