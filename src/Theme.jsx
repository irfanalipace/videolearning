import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#005687",
    },
    secondary: {
      main: "#0294D3",
    },
    text: {
      primary: "#000000",
      secondary: "#64748B",
    },
    backgroundColor: {
      searchField: "#F1F5F9",
    },
    typography: {
      allVariants: {
        color: "#FFFFFF",
      },
      fontFamily: [
        "Roboto",
        "Poppins",
        "sans-serif", // Fallback fonts
      ].join(","),
    },
  },
});
