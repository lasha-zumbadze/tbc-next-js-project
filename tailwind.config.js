/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 50px 1px #0000004f",
        "4xl": "0 10px 50px #00000024",
      },
      backgroundImage: {
        reservation: "url('../public/images/reservations.png')",
      },
      dropShadow: {
        "3xl": "0 0 0 2px rgb(47, 3, 3)",
      },
    },
    fontFamily: {
      alexBrush: ["var(--font-alexBrush)"],
      ptSans: ["var(--font-ptSans)"],
    },
  },
  plugins: [],
};
