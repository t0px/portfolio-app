import styled from "@emotion/styled";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef, useState } from "react";

const Preview = ({ currentPreview, setCurrentPreview, projects, timeline, ease }) => {

    let previewImg = useRef(null);

  //TODO: maybe create modal that displays "read more"
  //for more info on each project
  const Navigator = styled(Box)(({ theme }) => ({
    position: "absolute",
    right: "100%",
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      position: "block",
      marginRight: 0,
    },
  }));

  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

// update states on change, animation
useEffect(() => {
  const updatePreview = () => {
    const preview = projects.find(
      (preview) => preview.id === currentPreviewIndex
    );
    setCurrentPreview(preview);
    timeline.from(previewImg.current, 0.35, {
        x: -150,
        y: 150,
        transform: "scale(0.15)",
        opacity: 0.35,
        ease: ease,
    });
  };

  updatePreview();
}, [currentPreviewIndex, projects]);

  //TODO: add stopping mechanism
  const handlePreviewChange = (actionType) => {
    switch (actionType) {
      case "prev":
        if (currentPreviewIndex === 0) {
          setCurrentPreviewIndex(projects.length - 1);
        } else {
          setCurrentPreviewIndex((prevIndex) => prevIndex - 1);
        }
        const prevPreview = projects.find(
          (preview) => preview.id === currentPreviewIndex
        );
        setCurrentPreview(prevPreview);
        break;

      case "next":
        if (currentPreviewIndex === projects.length - 1) {
          setCurrentPreviewIndex(0);
        } else {
          setCurrentPreviewIndex((prevIndex) => prevIndex + 1);
        }
        const nextPreviewIndex =
          currentPreviewIndex === projects.length - 1
            ? 0
            : currentPreviewIndex + 1;
        const nextPreview = projects.find(
          (preview) => preview.id === nextPreviewIndex
        );
        setCurrentPreview(nextPreview);
        break;
    }
  };
  return (
    <>
      <Navigator>
        <Stack direction="column" gap={{ xs: 1.5, lg: 3 }}>
          <IconButton
            color="primary"
            sx={{
              bgcolor: "white",
              "&:hover": { bgcolor: "white" },
              width: { xs: 30, md: 35, lg: 40 },
              height: { xs: 30, md: 35, lg: 40 },
            }}
            onClick={(e) => handlePreviewChange("prev")}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "white",
              "&:hover": { bgcolor: "white" },
              width: { xs: 30, md: 35, lg: 40 },
              height: { xs: 30, md: 35, lg: 40 },
            }}
            onClick={() => handlePreviewChange("next")}
          >
            <KeyboardArrowDownIcon color="primary" />
          </IconButton>
        </Stack>
      </Navigator>
      <Box
        sx={{
          width: { xs: "60%", md: "40%", lg: "50%" },
          height: { md: "100%" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Box
        ref={previewImg}
          component="img"
          sx={{
            position: { xs: "sticky", lg: "absolute" },
            width: "100%",
            objectFit: "cover",
          }}
          src={currentPreview.thumbnail}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { md: "50%" },
          height: { lg: "100%" },
          color: "#E0E0E0",
        //   textTransform: "uppercase",
          whiteSpace: "wrap",
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#92713C",
            fontFamily: "Poppins",
            fontSize: { xs: 16, lg: 22 },
            fontWeight: 600,
            marginBottom: { md: 1 },
            marginTop: { xs: 1, md: 0 },
          }}
        >
          {
            //name of project
          }
          {currentPreview.name}
        </Typography>
        <Typography
          mb={2}
          variant="h6"
          sx={{ opacity: 0.7, fontSize: { xs: 10, lg: 14 } }}
        >
          {
            //date of project
          }
          {currentPreview.date}
        </Typography>
        <Divider sx={{ bgcolor: "gray" }} />
        <Typography
          variant="h6"
          mt={2}
          sx={{
            textTransform: "none",
            fontSize: { xs: 10, md: 12, lg: 14, xl: 16 },
            fontFamily: "Poppins",
          }}
        >
          {
            //desc of project
          }
          {currentPreview.desc}
        </Typography>
        <Stack
          direction="row"
          gap={{ xs: 1, md: 3 }}
          position="absolute"
          sx={{
            fontSize: 14,
            bottom: { xs: -30, sm: -40, lg: 0 },
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          {currentPreview.tech.map((item, index) => (
            <Box
              component="img"
              src={`src/assets/skill-icons/${item}.svg`}
              sx={{ height: { xs: 15, sm: 20, md: 25 }, borderRadius: "50%" }}
              key={index}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Preview;
