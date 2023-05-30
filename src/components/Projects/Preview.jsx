import { Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Preview = ({ currentPreview, setCurrentPreview }) => {

    return (
      <>
        <Box sx={{ width: "50%", height: "100%", bgcolor: "gray", position: "relative", overflow: "hidden" }}>
            <Box component="img" sx={{position: "absolute", width: "100%", height: "100%"}} src={currentPreview.thumbnail}></Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
            color: "#E0E0E0",
            textTransform: "uppercase",
            whiteSpace: "wrap",
          }}
        >
          <Typography
            variant="h4"
            mb={1}
            sx={{ color: "#E0E0E0", fontFamily: "Poppins", fontSize: 22 }}
          >
            {
              //name of project
            }
            {currentPreview.name}
          </Typography>
          <Typography mb={2} variant="h6" sx={{ opacity: 0.7, fontSize: 16 }}>
            {
              //date of project
            }
            {currentPreview.date}
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <Typography
            variant="h6"
            mt={2}
            sx={{ textTransform: "none", fontSize: 16 }}
          >
            {currentPreview.desc}
          </Typography>
          <Stack
            direction="row"
            gap={3}
            position="absolute"
            bottom={0}
            sx={{ fontSize: 14 }}
          >
            {currentPreview.tech.map((item, index) => (
                <Box component="img" src={`src/assets/skill-icons/${item}.png`} sx={{height: 25}} key={index}/>
            ))}
          </Stack>
        </Box>
      </>
    );
}
 
export default Preview;