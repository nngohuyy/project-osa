import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      screens: {
        '2xl': { min: '1536px'},
        xl: { min: '1280px'},
        lg: { min: '1024px'},
        md: { min: '768px'},
        sm: { min: '640px'},
        xs: { min: '480px'},
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'solid': '5px 5px 0 0 rgb(0 0 0)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
