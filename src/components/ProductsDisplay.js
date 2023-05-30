import React from "react";

// External Components
import { Box, Paragraph, Button } from "@thepuzzlers/pieces";

export const ProductsDisplay = () => {
  return (
    <Box
      className="__product-display"
      sx={{
        gridColumn: ["1/13", "1/13", "1/25", "4/ span 16", "4/ span 16"],
        display: "flex",
        gap: "3rem",
        mt: "4rem",
      }}
    ></Box>
  );
};
