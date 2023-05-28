import styled from "@emotion/styled";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import MainText from "../MainText";

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
});

const SecondaryButton = styled(Button)({
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  color: "#E0E0E0",
  fontFamily: "Poppins",
  textTransform: "none",
  fontSize: 20,
  fontWeight: 300,
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent",
    border: "none",
  },
  "&:hover svg": {
    marginLeft: 6,
  },
});

const Hero = () => {
  return (
    <Grid
      item
      xs={12}
      mt={15}
      component="section"
      sx={{ flexDirection: "column", textAlign: { xs: "center", sm: "start" } }}
    >
      <Box>
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
      <Box>
        <PrimaryButton
          variant="contained"
          sx={{
            marginRight: { lg: 2.5 },
            marginBottom: { xs: "1.5rem", xsc: 0 },
          }}
          component="a"
          href="#contact"
          className="primary-btn"
        >
          Hire Me
        </PrimaryButton>
        <SecondaryButton
          variant="outlined"
          endIcon={<ArrowForwardIcon sx={{ transition: "0.3s ease" }} />}
          component="a"
          href="#projects"
        >
          See My Works
        </SecondaryButton>
      </Box>
    </Grid>
  );
};

export default Hero;
