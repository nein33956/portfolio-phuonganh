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
        // brand = XANH Eco-Tech: emerald #40916C, xanh lá đậm #1B4332
        brand: {
          50: "#f1faf4",
          100: "#d8f3dc",
          200: "#b7e4c7",
          300: "#95d5b2",
          400: "#74c69d",
          500: "#52b788",
          600: "#40916c",
          700: "#2d6a4f",
          800: "#1b4332",
          900: "#122d22",
          950: "#081c15",
        },
        // forest = xanh lá đậm (khối tối)
        forest: {
          50: "#d8f3dc",
          100: "#b7e4c7",
          200: "#95d5b2",
          400: "#52b788",
          500: "#40916c",
          600: "#2d6a4f",
          700: "#1f5640",
          800: "#1b4332",
          900: "#122d22",
          950: "#081c15",
        },
        ink: {
          DEFAULT: "#16231c",
          soft: "#3c4d43",
          muted: "#6f8077",
        },
        ivory: "#ffffff",
        paper: "#ffffff",
      },
      boxShadow: {
        glow: "0 18px 50px -22px rgba(27,67,50,0.35)",
        card: "0 16px 44px -24px rgba(18,45,34,0.28)",
        soft: "0 8px 26px -16px rgba(18,45,34,0.20)",
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
