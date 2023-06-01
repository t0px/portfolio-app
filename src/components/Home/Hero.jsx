import { Grid, Typography } from "@mui/material";
import { Box} from "@mui/system";
import MainText from "../MainText";
import Buttons from "../Buttons";
import { useEffect, useRef } from "react";

const Hero = ({ timeline, ease }) => {


    let h1 = useRef(null);
    let h2 = useRef(null);
    let btns = useRef(null);
    let square = useRef(null);

  useEffect(() => {
    timeline.from(square, 4, {
        opacity: 0,
        transform: "scale(5)",
        y: 1400,
        ease: ease,
    }, "-=3");
    timeline.from(h1, 2, {
      opacity: 0,
      x: -200,
      ease: ease,
    }, "-=2");
    timeline.from(h2, 1.75, {
      opacity: 0,
      y: 200,
      ease: ease,
    }, "-=1.5");
    timeline.from(btns.children, 1.2, {
        opacity: 0,
        y: 100,
        stagger: {
        amount: 0.4,
        },
        ease: ease,
    }, "-=0.85");
  }, []);

  return (
    <Grid
      item
      xs={12}
      mt={10}
      component="section"
      sx={{
        flexDirection: "column",
        textAlign: { xs: "center", sm: "start" },
      }}
    >
      <Box ref={el => square = el} position="relative">
        <Box
          component="img"
          src="src/assets/Dots.png"
          position="absolute"
          sx={{ top: 50, left: 250, pointerEvents: "none", display: {xs: "none", xl: "inherit"} }}
        />
        <MainText
        animationRef={ el => h1 = el}
          title={
            <span>
              Hi, my name is <strong>Roland Meir.</strong>
            </span>
          }
        />
        <Typography
        ref={el => h2 = el}
          variant="h2"
          sx={{
            fontWeight: 400,
            color: "#E0E0E0",
            fontSize: {
              xs: 20,
              md: 25,
              lg: 30,
            },
            fontFamily: "Poppins",
            mb: 5,
          }}
        >
          I am a <strong>Frontend</strong> Web Developer.
        </Typography>
      </Box>
      <Buttons animationRef={el => btns = el}/>
    </Grid>
  );
};

export default Hero;
