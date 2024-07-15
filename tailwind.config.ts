import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00cc99",
        secondary: "#4d4d4d",
        base100: "#ffffff",
        base200: "#e5e5e5",
        info: "#133a6f",
        success: "#4caf50",
        warning: "#ff9800",
        error: "#f44336",
      },
    },
  },
  plugins: [],
};
export default config;
