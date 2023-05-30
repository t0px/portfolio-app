import { Box } from "@mui/system";

const ProjectCard = () => {
  return (
    <Box sx={{width: 250, overflow: "hidden", position: "rel"}}>
      <Box
        component="img"
        src="src/assets/thumbnails/1.jpg"
        sx={{}}
      />
    </Box>
  );
};

export default ProjectCard;
