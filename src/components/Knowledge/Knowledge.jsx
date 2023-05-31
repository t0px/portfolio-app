import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import KnowledgeSection from "./KnowledgeSection";
    import { gsap, Power3 } from "gsap";

const Knowledge = () => {

    //GSAP
    const tl = new gsap.timeline();
    const ease = Power3.easeOut();

    return (
      <Container disableGutters component="section">
        <KnowledgeSection timeline={tl} ease={ease}/>
      </Container>
    );
}
 
export default Knowledge;