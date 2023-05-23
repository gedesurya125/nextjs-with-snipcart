import React from "react";

import { Box, Heading, Paragraph } from "@thepuzzlers/pieces";
import {
  CartCheckoutButton,
  CartLineProvider,
  useCart,
  useCartLine,
  useMoney,
  useShop,
} from "@shopify/hydrogen-react";
import { useShopifyQuery } from "@/shopify";
import { CheckoutButton } from "./CheckoutButton";

export const CartPreview = () => {
  const { cartFragment, cartCreate, lines, checkoutUrl } = useCart();

  console.log("this is the card lines", checkoutUrl);

  return (
    <Box
      sx={{
        gridColumn: ["1/13", "1/13", "1/25", "20/25", "20/25"],
        borderLeft: "1px solid black",
        p: "3rem 2rem",
      }}
    >
      <Heading>Cart Preview</Heading>
      {lines.map((line, index) => {
        return <CartLine cartLine={line} key={index} />;
      })}
      <CheckoutButton
        sx={{
          variant: "buttons.primary",
          mt: "3rem",
        }}
      >
        Checkout
      </CheckoutButton>
    </Box>
  );
};

const CartLine = ({ cartLine }) => {
  return (
    <CartLineProvider line={cartLine}>
      <CartLineData />
    </CartLineProvider>
  );
};

const CartLineData = () => {
  const {
    quantity,
    merchandise: { title, price },
    cost: { totalAmount },
  } = useCartLine();

  return (
    <Box
      sx={{
        bg: "teal",
        mt: "2rem",
        p: "1rem",
        borderRadius: "card",
      }}
    >
      <LineText>name: {title}</LineText>
      <LineText>
        price: <Money price={price} />
      </LineText>
      <LineText>quantity: {quantity}</LineText>
      <LineText>
        total: <Money price={totalAmount} />
      </LineText>
    </Box>
  );
};

const LineText = ({ children, ...props }) => {
  return (
    <Paragraph
      sx={{
        color: "white",
        fontFamily: "body.normal",
        fontSize: ["1.3rem", "1.3rem", "1.3rem", "1.3rem", "1.3rem", "1.3rem"],
      }}
      {...props}
    >
      {children}
    </Paragraph>
  );
};

const Money = ({ price }) => {
  const money = useMoney(price);

  return <LineText as="span">{money.withoutTrailingZeros}</LineText>;
};
