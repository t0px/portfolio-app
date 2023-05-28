import { AppBar, Button, Grid, Typography } from "@mui/material";
import { theme } from "../theme";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import "./css/default.css";
import styled from "@emotion/styled";
import Home from "./components/Home/Home";
import Section1 from "./components/Section1/Section1";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Sidebar from "./components/Sidebar";

const PageGrid = styled(Grid)({
  width: "70vw",
  height: "100vh",
  position: "relative",
  flexDirection: "column"
});

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Sidebar />
      <PageGrid container sx={{}} id="home">
        <Home />
      </PageGrid>
      <PageGrid container sx={{}} id="knowledge">
        <Section1 />
      </PageGrid>
    </ThemeProvider>
  );
}

export default App;
