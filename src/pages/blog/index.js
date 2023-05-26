import React from "react";
import Head from "next/head";

// External Components
import { Section, Heading } from "@thepuzzlers/pieces";
import { ProductsDisplay } from "@/components";
import { NavigationBar } from "@/components/NavigationBar";
import { CartPreview } from "@/components/CartPreview";
import { shopifyFetch } from "@/apollo/shopifyFetch";

export default function Home({ shopifyData }) {
  return (
    <>
      <Head>
        <title>BLOG</title>
        <meta name="description" content="Generated by BLOG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar shopData={shopifyData} />
      <Section as="main">
        <Heading>BLOG</Heading>
        <ProductsDisplay products={shopifyData?.data?.products} />
      </Section>
    </>
  );
}

export async function getServerSideProps({ locales, locale }) {
  console.log("this is the conttex", locale, locales);

  // A Storefront API query, defined in a separate file where you make queries.
  //? language setting refer to https://shopify.dev/docs/api/storefront#directives
  const GRAPHQL_QUERY = `
    query products @inContext(language:${locale.toUpperCase()}) {
      shop {
        name
      }
      products(first: 10) {
        nodes {
          id
          images(first: 10) {
            nodes {
              id
              altText
              url
            }
          }
          title
          variants(first: 10) {
            nodes {
              id
              title
              price{
                currencyCode
                amount
              }
              selectedOptions {
                name
                value
              }
              image {
                altText
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch({
    query: GRAPHQL_QUERY,
  });

  const shopifyData = await response.json();

  return { props: { shopifyData } };
}
