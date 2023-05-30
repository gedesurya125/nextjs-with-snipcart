import React from "react";

// External Components
import { Box, Heading, Paragraph, Button } from "@thepuzzlers/pieces";

import Image from "next/image";

export const Product = ({
  product: { id, name, price, url, description, image },
}) => {
  console.log("this is the image", image);
  return (
    <Box
      sx={{
        width: "30rem",
        mt: "5rem",
        border: "1px solid black",
        p: "1rem",
        borderRadius: "card",
      }}
    >
      <Heading as="h2">{name}</Heading>
      <Paragraph
        sx={{
          mt: "3rem",
        }}
      >
        {description}
      </Paragraph>
      <NextImage
        image={image}
        sx={{
          mt: "2rem",
        }}
      />
      <Paragraph
        sx={{
          mt: "2rem",
        }}
      >
        {price}
      </Paragraph>
      <button
        className="snipcart-add-item"
        // sx={{
        //   mt: "2rem",
        // }}
        data-item-id={id}
        data-item-name={name}
        data-item-price={price}
        data-item-url={url} //for crawling data in payment to use json validation //https://docs.snipcart.com/v3/setup/order-validation
        // data-item-url="/"
        data-item-image={image.src.src}
      >
        Add to cart
      </button>
    </Box>
  );
};

const NextImage = ({ image, sx }) => {
  return (
    <Box
      className="__next_image-container"
      sx={{
        position: "relative",
        width: "20rem",
        bg: "white",
        height: "10rem",
        ...sx,
      }}
    >
      <Image src={image.src} alt={image.alt} fill objectFit="cover" />
    </Box>
  );
};
