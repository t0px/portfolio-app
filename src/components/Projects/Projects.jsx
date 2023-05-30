import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ProjectsSection from "./ProjectsSection";

const projects = [
  {
    name: "Landscape III",
    thumbnail: "src/assets/thumbnails/1.jpg",
    date: "September 2019",
    desc: "This project was created blah blah by blah blah",
    tech: ["html", "css-3", "js", "react", "figma"]
  },
  {
    name: "Landscape II",
    thumbnail: "src/assets/thumbnails/1.jpg",
    date: "September 2019",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["html", "css-3", "js", "react", "figma"]
  },
  {
    name: "Landscape II",
    thumbnail: "src/assets/thumbnails/1.jpg",
    date: "September 2019",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["html", "css-3", "js", "react", "figma"]
  },
];

const Projects = () => {
  return (
    <Container disableGutters component="section">
      <ProjectsSection projects={projects}/>
    </Container>
  );
};

export default Projects;
