/** @jsxImportSource theme-ui */

import React from "react";
import { CartLineQuantityAdjustButton } from "@shopify/hydrogen-react";

export const LineQuantityAdjustButton = ({ sx, ...props }) => {
  return <CartLineQuantityAdjustButton sx={{ ...sx }} {...props} />;
};
