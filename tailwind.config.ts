import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        vivora: {
          linen: "var(--color-linen)",
          cream: "var(--color-cream)",
          parchment: "var(--color-parchment)",
          bg: "var(--color-bg)",
          sand: "var(--color-sand)",
          glow: "var(--color-glow)",

          mocha: "var(--color-mocha)",
          walnut: "var(--color-walnut)",
          umber: "var(--color-umber)",
          driftwood: "var(--color-driftwood)",

          ink: "var(--color-ink)",
          espresso: "var(--color-espresso)",
          bark: "var(--color-bark)",
          stone: "var(--color-stone)",

          gold: "var(--color-gold)",
          champagne: "var(--color-champagne)",
          error: "var(--color-error)",
        },
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        brand: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },

      maxWidth: {
        site: "var(--max-w)",
      },
    },
  },
  plugins: [],
};

export default config;
