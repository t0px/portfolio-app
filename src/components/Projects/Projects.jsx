import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ProjectsSection from "./ProjectsSection";

const projects = [
  {
    id: 0,
    name: "Project 1",
    thumbnail: "src/assets/thumbnails/screen1.png",
    date: "September 2019",
    desc: `Landscape III, also known as "The Third," is an immersive web development project built using HTML, CSS, JavaScript, React, and designed in Figma, creating a visually captivating experience centered around landscapes.`,
    tech: ["html", "css-3", "js", "react", "figma", "bootstrap"],
  },
  {
    id: 1,
    name: "Project 2",
    thumbnail: "src/assets/thumbnails/screen2.png",
    date: "February 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["figma", "photoshop"],
  },
  {
    id: 2,
    name: "Project 3",
    thumbnail: "src/assets/thumbnails/screen3.png",
    date: "December 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["html", "css-3", "js", "react", "bootstrap"],
  },
  {
    id: 3,
    name: "Project 4",
    thumbnail: "src/assets/thumbnails/screen4.png",
    date: "May 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["html", "css-3", "react"],
  },
];

const Projects = () => {
  return (
    <Container disableGutters component="section">
      <ProjectsSection projects={projects} />
    </Container>
  );
};

export default Projects;
