import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontSize: {
      'h1': '64px',
      'h2': '48px',
      'h3': '32px',
      'h4': '24px',
      'h5': '20px',
      'h6': '18px',
      'body1': '16px',
      'body2': '14px',
      'subtitle1': '16px',
      'subtitle2': '14px',
      'caption1': '12px',
      'caption2': '12px',
      'footnote': '10px',
    },
    colors: {
      'white' : '#FFFFFF',
      'black' : '#000000',
      'background': '#FAFAFA',
      'muted': '#E4E4E7',
      'default': '#01001D',
      'primary': '#244AD0',
      'secondary': '#9333EA',
      'success': '#179E3B',
      'warning': '#FC8702',
      'danger': '#DE2935',
    },
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
      fontFamily: {
        sans: 'var(--font-manrope)',
        mono: 'var(--font-space-grotesk)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'solid': '4px 4px 0 0 rgb(0 0 0)',
        'elevation1': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        'elevation2': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        'elevation3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        'elevation4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)',
        'elevation5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
