import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        slateBlue: '#0A1E32',
        mist: '#F4F7FA'
      },
      boxShadow: {
        panel: '0 8px 24px rgba(10, 30, 50, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
