import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import AboutSection from "./AboutSection";
import { gsap, Power3 } from "gsap";

const About = () => {

    //GSAP
    const tl = new gsap.timeline();
    const ease = Power3.easeOut();

    return (
      <Container disableGutters component="section">
        <AboutSection timeline={tl} ease={ease}/>
      </Container>
    );
}

export default About;