/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#070A12",
          900: "#0B1020",
          800: "#101A34",
          700: "#172552",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.10)",
        card: "0 4px 4px 0 #d3d3d30f, 0 1px 1px 0 #0e0e0e0e",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

