/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'intellex-green': '#00ED64',
        'intellex-dark': '#1A1A1A',
        'intellex-light': '#E8F7FF',
        'intellex-accent': '#4A90E2',
        'intellex-blue': '#3B82F6',
       },

       fontSize: {
        'text-xsm':'5px'
       }
    },
  },
  plugins: [],
};
