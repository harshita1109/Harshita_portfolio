import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — driven by CSS variables so dark/light swap cleanly.
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        hairline: "rgb(var(--hairline) / <alpha-value>)",
        // Brand accents — constant across themes.
        indigo: "#5B5BF0",
        violet: "#9A6BFF",
        signal: "#36E0D0", // cyan — reserved for live/active cues only
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Scale: 60/40/28/20/16/13 from the design system.
        display: ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h2: ["2.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h3: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        lead: ["1.25rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.65" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        content: "1100px",
      },
      borderRadius: {
        card: "16px",
      },
      backgroundImage: {
        accent: "linear-gradient(120deg, #5B5BF0, #9A6BFF)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "signal-travel": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "signal-travel": "signal-travel 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
