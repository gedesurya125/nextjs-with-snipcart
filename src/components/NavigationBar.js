import React from "react";

import Link from "next/link";

// External Components
import { Section, Heading, Box, Paragraph } from "@thepuzzlers/pieces";
import { ThemedLink } from "./ThemedLink";

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
        <Logo />
      </Box>
    </Section>
  );
};

const Logo = () => {
  return (
    <ThemedLink
      href="/"
      sx={{
        textDecoration: "none",
        color: "black",
        fontSize: "2rem",
        fontFamily: "primary.normal",
      }}
    >
      Shop
    </ThemedLink>
  );
};

const NavigationLink = (second) => {};
