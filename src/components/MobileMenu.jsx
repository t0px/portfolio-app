import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useRef } from "react";
import '../css/mobilemenu.css';

const MobileMenu = ({ navItems, isOpen, setIsOpen, currentIndex, setCurrentIndex }) => {

  return (
    <Box
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      position="fixed"
      sx={{
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        opacity: `${isOpen ? "1" : "0"}`,
        pointerEvents: `${isOpen ? "all" : "none"}`,
        boxShadow: "0 5px 5px 0 black",
      }}
      // TODO: FIX THIS
    >
      <Stack
        bgcolor="#fff"
        color="black"
        direction="column"
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: 3,
        }}
      >
        {navItems.map((item, index) => (
          <Typography
            variant="li"
            component="a"
            key={index}
            href={item.path}
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontFamily: "Poppins",
              width: "100%",
              p: 2,
              border: "1px solid lightgray",
            }}
            onClick={() => setCurrentIndex(navItems.indexOf(item))}
          >
            {item.name}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileMenu;
