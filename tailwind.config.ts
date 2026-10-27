import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: { 50: "#eef8fb", 100: "#d9eef4", 500: "#247b98", 600: "#176b87", 700: "#15566d", 900: "#102b46" } }, boxShadow: { soft: "0 4px 20px rgba(16,43,70,.06)" } } }, plugins: [] };
export default config;
