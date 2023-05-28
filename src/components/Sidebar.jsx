import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import '/src/css/sidebar.css'
import styled from "@emotion/styled";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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




const Sidebar = () => {
    const handleMenuOpen = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileMenu navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen}/>
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
          zIndex: 10000
        }}
        onClick={handleMenuOpen}
      ></MenuIcon>
      <Grid
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
      </Grid>
    </>
  );
};

export default Sidebar;
