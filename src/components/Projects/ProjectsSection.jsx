import { Button, Divider, Grid, Typography } from "@mui/material";
import MainText from "../MainText";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import Preview from "./Preview";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";


const ProjectsSection = ({ projects, timeline, ease }) => {

  let previewTab = useRef(null);

  const [knowledgeRef, inView] = useInView();
  useEffect(() => {
    if (inView) {
      timeline.from(previewTab.current, 0.75, {
        opacity: 0,
        y: 400,
        ease: ease,
      });
    }
  }, [inView]);

    const [currentPreview, setCurrentPreview] = useState(projects[0]);

  return (
    <Grid
      ref={knowledgeRef}
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
        src="src/assets/Shapes/Volts.png"
        sx={{
          position: "absolute",
          top: -100,
          left: -360,
          pointerEvents: "none",
          display: { xs: "none", xl: "inherit" },
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
            xs: 12,
            sm: 14,
            xl: 18,
          },
          color: "#E0E0E0",
          maxWidth: {
            lg: "55%",
            xs: "100%",
          },
          letterSpacing: 0.5,
          lineHeight: 1.5,
          mb: { xs: 2, md: 5 },
        }}
      >
        This section features two distinct types of work:{" "}
        <strong>actual code</strong> and <strong>designs</strong>. While some of
        them are still in progress, I have chosen to showcase them here to
        demonstrate the progress I've made and to keep track of my portfolio.
        <br /> <br /> <strong>Below</strong>, you can scroll through the
        projects and see what they involve and how they were created.
      </Typography>
      <Grid
        ref={previewTab}
        item
        xs={12}
        lg={10}
        xl={8}
        sx={{ height: { xs: 385, md: 285 } }}
      >
        <Stack
          gap={{ md: 3 }}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            height: "100%",
            alignItems: "center",
            position: "relative",
            marginTop: { xs: 0, sm: 10, md: 0 },
          }}
        >
          <Preview
            currentPreview={currentPreview}
            setCurrentPreview={setCurrentPreview}
            projects={projects}
            timeline={timeline}
            ease={ease}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProjectsSection;
