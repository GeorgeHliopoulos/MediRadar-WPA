/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
      colors: {
        brand: {
          50: "#f2fbf7",
          100: "#d6f6e7",
          200: "#b0ecd2",
          300: "#7bdcb8",
          400: "#43c99b",
          500: "#17b07f",
          600: "#0c9068",
          700: "#097456",
          800: "#075c46",
          900: "#044a39",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // keep these from being purged if used conditionally
    "bg-white","bg-slate-50","bg-slate-100","bg-slate-900",
    "text-slate-900","text-white",
    "bg-emerald-500","bg-rose-500","bg-yellow-500","bg-blue-600"
  ],
};
