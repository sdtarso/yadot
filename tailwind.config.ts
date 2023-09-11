import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#B9D408",
          light: "#F2F70B",
          dark: "#797F23",
        },
        secondary: {
          DEFAULT: "#F68323",
          light: "#FDED5E",
          dark: "#BE400C",
        },
        accent: {
          DEFAULT: "#2DC3C6",
          light: "#AAE5E4",
          dark: "#21575B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
