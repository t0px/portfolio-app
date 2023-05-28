import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import '/src/css/sidebar.css'

const navItems = [
  {
    name: "Home",
    path: "#home",
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
  {
    name: "About",
    path: "#about",
  },
];

const Sidebar = () => {
  return (
    <Grid
      item
      md={6}
      position="fixed"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
        color: "white",
        right: "14.6%",
        height: "100%",
        top: 0,
        zIndex: 1000
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
  );
};

export default Sidebar;
