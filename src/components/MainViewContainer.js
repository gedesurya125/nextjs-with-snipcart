import React from "react";

// External Components
import { Box } from "@thepuzzlers/pieces";

export const MainViewContainer = ({ children, className = "" }) => {
  return (
    <Box
      className={`__main-view-container ${className}`}
      sx={{
        gridColumn: ["1/13", "1/13", "1/25", "4/25", "6/25"],
        display: "flex",
        gap: "3rem",
        mt: "4rem",
      }}
    >
      {children}
    </Box>
  );
};
