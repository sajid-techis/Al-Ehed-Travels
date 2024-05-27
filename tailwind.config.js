/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#004225',
        gold: '#FFD700',
        black: '#000000',
        sandstone: '#C2B280',
        lightGray: '#D3D3D3',
        navy: '#002B5B',
      },
    },
  },
  plugins: [],
};
