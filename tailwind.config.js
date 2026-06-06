/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jost"', '"Segoe UI"', "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        // brand = đỏ burgundy ấm
        brand: {
          50:  "#fdf4f2",
          100: "#f9e3dc",
          200: "#f2c4b6",
          300: "#e89b88",
          400: "#d96e58",
          500: "#c24a34",
          600: "#9e3224",
          700: "#7f221b",
          800: "#621916",
          900: "#4a1311",
          950: "#30090a",
        },
        ink: {
          DEFAULT: "#2c1a17",
          soft:    "#5a3d38",
          muted:   "#957068",
        },
        beige: "#f2e8dd",
        ivory: "#faf6f1",
        paper: "#ffffff",
      },
      boxShadow: {
        glow: "0 18px 50px -22px rgba(158,50,36,0.30)",
        card: "0 16px 44px -24px rgba(98,25,22,0.22)",
        soft: "0 8px 26px -16px rgba(98,25,22,0.16)",
      },
      letterSpacing: {
        luxe: "0.28em",
        airy: "0.18em",
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
