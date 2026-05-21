/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0B0B0B",
        },
        graphite: {
          800: "#151515",
          700: "#1F1F1F",
        },
        brand: {
          600: "#C40000",
          500: "#D50000",
          400: "#FF4936",
        },
        mist: "#B8B8B8",
        ember: "#FF9B57",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel:
          "0 24px 90px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        glow:
          "0 0 0 1px rgba(255, 255, 255, 0.06), 0 20px 70px rgba(0, 0, 0, 0.32), 0 0 100px rgba(213, 0, 0, 0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(213, 0, 0, 0.2), transparent 34%), radial-gradient(circle at 82% 18%, rgba(255, 155, 87, 0.12), transparent 20%), linear-gradient(180deg, rgba(11, 11, 11, 0.98) 0%, rgba(5, 5, 5, 0.92) 100%)",
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.38" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
