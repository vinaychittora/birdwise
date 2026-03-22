import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(44 25% 96%)",
        foreground: "hsl(155 18% 15%)",
        card: "hsl(0 0% 100%)",
        cardForeground: "hsl(155 18% 15%)",
        popover: "hsl(0 0% 100%)",
        popoverForeground: "hsl(155 18% 15%)",
        primary: {
          DEFAULT: "hsl(154 28% 26%)",
          foreground: "hsl(48 40% 97%)",
        },
        secondary: {
          DEFAULT: "hsl(42 24% 86%)",
          foreground: "hsl(155 18% 18%)",
        },
        muted: {
          DEFAULT: "hsl(45 22% 92%)",
          foreground: "hsl(153 10% 35%)",
        },
        accent: {
          DEFAULT: "hsl(26 38% 63%)",
          foreground: "hsl(150 30% 15%)",
        },
        border: "hsl(42 16% 80%)",
        input: "hsl(42 16% 80%)",
        ring: "hsl(154 28% 26%)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(38, 54, 46, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
      },
      backgroundImage: {
        'hero-texture': "radial-gradient(circle at top left, rgba(255,255,255,0.16), transparent 35%), linear-gradient(135deg, rgba(34,61,52,0.95), rgba(77,104,92,0.9))",
      },
    },
  },
  plugins: [],
};

export default config;
