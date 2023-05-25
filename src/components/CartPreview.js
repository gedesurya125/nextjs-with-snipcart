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
import { CheckoutButton } from "./CheckoutButton";

import { LineQuantityAdjustButton } from "./LineQuantityAdjustButton";

export const CartPreview = () => {
  const { cartFragment, cartCreate, lines, checkoutUrl } = useCart();

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
  const { linesRemove, linesUpdate } = useCart();

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
      <LineQuantityAdjuster />
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

  return (
    <LineText as="span">{`${money.currencyNarrowSymbol}. ${money.amount}`}</LineText>
  );
};

const LineQuantityAdjuster = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        mt: "2rem",
      }}
    >
      <LineQuantityAdjustButton
        adjust="increase"
        sx={{
          variant: "buttons.primary",
        }}
      >
        +
      </LineQuantityAdjustButton>
      <LineQuantityAdjustButton
        adjust="decrease"
        sx={{
          ml: "1rem",
          variant: "buttons.primary-danger",
        }}
      >
        -
      </LineQuantityAdjustButton>
    </Box>
  );
};
