import {
  Button,
  Divider,
  FormControl,
  Grid,
  Input,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import MainText from "../MainText";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import "../../css/Contact/contact.css";
import SendIcon from "@mui/icons-material/Send";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const SendButton = styled(Button)({
  backgroundColor: "transparent",
  outline: "1px solid #92713C",
  boxShadow: "none",
  marginTop: "1.5rem",
  padding: "0.4rem 1rem",
  color: "white",
  fontFamily: "Poppins",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 500,
  "&:hover": {
    boxShadow: "none",
  },
});

const ContactSection = ({ timeline, ease }) => {

    let form = useRef(null);
  const [contactRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      timeline.from(form.current, 0.75, {
        opacity: 0,
        x: -400,
        ease: ease,
      });
    }
  }, [inView]);

  return (
    <Grid
      ref={contactRef}
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
        src="src/assets/Shapes/Heart.png"
        sx={{
          position: "absolute",
          top: { xs: -85, lg: 185 },
          right: { xs: -250, lg: 300 },
          pointerEvents: "none",
          display: { xs: "none", xl: "inherit" },
        }}
      />
      <MainText
        title={
          <span>
            Get <strong>in Touch</strong>
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
          mb: 8,
        }}
      >
        Whether you have any business-related questions, feedback, or simply
        want to leave a message, <strong>please feel free</strong> to provide
        your details here. I will make it a priority to respond to you as
        quickly as possible.
      </Typography>

      <FormControl
      ref={form}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: 150, sm: 230, lg: 240 },
        }}
      >
        <Box
          component="input"
          placeholder="Your Name"
          sx={{
            border: "none",
            color: "#E0E0E0",
            bgcolor: "transparent",
            borderBottom: "1px solid #92713C",
            width: "200%",
            boxSizing: "border-box",
            pb: 1.5,
            fontFamily: "Poppins",
            fontSize: { xs: 14, sm: 15, lg: 16 },
            transition: "all 0.3s ease",
            mb: 8,
            "&:focus": { outline: "none", borderBottom: "1px solid #fff" },
          }}
        ></Box>
        <Box
          component="input"
          placeholder="Email Address"
          sx={{
            border: "none",
            color: "#E0E0E0",
            bgcolor: "transparent",
            borderBottom: "1px solid #92713C",
            width: "200%",
            boxSizing: "border-box",
            pb: 1.5,
            fontFamily: "Poppins",
            fontSize: { xs: 14, sm: 15, lg: 16 },
            transition: "all 0.3s ease",
            mb: 6,
            "&:focus": { outline: "none", borderBottom: "1px solid #fff" },
          }}
        ></Box>
        <Box
          rows={3}
          cols={20}
          component="textarea"
          placeholder="Your Message"
          sx={{
            border: "none",
            color: "#E0E0E0",
            bgcolor: "#282627",
            width: "200%",
            boxSizing: "border-box",
            fontFamily: "Poppins",
            fontSize: { xs: 14, sm: 15, lg: 16 },
            borderRadius: 2,
            px: 2,
            pt: 2,
            pb: 1.5,
            resize: "none",
            transition: "all 0.3s ease",
            opacity: 0.85,
            "&:focus": {
              border: "1px solid #fff",
              borderBottom: "1px solid #fff",
            },
          }}
        ></Box>
        <SendButton
          variant="contained"
          sx={{
            width: { xs: 300, sm: 150 },
            borderRadius: { xs: 2, sm: 40 },
          }}
          component="a"
          href="#contact"
          className="send-btn"
          endIcon={<SendIcon />}
        >
          Send
        </SendButton>
      </FormControl>
    </Grid>
  );
};

export default ContactSection;
