import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const Section1 = () => {
    return (
      <Container disableGutters component="section">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 400,
            color: "#E0E0E0",
            fontSize: 30,
            fontFamily: "Poppins",
            mb: 5,
          }}
        >
          I am a <strong>Frontend</strong> Web Developer.
        </Typography>
      </Container>
    );
}
 
export default Section1;