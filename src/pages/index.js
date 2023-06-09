import React from "react";
import Head from "next/head";
import Script from "next/script";

// External Components
import { Section, Box } from "@thepuzzlers/pieces";
import { NavigationBar } from "@/components/NavigationBar";
import { CartPreview } from "@/components/CartPreview";

import Link from "next/link";
import TranslatedLink from "@/components/TranslatedLink";
import { LanguageSwitchLinkGroup } from "@/components/LanguageSwitchLinkGroup";

// Assets
import houseA1 from "../assets/A1.png";
import houseA2 from "../assets/a2.png";
import houseB1 from "../assets/b1.png";
import { ProductList } from "@/components/ProductList";

export default function Home({ productData }) {
  console.log(
    "this is the api ke",
    process.env.NEXT_PUBLIC_SNIPCART_PUBLIC_API_KEY
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>My awesome store</title>
        {/* Snipcart setup */}
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
      </Head>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <Section as="main">
        {/* content goes here */}
        <ProductList productList={productData} />
        <Box
          sx={{
            gridColumn: "1/ span 10",
            display: "flex",
            alignSelf: "start",
            gap: "2rem",
            my: "3rem",
          }}
        >
          <TranslatedLink
            href="/blog"
            sx={{
              variant: "buttons.secondary",
            }}
          >
            Go to BLOG
          </TranslatedLink>
          <Link href="/blog" sx={{}}>
            Default Next Link to Blog
          </Link>

          <LanguageSwitchLinkGroup />
          <TranslatedLink
            href="/legal-page"
            sx={{
              variant: "buttons.secondary",
            }}
          >
            Go To Legal Page
          </TranslatedLink>
        </Box>
      </Section>

      {/* Snip Cart setup */}
      <div
        hidden
        id="snipcart"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_PUBLIC_API_KEY}
      ></div>
    </>
  );
}

export const products = [
  {
    id: "house-one",
    name: "House A1",
    price: 250,
    image: { src: houseA1, alt: "" },
    description:
      "This House image is taken from mdl house, which is the great house concept with code A1",
    url: "/api/products/house-one",
    // url: "/", // this is html validation that used by the snipcart
  },
  {
    id: "house-two",
    name: "House A2",
    price: 250,
    image: { src: houseA2, alt: "" },
    description:
      "This House image is taken from mdl house, which is the great house concept with code A2",
    url: "/api/products/house-two",
    // url: "/",
  },
  {
    id: "house-three",
    name: "House B1",
    price: 250,
    image: { src: houseB1, alt: "" },
    description:
      "This House image is taken from mdl house, which is the great house concept with code B1",
    url: "/api/products/house-three",
    // url: "/",
  },
];

export async function getServerSideProps({ locales, locale }) {
  // A Storefront API query, defined in a separate file where you make queries.
  //? language setting refer to https://shopify.dev/docs/api/storefront#directives

  return {
    props: {
      productData: products,
    },
  };
}
