import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import "/src/css/sidebar.css";
import MobileMenu from "./MobileMenu";
import { useEffect, useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";

//TODO: this isn't efficient..
const navItems = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About Me",
    path: "#about",
  },
  {
    name: "Knowledge",
    path: "#knowledge",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const Sidebar = ({ currentIndex, setCurrentIndex, timeline, ease }) => {

// Menu Open Function
  const handleMenuOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  //GSAP content
    let sideBar = useRef(null);
    let stack = useRef(null);

  useEffect(() => {
    timeline.from(sideBar, 4, {
      opacity: 0,
      x: 600,
      ease: ease,
    }, "-=4");
    timeline.from(stack.children, 2, {
        transform: "scale(.5)",
        opacity: 0,
        x: -200,
        stagger: {
            amount: 1,
        },
        ease: ease,
    }, "-=2");
  },[]);

  return (
    <>
      <MobileMenu
        navItems={navItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <MenuIcon
        sx={{
          display: {
            xs: "block",
            lg: "none",
            position: "fixed",
            color: `${isOpen ? "black" : "white"}`,
            transform: `${isOpen ? "rotate(180deg)" : "none"}`,
            transition: "all 0.5s",
            top: 10,
            right: 10,
            fontSize: 35,
          },
          zIndex: 10000,
        }}
        onClick={handleMenuOpen}
      ></MenuIcon>
      <Grid
        ref={el => sideBar = el}
        item
        md={6}
        position="fixed"
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row-reverse",
          color: "white",
          right: "14.6%",
          height: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            width: 2,
            bgcolor: "#92713C",
            height: "50%",
            marginLeft: 6,
          }}
        ></Box>
        <Stack
        ref={el => stack = el}
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
              onClick={() => setCurrentIndex(navItems.indexOf(item))}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>
      </Grid>
    </>
  );
};

export default Sidebar;
