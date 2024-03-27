import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#242424",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily:
      "'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', sans-serif",
    fontWeightRegular: 400,
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 500,
      "@media (max-width: 768px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.3rem",
    },
  }
});
