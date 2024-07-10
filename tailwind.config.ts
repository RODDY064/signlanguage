import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
        "custom":"rgba(0, 0, 0, 0.10) 0px 5px 15px 0px"
      },
      content: {
        'link': 'url("/icons/tick.svg")',
        'link2': 'url("/icons/tick2.svg")',
      }
    },
  },
  plugins: [],
};
export default config;
