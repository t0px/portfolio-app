import { Grid, Typography } from "@mui/material";
import MainText from "../MainText";
import { Box } from "@mui/system";

const AboutSection = () => {
  return (
    <Grid item xs={12} mt={25} sx={{position: "relative"}}>
        <Box component="img" src="src/assets/Shapes/Circle.png" sx={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 300
        }}/>
      <MainText
        title={
          <span>
            About <strong>Me</strong>
          </span>
        }
      />
      {
      //TODO: add flowing skeleton cube that users can move and is rotating
      }
      <Typography
        variant="h2"
        sx={{ fontSize: 18, color: "#E0E0E0", maxWidth: "55%",letterSpacing: 0.5, lineHeight: 1.5 }}
      >
        I am a 20-year-old from Israel who recently graduated from college. With
        free time on my hands, I am dedicated to enhancing and expanding my
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
