import { Grid } from "@mui/material";
import { theme } from "../theme";
import { Box, ThemeProvider } from "@mui/system";
import "./css/default.css";
import styled from "@emotion/styled";
import Home from "./components/Home/Home";
import Knowledge from "./components/Knowledge/Knowledge";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import PageWrapper from "./components/PageWrapper";

// PageItems [{}...]

const pageItems = [
    {
        ref: "home",
        bgcolor: null,
        page: <Home />
    },
    {
        ref: "about",
        bgcolor: null,
        page: <About />
    },
    {
        ref: "knowledge",
        bgcolor: <Knowledge />
    },
    {
        ref: "projects",
        bgcolor: <Projects />
    },
    {
        ref: "contact",
        bgcolor: <Contact />
    },
];

function App() {

  return (
    // Overriding default font with theme
    <ThemeProvider theme={theme}>
      <Sidebar />
        {pageItems.map((item, index) => (
            <PageWrapper item={item} key={index}/>
        ))}
    </ThemeProvider>
  );
}

export default App;
