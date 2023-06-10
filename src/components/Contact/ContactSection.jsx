import {
  Button,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import MainText from "../MainText";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import "../../css/Contact/contact.css";
import SendIcon from "@mui/icons-material/Send";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import useBearStore from "../../hooks/bearStore";
import { useForm, ValidationError } from "@formspree/react";

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

const StyledInput = styled(Box)({
  border: "none",
  color: "#E0E0E0",
  backgroundColor: "transparent",
  borderBottom: "1px solid #92713C",
  width: "200%",
  boxSizing: "border-box",
  fontFamily: "Poppins",
  transition: "all 0.3s ease",
  "&:focus": {
    outline: "none",
    borderBottom: "1px solid #fff",
    boxShadow: "0 0 300px 0 rgba(255,255,255,0.15)",
  },
});

const ContactSection = ({ timeline, ease }) => {

    //Form handling
    const [state, handleSubmit] = useForm("mzbqqlrj");
    if (state.succeeded) {
        return <p>Thanks for your feedback!</p>
    }

    const isAnimating = useBearStore((state) => state.isAnimating);

    let form = useRef(null);
  const [contactRef, inView] = useInView();


  useEffect(() => {
    if (inView) {
        useBearStore.setState({isActiveLink: "#contact"})
        if (isAnimating === false) {
            useBearStore.setState({isAnimating: true})
            console.log("Contact Updated Animation!");
      timeline.from(form.current, 0.75, {
        opacity: 0,
        x: -400,
        ease: ease,
        onComplete: () => {
            useBearStore.setState({ isAnimating: false});
        }
      });
        }

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
          top: { xs: -85, lg: 155 },
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

      <Box
        ref={form}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: 150, sm: 230, lg: 240 },
        }}
      >
        <form onSubmit={handleSubmit}>
          <StyledInput
            component="input"
            name="Name"
            required
            placeholder="Your Name"
            sx={{
              mb: 6,
              pb: 1.5,
              fontSize: { xs: 14, sm: 15, lg: 16 },
            }}
          ></StyledInput>
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
          <StyledInput
            component="input"
            name="Email"
            required
            type="email"
            placeholder="Email Address"
            sx={{
              mb: 6,
              pb: 1.5,
              fontSize: { xs: 14, sm: 15, lg: 16 },
              transition: "all 0.3s ease",
            }}
          ></StyledInput>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Box
            rows={3}
            cols={20}
            component="textarea"
            name="Message Content"
            required
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
                boxShadow: "0 0 300px 0 rgba(255,255,255,0.15)",
                outline: "none",
                //   border: "1px solid #fff",
              },
            }}
          ></Box>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <SendButton
            type="submit"
            variant="contained"
            disabled={state.submitting}
            sx={{
              width: { xs: 300, sm: 150 },
              borderRadius: { xs: 2, sm: 40 },
            }}
            component="a"
            className="send-btn"
            endIcon={<SendIcon />}
          >
            Send
          </SendButton>
        </form>
      </Box>
    </Grid>
  );
};

export default ContactSection;
