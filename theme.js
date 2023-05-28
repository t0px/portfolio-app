import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["'Public Sans'", "Poppins", "Arial"].join(","),
  },
   breakpoints: {
    values: {
      xs: 0,
      xsc: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
   }
});
