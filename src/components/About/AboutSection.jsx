import { Grid, Typography } from "@mui/material";
import MainText from "../MainText";
import { Box } from "@mui/system";
import { useInView } from "react-intersection-observer";
import useBearStore from "../../hooks/bearStore";
import { useEffect } from "react";

const AboutSection = () => {

  const [aboutRef, inView] = useInView();

  //active link
  useEffect(() => {
    if (inView) {
      useBearStore.setState({ isActiveLink: "#about" });
    }
  });

  return (
    <Grid
    ref={aboutRef}
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
        src="src/assets/Shapes/Circle.png"
        sx={{
          position: "absolute",
          top: {
            xs: -60,
            lg: -120,
          },
          left: {
            xs: -60,
            lg: -120,
          },
          width: {
            xs: 175,
            md: 200,
            lg: 300,
          },
          pointerEvents: "none",
        }}
      />
      <MainText
        title={
          <span>
            <strong>Who I</strong> Am
          </span>
        }
      />
      {
        //TODO: add flowing skeleton cube that users can move and is rotating
      }
      <Typography
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
        }}
      >
        I am a <strong>20-year-old</strong> from <strong>Israel</strong> who
        recently graduated from college. <br />
        With free time on my hands, I am dedicated to enhancing and expanding my
        knowledge. When I was 12 years old, I used to code simple games, but I
        eventually grew bored due to my inability to learn coding online
        effectively due to language limitations.
        <br />
        <br /> A few months ago, I discovered a new class in college called "Web
        Development," which immediately sparked my interest. Although the
        teacher didn't provide much guidance , I embarked on a solo learning
        journey. It was during this time that I truly realized how much
        information I had absorbed through my sheer love and passion for the
        subject.
        <br />
        <br /> Today, I focus on designing, creating, and deploying websites for
        various purposes. I thoroughly enjoy every moment of this process.
      </Typography>
    </Grid>
  );
};

export default AboutSection;
