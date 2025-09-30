/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // (προαιρετικό) ενεργοποίησε dark mode αν θες
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff3b30",
          50: "#fff0ef",
          100: "#ffd9d6",
          500: "#ff3b30",
          600: "#e0352b",
        },
        accent: "#ffcc00",
        mint: "#34c759",
        lilac: "#8e8aff",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(17,24,39,0.08)",
      },
    },
  },
  plugins: [],
}
