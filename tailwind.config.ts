import type { Config } from "tailwindcss";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.{ts,tsx,svg}",
    "./chat/vn-vi/**/*.{ts,tsx}",
    "./home/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset()],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0px)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        enterFromRight: {
          from: {
            opacity: "0",
            transform: "translateX(200px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        enterFromLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-200px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        exitToRight: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(200px)",
          },
        },
        exitToLeft: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(-200px)",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "rotateX(-10deg) scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "rotateX(0deg) scale(1)",
          },
        },
        scaleOut: {
          from: {
            opacity: "1",
            transform: "rotateX(0deg) scale(1)",
          },
          to: {
            opacity: "0",
            transform: "rotateX(-10deg) scale(0.95)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeOut: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        grid: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        grid: "grid 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
