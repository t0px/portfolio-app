import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const Contact = () => {
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
          Contact Section
        </Typography>
      </Container>
    );
}
 
export default Contact;