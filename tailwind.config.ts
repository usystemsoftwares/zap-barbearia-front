import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan": "#05847E",
        "primary-green": "#4DD080",
        "dark-green": "#134D37",
        "blur-green": "#41E0AF",
        "text-green": "#143637",
        "primary-golden": "#D3B71B",
        "secondary-golden": "#C65A17",
        "light-gray": "#919393",
        "dark-gray": "#222627",
        "black": "#000B04",
        "secondary-white": "#EFF1F7",
        "white-bg": "#FCF5EB"
      },
    },
  },
  plugins: [],
};
export default config;
