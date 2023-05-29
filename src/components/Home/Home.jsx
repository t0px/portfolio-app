import { Container } from "@mui/system";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <Container component="header" disableGutters>

        {
            //TODO: Maybe I'll move navbar to App
        }
        <Navbar />
        <Hero />
    </Container>
  );
};

export default Home;
