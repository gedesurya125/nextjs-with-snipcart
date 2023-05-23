import React from "react";

import { useShop } from "@shopify/hydrogen-react";

// External Components
import { Section, Heading, Box, Paragraph } from "@thepuzzlers/pieces";

export const NavigationBar = ({ shopData }) => {
  const shop = useShop();

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
        <Heading>{shopData?.data?.shop?.name} Shop</Heading>
        <Paragraph>{shop?.storeDomain}</Paragraph>
        <Paragraph>{shop?.storefrontToken}</Paragraph>
        <Paragraph>{shop?.storefrontApiVersion}</Paragraph>
      </Box>
    </Section>
  );
};
