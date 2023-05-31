import { Container } from "@mui/system";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { gsap, Power3 } from "gsap";

const Home = () => {

    //GSAP
    const tl = new gsap.timeline();
    const ease = Power3.easeOut();

  return (
    <Container component="header" disableGutters>
      {
        //TODO: Maybe I'll move navbar to App
      }
      <Navbar timeline={tl} ease={ease} />
      <Hero timeline={tl} ease={ease} />
    </Container>
  );
};

export default Home;
