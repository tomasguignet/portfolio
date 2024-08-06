import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1c1c1d",
      dark: "#292a2c",
      light: "#6F8191",
      contrastText: "#CBD2D9",
    },
    secondary: {
      main: "#F2630D",
    },
  },
  typography: { fontFamily: ["Poppins", "sans-serif"].join(",") },
});

export default theme;
