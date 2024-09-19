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
        recommendationBorder: "#82828233",
        recommendedVideo: "#E2E2E2",
        headerInput: "#ECECEC66",
        offBackground: "#E9E9E9",
        offText: "#5A5A5A",
        offBorder: "#D8D8D859",
        lightBrown: "#A6A6A6",
        lightBrowText:"#8B8B8B",
        signText:"#666687",
        signInputBorder:"#DCDCE4"
      },
    },
    plugins: [],
  },
};
