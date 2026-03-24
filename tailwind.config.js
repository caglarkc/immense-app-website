/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#F5F5DC",
        pageBg: "#E8E2D3",
        pageBgSecondary: "#F5F5DC",
        navy: "#1B2A4A",
        /** Footer / koyu bloklar: düz lacivertten daha sıcak, pageBg ile uyumlu */
        footerBg: "#2a3342",
        accent: "#C9A96E",
        text: "#2E2E2E",
        muted: "#8A8A8A",
      },
      fontFamily: {
        main: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        btn: "0px",
        pill: "9999px",
      },
      transitionDuration: {
        nav: "var(--transition-duration)",
      },
    },
  },
  plugins: [],
};
