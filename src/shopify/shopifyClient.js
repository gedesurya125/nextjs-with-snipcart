import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  privateStorefrontToken: process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_TOKEN,
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  storefrontApiVersion: process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION,
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
