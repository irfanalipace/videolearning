/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005687",
        bluePrimary: "#0294D3",
        black: "#000000",
        secondary: "#64748B",
        searchField: "#F1F5F9",
        white: "#FFFFFF",
        transparentCooking: "#9F9F9F80",
        selectBg: "#D9D9D999",
        recent: "#DADADA99",
        recentBorder: "#AEAEAE",
        paginationButtonBorder: "#737579",
        recommendationBorder:"#82828233",
        recommendedVideo:"#E2E2E2"
      },
    },
    plugins: [],
  },
};
