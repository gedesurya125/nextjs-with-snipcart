import React from "react";

// External Components
import { Section, Heading, Box, Paragraph } from "@thepuzzlers/pieces";

export const NavigationBar = ({}) => {
  return (
    <Section
      as="nav"
      sx={{
        bg: "white",
      }}
    >
      <Box
        className="nav-container"
        sx={{
          gridColumn: ["1/13", "1/13", "1/25", "1/25", "1/25", "1/25"],
          py: "2rem",
          display: "flex",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <Heading>Shop</Heading>
      </Box>
    </Section>
  );
};
