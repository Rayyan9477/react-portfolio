/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary: ["Rajdhani", "sans-serif"],
      mono: ["JetBrains Mono", "Fira Code", "monospace"],
    },
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      transitionDuration: {
        400: "400ms",
        500: "500ms",
        600: "600ms",
      },
      screens: {
        xsm: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      rotate: {
        10: "10deg",
      },
      borderRadius: {
        "2rem": "2rem",
      },
      colors: {
        primary: "#38bdf8",
        void: "#07090E",
        surface: "#0D111C",
        "surface-card": "rgba(13, 17, 28, 0.75)",
        "surface-elevated": "#141A29",
        "cyan-accent": "#38bdf8",
        "violet-accent": "#a855f7",
        "emerald-accent": "#10b981",
        "amber-accent": "#f59e0b",
      },
      backgroundImage: {
        site: "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.08) 0%, transparent 60%), radial-gradient(circle at 100% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%), #07090E",
      },
    },
  },
  plugins: [],
};
