/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-base-white": "#fff",
        "neutral-neutral-600": "#5f5f6a",
        "neutral-neutral-200": "#dadadd",
        "neutral-neutral-950": "#27272a",
        "neutral-neutral-300": "#b9bac0",
        whitesmoke: "#f2f4f7",
        "neutral-neutral-800": "#434349",
        "base-base-black": "#1c1c1e",
      },
      spacing: {},
      fontFamily: {
        "text-md-regular": "Inter",
        "sf-pro-text": "'SF Pro Text'",
      },
    },
    fontSize: {
      base: "1rem",
      mid: "1.063rem",
      "37xl": "3.5rem",
      "2xl": "1.313rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
