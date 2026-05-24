import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#7451f8",
    },
  },
});

export default LightTheme;
