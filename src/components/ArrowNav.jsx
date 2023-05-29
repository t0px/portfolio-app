import { Box } from "@mui/system";
import { useState, useRef, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ArrowNav = ({
  currentIndex,
  setCurrentIndex,
  currentPage,
  setCurrentPage,
  pageItems,
}) => {
  const prevIndex = useRef(null);

  const handleArrowNavigation = (index) => {
    setCurrentPage(pageItems.filter((item) => item.id === index + 1));
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  // בודק אם אנחנו על הדף הראשון
  //
  useEffect(() => {
    currentIndex !== 0 ? handleMove() : "";
  }, [currentPage, currentIndex]);

  const handleMove = () => {
    location.href = `#${currentPage[0].ref}`;
  };

  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 50,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        zIndex: 10000,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          width: 60,
          height: 60,
          cursor: "pointer",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 0 25px 0 rgb(255,255,255,0.25)",
          },
        }}
        onClick={() => handleArrowNavigation(currentIndex)}
      >
        <ArrowDownwardIcon sx={{ fontSize: 35 }} />
      </Box>
    </Box>
  );
};

export default ArrowNav;
