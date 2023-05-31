import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import { Box } from "@mui/system";

 const Stars = ()  => {
  return (
      <Particles id="tsparticles" options={particlesConfig} />
  );
}

export default Stars;