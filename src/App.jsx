import { AppBar, Button, Grid, Typography } from "@mui/material";
import { theme } from "../theme";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import "./css/default.css";
import styled from "@emotion/styled";
import Home from "./components/Home/Home";
import Knowledge from "./components/Knowledge/Knowledge";
import Projects from "./components/Projects/Projects";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Sidebar from "./components/Sidebar";

const PageGrid = styled(Grid)({
  width: "70vw",
  position: "relative",
  flexDirection: "column"
});

function App() {

  return (
    // Overriding font with theme
    <ThemeProvider theme={theme}>
      <Sidebar />
      <PageGrid container id="home" sx={{ height: "100vh" }}>
        <Home />
      </PageGrid>
      <PageGrid container id="knowledge" sx={{ height: "100vh" }}>
        <Knowledge />
      </PageGrid>
      <PageGrid container id="projects" sx={{ height: "100vh" }}>
        <Projects />
      </PageGrid>
    </ThemeProvider>
  );
}

export default App;
