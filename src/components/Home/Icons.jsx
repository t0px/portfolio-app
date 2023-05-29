import { Box, Stack } from "@mui/system";

const icons = [
  {
    name: "HTML",
    path: "html.png",
  },
  {
    name: "CSS",
    path: "css-3.png",
  },
  {
    name: "React",
    path: "react.png",
  },
  {
    name: "Material UI",
    path: "mui.png",
  },
  {
    name: "Figma",
    path: "figma.png",
  },
  {
    name: "Photoshop",
    path: "photoshop.png",
  },
  {
    name: "Bootstrap",
    path: "bootstrap.png",
  },
];

const Icons = () => {
  return (
    <Stack direction="row" mt={10} gap={2}>
      {icons.map((icon, index) => (
        <Box
          component="img"
          src={`src/assets/skill-icons/${icon.path}`}
          sx={{ height: 45, transition: "all 0.3s ease", "&:hover": {transform: "translateY(-10px)"} }}
          key={index}
        />
      ))}
    </Stack>
  );
};

export default Icons;
