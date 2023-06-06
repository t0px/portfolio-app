import { Tooltip } from "@mui/material";
import { Box, Stack } from "@mui/system";
import "../../css/Knowledge/icons.css";

const icons = [
  {
    name: "HTML",
    path: "html-5.svg",
  },
  {
    name: "CSS",
    path: "css-3.svg",
  },
  {
    name: "JavaScript",
    path: "js.svg",
  },
  {
    name: "React",
    path: "react.svg",
  },
  {
    name: "Material UI",
    path: "mui.svg",
  },
  {
    name: "Figma",
    path: "figma.svg",
  },
  {
    name: "Photoshop",
    path: "photoshop.svg",
  },
  {
    name: "Illustrator",
    path: "illustrator.svg",
  },
  {
    name: "Bootstrap",
    path: "bootstrap.svg",
  },
  {
    name: "GSAP",
    path: "greensock.svg",
  },
];

const Icons = ({ animationRef, scrollRef }) => {
  return (
    <Box sx={{ overflowX: { xs: "scroll" } }} ref={scrollRef}>
      <Stack direction="row" gap={2} ref={animationRef} sx={{ flexWrap: {xs: "nowrap", sm: "wrap"}}}>
        {icons.map((icon, index) => (
          <Tooltip
            key={index}
            title={icon.name}
            placement="bottom"
            arrow
            disableInteractive
          >
            <Box
              component="img"
              src={`src/assets/skill-icons/${icon.path}`}
              sx={{
                height: { xs: 40, sm: 35, md: 40, lg: 45 },
                cursor: "pointer",
              }}
              alt={icon.name}
              className="skill-icon"
            />
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};

export default Icons;
