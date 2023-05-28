import { Typography } from "@mui/material";

const MainText = ({ title }) => {
    return (
      <Typography
        variant="h1"
        sx={{
          fontWeight: 400,
          color: "#FFCA7A",
          fontSize: {
            xs: 30,
            md: 40,
            lg: 60,
          },
          maxWidth: {
            sm: "60%",
            md: "60%",
            lg: "40%",
          },
          letterSpacing: 2.5,
          mb: 3,
        }}
      >
        {title}
      </Typography>
    );
}
 
export default MainText;