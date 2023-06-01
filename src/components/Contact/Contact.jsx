import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ContactSection from "./ContactSection";
import { gsap, Power3 } from "gsap";

const Contact = () => {
  //GSAP
  const tl = new gsap.timeline();
  const ease = Power3.easeOut();
  return (
    <Container disableGutters component="section">
      <ContactSection timeline={tl} ease={ease}/>
    </Container>
  );
}

export default Contact;