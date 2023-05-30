import React from "react";

// External Components
import { Box } from "@thepuzzlers/pieces";
import { Product } from "./Product";

export const ProductList = ({ productList }) => {
  return (
    <Box
      sx={{
        gridColumn: ["1/13", "1/13", "1/25", "1/25", "1/25", "1/25"],
        minHeight: "1rem",
      }}
    >
      {productList.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </Box>
  );
};
