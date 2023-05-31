import { Tooltip } from "@mui/material";
import { Box, Stack } from "@mui/system";
import "../../css/Knowledge/icons.css";

const icons = [
  {
    name: "HTML",
    path: "html.svg",
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
    name: "Bootstrap",
    path: "bootstrap.svg",
  },
];

const Icons = ({ animationRef }) => {
  return (
    <Box sx={{ overflowX: { xs: "scroll" } }}>
      <Stack direction="row" gap={2} ref={animationRef}>
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
