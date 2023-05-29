import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";
//TODO: Make a gamepad, two button up and down instead of this...
//TODO: fix the mess
const ArrowNav = ({
  currentIndex,
  setCurrentIndex,
  currentPage,
  setCurrentPage,
  pageItems,
}) => {

    const [isIndexEnded, setIsIndexEnded] = useState(false);

  const handleNavigation = (index) => {
    setCurrentPage(pageItems.filter((item) => item.id === index + 1));
    setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    //isIndex testing
    useEffect(() => {
        if (currentIndex === pageItems[pageItems.length - 1].id) {
            setIsIndexEnded(true);
        }
        else {
            setIsIndexEnded(false);
        }
    }, [currentIndex, currentPage]);
    
  //testing
  useEffect(() => {
    console.log("CURRENT INDEX:", currentIndex);
    console.log("CURRENT PAGE:", currentPage);
  }, [currentIndex, setCurrentIndex, currentPage]);

    // function to go to next page on index change
  useEffect(() => {
    handleMove();
  }, [currentPage, currentIndex]);

    // sends to location of current page ref "link"
  const handleMove = () => {
    location.href = `#${currentPage[0].ref}`;
  };

  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: {
          xs: 20,
          sm: 50,
        },
        position: "fixed",
        padding: "0 20px",
        display: "flex",
        justifyContent: {
          xs: "flex-start",
          sm: "center",
        },
        zIndex: 10000,
      }}
    >
      <Button
        disabled={isIndexEnded}
        sx={{
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          color: "black",
          width: 60,
          height: 60,
          cursor: "pointer",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 0 25px 0 rgb(255,255,255,0.25)",
            bgcolor: "white",
          },
        }}
        onClick={() => handleNavigation(currentIndex)}
      >
        <ArrowDownwardIcon sx={{ fontSize: 35,  }} />
      </Button>
    </Box>
  );
};

export default ArrowNav;
