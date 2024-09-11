/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003E6C", // Azul escuro
        secondary: "#00A3E0", // Azul claro
        accent: "#007A7A", // Verde acentuado
        neutral: "#F4F7F9", // Cor de fundo neutra
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fonte principal
      },
      boxShadow: {
        default: "0 4px 6px rgba(0, 0, 0, 0.1)",
        md: "0 6px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}