import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      boxShadow: {
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.8)',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#153D6F",
          "100": "#235BA1",
          "50": "#E1EEFF",
          hover: "#3B67FF"
        },
        secondary: {
          DEFAULT: "#BE9544",
          "100": "#FFCC68",
          "50": "#FFE7BA"
        },
        midnight: {
          DEFAULT: "#1B1D28",
          "200": "#494A53",
          "100": "#76777E",
          "50": "#A4A5A9"
        },
        dark: {
          DEFAULT: "#0E0E0E",
          "50": "#2C2C2C",
        },
        pearl: {
          "50": "#F4F7FA",
          "100": "#DEE6EE",
          DEFAULT: "#CDD5E1",
        },
        success: {
          DEFAULT: "#00CD6B",
          "50": "#DFF9EC",
          "100": "#BFF3DA"
        },
        warning: {
          DEFAULT: "#FFC940",
          "50": "#FFF8E7",
          "100": "#FFF2CF"
        },
        danger: {
          DEFAULT: "#FF3131",
          "50": "#FFE5E5",
          "100": "#FFCBCB"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        GeistMono: ["GeistMono", "monospace"],
        BeVietnamPro: ["BeVietnamPro"],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow'), require("tailwindcss-animate")],
} satisfies Config

export default config