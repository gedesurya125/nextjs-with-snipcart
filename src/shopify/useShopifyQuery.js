import React from "react";

import { useShop } from "@shopify/hydrogen-react";

export const useShopifyQuery = (GRAPHQL_QUERY) => {
  const [response, setResponse] = React.useState(null);

  const { getStorefrontApiUrl, getPublicTokenHeaders } = useShop();

  React.useEffect(() => {
    const fetchAndSetData = async () => {
      const response = await fetch(getStorefrontApiUrl(), {
        body: JSON.stringify({
          query: GRAPHQL_QUERY,
        }),
        headers: getPublicTokenHeaders({ contentType: "json" }),
        method: "POST",
      });

      const jsonData = await response.json();
      setResponse(jsonData);
    };
    fetchAndSetData();
  }, [GRAPHQL_QUERY]);

  return [response];
};
