import type { Config } from "tailwindcss";
 
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--background-color)",
        headingText: "var(--color-text-heading)",
        paraText: "var(--color-text-paragraph)",
        buttonbg: "var(--color-button-bg)",
        bgSoftPrimary: "var(--bg-soft-primary)",
      },
      screens: {
        "2xl": "1400px", // Set the breakpoint for large screens
      },
      container: {
        center: true, // Center the container
        padding: "1rem", // Optional padding on sides
      },
      maxWidth: {
        "container-2xl": "1320px", // Set max width for the container
      },
      fontWeight: {
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
    },
    fontFamily: {
      // Custom body font (THICCCBOI) for regular text
      thicccboi: ["THICCCBOI", "sans-serif"],
      // Headings & other text using Manrope (imported via next/font and set as a CSS variable)
      sans: ["var(--font-manrope)", "sans-serif"],
      serif: ["var(--font-dm-serif)", "serif"],
      montserrat: ["var(--font-montserrat)", "sans-serif"],
      monospace: [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [],
} satisfies Config;
