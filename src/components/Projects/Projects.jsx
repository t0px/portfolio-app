import { Container } from "@mui/system";
import ProjectsSection from "./ProjectsSection";
import { gsap, Power3 } from "gsap";

const projects = [
  {
    id: 0,
    name: "FaceDiary",
    thumbnail: "src/assets/thumbnails/screen1.png",
    date: "September 2019",
    desc: `"FaceDiary" is a revolutionary social media app that prioritizes authentic connections, fosters meaningful conversations, and empowers users to curate their online presence in a safe and engaging environment.`,
    tech: ["html", "css-3", "js", "react", "mui"],
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
  //GSAP
  const tl = new gsap.timeline();
  const ease = Power3.easeOut();

  return (
    <Container disableGutters component="section">
      <ProjectsSection projects={projects} timeline={tl} ease={ease} />
    </Container>
  );
};

export default Projects;
