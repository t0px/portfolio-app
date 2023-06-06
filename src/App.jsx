import { Alert, Grid } from "@mui/material";
import { theme } from "./theme";
import { Box, ThemeProvider } from "@mui/system";
import "./css/default.css";
import Home from "./components/Home/Home";
import Knowledge from "./components/Knowledge/Knowledge";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar";
import PageWrapper from "./components/PageWrapper";
import Logo from "./components/Logo";
import ArrowNav from "./components/ArrowNav";
import { useState } from "react";
import { gsap, Power3 } from "gsap";
import AlertMsg from "./components/AlertMsg";
const pageItems = [
  {
    id: 0,
    ref: "home",
    bgcolor: null,
    page: <Home />,
    size: 100,
  },
  {
    id: 1,
    ref: "about",
    bgcolor: null,
    page: <About />,
    size: 100,
  },
  {
    id: 2,
    ref: "knowledge",
    bgcolor: null,
    page: <Knowledge />,
    size: 100,
  },
  {
    id: 3,
    ref: "projects",
    bgcolor: null,
    page: <Projects />,
    size: 100,
  },
  {
    id: 4,
    ref: "contact",
    bgcolor: null,
    page: <Contact />,
    size: 100,
  },
];


function App() {

  //GSAP
  const tl = new gsap.timeline();
  const ease = Power3.easeOut();

  const [currentPage, setCurrentPage] = useState([pageItems[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <AlertMsg />
      <Logo />
      <ArrowNav
        timeline={tl}
        ease={ease}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageItems={pageItems}
      />
      <Sidebar
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        timeline={tl}
        ease={ease}
      />
      {pageItems.map((item, index) => (
        <PageWrapper item={item} key={index} />
      ))}
    </ThemeProvider>
  );
}

export default App;
