import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        paper: "var(--paper)",
        surface: "var(--surface)",
        rule: "var(--rule)",
        marigold: "var(--marigold)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        deva: ["var(--font-deva)"]
      }
    }
  },
  plugins: [typography]
};

export default config;
