import React from "react";

import { Box, Heading, Paragraph, Button } from "@thepuzzlers/pieces";

export const CartPreview = () => {
  return (
    <Box
      sx={{
        gridColumn: ["1/13", "1/13", "1/25", "20/25", "20/25"],
        borderLeft: "1px solid black",
        p: "3rem 2rem",
      }}
    >
      <Heading>Cart Preview</Heading>
      <Button
        sx={{
          variant: "buttons.primary",
          mt: "3rem",
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};
