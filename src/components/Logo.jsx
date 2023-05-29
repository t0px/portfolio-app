import { Box } from "@mui/system";

const Logo = () => {
    return (
      <Box
        position="fixed"
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          justifyContent: "center",
          bottom: 20,
          left: 0,
          right: 0,
        }}
      >
        <Box component="img" src="src/assets/Rm-logo-clear.svg" sx={{width: 105}}/>
      </Box>
    );
}
 
export default Logo;