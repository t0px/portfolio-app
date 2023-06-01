import { Button, Divider, Grid, Typography } from "@mui/material";
import MainText from "../MainText";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import Icons from "./Icons";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import useBearStore from "../../hooks/bearStore";

//TODO: I think divide the areas of expertise to two titles: expertise
// & in progress and also make title and icons smaller and more compact

const PrimaryButton = styled(Button)({
  backgroundColor: "transparent",
  outline: "1px solid #BFB7A4",
  boxShadow: "none",
  borderRadius: 40,
  padding: "0.2rem 3rem",
  color: "#BFB7A4",
  fontFamily: "Poppins",
  textTransform: "none",
  fontSize: 20,
  fontWeight: 500,
  "&:hover": {
    boxShadow: "none",
  },
});

const KnowledgeSection = ({ timeline, ease }) => {
  let h2 = useRef(null);
  let h1 = useRef(null);
  let icons = useRef(null);
const [knowledgeRef, inView] = useInView();

const isAnimating = useBearStore((state) => state.isAnimating);


  useEffect(() => {
    if (inView) {
        if(isAnimating === false) {
            useBearStore.setState({isAnimating: true});
      timeline.from(icons.current.children, 0.75, {
        stagger: {
          amount: 0.75,
        },
        y: 400,
        ease: ease,
        onComplete: () => {
            useBearStore.setState({ isAnimating: false });
        }
      });
        }

    }
  }, [inView]);
  return (
    <Grid
      ref={knowledgeRef}
      item
      xs={12}
      sx={{
        position: "relative",
        mt: { xs: 15, lg: 18, xl: 25 },
        textAlign: { xs: "center", sm: "start" },
      }}
    >
      <Box
        component="img"
        src="src/assets/Shapes/Squares.png"
        sx={{
          position: "absolute",
          top: 0,
          right: 300,
          pointerEvents: "none",
          display: { xs: "none", xl: "inherit" },
        }}
      />
      <MainText
        animationRef={(el) => (h1.current = el)}
        title={
          <span>
            My <strong>Skill</strong>set
          </span>
        }
      />
      {
        //TODO: add flowing skeleton cube that users can move and is rotating
      }
      <Typography
        ref={h2}
        variant="h2"
        sx={{
          fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
          },
          color: "#E0E0E0",
          maxWidth: {
            lg: "55%",
            xs: "100%",
          },
          letterSpacing: 0.5,
          lineHeight: 1.5,
          mb: 5,
        }}
      >
        {
        //TODO: MAYBE REMOVE ALL THE BOLDED TEXTS
        }
        As a frontend web developer, it's important to me to
        ensure that every detail on the page is as smooth as possible.
        <br /> <br />
        Ever since I began learning how to code, I have had the
        opportunity to familiarize myself with various technologies and
        libraries that have greatly enhanced my coding experience, making it
        both more exciting and efficient.
      </Typography>
      <PrimaryButton
        variant="contained"
        sx={{
          marginRight: { lg: 2.5 },
          marginBottom: { xs: "1.5rem", xsc: 0 },
        }}
        component="a"
        href="resume.pdf"
        className="primary-btn"
      >
        View Resume
      </PrimaryButton>

      <Box sx={{ mt: 8 }} position="relative">
        <Typography
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
            mb: 2,
          }}
        >
          Areas of <strong>Knowledge</strong>
        </Typography>
        <Icons animationRef={(el) => (icons.current = el)} />
        {
          //TODO: perhaps switch to animated scroll cue for mobile
        }
        <ChevronLeftIcon
          sx={{
            position: "absolute",
            left: 10,
            mt: 1,
            color: "#E0E0E0",
            display: { xs: "inline", sm: "none" },
          }}
        />
        <ChevronRightIcon
          sx={{
            position: "absolute",
            right: 10,
            mt: 1,
            color: "#E0E0E0",
            display: { xs: "inline", sm: "none" },
          }}
        />
      </Box>
    </Grid>
  );
};

export default KnowledgeSection;
