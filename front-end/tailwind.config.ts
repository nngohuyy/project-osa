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
      '5xl': '64px',
      '4xl': '48px',
      '3xl': '32px',
      '2xl': '24px',
      'xl': '20px',
      'lg': '18px',
      'base': '16px',
      'sm': '14px',
      'xs': '12px',
      'xxs': '10px',
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
      lineHeight: {
        '7xl': '4.75rem',
        '6xl': '3.75rem',
        '5xl': '2.5rem',
        '4xl': '1.875rem',
        '3xl': '1.5rem',
        '2xl': '1.375rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
      },
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
