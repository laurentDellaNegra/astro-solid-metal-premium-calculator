/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#F7D000',
        'page-background': '#1B2A32',
        'component-background': '#22343C',
        'active-background': '#324F61',
        danger: '#F54F47',
        success: '#60B515',
        success: '#49AFD9',
        border: '#0F171C',
        'text-and-icon': '#ADBBC4',
        'input-value': '#E9ECEF',
      },
    },
  },
  plugins: [],
}
