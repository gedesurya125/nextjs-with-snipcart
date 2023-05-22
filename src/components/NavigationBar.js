import React from "react";

// External Components
import { Section, Heading, Box } from "@thepuzzlers/pieces";
export const NavigationBar = () => {
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
        }}
      >
        <Heading>Navigation bar</Heading>
      </Box>
    </Section>
  );
};
