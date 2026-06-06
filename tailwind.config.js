/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Atelier: serif thanh lịch + sans tinh tế
        sans: ['"Jost"', '"Segoe UI"', "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        // brand = VÀNG champagne / brass
        brand: {
          50: "#fbf8f1",
          100: "#f5eedd",
          200: "#ecdcb8",
          300: "#dec48a",
          400: "#cda85c",
          500: "#bb8f3e",
          600: "#a2772f",
          700: "#835d28",
          800: "#6b4c26",
          900: "#5a4023",
          950: "#332210",
        },
        // xanh ngọc lục bảo đậm — điểm nhấn giàu sang cùng vàng
        forest: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          400: "#34d399",
          500: "#10b981",
          600: "#0a7d5a",
          700: "#0a6249",
          800: "#0b4d3b",
          900: "#0a3c30",
          950: "#04231c",
        },
        ink: {
          DEFAULT: "#201a15",
          soft: "#473d34",
          muted: "#8a7c6c",
        },
        ivory: "#f7f1e6",
      },
      boxShadow: {
        glow: "0 18px 50px -22px rgba(131,93,40,0.35)",
        card: "0 16px 44px -24px rgba(42,37,33,0.28)",
        soft: "0 8px 26px -16px rgba(42,37,33,0.22)",
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
