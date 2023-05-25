/** @jsxImportSource theme-ui */

import React from "react";

import { AddToCartButton as Button } from "@shopify/hydrogen-react";

export const AddToCartButton = ({ sx, ...props }) => {
  return (
    <Button
      sx={{
        variant: "buttons.primary-small",
        ...sx,
      }}
      {...props}
    >
      Add to cart
    </Button>
  );
};
