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
        "5xl": "0 3px 50px #828282",
        "6xl": "inset 0 0 50px #c8a97e",
        input: "0 0 50px 5px #c8a97e;",
        "7xl": "0 0 50px 2px #c4ab9f49",
      },
      backgroundImage: {
        reservation: "url('../public/images/reservations.png')",
        interier1: "url('../public/images/interiers/interier-1.png')",
        interier2: "url('../public/images/interiers/interier-2.png')",
        interier3: "url('../public/images/interiers/interier-3.png')",
        interier4: "url('../public/images/interiers/interier-4.png')",
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
  darkMode: "class",
};
