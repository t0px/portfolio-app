import { AppBar, Button, Grid, Typography } from "@mui/material";
import { theme } from "../theme";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import "./css/default.css";
import styled from "@emotion/styled";
import Home from "./components/Home/Home";
import Knowledge from "./components/Knowledge/Knowledge";
import Projects from "./components/Projects/Projects";
import About from "./components/About/Projects";
import Contact from "./components/Contact/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Sidebar from "./components/Sidebar";

const PageWrapper = styled(Box)({
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
})

const PageGrid = styled(Grid)({
  width: "70vw",
  position: "relative",
  flexDirection: "column"
});

const OverlayBG = styled(Box)({
    position: "fixed",
    inset: 0,
    backgroundImage: "url(src/assets/Bg-Noise.png)",
    backgroundPosition: "0px 0px",
    backgroundSize: "100% 100vh",
})

function App() {

  return (
    // Overriding default font with theme
    <ThemeProvider theme={theme}>
      <Sidebar />
      <PageWrapper bgcolor="#1C1A1B">
        <PageGrid container id="home" sx={{ height: "100vh" }}>
          <Home />
        </PageGrid>
      </PageWrapper>
      <PageWrapper bgcolor="#161516">
        <PageGrid container id="about" sx={{ height: "100vh" }}>
          <About />
        </PageGrid>
      </PageWrapper>
      <PageWrapper bgcolor="#111010">
        <PageGrid container id="knowledge" sx={{ height: "100vh" }}>
          <Knowledge />
        </PageGrid>
      </PageWrapper>
      <PageWrapper bgcolor="#0b0a0b">
        <PageGrid container id="projects" sx={{ height: "100vh" }}>
          <Projects />
        </PageGrid>
      </PageWrapper>
      <PageWrapper bgcolor="#080808">
        <PageGrid container id="contact" sx={{ height: "100vh" }}>
          <Contact />
        </PageGrid>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
