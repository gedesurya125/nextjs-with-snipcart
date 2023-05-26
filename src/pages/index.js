import React from "react";
import Head from "next/head";
import { useShop } from "@shopify/hydrogen-react";

// External Components
import { Section } from "@thepuzzlers/pieces";
import { LanguageSwitchLink, ProductsDisplay } from "@/components";
import { NavigationBar } from "@/components/NavigationBar";
import { CartPreview } from "@/components/CartPreview";
import { shopifyFetch } from "@/apollo/shopifyFetch";

import Link from "next/link";
import TranslatedLink from "@/components/TranslatedLink";
import { LanguageSwitchLinkGroup } from "@/components/LanguageSwitchLinkGroup";

export default function Home({ shopifyData }) {
  const { getStorefrontApiUrl } = useShop();

  console.log("this is shopify data", getStorefrontApiUrl());

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar shopData={shopifyData} />
      <Section as="main">
        <ProductsDisplay products={shopifyData?.data?.products} />
        <CartPreview />
        <TranslatedLink href="/blog">Go to BLOG</TranslatedLink>
        <Link href="/blog">Original Blog Link</Link>

        <LanguageSwitchLinkGroup />
      </Section>
    </>
  );
}

export async function getServerSideProps({ locales, locale }) {
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
