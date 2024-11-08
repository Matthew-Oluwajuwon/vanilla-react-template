/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "primary-bg": "var(--primary-bg)",
    },
    borderColor: {
      primary: "var(--border-primary)",
    }
  },
  plugins: [],
}