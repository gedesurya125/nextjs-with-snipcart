import { getStorefrontApiUrl, getPrivateTokenHeaders } from "@/shopify";

// This function used in next js SSR
export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  console.log("this is the api url", getStorefrontApiUrl());

  try {
    const result = await fetch(`${getStorefrontApiUrl()}`, {
      method: "POST",
      headers: getPrivateTokenHeaders("..."),
      body: { query, variables } && JSON.stringify({ query, variables }),
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 100) {
          edges{
            node {
              id
              title
              description
            }
          }
        }
      }`,
  });
}
