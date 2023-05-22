import React from "react";

// External Components
import { Box, Paragraph, Button } from "@thepuzzlers/pieces";
import { useProducts } from "@/shopify";
import Image from "next/image";

export const ProductsDisplay = () => {
  const { data } = useProducts();

  console.log("this is t5he product", data);

  return (
    <Box
      className="__product-display"
      sx={{
        gridColumn: ["1/13", "1/13", "1/25", "4/25", "6/25"],
        display: "flex",
        gap: "3rem",
        mt: "4rem",
      }}
    >
      {data?.products?.nodes.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </Box>
  );
};

const ProductCard = ({ product: { images, title } }) => {
  return (
    <Box
      sx={{
        width: "20rem",
        borderRadius: "12px",
        height: "32rem",
        bg: "white",
        position: "relative",
        overflow: "hidden",
        p: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardImage alt="product image" src={images.nodes[0].url} fill={true} />
      <Paragraph
        sx={{
          textAlign: "center",
          mt: "1rem",
          fontFamily: "body.normal",
          fontSize: [null, null, null, null, null, "1.8rem"],
        }}
      >
        {title}
      </Paragraph>
      <Button
        sx={{
          bg: "black",
          color: "white",
          p: "1rem 2rem",
          borderRadius: "10px",
          mt: "2rem",
        }}
      >
        Add to Card
      </Button>
    </Box>
  );
};

const CardImage = ({ src, alt, sx }) => {
  return (
    <Box
      sx={{
        height: "20rem",
        width: "15rem",
        position: "relative",
        ...sx,
      }}
    >
      <Image alt={alt} src={src} fill={true} objectFit="cover" />
    </Box>
  );
};
