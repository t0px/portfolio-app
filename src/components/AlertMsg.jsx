import { Alert, Collapse, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AlertMsg = () => {

    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpenAlert(true);
        }, 10000)
    }, []);

    return (
      <Box sx={{width: "100%", display: "flex", justifyContent: "center", position: "fixed", zIndex: 100000 }}>
        <Collapse in={openAlert}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
                mt: 2,
              borderRadius: 2,
              bgcolor: "#0a0a0a",
              color: "#E0E0E0",
            }}
          >
            This portfolio is currently under development. I apologize for any
            inconvenience caused and appreciate your patience.
          </Alert>
        </Collapse>
      </Box>
    );
}
 
export default AlertMsg;