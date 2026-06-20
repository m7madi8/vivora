import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        vivora: {
          // Backgrounds
          bg: "#E2DBCA",
          cream: "#F6F6EE",
          parchment: "#ECEBE1",
          linen: "#F8F5EE",

          // Browns
          mocha: "#92735E",
          walnut: "#5F4F3D",
          umber: "#A18F7C",
          driftwood: "#BAA890",

          // Text
          ink: "#16140F",
          espresso: "#4A4232",
          bark: "#5F5549",
          stone: "#796A5B",

          // CTA
          gold: "#AE9A6C",
          champagne: "#EDDCB0",

          // Footer
          footer: "#92735E",
          "footer-text": "#F5F5EC",
        },
      },

      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["clamp(3rem, 6.5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05" }],
      },

      borderRadius: {
        vivora: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
