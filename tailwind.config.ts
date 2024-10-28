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
        primary: "#007bff", // Blue
        secondary: "#6c757d", // Gray
        success: "#28a745", // Green
        danger: "#dc3545", // Red
        warning: "#ffc107", // Yellow
      },
    },
  },
  plugins: [],
};

export default config;
