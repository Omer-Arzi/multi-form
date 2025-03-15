import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(213, 96%, 18%)", // Marine Blue
      light: "hsl(228, 100%, 84%)", // Pastel Blue
      dark: "hsl(243, 100%, 62%)", // Purplish Blue
      contrastText: "#fff",
    },
    secondary: {
      main: "hsl(354, 84%, 57%)", // Strawberry Red
    },
    background: {
      default: "hsl(231, 100%, 99%)", // Alabaster
      paper: "hsl(217, 100%, 97%)", // Magnolia
    },
    text: {
      primary: "hsl(213, 96%, 18%)", // Marine Blue
      secondary: "hsl(231, 11%, 63%)", // Cool Gray
    },
    grey: {
      500: "hsl(231, 11%, 63%)", // Cool Gray
      300: "hsl(229, 24%, 87%)", // Light Gray
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontSize: "16px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
