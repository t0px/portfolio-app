import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";

const SocialIcon = styled(Box)({
  width: "25px",
  transition: "all 0.3s ease-out",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.25)",
  },
});

const Navbar = () => {

    return (
      <Grid
        item
        sm={12}
        sx={{
          display: "flex",
          gap: {
            xs: "2rem",
            sm: "0"
          },
          justifyContent: {
            xs: "center",
            sm: "space-between"
          },
          alignItems: "center",
          marginTop: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "4rem"
          },
          height: "80px",
        }}
      >
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
              (location.href = "https://discord.com/users/289448604106489856")
            }
          />
        </Stack>
        <Box>
          <Box component="img" src="src/assets/Rm-logo-clear.svg" mt={2.5} sx={{
            display: {xs: "none", md: "block"}
          }}/>
        </Box>
      </Grid>
    );
}
 
export default Navbar;