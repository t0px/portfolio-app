import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import '../css/mobilemenu.css';

const MobileMenu = ({ navItems, isOpen, setIsOpen }) => {

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
      }}
      onBlur={() => setIsOpen(false)}
    >
      <Stack
        bgcolor="#fff"
        color="black"
        direction="column"
        sx={{ display: "flex", alignItems: "center", gap: 4, p: 4 }}
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
            }}
          >
            {item.name}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileMenu;
