import { AppBar, Button, Grid, Typography } from "@mui/material";
import { theme } from "../theme";
import { Box, Container, Stack, ThemeProvider } from "@mui/system";
import "./css/default.css";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const PageGrid = styled(Grid)({
  width: "70vw",
  height: "100vh",
  position: "relative",
});

const Navbar = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "4rem",
  height: "80px",
});

const Sidebar = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row-reverse",
  color: "white",
  right: "14.6%",
  height: "100%",
  top: 0,
});

const SocialIcon = styled(Box)({
  width: "25px",
  "&:hover": {
    cursor: "pointer"
  }
});

const HeroSection = styled(Grid)({});

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
    color: "black",
    backgroundColor: "#BFB7A4",
    outline: "none",
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

const navItems = [{
  name: "Home",
  path: "#home"
},
{
  name: "Knowledge",
  path: "#knowledge"
},
{
  name: "Projects",
  path: "#projects"
},
{
  name: "Contact",
  path: "#contact"
},
{
  name: "About",
  path: "#about"
}
];

function App() {

  const { scrollYProgress } = useScroll();



  return (
    <ThemeProvider theme={theme}>
      <PageGrid container sx={{}}>
        <Container
          disableGutters
          sx={{ position: "relative" }}
          position="relative"
        >
          <Navbar item md={12} sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" gap={4}>
              <SocialIcon
                component="img"
                src="src/assets/social-icons/instagram.svg"
                onClick={() =>
                  (location.href = "https://www.instagram.com/meirtubiana")
                }
              />
              <SocialIcon
                component="img"
                src="src/assets/social-icons/github.svg"
                onClick={() => (location.href = "https://www.github.com/t0px")}
              />
              <SocialIcon
                component="img"
                src="src/assets/social-icons/discord.svg"
                onClick={() =>
                  (location.href =
                    "https://discord.com/users/289448604106489856")
                }
              />
            </Stack>
            <Box>
              <Box
                component="img"
                src="src/assets/Rm-logo-clear.svg"
                mt={2.5}
              />
            </Box>
          </Navbar>
          <HeroSection item md={12} mt={15} component="section">
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 400,
                  color: "#FFCA7A",
                  fontSize: 60,
                  maxWidth: "40%",
                  letterSpacing: 2.5,
                  mb: 3,
                }}
              >
                Hi, my name is <strong>Roland Meir.</strong>
              </Typography>
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
            </Box>
            <Box>
              <PrimaryButton variant="contained" sx={{ marginRight: 2.5 }}>
                Hire Me
              </PrimaryButton>
              <SecondaryButton
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ transition: "0.3s ease" }} />}
              >
                See My Works
              </SecondaryButton>
            </Box>
          </HeroSection>
          <Sidebar item md={6} position="fixed">
            <Box
              sx={{
                width: 2,
                bgcolor: "#92713C",
                height: "50%",
                marginLeft: 6,
              }}
            ></Box>
            <Stack
              direction="column"
              spacing={8}
              sx={{
                color: "#AB9F85",
                fontFamily: "Poppins",
                textAlign: "center",
                alignItems: "center",
                fontSize: 16,
              }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="li"
                  component="a"
                  href={item.path}
                  sx={{ textDecoration: "none", color: "inherit", p: 1.5 }}
                  className="sidenav-item"
                >
                  {item.name}
                </Typography>
              ))}
            </Stack>
          </Sidebar>
        </Container>
      </PageGrid>
    </ThemeProvider>
  );
}

export default App;
