import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Knowledge = () => {
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
          Knowledge Section
        </Typography>
      </Container>
    );
}
 
export default Knowledge;