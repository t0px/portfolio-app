import { Container } from "@mui/system";
import ProjectsSection from "./ProjectsSection";
import { gsap, Power3 } from "gsap";

const projects = [
  {
    id: 0,
    name: "Classic Cut",
    thumbnail: "src/assets/thumbnails/classic-cut.png",
    date: "June 2023",
    desc: `Classic Cut offers hassle-free online booking for haircuts and easy communication with barbers for questions or feedback. Our responsive and animated website enhances your browsing experience while you make your choices.`,
    tech: ["html-5", "css-3", "js", "react", "figma", "mui"],
  },
  {
    id: 1,
    name: "Portfolio Concept Design",
    thumbnail: "src/assets/thumbnails/roland-meir.png",
    date: "May 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["figma", "photoshop"],
  },
  {
    id: 2,
    name: "MoviesDB",
    thumbnail: "src/assets/thumbnails/movies-db.png",
    date: "June 2023",
    desc: "MoviesDB is a dynamic web application that utilizes OMDB's API to retrieve movies and series and present them to the users on the website. The application boasts a cozy and modern user interface that is easy to navigate and interact with.",
    tech: ["html-5", "css-3", "js", "react", "mui", "greensock"],
  },
  {
    id: 3,
    name: "Project 4",
    thumbnail: "src/assets/thumbnails/screen4.png",
    date: "May 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque lorem, gravida porta magna efficitur vitae. Donec et justo semper, ullamcorper lorem id, suscipit lacus.",
    tech: ["html-5", "css-3", "react"],
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
