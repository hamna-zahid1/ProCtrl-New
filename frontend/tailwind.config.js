/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F44FBF",
        dark: {
          "primary": "#1E1E20",
          "secondary": "#272932",
          "body": "#17171A",
        },
        gray: { DEFAULT: "#000000", dark: "#414558" },
        light: "#edf2f4",
      },
      maxWidth: {
        'custom': '87%'
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"]
    },

  },
  plugins: [],
};