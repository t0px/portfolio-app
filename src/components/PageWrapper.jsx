import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const PageGrid = styled(Grid)({
  width: "70vw",
  position: "relative",
  flexDirection: "column",
});

const PageWrapper = ({ item, timeline, ease }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <PageGrid container id={item.ref} sx={{ height: `${item.size}vh` }} timeline={timeline} ease={ease}>
        {item.page}
      </PageGrid>
    </Box>
  );
};

export default PageWrapper;
