import { Button, Divider, Grid, Typography } from "@mui/material";
import MainText from "../MainText";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";

const ProjectsSection = () => {
  return (
    <Grid
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
        src="src/assets/Shapes/Squares.png"
        sx={{
          position: "absolute",
          top: 0,
          right: { xs: -100, lg: 300 },
          pointerEvents: "none",
        }}
      />
      <MainText
        title={
          <span>
            <strong>Things I</strong> Made
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
          mb: 5,
        }}
      >
        This section features two distinct types of work:{" "}
        <strong>actual code</strong> and <strong>designs</strong>. While some of
        them are still in progress, I have chosen to showcase them here to
        demonstrate the progress I've made and to keep track of my portfolio.
        <br /> <br /> <strong>Below</strong>, you can scroll through the
        projects and see what they involve and how they were created.
      </Typography>

      <Box sx={{ mt: 8 }} position="relative">
      </Box>
    </Grid>
  );
};

export default ProjectsSection;