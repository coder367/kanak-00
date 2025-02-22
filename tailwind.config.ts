
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rum-swizzle': '#F8F6EB',
        'disco': '#BC1444',
        'disco-dark': '#8C1444',
        'careys-pink': '#D0ADAB',
        'turkish-rose': '#BA778B',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
    fontFamily: {
      'serif-display': ['DM Serif Display', 'serif'],
      'garamond': ['EB Garamond', 'serif'],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
