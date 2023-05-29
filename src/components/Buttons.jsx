import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const Buttons = () => {
  return (
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
        Let's Work
      </PrimaryButton>
      <SecondaryButton
        variant="outlined"
        endIcon={<ArrowForwardIcon sx={{ transition: "0.3s ease" }} />}
        component="a"
        href="#projects"
      >
        See My Stuff
      </SecondaryButton>
    </Box>
  );
};

export default Buttons;
