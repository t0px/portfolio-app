import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import MainText from "../MainText";
import Buttons from "../Buttons";
import Icons from "./Icons";

const Hero = () => {
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
      <Box position="relative">
        <Box component="img" src="src/assets/Dots.png" position="absolute" sx={{top: 50, left: 250}} />
        <MainText
          title={
            <span>
              Hi, my name is <strong>Roland Meir.</strong>
            </span>
          }
        />
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
            mb: 5,
          }}
        >
          I am a <strong>Frontend</strong> Web Developer.
        </Typography>
      </Box>
      <Buttons />
      {
      // TODO: Change icon position
      }
      {/* <Icons /> */}
    </Grid>
  );
};

export default Hero;
