import React from "react";

import { Box } from "@thepuzzlers/pieces";
import { LanguageSwitchLink } from "./LanguageSwitchLink";

export const LanguageSwitchLinkGroup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "3rem",
        gridColumnEnd: "span 4",
        alignSelf: "start",
      }}
    >
      <LanguageSwitchLink targetLocale="de">Switch to De</LanguageSwitchLink>
      <LanguageSwitchLink targetLocale="en">Switch to EN</LanguageSwitchLink>
    </Box>
  );
};
