import { Box, Container } from "@mui/system";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { gsap, Power3 } from "gsap";
import styled from "@emotion/styled";


const Home = () => {

    //GSAP
    const tl = new gsap.timeline();
    const ease = Power3.easeOut();

  return (
    <Container component="header" disableGutters>
      <Navbar timeline={tl} ease={ease} />
      <Hero timeline={tl} ease={ease} />
    </Container>
  );
};

export default Home;
