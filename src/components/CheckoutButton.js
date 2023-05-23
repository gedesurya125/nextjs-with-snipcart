/** @jsxImportSource theme-ui */

import React from "react";

import { CartCheckoutButton } from "@shopify/hydrogen-react";

export const CheckoutButton = ({ children, ...props }) => {
  return <CartCheckoutButton {...props}>{children}</CartCheckoutButton>;
};
